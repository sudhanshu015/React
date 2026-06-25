import React, { useState } from 'react'

const App = () => {
    const [num, setnum] = useState(0)

    function increaseNum(){
      console.log("increasing");
      
      setnum(num+1)
    }
    function decreaseNum(){
      console.log("decresasing");
      
      setnum(num-1)
    }
    function jump5Num(){
      console.log("decresasing");
      
      setnum(num+5)
    }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>jump by 5

      </button>
    </div>
  )
}

export default App