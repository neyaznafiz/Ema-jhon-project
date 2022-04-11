import { Route, Routes } from 'react-router-dom';
import './App.css';
import Abouts from './component/About/Abouts';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Shipment from './component/Shipment/Shipment';
import Shop from './component/Shop/Shop';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>

        {/* its a ruquire page, you havo to be login to visit this page  */}
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
           </RequireAuth> 
        }></Route>

        <Route path='/about' element={<Abouts></Abouts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
