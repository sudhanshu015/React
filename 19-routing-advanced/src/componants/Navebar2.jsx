import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navebar2 = () => {

     let navigate = useNavigate()
  return (
    <div className='py-2 px-5 bg-cyan-500'>
     <button onClick={ ()=>{

        navigate('/')
      }

      } 
      
      className=' bg-red-400 px-5 py-2 rounded m-2 cuser-pointer active:scale-95'> Return to Home Page</button>
      <button onClick={()=>{
        navigate(-1)

      }} 
      
      className=' bg-red-400 px-5 py-2 rounded m-2 cuser-pointer active:scale-95'> Back</button>
      <button onClick={()=>{
        navigate(+1)

      }} 
      
      className=' bg-red-400 px-5 py-2 rounded m-2 cuser-pointer active:scale-95'>Next</button>

    </div>
  )
}

export default Navebar2