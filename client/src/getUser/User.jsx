import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./user.css"
import { Link } from 'react-router-dom';
import PageTitle from '../componets/PageTitle';

const baseURL = import.meta.env.VITE_BASE_URI


const User = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/user`)
                setUsers(response.data)
            } catch (error) {
                console.log({ mesage: error.mesage })
            }
        }
        fetchData()
    }, []);

    const deleteUser = async (_id) => {
        await axios.delete(`${baseURL}/api/user/${_id}`)
            .then((response) => {
                setUsers((prevUser) => prevUser.filter((user) => user._id !== _id))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
       
        <div className='userTable'>
             <PageTitle title="all User"/>
            <Link to="/add" type="button" className="btn btn-primary">Add User <i className='fa-solid fa-user-plus'></i></Link>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'> No</th>
                        <th scope='col'> Name</th>
                        <th scope='col'> Email</th>
                        <th scope='col'> Address</th>
                        <th scope='col'> Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td className='actionButton'>
                                    <Link to={`/update/` + user._id} type="button" className="btn btn-danger fa-sm"><i className='fa-solid fa-pen-to-square sort'></i></Link>
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        type="button" className="btn btn-info fa-sm"><i className='fa-solid fa-trash ' ></i></button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default User

