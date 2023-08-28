import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { TypeSchema } from "../schemas/type";

export async function TypesRoutes(app: FastifyInstance) {
  app.get("/types", async (req, res) => {
    const types = await prisma.type.findMany();
    return res.status(200).send(types);
  });

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

  app.delete("/types/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    try {
      await prisma.type.delete({
        where: { id },
      });
      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting type:", error);
      return res.status(500).send("An error occurred while deleting the type.");
    }
  });

  app.patch("/types/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const requestData = TypeSchema.partial().parse(req.body);

    try {
      const updatedType = await prisma.type.update({
        where: { id },
        data: requestData,
      });

      return res.status(200).send(updatedType);
    } catch (error) {
      console.error("Error updating type:", error);
      return res.status(500).send("An error occurred while updating the type.");
    }
  });
}
