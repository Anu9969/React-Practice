import { useState, useEffect } from 'react';



function App() {
  const [count, setCount ] = useState(0);
  const [count2, setCount2] = useState(0);
    
  function increment(){
    setCount(currentCount => currentCount + 1);
  }

  function decrese(){
    setCount2(currentCount => currentCount - 1);
  }


  useEffect(() => {
    setInterval(increment, 1000);
    setInterval(decrese , 2000);
  }, []);

  useEffect(() =>{
    console.log('count has changed');

  }, [count, count2]);


  return (
    
    <div style={{backgroundColor: 'lightblue', height: '100vh' ,display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '130px'}}>
     

        {count}  
      
    
    </div>
     
    
  )
}








const ToggleMessage = () =>{
  // let [message, setMessage] = useState(false);
  let [notification, setNotification] = useState(0);

   function toggle(){
      // setMessage(!message);
      setNotification(notification + 1);
   }
 
  

  return(
    <div style={{borderRadius:'200px',width:'170px',border: '1px solid black', padding: '60px', margin: '10px',display: 'inline-block',backgroundColor: 'lightgreen',textAlign: 'center'}}>
    <button onClick={toggle} style={{padding: '10px',borderRadius:"4px"}}>Toggle Message</button>
    {/* {message && <h1>Message Visible yay i did it</h1>} */}

    {notification && <h1>Notification: {notification}</h1>}
    </div>
  );

}


function Component(){
  return(
    <div style={{display: 'inline-grid', justifyContent: 'space-between', alignItems: 'self-start',backgroundColor: 'lightblue'}}>
    <div style={{borderRadius:'200px',width:'170px',border: '1px solid black', padding: '60px', margin: '10px',backgroundColor: 'lightgreen'}}>
      <h1 style={{}}>Hello World</h1>
    </div>
    </div>
  )
}






export default App
