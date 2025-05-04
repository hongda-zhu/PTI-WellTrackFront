import { useEffect, useState } from "react";
import axios from "axios";

export function useHydrationAttempts() {
  const [hydrationAttempts, setHydrationAttempts] = useState<string>("Loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHydrationAttempts = async () => {
      try {
        const response = await axios.get("http://backend:3001/calculate_hydratation_attempts");

        if (response.status === 200 && response.data) {
          setHydrationAttempts(`${response.data.attempts} Times`);
        } else {
          console.error("Failed to fetch hydration attempts");
          setHydrationAttempts("Error");
        }
      } catch (err: any) {
        console.error("Error fetching hydration attempts:", err.message || err);
        setError("Error fetching hydration attempts");
        setHydrationAttempts("Error");
      }
    };

    fetchHydrationAttempts();
  }, []);

  return hydrationAttempts;
}