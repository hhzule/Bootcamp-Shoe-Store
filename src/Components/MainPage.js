import React from 'react';
import { Link } from 'react-router-dom';
import data from './../data.json';

function MainPage(){
  return(
    <>
    <div><h1>Mens</h1></div>
{Object.keys(data).slice(0, 3).map(k => { 
  return<div key={k}>
  <Link to={k}>
  <h3>{data[k].name}</h3>
  <img style={{ width: "210px", height: "210px", borderRadius: '20%' }} src={data[k].img} alt="k" />
  </Link>
  </div>
  })}
    <div><h1>Womens</h1></div>
    <div><h1>Kids</h1></div>
    <div><h1>About Us</h1></div>
    
    </>
    )
}

export default MainPage;