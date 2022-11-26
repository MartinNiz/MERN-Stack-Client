import React from 'react';

  function addUser() {
    
  }

function AddUser(){
  return(
    <div className='container'>
      <h2 className='m-5'>Create User</h2>
      <div className='row'>
        <div className='col-6 offset-3'>
          <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
              <form className='control-form'>
              <label for="UserName" className="form-label">User Name</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3"><i className='fa fa-user'></i></span>
                <input type="text" className="form-control" id="UserName" name='user_name' aria-describedby="basic-addon3"></input>
              </div>

              <label for="email" className="form-label">Email</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3"><i className='fa fa-envelope'></i></span>
                <input type="text" className="form-control" id="email" name='email' aria-describedby="basic-addon3"></input>
              </div>

              <label for="phone" className="form-label">Phone</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3"><i className='fa fa-phone'></i></span>
                <input type="text" className="form-control" id="phone" name='phone' aria-describedby="basic-addon3"></input>
              </div>

              <button onClick={addUser} className='btn btn-light border-black'>Guardar</button>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddUser