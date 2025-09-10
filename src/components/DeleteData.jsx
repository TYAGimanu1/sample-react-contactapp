import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteData = () => {
    const { id } = useParams();
    const navigation = useNavigate();
    const [users, setUsers] = useState({});

    useEffect(() => {
        axios.get(`/api/user/${id}`)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [id]);

    const deletedata = () => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            axios.delete(`/api/user?id=${id}`)
                .then((response) => {
                    console.log(response.data);
                    navigation('/delete');
                })
                .catch((error) => {
                    console.error('Error deleting user:', error);
                    alert('Failed to delete user. Please try again.');
                });
        }
    };

    const cancel = () => {
        navigation('/delete');
    };

    return (
        <div>
            <div className='card'>
                <h2>{users.name}</h2>
                <h2>{users.email}</h2>
                <h2>{users.mobile}</h2>
                <h2>{users.course}</h2>
                <h2>{users.city}</h2>
            </div>
            <button onClick={deletedata}>Delete data</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    );
};

export default DeleteData;