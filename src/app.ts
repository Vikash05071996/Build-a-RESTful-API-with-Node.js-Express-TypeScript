import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
//import morgan from "morgan";
const app = express();
app.use(express.json());

app.use("/", exampleRoute);

app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.use(errorHandler);

mongoose
  .connect("mongodb+srv://vikashrajpoot2995:Vikash@cluster0.h29u7vi.mongodb.net/Blog?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT||9000, () => {
      console.log(`Listening On PORT 9000`);
    });
  })
  .catch(() => {
    throw createHttpError(501, "Unable to connect database");
  });