import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Card = () => {
  const [users, setUsers] = useState({});
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    console.log('Received id:', id); // Log the id to verify
    if (id) {
      axios.get(`/api/dynamic?id=${id}`)
        .then((res) => {
          setUsers(res.data);
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
        <h2>{users.name}</h2>
        <h2>{users.email}</h2>
        <h2>{users.mobile}</h2>
        <h2>{users.course}</h2>
        <td>hsdncuajdciaiudsji</td>
           <td>hsdncuajdciaiudsji</td>
              <td>hsdncuajdciaiudsji</td>
                 <td>hsdncuajdciaiudsji</td>
        <h2>{users.city}</h2>
      </div>
    </>
  );
};

export default Card;