import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

//Middleware for Parsing Request Body
app.use(express.json());

//Middleware for Handling CORS Policy

// 1st Option : Allow all origins with default of cors(*)
app.use(cors())

//2nd Option : Allow custom origins
// app.use(cors({
//     origin : 'http://localhost:3000',
//     methods : ['GET','POST','PUT','DELETE'],
//     allowedHeaders : ['Content-Type'],
// }))


app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send(`Welcome to MERN`);
});

app.use('/books',booksRoute)

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log(`App connected to DB`);
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
