import { z } from "zod";

export const TypeSchema = z.object({
  title: z.string().min(1).max(20),
});
