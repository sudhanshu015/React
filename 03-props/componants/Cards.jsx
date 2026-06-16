import React from 'react'

const Cards = (props) => {
  console.log(props);
  
  return (
 <div className="card">
         <h1>sudhanhu</h1>
         <img src="https://images.unsplash.com/photo-1777622488430-3a3873212441?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <button>view profile</button>
       </div>
  )
}

export default Cards