import React from 'react'
import { ArrowRight } from 'lucide-react';
const RIghtCardContant = (props) => {
  return (
   <div className="absolute top-0 left-0 h-full w-full  p-8  flex flex-col justify-between">
        <h1 className=" text-2xl font-bold  rounded-full  h-12  w-12 flex justify-center bg-amber-50 items-center ">
          {props.id+1}
        </h1>

        <div>
          <p className=" text-lg leading-relaxed mb-20 font-medium text-white">
            Prime customar that have access to ntha bank credit end satified
            with the current production
          </p>
          <div>
            <button className=" flex px-7 py-3 gap-4 rounded-3xl font-semibold bg-red-400 ">
             {props.tag}
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RIghtCardContant
