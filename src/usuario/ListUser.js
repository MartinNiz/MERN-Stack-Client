import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetUser from './GetUser';

function ListUser(){

  const[dataUser, setDataUser] = useState([])

  useEffect(() => {
    axios.get('api/users/getusers').then( res => {
      setDataUser(res.data)
    }).catch(err => {
      console.log(err)
    })
  
    
  }, [])
  

  //Add list
  const listUser = dataUser.map(user => {
    return(
      <div>
        <GetUser user={user}/>
      </div>
    )
  })

  return(
    <div>
      <h2>Lista de Usuarios</h2>
      <div className='container'>
        <row className='row'>
          {listUser}
        </row>
      </div>
      

    </div>
  )
}

export default ListUser