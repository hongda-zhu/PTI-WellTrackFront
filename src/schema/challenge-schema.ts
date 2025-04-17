import { z } from "zod";

const ChallengeSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string().min(1),
  progress: z.enum(["Not started", "In progress", "Completed"]),
  criterion: z.string(),
  metricTypes: z.string(),
  date: z.string(),
  downloadUrl: z.string().optional(),
  duration: z.number(),
});

export type Challenge = z.infer<typeof ChallengeSchema>;

export default ChallengeSchema;
