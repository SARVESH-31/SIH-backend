import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response) => {
  const { mobileNumber, password } = req.body;

  try {
    // Find user by mobile number
    const user = await prisma.user.findUnique({
      where: { mobileNumber },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare passwords (hashing should be used in production)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Successful login
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        mobileNumber: user.mobileNumber,
        aadharNumber: user.aadharNumber, // Returning Aadhar number
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};
