import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const list = users.map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>{user.course}</td>
      <td>{user.city}</td>
    </tr>
  ));

  return (
    <>
      <h1>Home page</h1>
      <table border="1px" width="100%">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>MOBILE</th>
            <th>COURSE</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
};

export default Home;