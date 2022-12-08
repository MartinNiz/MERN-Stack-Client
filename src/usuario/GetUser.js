import axios from 'axios';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom'

function GetUser({user}){

  const navigate = useNavigate()

  function deleteUser(user_id) {
    axios.post('/api/users/deleteuser', {user_id: user_id}).then(res => {
      console.log(res.data)
      navigate(0)
    }).catch(err => {
      console.log(err)
    })
  }

  return(
    <div>
      <div className='card w-25 mx-auto mt-3'>
        <div className='card-body'>
          <li className='list-group-item'>{user.name}</li>
          <li className='list-group-item'>{user.email}</li>
          <li className='list-group-item'>{user.phone}</li>
        </div>
        <div className='card-footer'>
          <div className='d-flex justify-content-around align-items-center'>
            <Link to={`/edituser/${user.user_id}`}><a className='btn btn-success' style={{width:'100px'}} >Edit</a></Link>
            <button className='btn btn-danger'  style={{width:'100px'}} onClick={()=>{deleteUser(user.user_id)}}>Delete</button>
          </div>

        </div>
      </div>


    </div>



  )
}

export default GetUser