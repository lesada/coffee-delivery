import { FastifyInstance } from "fastify";
import { CoffeesRoutes } from "./coffeesRoutes";
import { TypesRoutes } from "./typesRoutes";

export async function appRoutes(app: FastifyInstance) {
  TypesRoutes(app);
  CoffeesRoutes(app);
}
