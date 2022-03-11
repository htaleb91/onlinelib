import React from 'react';
import StoryCard from './storyCard.js';
import pdfFiles from './FilesObj.js';
import {Accordion,Row,Col,} from "react-bootstrap"
function Stories({libContentCallbackHandller1}) {
  
  const libContentCallbackHandller2= (e,Id,idx)=> {
    libContentCallbackHandller1(e,Id,idx);

    
    };
  return (
    <div>
      <Accordion defaultActiveKey="0" flush style={{marginTop:"20px",marginRight:"20px", }}>
        <Accordion.Item eventKey="0">
        <Accordion.Header>Java Programming</Accordion.Header>
        <Accordion.Body style= {{backgroundColor: "rgb(37, 97, 97)"}}>
      <Row>
      <Col>
          <StoryCard list={pdfFiles.filter((el,idx)=> el.Id%2===1)} libContentCallbackHandller2={libContentCallbackHandller2}/>
      </Col>
      <Col>
          <StoryCard list={pdfFiles.filter((el,idx)=> el.Id%2===0)} libContentCallbackHandller2={libContentCallbackHandller2}/>
      </Col>
      </Row>
          
           
        </Accordion.Body>
    </Accordion.Item>
      </Accordion>
    </div>
    
  );
}

export default Stories;
/*<Accordion defaultActiveKey="0" flush style={{marginTop:"20px",marginRight:"20px", }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body >
        
            <Stories libContentCallbackHandller1={libContentCallbackHandller1}/>
             
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> 
    
     <StoryCard list={pdfFiles.filter((el,idx)=> el.Id===0)} libContentCallbackHandller2={libContentCallbackHandller2}/>
     */