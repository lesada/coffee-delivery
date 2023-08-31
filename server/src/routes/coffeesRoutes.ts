import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

interface CreateCoffeeRequest {
  title: string;
  description: string;
  price: number;
  typeName: string;
}

interface UpdateCoffeeRequest {
  id: string;
}

export async function CoffeesRoutes(app: FastifyInstance) {
  app.get("/coffees", async (req, res) => {
    const coffees = await prisma.coffee.findMany();
    return res.status(200).send(coffees);
  });

  app.post("/coffees/new", async (req, res) => {
    const { title, description, price, typeName } =
      req.body as CreateCoffeeRequest;

    try {
      const existingType = await prisma.type.findUnique({
        where: {
          title: typeName,
        },
      });

      if (!existingType) {
        return res
          .status(400)
          .send({ error: "The coffee type informed does not exist." });
      }

      const newCoffee = await prisma.coffee.create({
        data: {
          title,
          description,
          price,
          typeId: existingType.id,
        },
      });

      return res.status(201).send(newCoffee);
    } catch (error) {
      return res.status(500).send({ error: "Error creating new coffee." });
    }
  });

  app.put("/coffees/:id", async (req, res) => {
    const { id } = req.params as UpdateCoffeeRequest;
    const { title, description, price, typeName } =
      req.body as CreateCoffeeRequest;

    try {
      const existingType = await prisma.type.findUnique({
        where: {
          title: typeName,
        },
      });

      if (!existingType) {
        return res
          .status(400)
          .send({ error: "The coffee type informed does not exist." });
      }

      const updatedCoffee = await prisma.coffee.update({
        where: {
          id,
        },
        data: {
          title,
          description,
          price,
          typeId: existingType.id,
        },
      });

      return res.status(200).send(updatedCoffee);
    } catch (error) {
      return res.status(500).send({ error: "Error updating coffee." });
    }
  });

  app.delete("/coffees/:id", async (req, res) => {
    const { id } = req.params as UpdateCoffeeRequest;

    try {
      await prisma.coffee.delete({
        where: {
          id,
        },
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(500).send({ error: "Error deleting coffee." });
    }
  });
}
