import React from 'react'
import { useState } from "react";

const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        contact: contact
      }),
    }
    )
      .then((response) => response.json('User added successfully'))
      .catch((error) => console.log(error))

    window.location.reload();
  }

  return (
    <div id="form" onSubmit={handleSubmit}>
      <h4><u>Register User</u></h4>
      <br />
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name : </label>
          <input class="form-control" type="text" placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          // onChange={(e) => onValueChange(e)}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="exampleInputPassword1">Email :</label>
          <input class="form-control" type="text" placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          // onChange={(e) => onValueChange(e)}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="exampleInputPassword1">Contact :</label>
          <input class="form-control" type="text" placeholder="Enter Contact"
            onChange={(e) => setContact(e.target.value)}
          // onChange={(e) => onValueChange(e)}
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary"
        // onClick={() => { validateForm() }}
        >SUBMIT</button>
      </form>
    </div>
  )
}

export default Form
