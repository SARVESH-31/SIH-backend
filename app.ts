// app.ts
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import prisma from './config/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Test DB connection
prisma.$connect()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
