import User from "../model/userModel"

const loginUser = async (req, res) => {
  res.json({ mssg: "login user" })
}
const signupUser = async (req, res) => {
  res.json({ mssg: "signup  user" })
  const { email, password } = req.body

  try {
    const user = await User.signup(email, password)
    res.status(200).json({ email, user })
  } catch (error) {}
}

export { signupUser, loginUser }
