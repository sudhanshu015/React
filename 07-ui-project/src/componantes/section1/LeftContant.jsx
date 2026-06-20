import React from 'react'
import{ArrowUpRight} from 'lucide-react'
const LeftContant = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between bg-blue-300 '>

        
        <div className='p-5'>
            <h3 className=' mb-5 text-6xl font-bold'>Prospective <br /><span>Custromar</span>  <br />Segmentation</h3>
            <p className='text-xl font-medium text-gray-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa autem sapiente excepturi voluptas in fugit saepe. Ad, cumque vel!</p>
        </div>
        
        <div >
             <ArrowUpRight  size={108}/>
        </div>
    </div>
  )
}
export default LeftContant
