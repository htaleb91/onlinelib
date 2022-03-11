import React from 'react'
import {Button} from "react-bootstrap"
function StoryCard({list, libContentCallbackHandller2}) {
   
    const Cards= list.map(({Name,Author,Src,Id},idx) => 
        <ul key={Id}>
            <Button variant='info' onClick={(e)=>libContentCallbackHandller2(e,Id,idx)}> {Name}</Button>
            
        </ul>
       
    );
    
  return (
    
       <div >
        {Cards}
       </div>
    
  );
}

export default StoryCard;
