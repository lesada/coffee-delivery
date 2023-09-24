import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

import { CreateCoffeeSchema, UpdateCoffeeSchema } from "../schemas/coffee";

interface UpdateCoffeeRequest {
  id: string;
}

export async function CoffeesRoutes(app: FastifyInstance) {
  app.get("/coffees", async (req, res) => {
    try {
      const coffees = await prisma.coffee.findMany({
        include: {
          type: true,
          sizes: true,
        },
      });

      const formattedCoffees = coffees.map((coffee) => ({
        id: coffee.id,
        title: coffee.title,
        description: coffee.description,
        price: coffee.price,
        type: coffee.type.title,
        sizes: coffee.sizes,
      }));

      return res.status(200).send(formattedCoffees);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "Error fetching coffees." });
    }
  });

  app.post("/coffees/new", async (req, res) => {
    const { title, description, price, typeName, sizes } =
      CreateCoffeeSchema.parse(req.body);

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
          sizes: {
            create: sizes,
          },
        },
        include: {
          sizes: true,
        },
      });

      return res.status(201).send(newCoffee);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "Error creating new coffee." });
    }
  });

  app.put("/coffees/:id", async (req, res) => {
    const { id } = req.params as UpdateCoffeeRequest;

    try {
      const existingCoffee = await prisma.coffee.findUnique({
        where: {
          id,
        },
      });

      if (!existingCoffee) {
        return res.status(404).send({ error: "Coffee not found." });
      }

      const { title, description, price, typeName } = UpdateCoffeeSchema.parse(
        req.body
      );

      let typeId = existingCoffee.typeId;
      if (typeName) {
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

        typeId = existingType.id;
      }

      const updatedCoffee = await prisma.coffee.update({
        where: {
          id,
        },
        data: {
          title: title || existingCoffee.title,
          description: description || existingCoffee.description,
          price: price || existingCoffee.price,
          typeId,
        },
      });

      return res.status(200).send(updatedCoffee);
    } catch (error) {
      console.log(error);
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
