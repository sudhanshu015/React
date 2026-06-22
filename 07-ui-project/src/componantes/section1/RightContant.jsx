import React from 'react';

import { Bookmark } from 'lucide-react';
import RightCard from './RightCard';
const RightContant = (props) => {
console.log(props);

  return (
    <div id='right' className=' h-full w-2/3 rounded-4xl flex overflow-x-auto flex-nowrap gap-10 p-6 '> 
     {props.users.map(function(elem,idx){
      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
     })}
     </div>
        
  );
};

export default RightContant;
