const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');  // CommonJS require
const prisma = require('./config/db');

dotenv.config();

const app = express();
const port = process.env.PORT || 5556;

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/api', userRoutes);

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