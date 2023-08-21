import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getTypes(app: FastifyInstance) {
  app.get("/types", async (req, res) => {
    const types = await prisma.type.findMany();
    return res.status(200).send(types);
  });
}
