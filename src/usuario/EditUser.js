import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function EditUser(){

  const params = useParams()
  const[name, setName]=useState('')
  const[email, setEmail]=useState('')
  const[phone, setPhone]=useState('')
  useEffect(() => {

    axios.post('/api/users/getuser', {user_id: params.user_id}).then(res => {
      const dataUser = res.data[0]
      setName(dataUser.name)
      setEmail(dataUser.email)
      setPhone(dataUser.phone)
    });

  }, [])
  

  function edit(){
    const editUser = {
      name: name,
      email: email,
      phone: phone,
      user_id: params.user_id
    }
    axios.post('/api/users/edituser', editUser).then(res => {
      console.log(res.data)
    })
    .then(err => {
      console.log(err)
    })
  }

  return(
    <div className='container'>
    <h2 className='m-5'>Edit User</h2>
    <div className='row'>
      <div className='col-6 offset-3'>
        <div className="card">
          <div className="card-body">
            
              <label className="form-label">User Name</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3"><i className='fa fa-user'></i></span>
                <input type="text" className="form-control" id="UserName" aria-describedby="basic-addon3" value={name} onChange={(event) => {setName(event.target.value)}}></input>
              </div>

              <label className="form-label">Email</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3"><i className='fa fa-envelope'></i></span>
                <input type="text" className="form-control" id="email" aria-describedby="basic-addon3" value={email} onChange={(event) => {setEmail(event.target.value)}}></input>
              </div>

              <label className="form-label">Phone</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3"><i className='fa fa-phone'></i></span>
                <input type="text" className="form-control" id="phone" aria-describedby="basic-addon3" value={phone} onChange={(event) => {setPhone(event.target.value)}}></input>
              </div>

              <button onClick={edit} className='btn btn-light border-black'>Guardar</button>

          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default EditUser