import { Route, Routes } from 'react-router-dom';
import './App.css';
import Abouts from './component/About/Abouts';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<Abouts></Abouts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
