import mongoose from "mongoose"
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

// static signup method
userSchema.statics.signup = async (email, password) => {
  const exists = await User.findOne({ email })

  if (exists) {
    throw new Error("Email Already in Use")
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })
  return user
}
const User = mongoose.model("User", userSchema)
User.signup()
export default User
