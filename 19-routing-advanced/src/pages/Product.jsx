import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Product = () => {
  return (
   <div>
     <div className=' flex justify-center gap-3 py-4'>
    <Link className=' text-xl font-semibold bg-blue-400 rounded' to='/product/men'>Men</Link>
    <Link className=' text-xl font-semibold bg-pink-400 rounded ' to ='/product/women'>Women</Link>    
    <Link className=' text-xl font-semibold bg-blue-600 ' to ='/product/kides'>Kides</Link>    
    </div>
    <Outlet/>
   </div>
    
  )
}

export default Product
      