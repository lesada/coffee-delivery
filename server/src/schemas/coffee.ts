import { number, object, string } from "zod";

export const coffeeSchema = object({
  title: string(),
  description: string(),
  price: number(),
  type: string(),
  image: string(),
});
