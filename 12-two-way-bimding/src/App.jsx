import React from 'react'
import { useState } from 'react'
 
const App = () => {
   const [title, setTitle] = useState("")
const submitHandler=(p)=>{
 p.preventDefault()
console.log("from submited by ",title);
setTitle('')
}

  return (
    <div>
      <form onSubmit={(p)=>{
        submitHandler(p)
      }}> 
        <input type="text" 
        placeholder='Enter Your Name'
        value={title}
        onChange={(e)=>{
         setTitle(e.target.value);
          
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
