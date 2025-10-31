import React, { useState } from 'react'
import "./adduser.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

import toast from 'react-hot-toast';
import PageTitle from '../componets/PageTitle';
axios.defaults.baseURL=import.meta.env.VITE_BASE_URI

function AddUser() {
  const currency=import.meta.env.VITE_CURRENCY
  const baseURL=import.meta.env.VITE_BASE_URI
  console.log(baseURL)
console.log(currency)
   const users={
        name:"",
        email:"",
        address:"",
    }

    const [user ,setUsers]=useState(users);
    const navigate=useNavigate()

    const inputHandler=(e)=>{
        const {name,value}=e.target;
        console.log(name, value);

        setUsers({ ...user, [name]:value})
    }

    const submitForm=async(e)=>{
        e.preventDefault()
        // await axios.post('http://localhost:5000/api/user',user)
        await axios.post(`${baseURL}/api/user`,user)
        .then((response)=>{
            // console.log("user created successfully")

            toast.success(response.data.message,{position:"top-right"})
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className='addUser'>
      <PageTitle title="add user"/>
      
        <Link to="/"type="button" className="btn btn-secondary">Back</Link>
      <h3>Add New User{currency}</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
            <label htmlFor='name'>Name:</label>
            <input type="text" 
            name="name"
             id="name"
             onChange={inputHandler}
             autoComplete='off'
             placeholder='Enter Your name'
             required
             />
        </div>

        <div className="inputGroup">
            <label htmlFor='email'>E-mail:</label>
            <input type="text" 
            name="email"
             id="email"
             onChange={inputHandler}
             autoComplete='off'
             placeholder='Enter Your email'
             required
             />
        </div>

        <div className="inputGroup">
            <label htmlFor='address'>Address:</label>
            <input type="text" 
            name="address"
             id="address"
             onChange={inputHandler}
             autoComplete='off'
             placeholder='Enter Your address'
             required
             />
        </div>

        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">Add User</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser

