import { FastifyInstance } from "fastify";
import { createType } from "./createType";
import { getTypes } from "./getTypes";

export async function appRoutes(app: FastifyInstance) {
  createType(app);
  getTypes(app);
}
