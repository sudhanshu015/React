import React from 'react'

const Cards = (props) => {
  // console.log(props.user,props.age);
  console.log(props);
  
  return (
 <div className="card">
         <h1>{props.user} {props.age}</h1>
         <img src={props.img} alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <button>view profile</button>
       </div>
  )
}

export default Cards