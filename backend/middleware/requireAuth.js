import jwt from "jsonwebtoken"
import { User } from "../model/userModel.js"

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token Required" })
  }
  const token = authorization.split(" ")[1]

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findOne({ _id }).select("_id")
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: "Request Is Not Authorized" })
  }
}

export default requireAuth