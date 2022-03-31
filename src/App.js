import { Route, Routes } from 'react-router-dom';
import './App.css';
import Abouts from './component/About/Abouts';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';

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
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
