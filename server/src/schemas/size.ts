import { number, object, string } from "zod";

export const CreateSizeSchema = object({
  name: string(),
  priceIncreaseRate: number(),
});
