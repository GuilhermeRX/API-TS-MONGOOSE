import userRouter from "./Routes/user.route"

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use('/user', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))