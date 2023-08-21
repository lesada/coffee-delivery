import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { TypeSchema } from "../schemas/type";

export async function createType(app: FastifyInstance) {
  app.post("/types/new", async (req, res) => {
    try {
      const requestData = TypeSchema.parse(req.body);

      const createdType = await prisma.type.create({
        data: {
          title: requestData.title,
        },
      });

      return res.status(201).send(createdType);
    } catch (error) {
      console.error("Error creating type:", error);
      return res.status(400).send("Invalid request data.");
    }
  });
}
