import React from 'react';

import RIghtCardContant from './RIghtCardContant';
const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl ">
      <img
        className="  h-full  w-full object-cover  "
        src={props.img}
        alt=""
      />
      <RIghtCardContant id={props.id} tag={props.tag}/>
      
    </div>
  );
};

export default RightCard;
