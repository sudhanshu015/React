import React from 'react'

const App = () => {

   function onchanging(){
    console.log("User is Typing");
    
   }

  return (
    <div>

      <input onClick={onchanging} type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App
