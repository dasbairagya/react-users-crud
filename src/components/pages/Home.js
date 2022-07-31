import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
// import axios from 'axios';
import axios from '../../api/axios';

export const Home = () => {

  const [users, setUser] = useState([]);
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //onpage load
  useEffect(() => {
    setLoading(true);
    loadUsers();
  }, [])

  //https://typeofnan.dev/fix-cannot-read-property-map-of-undefined-error-in-react/
  const loadUsers = async () => {
    // await axios.get('http://localhost:3003/users')
    await axios.get('/users') //this is the same as the line above
    .then((users) => {
      // console.log(users.data);
      setUser(users.data.reverse());
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    }, []);

  }

  if (loading) {
    return <p className='text-center pt-4'>Data is loading...</p>;
  }

  if (error || !Array.isArray(users)) {
    return <p className='text-center pt-4'>There was an error loading your data!</p>;
  }

  const deleteUser = async id => {
    alert(id);

    await axios.delete("users/" + id);
    loadUsers();
  }


  return (
    <section className="Material-contact-section section-padding section-dark text-center">
    <div className="container">
        <div className="row mt-4">
            <h1>Home</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <table className="table border caption-top shadow">
            <caption>List of users</caption>
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              
              { 
              users.map((user, index) => (
                <tr key="{user.id}">
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                  <Link className="btn btn-sm btn-primary mr-2" to={'/users/'+user.id}>View</Link>  
                  <Link className="btn btn-sm btn-outline-primary mr-2" to={'/users/edit/'+user.id}>Edit</Link>
                  <Link className="btn btn-sm btn-danger" to="#" onClick={() => deleteUser(user.id)} >Delete</Link>
                  </td>
                </tr>
              ))
              }

            </tbody>
          </table>
        </div>
    </div>
  </section> 
  );
}


export default Home;