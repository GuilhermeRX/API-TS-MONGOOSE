import { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import { ZodError } from "zod";
import { errorCatalog, ErrorTypes } from "./errors/catalog";
import "./Models/connection";
import userRouter from "./Routes/user.route";

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use('/user', userRouter);

app.use((err: ZodError | Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) return res.status(404).json({ message: err.issues })

  const messageAsErrorType = err.message as keyof typeof ErrorTypes
  const mappedError = errorCatalog[messageAsErrorType];

  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message })
  }

  return res.status(500).json({ message: 'internal error' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))