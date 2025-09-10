import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Update = () => {
   const [users,setuser]=useState([]);

   useEffect(()=>{
   axios.get('/api/user/')
   .then((res)=>{
    setuser(res.data)
   })
   .catch(e=>{
    console.log(e);
   })

   },[])

   const list=users.map(user=><tr>
      <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td>{user.course}</td>
        <td>{user.city}</td>
        <td><Link to={`/edit/${user.id}`}>Edit</Link></td>
   </tr>)

  return (
    <>
    <h1>Update</h1>
    <table border="2px" width="100%">
    <tr>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>MOBILE</th>
        <th>COURSE</th>
        <th>CITY</th>
        <th>LINK</th>
      </tr>
      {list}
    </table>
    </>
  )
}

export default Update