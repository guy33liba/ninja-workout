import mongoose from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

// static signup method
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw new Error("all Fields must be filled")
  }
  if (!validator.isEmail(email)) {
    throw Error("Eamil is not valid")
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password must be strong")
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw new Error("Email Already in Use")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })
  return user
}

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("all Fields must be filled")
  }
  const user = await this.findOne({ email })

  if (!user) {
    throw new Error("Incorrect email ")
  }
  const match = await bcrypt.compare(password, user.password)
  if (!match) throw new Error("Incorrect password")
  return user
}
const User = mongoose.model("User", userSchema)

export default User
