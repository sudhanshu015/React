import React, { useState } from 'react'

const App = () => {
 
  // const [num, setnum] = useState({user: "sulove" , age:"20"})
  const [num, setnum] = useState([10,20,30])
 const btnClicked=()=>{
  // const newNum ={...num};
  // newNum.user="amol"
  // newNum.age="30"
  // setnum(newNum)

const newarr=[...num]
newarr.push(76)
setnum(newarr)
 }
  return (
   
    <div> 
  {/* <h1>{num.user} {num.age}</h1> */}
  <h1>{num}</h1>
  <button onClick={btnClicked}>click</button>

    </div>
  )
}

export default App