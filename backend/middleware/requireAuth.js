import jwt from "jsonwebtoken"
import { User } from "../model/userModel.js"
const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: "authorization token required" })
  }

  const token = authorization.split(" ")[1]

  if (!token) {
    return res.status(401).json({ error: "JWT must be provided" })
  }

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findOne({ _id }).select("_id")
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ error: "Request is not authorized" })
  }
}

export default requireAuth
