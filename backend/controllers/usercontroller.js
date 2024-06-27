import User from "../model/userModel.js"
import jwt from "jsonwebtoken"

const createToken = (_id) => {
  const token = jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
  return token
}
const loginUser = async (req, res) => {
  res.json({ mssg: "login user" })
}
const signupUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.signup(email, password)
    res.status(200).json({ email, user })
  } catch (error) {
    res.status(400).json({ error: error.message }) //
  }
}

export { signupUser, loginUser }
