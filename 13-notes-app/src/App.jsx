import React from 'react'

const App = () => {
  return (
    <div>
      <form  className=' flex  justify-between '>
        <input type="text" 
         placeholder='Enter Notes Heading '
         />
         <textarea name="" 
         id="" 
         placeholder='Enter deitails'>

         </textarea>
        import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>React Input Example</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your Name: {name}</p>
    </div>
  );
}

export default App;
      </form>
    </div>
  )
}

export default App
