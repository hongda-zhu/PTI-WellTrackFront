import { z } from "zod";

const SmartTaskSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string().min(1),
  date: z.string(),
});

export type SmartTask = z.infer<typeof SmartTaskSchema>;

export default SmartTaskSchema;
