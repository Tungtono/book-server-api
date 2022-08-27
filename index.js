import express from "express";
import bodyParser from 'body-parser';
import bookRoutes from './routes/books.js';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('Hello from home')
});

// connect to the mongodb
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to DB')    
});


// start listening to post
app.listen(PORT, () => console.log(`The API server is running at http://localhost:${PORT}`));
