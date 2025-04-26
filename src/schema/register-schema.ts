import { z } from "zod";

export const RegisterParamsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});


export type RegisterParams = z.infer<typeof RegisterParamsSchema>;
