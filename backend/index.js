import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import workoutRoute from "./routes/workouts.js"
import userRoutes from "./routes/userRoutes.js"
dotenv.config()

const app = express()
//
app.use(express.json())
app.get("/", (req, res) => {
  res.send({ mssg: "hello ninjas!!!" })
})
app.use("/api/workouts", workoutRoute)
app.use("/api/user", userRoutes)

mongoose.connect(process.env.mongoUri).then(() => {
  console.log("mongo connect")
  app.listen(process.env.port, console.log("i am  4000"))
})
