import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Card = () => {
     const [users, setusers] = useState({}); // Initialize as an object
    const {id}=useParams();
    useEffect(()=>{
      axios.get(`/api/dynamic/${id}`)
      .then((res)=>{
         setusers(res.data);
      })
      .catch((e)=>
      {
        console.log(e);
      });
    }, [id]); // Add id as a dependency to ensure proper fetching
  return (
    <>
    <h1>CARDVIEW</h1>
    <div className='card'>
        
        <h2>{users.name}</h2>
        <h2>{users.email}</h2>
        <h2>{users.mobile}</h2>
        <h2>{users.course}</h2>
        <h2>{users.city}</h2>
    </div>
    </>
  )
}

export default Card