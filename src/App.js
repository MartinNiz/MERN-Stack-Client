import './App.css';
import ListUser from './usuario/ListUser';
import AddUser from './usuario/AddUser';
import EditUser from './usuario/EditUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>CRUD en react</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListUser/>}></Route>
          <Route path='/SignUp' element={<AddUser/>}></Route>
          <Route path='/EditUser' element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
