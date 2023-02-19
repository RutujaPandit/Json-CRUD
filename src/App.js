import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import EmpCreate from './Components/EmpCreate';
import EmpDetails from './Components/EmpDetails';
import EmpEdit from './Components/EmpEdit';
import EmpListing from './Components/EmpListing';

function App() {
  return (
    <div className="App">
      <h1>ReactJs CRUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/detail/:id' element={<EmpDetails />}></Route>
          <Route path='/employee/edit/:id' element={<EmpEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
