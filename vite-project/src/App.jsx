import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";



function App() {

    
  // function increment(){
  //   setCount(currentCount => currentCount + 1);
  // }

  // function decrese(){
  //   setCount2(currentCount => currentCount - 1);
  // }


  // useEffect(() => {
  //   setInterval(increment, 1000);
  //   setInterval(decrese , 2000);
  // }, []);

  // useEffect(() =>{
  //   console.log('count has changed');

  // }, [count, count2]);



  return (
    <div>
    {/* || <a href='/'> Allen </a> ||   <a href='/neet/online-coaching-class-11'> 11th </a> ||  <a href='/neet/online-coaching-class-12'> 12th </a> ||   */}
    
    
    <BrowserRouter>
    || <Link to='/'> Allen </Link> ||   <Link to='/neet/online-coaching-class-11'> 11th </Link> ||  <Link to='/neet/online-coaching-class-12'> 12th </Link> ||  

      <Routes>
        <Route path = "/neet/online-coaching-class-11" element={<Class11program/>} />
        <Route path = "/neet/online-coaching-class-12" element={<Class12program/>} />
        <Route path = "/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

function Class11program(){
  return (
    <div>
      <h1>Class 11th</h1>
    </div>
  );
}

function Class12program(){
  return (
    <div>
      <h1>Class 12th</h1>
    </div>
  );
}

function Landing(){
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
}





export default App;
