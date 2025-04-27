import * as React from "react";
import axios from "axios";
import { RegisterParams } from "@/schema/register-schema";


export function useRegister() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function register(data: RegisterParams) {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    setError(null);

    try {
      const response = await axios.post("/register", data, {
        baseURL: "http://localhost:3000/register", // <-- aquí pones tu baseURL si tu API corre en local
        withCredentials: true, // <-- opcional si necesitas cookies / auth
      });
      setIsSuccess(true);
      return response.data;
    } catch (err: any) {
      setIsError(true);
      const message =
        err.response?.data?.message || err.message || "Error desconocido";
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  return { register, isLoading, isError, isSuccess, error };
}
