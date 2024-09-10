import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, mobileNumber, aadharNumber } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // Make sure this is hashed in production
        mobileNumber,
        aadharNumber,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
};
