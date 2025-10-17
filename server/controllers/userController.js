
import userModel from "../models/userModel.js";



export const create=async(req,res)=>{
  try {
    //catch data
    const name=req.body.name;
    const email=req.body.email;
    const address=req.body.address;

    // res.status(200).send({name,email,address})

    //send data
    const SentData=new userModel({
        name:name,
        email:email,
        address:address
    })
    //saveData
    const SaveData=SentData.save()
    // SaveData()
    // res.status(201).json(SaveData)
    res.status(201).json({message:"user Created succesfully"})
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}

export const getAllUsers=async(req,res)=>{
  try {
    const userData=await userModel.find()
    res.status(201).json(userData)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}

export const getUserById=async(req,res)=>{
  try {
    const Getone=await userModel.findOne({_id:req.params._id})
    res.status(201).json(Getone)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}

export const update=async(req,res)=>{
   try {
    const update=await userModel.findOne({_id:req.params._id})
    update.name=req.body.name
    update.email=req.body.email
    update.address=req.body.address

    update.save()
    res.status(201).json(update)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}

export const deleteUser=async(req,res)=>{
  try {
    await userModel.deleteOne({_id:req.params._id})
    res.status(201).json("deletect")
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}