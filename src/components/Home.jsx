import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [users,setUser]=useState([])
    useEffect(()=>{
        axios.get("/api/users")
        .then(res=>{
            setUser(res.data)
        })
        .catch(err=>{
            console.log(err);
        })

    },[])

    const list = users.map(user=> <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td>{user.course}</td>
        <td>{user.city}</td>
        
    </tr>)
  return (
    <>
    <h1>Home page</h1>

    <table border="1px" width="100%">
    <tr>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>MOBILE</th>
        <th>COURSE</th>
        <th>CITY</th>

      </tr>
        {list}

        
    </table>
 </>
  )
}

export default Home