import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()
app.get("/", (req, res) => {
  res.send({ mssg: "hello ninjas!!!" })
})

mongoose.connect(process.env.mongoUri).then(() => {
  console.log("mongo connect")
  app.listen(process.env.port, console.log("i love you 4000"))
})
