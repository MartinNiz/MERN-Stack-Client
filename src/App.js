import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ListUser from './usuario/ListUser';
import AddUser from './usuario/AddUser';
import EditUser from './usuario/EditUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand" href={'/'}>MERN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href={'/'}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href={'/signup'}>Add user</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListUser/>}></Route>
          <Route path='/signup' element={<AddUser/>}></Route>
          <Route path='/edituser/:user_id' element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
