import express, { Application, Request, Response } from "express";
import { bookRouter } from "./app/controllers/book.controller";
import { borrowRouter } from "./app/controllers/borrow.controller";

export const app: Application = express();

app.use(express.json());
app.use("/books", bookRouter)
app.use("/borrow", borrowRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Library Management System Server is running");
});
