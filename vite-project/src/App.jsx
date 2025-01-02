import { useState } from 'react'


function App() {
  

  return (
    <>
    <Component/>
    <Component/>
    <Component/>
    </>
  )
}

function Component(){
  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: 'lightblue'}}>
    <div style={{borderRadius:'200px',width:'170px',border: '1px solid black', padding: '60px', margin: '10px', display: 'inline-block',backgroundColor: 'lightgreen'}}>
      <h1 style={{}}>Hello World</h1>
    </div>
    </div>
  )
}

export default App
