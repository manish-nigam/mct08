import React, { useEffect, useState } from 'react'
import Nav from '../Navbar/Nav'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = ({setdetaildata,sethomedata}) => {
    const [tile, setTiles] = useState([])
   

    useEffect(()=>{
        tileData()
    },[])

    const tileData = async() =>{
        const result  = await fetch("https://api.github.com/users")
        const data  = await result.json()
        setTiles(data)
        console.log(data)
        sethomedata(data[0])

    }
  return (
    <div className='homebody' >
    <Nav/>
    <h1 style={{textAlign:"center"}}>Homepage</h1>
    <div className='allcards'>
{
    tile.map((ele)=>{
        
        return <Link to='/details'><div className='cards' onClick={()=>setdetaildata(ele)}>
            <div className='leftcard'>
             <img src={ele.avatar_url}  alt='phto'></img>
            </div>
            <div className='rightcard'>
                <h3>{ele.login}</h3>
                 
                <div className='rightinside'>
                    <div className='insidefollower'>
                        <p>follower</p>
                        <p>{ele.followers_url.length}</p>
                    </div>
                    <div className='insidefollower'>
                        <p>following</p>
                        <p>{ele.following_url.length}</p>
                    </div>
                    <div className='insidefollower'>
                        <p>ID</p>
                        <p>{ele.id}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
        
    })
}
</div>
</div>
  )
}

export default Home
