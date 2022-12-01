import React, {useState} from 'react';
import uniquid from 'uniquid';
import axios from 'axios'

function AddUser(){

  //Hooks
  const[name, setName]=useState('')
  const[email, setEmail]=useState('')
  const[phone, setPhone]=useState('')

  function addUser() {
    let user = {
      name: name,
      email: email,
      phone: phone,
      user_id: uniquid(),
    }
    console.log(user);

    axios.post('/api/users/addUser', user)
    .then(res => {
      alert(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  

  return(
    <div className='container'>
      <h2 className='m-5'>Create User</h2>
      <div className='row'>
        <div className='col-6 offset-3'>
          <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">

              
                <label for="UserName" className="form-label">User Name</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3"><i className='fa fa-user'></i></span>
                  <input type="text" className="form-control" id="UserName" aria-describedby="basic-addon3" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                </div>

                <label for="email" className="form-label">Email</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3"><i className='fa fa-envelope'></i></span>
                  <input type="text" className="form-control" id="email" aria-describedby="basic-addon3" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                </div>

                <label for="phone" className="form-label">Phone</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3"><i className='fa fa-phone'></i></span>
                  <input type="text" className="form-control" id="phone" aria-describedby="basic-addon3" value={phone} onChange={(e) => {setPhone(e.target.value)}}></input>
                </div>

                <button onClick={addUser} className='btn btn-light border-black'>Guardar</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddUser