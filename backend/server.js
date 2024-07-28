import express from 'express';
import connectDB from './config/db.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { default as studentsRoutes } from './routes/studentsRoutes.js';
import { default as staffsRoutes } from './routes/staffsRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
connectDB();

app.use('/students', studentsRoutes);
app.use('/staffs', staffsRoutes);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });