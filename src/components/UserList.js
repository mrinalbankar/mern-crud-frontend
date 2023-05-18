import React from 'react'
import { useEffect, useState } from "react"
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UserList = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    await fetch("http://localhost:5000/api/allUsers", { method: 'GET' })
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((error) => console.log(error))
  }

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/api/${id}`, { method: 'DELETE' })
      .then((response) => response.json('Delete successful'))
      .catch((error) => console.log(error))

    window.location.reload();
  }

  return (
    <div id="list">
      <h4><u>User List</u></h4>
      <br></br>
      <br></br>
      <table class="table table-bordered">
        <thead className="thead">
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">CONTACT</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        {user.map((user, index) => (
          <tbody className="tbody">
            <tr>
              {/* <td>{index += 1}</td> */}
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>
                <button type="button" class="btn btn-light"
                  // component={Link} to={`/edit/${user._id}`}
                  onClick={() => navigate(`/edit/${user._id}`)}
                >Edit</button>
              </td>
              <td>
                <button type="button" class="btn btn-light"
                  onClick={() => deleteUser(user._id)}
                >Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default UserList
