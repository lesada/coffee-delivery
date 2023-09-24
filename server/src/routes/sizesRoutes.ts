import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { CreateSizeSchema } from "../schemas/size";

type CreateSizeRequest = {
  coffeeId: string;
  sizeId: string;
};

export async function SizesRoutes(app: FastifyInstance) {
  app.delete("/coffees/:coffeeId/sizes/:sizeId", async (req, res) => {
    const { coffeeId, sizeId } = req.params as CreateSizeRequest;

    try {
      const existingCoffee = await prisma.coffee.findUnique({
        where: {
          id: coffeeId,
        },
      });

      if (!existingCoffee) {
        return res.status(404).send({ error: "Coffee not found." });
      }

      const existingSize = await prisma.size.findUnique({
        where: {
          id: sizeId,
        },
      });

      if (!existingSize) {
        return res.status(404).send({ error: "Size not found." });
      }

      await prisma.size.update({
        where: {
          id: sizeId,
        },
        data: {
          coffees: {
            disconnect: {
              id: coffeeId,
            },
          },
        },
      });

      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "Error deleting coffee size." });
    }
  });

  interface CreateTypeRequest {
    coffeeId: string;
  }

  app.post("/coffees/:coffeeId/sizes/new", async (req, res) => {
    const { coffeeId } = req.params as CreateTypeRequest;
    const { name, priceIncreaseRate } = CreateSizeSchema.parse(req.body);

    try {
      const existingCoffee = await prisma.coffee.findUnique({
        where: {
          id: coffeeId,
        },
      });

      if (!existingCoffee) {
        return res.status(404).send({ error: "Coffee not found." });
      }

      const newSize = await prisma.size.create({
        data: {
          name,
          priceIncreaseRate,
          coffees: {
            connect: {
              id: coffeeId,
            },
          },
        },
      });

      return res.status(201).send(newSize);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "Error creating coffee size." });
    }
  });
}
