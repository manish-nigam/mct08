import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css'
import { useSelector } from 'react-redux';
 
const Nav = ({setDetailsdata,setLogintype}) => {
      
     const {UserallData} = useSelector((store)=>store)
     const update = () => {
       
    }
  return (
    <div  className='container' style={{
      backgroundColor :"black",
      color :"white",
      display :"flex",
      justifyContent :"space-evenly"
    }}>
      <div>
        <h1 style={{
          marginTop :"10px",
          fontSize :"25px",
          color :"green"
        }}>Github Exploration App</h1>
        </div>
        <div id='menu'>
            <Link to= "/home">Home</Link>
             <Link to='/userdetail'>UserDetails</Link>
             <Link to= "/search">Search</Link>
              <button className='btn3' onClick={update}>Logout</button>&nbsp;&nbsp;&nbsp;
              <Link to='/userdetail'><button>{UserallData.login}</button> </Link>
             
             
             
            
             
             
        </div>

    </div>
  );
}

export default Nav;
