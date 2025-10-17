// db connection
import mongoose from "mongoose"

const DbConnection=async()=>{
  try {
    await mongoose.connect(`${process.env.MONGDB_URI}/App`)
    // await mongoose.connect(`${process.env.MONGDB_URI}/full_stack`)
    console.log("db is connect")
  } catch (error) {
    console.log("db is not connect")
    console.log({message:error.message})
  }
}

export default DbConnection;