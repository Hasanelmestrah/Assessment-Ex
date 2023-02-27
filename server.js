import express from "express";
import dotenv from "dotenv";
import connectDB from "/config/db.js";
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(errorHandler);

app.use("/api/project", testRoutes);

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`)
);
