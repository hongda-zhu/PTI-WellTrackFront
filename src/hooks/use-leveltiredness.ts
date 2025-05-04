import { useEffect, useState } from "react";
import axios from "axios";

export function useLevelTiredness() {
  const [levelTiredness, setLevelTiredness] = useState<string>("Loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLevelTiredness = async () => {
      try {
        const response = await axios.get("http://backend:3001/calculate_level_tiredness");

        if (response.status === 200 && response.data) {
          setLevelTiredness(`${response.data.level} Level`);
        } else {
          console.error("Failed to fetch level tiredness");
          setLevelTiredness("Error");
        }
      } catch (err: any) {
        console.error("Error fetching level tiredness:", err.message || err);
        setError("Error fetching level tiredness");
        setLevelTiredness("Error");
      }
    };

    fetchLevelTiredness();
  }, []);

  return levelTiredness;
}