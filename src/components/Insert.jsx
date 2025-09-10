import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Insert({ prefillUser }) {
    const navigation = useNavigate();
    // If prefillUser is provided, use it as initial state, else use empty fields
    const [users, setUsers] = useState(
        prefillUser || { name: "", email: "", mobile: "", course: "", city: "" }
    );

    // insert Data
    const insertData = (e) => {
        e.preventDefault();
        axios.post("/api/user", users)
            .then(() => {
                console.log("Data Inserted");
                navigation('/view');
            })
            .catch((err) => {
                alert("Failed to insert data");
                console.error(err);
            });
    };

    return (
        <>
            <h1>Insert Data</h1>
            <div className='insert'>
                <input
                    type='text'
                    placeholder='Enter Name'
                    value={users.name}
                    onChange={(e) => setUsers({ ...users, name: e.target.value })}
                />
                <input
                    type='email'
                    placeholder='Enter Email'
                    value={users.email}
                    onChange={(e) => setUsers({ ...users, email: e.target.value })}
                />
                <input
                    type='number'
                    placeholder='Enter Name Mobile'
                    value={users.mobile}
                    onChange={(e) => setUsers({ ...users, mobile: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Enter Course'
                    value={users.course}
                    onChange={(e) => setUsers({ ...users, course: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Enter City'
                    value={users.city}
                    onChange={(e) => setUsers({ ...users, city: e.target.value })}
                />
                <button onClick={insertData}>Insert Data</button>
            </div>
        </>
    )
}

export default Insert