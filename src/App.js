import Login from './Component/Login/Login'; 
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
 
import { useState } from 'react';
import Home from './Component/Home/Home';
import Details from './Component/Details/Details';
import Userdetail from './Component/Userdetail/Userdetail';
import Search from './Component/Search/Search';
function App() {


   const [logintype,setLogintype] = useState(false)
   const [homedata,setHomedata] = useState({})
   const[detaildata,setDetailsdata] = useState(homedata)
  return (
    <div>
       
        
       <Routes>
        <Route path='/' element = {logintype ? <Navigate to="/home"/> : <Login setLogintype ={setLogintype} />}/>
        <Route path='/home' element={logintype?<Home setdetaildata={setDetailsdata} sethomedata={setHomedata}/>:<Navigate to="/"/>}/>
        <Route path='/details' element={logintype?<Details detaildata={detaildata} />:<Navigate to="/"/>}/>
        <Route path='/userdetail' element={logintype?<Userdetail/>:<Navigate to="/"/>}/>
        <Route path='/search' element={logintype?<Search setdetaildata={setDetailsdata}/>:<Navigate to="/"/>}/>       
       </Routes>
    </div>
  );
}

export default App;
