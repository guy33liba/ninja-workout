import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()
app.get("/", (req, res) => {
  res.send({ mssg: "hello ninjas!!!" })
})
const mongoUri =
  "mongodb+srv://guy33liba:g33g33g33@workout.6vzljfv.mongodb.net/?retryWrites=true&w=majority&appName=workout"

mongoose.connect(process.env.mongoUri).then(() => {
  console.log("mongo connect")
  app.listen(4000, console.log("i love you 4000"))
})
