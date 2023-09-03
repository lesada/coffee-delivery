import { number, object, string } from "zod";

export const CreateCoffeeSchema = object({
  title: string(),
  description: string(),
  price: number(),
  typeName: string(),
});

export const UpdateCoffeeSchema = object({
  title: string().optional(),
  description: string().optional(),
  price: number().optional(),
  typeName: string().optional(),
});
