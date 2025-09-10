import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Card = () => {
  const [user, setUser] = useState({}); // Update state to store the user object directly
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    console.log('Received id:', id); // Log the id to verify
    if (id) {
      axios.get(`/api/dynamic?id=${id}`)
        .then((res) => {
          console.log('Fetched user data:', res.data.user); // Log the fetched user data
          setUser(res.data.user); // Set the user object directly
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [id]);

  return (
    <>
      <h1>CARDVIEW</h1>
      <div className='card'>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.mobile}</h2>
        <h2>{user.course}</h2>
        <h2>{user.city}</h2>
      </div>
    </>
  );
};

export default Card;