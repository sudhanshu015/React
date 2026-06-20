import React from 'react'
import{ArrowUpRight} from 'lucide-react'
import HeroText from './HeroText'
const LeftContant = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between '>

        <HeroText/>
        
        <div >
             <ArrowUpRight  size={108}/>
        </div>
    </div>
  )
}
export default LeftContant
