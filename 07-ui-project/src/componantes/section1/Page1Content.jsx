import React from 'react'
import LeftContant from './LeftContant'
import RightContant from './RightContant'

const Page1Content = () => {
  return (
    <div className='py-10 px-18 flex  items-center gap-5 h-[90vh]'>
        <LeftContant/>
        <RightContant users={props.users}/>
    </div>
  )
}

export default Page1Content