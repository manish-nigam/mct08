import React, { useState, useEffect } from 'react';
import Nav from '../Navbar/Nav';  
import { Link } from 'react-router-dom';
import './Detail.css'
const Details = ({detaildata}) => {
  
  const [reposData, setReposData] = useState([]);
  console.log(detaildata);

  const fetchRepos = async () => {
    const res = await fetch(detaildata.repos_url);
    const data = await res.json();
    setReposData(data);
    console.log(reposData);
    
  };
  
  useEffect(() => {
    fetchRepos();
  }, [detaildata]);

  return (
    <>
      <Nav />
      <div className='maincontentuserdetail'>
        <h1 style={{textAlign:"center",color:"black"}}>Details</h1>
        <div className='carduserdetail'>
          <div className='leftuserdetail'>
            <img src={detaildata.avatar_url} alt=''></img>
          </div>
          <div className='rightuserdetail'>
            <h2>{detaildata.login}</h2>
            <div className='userpostsdetail'>
              <p>Repo:   {reposData.length}</p>
              <p>Following:  {detaildata.followers_url.length}</p>
              <p>Followers:  {detaildata.following_url.length}</p>
            </div>
            <h3>{detaildata.location}</h3>
            <p style={{color:"white"}}>{detaildata.html_url}</p>
            <Link to={detaildata.html_url}>
              <button className='btn2'>View Profile</button>
            </Link>
          </div>
        </div>
        <h1 style={{textAlign:"center",color:"black"}}>Repositories({reposData.length})</h1>
        <div className='userdowncarddetail'>
          <div className='innercarduserdetail'>
              <ul>
                {reposData.map((repou) => {
                    return <div className='usercardbottomdetail'>
                        <div className='leftcardbottmdetail'>
                            <h3>{repou.name}<span className='mereander'>&nbsp;&nbsp;Javascript&nbsp;&nbsp;</span></h3>
                            <p style={{color:"black"}}>React,Javascript,html,css</p>
                        </div>
                        <div className='rightcardbottomdetail'>
                         <Link to={repou.html_url}><button>View Repo</button></Link>
                         <Link to={repou.home}><button>Live Demo</button></Link>
                        </div>
                    </div>
                    })}
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
