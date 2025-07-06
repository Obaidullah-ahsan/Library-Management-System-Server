import express, { Application, Request, Response } from "express";

export const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Library Management System Server is running");
});
