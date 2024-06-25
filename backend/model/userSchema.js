import mongoose from "mongoose"

const userSchema = mongoose.Schema([{ name: String }, { rep: Number }, { duration: Number }])
const User = mongoose.model("User", userSchema)

export default User
