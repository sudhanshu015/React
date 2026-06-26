import React from 'react'
 
const App = () => {
const submitHandler=(p)=>{
 p.preventDefault()
console.log("from submit");

}

  return (
    <div>
      <form onSubmit={(p)=>{
        submitHandler(p)
      }}>
        <input type="text" placeholder='Enter Your Name '/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
