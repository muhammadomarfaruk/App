import React, { useEffect, useState } from 'react'
import "./update.css"
import { Link,useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
import PageTitle from '../componets/PageTitle'
const baseURL=import.meta.env.VITE_BASE_URI


const UpdateUser = () => {
    const users={
        name:"",
        email:"",
        address:"",
    }

    const [user ,setUsers]=useState(users);
    const navigate=useNavigate()
    const {_id}=useParams()

    const inputHandler=(e)=>{
        const {name,value}=e.target;
        console.log(name, value);

        setUsers({ ...user, [name]:value})
    }

    useEffect(()=>{
         axios.get(`${baseURL}/api/user/${_id}`)
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[_id])

    const submitForm=async(e)=>{
        e.preventDefault()
        await axios.patch(`${baseURL}/api/user/${_id}`,user)
        .then((response)=>{
            console.log("user created successfully")
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className='addUser'>
      <PageTitle title="Update User"/>
        <Link to="/"type="button" className="btn btn-secondary">Back</Link>
      <h3>Update User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
            <label htmlFor='name'>Name:</label>
            <input type="text" 
            name="name"
             id="name"
             value={user.name}
             onChange={inputHandler}
             autoComplete='off'
             placeholder='Enter Your name'
             />
        </div>

        <div className="inputGroup">
            <label htmlFor='email'>E-mail:</label>
            <input type="text" 
            name="email"
             id="email"
             value={user.email}
             onChange={inputHandler}
             autoComplete='off'
             placeholder='Enter Your email'
             />
        </div>

        <div className="inputGroup">
            <label htmlFor='address'>Address:</label>
            <input type="text" 
            name="address"
             id="address"
             value={user.address}
             onChange={inputHandler}
             autoComplete='off'
             placeholder='Enter Your address'
             />
        </div>

        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser;
