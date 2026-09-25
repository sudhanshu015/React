import React from 'react'
import {useParams} from 'react-router-dom'
const Coursesdaitail = () => {
  const params= useParams()
  
  
   
  return (
    <div>
        <h1> {params.id}Coursesv daitail page</h1>
    </div>
  )
}

export default Coursesdaitail