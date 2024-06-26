import { User } from "../model/userModel.js"
import jwt from "jsonwebtoken"

const createToken = (_id) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1h" })
  return token
}
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = new User({ email, password })

    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message }) //
  }
}

const signupUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = new User({ email, password })

    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message }) //
  }
}

export { signupUser, loginUser }

// import User from "../model/userModel.js"
// import jwt from "jsonwebtoken"

// const createToken = (_id) => {
//   const token = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" })
//   return token
// }
// const loginUser = async (req, res) => {
//   const { email, password } = req.body
//   try {
//     const user = await User.login(email, password)

//     const token = createToken(user._id)

//     res.status(200).json({ email, token })
//   } catch (error) {
//     res.status(400).json({ error: error.message }) //
//   }
// }

// const signupUser = async (req, res) => {
//   const { email, password } = req.body
//   try {
//     const user = await User.signup(email, password)

//     const token = createToken(user._id)

//     res.status(200).json({ email, token })
//   } catch (error) {
//     res.status(400).json({ error: error.message }) //
//   }
// }
