import React from 'react';

import { Bookmark } from 'lucide-react';
import RightCard from './RightCard';
const RightContant = () => {
  return (
    <div className=' h-full w-2/3 rounded-4xl flex overflow-x-auto flex-nowrap gap-10 p-6 '> 
     <RightCard/> 
     <RightCard/> 
     <RightCard/> 
    
     </div>
        
  );
};

export default RightContant;
