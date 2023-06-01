

import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";


const app: Application = express()
const port = 5000

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('Working Successfully');
})


export default app;