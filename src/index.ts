import { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import "./Models/connection";
import userRouter from "./Routes/user.route";

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use('/user', userRouter);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { message } = err;
  return res.status(404).json({ message })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))