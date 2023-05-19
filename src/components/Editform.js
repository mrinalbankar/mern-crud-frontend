import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const initialValue = {
  name: '',
  email: '',
  contact: ''
}

const Editform = () => {

  const [user, setUser] = useState(initialValue)
  const { name, email, contact } = user
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    await fetch(`http://localhost:5000/api/${id}`, { method: 'GET' })
      .then((response) => response.json())
      .then((result) => { setUser(result) })
      .catch((error) => console.log(error))
  }

  const editUser = async () => {
    await fetch(`http://localhost:5000/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => { console.log(result) })
      .catch((error) => console.log(error))

    navigate("/")
    navigate(0)
  }

  const onValueChange = (e) => {
    console.log(e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div id="form"
    // onSubmit={handleSubmit}
    >
      <h4><u>Edit User</u></h4>
      <br />
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name : </label>
          <input class="form-control" type="text" placeholder="Enter Name"
            onChange={(e) => onValueChange(e)} name='name' value={name}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="exampleInputPassword1">Email :</label>
          <input class="form-control" type="text" placeholder="Enter Email"
            onChange={(e) => onValueChange(e)} name='email' value={email}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="exampleInputPassword1">Contact :</label>
          <input class="form-control" type="text" placeholder="Enter Contact"
            onChange={(e) => onValueChange(e)} name='contact' value={contact}
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary"
          onClick={editUser}
        >EDIT USER</button>
      </form>
    </div>
  )
}

export default Editform
