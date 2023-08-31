import { number, object, string } from "zod";

export const CoffeeSchema = object({
  title: string(),
  description: string(),
  price: number(),
  typeName: string(),
});
