import FastifyMultipart from "@fastify/multipart";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fs from "fs/promises";
import { ZodError } from "zod";
import { prisma } from "../lib/prisma";
import { CoffeeSchema } from "../schemas/coffee";

interface CoffeeRequestBody {
  fields: string;
  files: File[];
}

async function saveCoffeeImage(imageFile, title) {
  const imagePath = `uploads/${title}.${imageFile.filename.split(".").pop()}`;
  await fs.writeFile(imagePath, imageFile.data);
  return imagePath;
}

async function createOrUpdateCoffeeType(type) {
  let coffeeType = await prisma.type.findFirst({
    where: { title: type },
  });

  if (!coffeeType) {
    coffeeType = await prisma.type.create({
      data: { title: type },
    });
  }

  return coffeeType;
}

export async function CoffeesRoutes(app: FastifyInstance) {
  app.get("/coffees", async (req, res) => {
    const coffees = await prisma.coffee.findMany();
    return res.status(200).send(coffees);
  });

  app.register(FastifyMultipart, { addToBody: true });

  app.post("/coffees/new", async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const { fields, files } = req.body as CoffeeRequestBody;
      const { title, description, price, type } = JSON.parse(fields);

      CoffeeSchema.parse({ title, description, price, type });

      const imageFile = files[0];
      const imagePath = await saveCoffeeImage(imageFile, title);
      const coffeeType = await createOrUpdateCoffeeType(type);

      const createdCoffee = await prisma.coffee.create({
        data: {
          title,
          description,
          price,
          typeId: coffeeType.id,
          image: imagePath,
        },
      });

      return res.status(201).send(createdCoffee);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).send({ message: "Invalid coffee data" });
      }
      return res.status(400).send({ message: "Invalid image upload" });
    }
  });
}
