import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'

const Edit = () => {
    const navigation=useNavigate()
     const [users, setusers] = useState({ name: "", email: "", mobile: "", course: "", city: "" })
    const {id}=useParams()

    useEffect(()=>{
     axios.get(`http://localhost:5000/user/${id}`)
     .then((res)=>{
        setusers(res.data)
     })
    },[])

    const update= ()=>{
        
        axios.put(`http://localhost:5000/user/${id}`,users)
        navigation("/update")
    }
  return (
    <>
    <h1>EDIT</h1>
    <div className='insert'>
        <input 
        type="text"
        placeholder='Enter name'
        value={users.name}
        onChange={(e)=>setusers({...users,name:e.target.value })}
         /><input 
         type="email"
         placeholder='Enter email'
         value={users.email}
         onChange={(e)=>setusers({...users,email:e.target.value })}
          />
          <input 
        type="number"
        placeholder='Enter mobile'
        value={users.mobile}
        onChange={(e)=>setusers({...users,mobile:e.target.value })}
         />
         <input 
        type="text"
        placeholder='Enter course'
        value={users.course}
        onChange={(e)=>setusers({...users,course:e.target.value })}
         />
         <input 
        type="text"
        placeholder='Enter city'
        value={users.city}
        onChange={(e)=>setusers({...users,city:e.target.value })}
         />
         <button onClick={update}>Edit</button>
    </div>
    </>
  )
}

export default Edit