import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const View = () => {

    const [users,setUser]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/user")
        .then(res=>{
            // Ensure the response data is an array
            setUser(Array.isArray(res.data) ? res.data : []);
        })
        .catch(err=>{
            console.log(err);
            setUser([]); // Fallback to an empty array on error
        })

    },[])

    const list = Array.isArray(users) ? users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td>{user.course}</td>
        <td>{user.city}</td>
        <td><Link to={`/card/${user.id}`}>view</Link></td>
      </tr>
    )) : [];
  return (
    <>
    <h1>View page</h1>

    <table border="1px" width="100%">
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
    <Link></Link>
    </>
  )
}

export default View