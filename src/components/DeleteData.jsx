import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteData = () => {
    const {id}=useParams();
    const navigation=useNavigate();
    const [users,setusers]=useState([])

    useEffect(()=>{
        axios.get(`/api/user/${id}`)
        .then((res)=>{
            setusers(res.data)
        })
    },[])

    const deletedata=()=>{
     axios.delete(`/api/user/${id}`)
     navigation("/delete")
    }
    const cancel=()=>{
        
        navigation("/delete")
       }
  return (
    <div><div className='card'>
        
    <h2>{users.name}</h2>
    <h2>{users.email}</h2>
    <h2>{users.mobile}</h2>
    <h2>{users.course}</h2>
    <h2>{users.city}</h2>
</div>
<button onClick={deletedata}>Delete data</button>
<button onClick={cancel}>Cancel</button>
</div>
  )
}

export default DeleteData