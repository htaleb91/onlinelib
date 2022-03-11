import React from 'react';
import Multi from './Mytabs.js';



function LibContent({contentobj,setcontent}) {

        
  return (
    <div>
    <Multi setlist={setcontent} list={contentobj}/>
        
    </div>
    
  )
}

export default LibContent;

/*
const xx=()=>{
       if(objId!==contentobj.Id){ 
        setobjId(contentobj.Id);
              return (
                
                <Tab eventKey={contentobj.Id} title={contentobj.Name}>
     
                <Carousel indicators={false} controls={false} interval={null} variant="dark">
               
              <Carousel.Item style={{marginTop:"20px"}}>
                <Document file={contentobj.Src} onLoadSuccess={onDocumentLoadSuccess} >
                  <Page pageNumber={pageNumber} />
                  <button className='carousel-control-prev' disabled={pageNumber <= 1} onClick={()=>pageBackward(pageNumber)}><span className="glyphicon glyphicon-chevron-left carousel-control-prev-icon" aria-hidden="true"></span></button>
                  <button className='carousel-control-next' disabled={pageNumber >= numPages}  onClick={ ()=> pageForeward(pageNumber)}><span className="glyphicon glyphicon-chevron-left carousel-control-next-icon" aria-hidden="true"></span></button> 
                </Document>
                
                <div style={{color:"black",fontSize:"20px",fontStyle:"bold"}}>
                <span style={{textAlign:"right"}}>{`${contentobj.Name} By ${contentobj.Author}`}</span>
                <span style={{textAlign:"right",marginLeft:"50px"}}> {`Page ${pageNumber} of ${numPages}`}</span>
                </div>
                  
                
              </Carousel.Item>
              
                </Carousel>
              </Tab>
              
              );
              
          } else {
              return null 
          }
      }
*/