import {React,useState,Fragment} from 'react'

import {Carousel,Tabs,Tab,CloseButton,Button} from 'react-bootstrap';

import  {Document,Page,} from "react-pdf/dist/esm/entry.webpack";



function Multi({list,setlist}) {

  const [numpages, setNumPages] = useState([]);
  const [pagenumber, setPageNumber] = useState([]); 
    function onDocumentLoadSuccess( numPages,obId) {
     
      const obj1=[...numpages,{Id:obId,NumP:numPages._pdfInfo.numPages}]
      const obj2=[...pagenumber,{Id:obId,PNum:1}]
      setNumPages(obj1);
      setPageNumber(obj2);
      
      console.log(numpages,numpages)
    }
   
  function pageForeward(id){
       const prev= findPnum(id)
       const remained= pagenumber.filter((el)=> el.Id!==id);
       const obj2=[...remained,{Id:id,PNum:prev + 1}]

          setPageNumber(obj2);
        }
  function pageBackward(id){
    const prev= findPnum(id)
    const remained= pagenumber.filter((el,idx)=> el.Id!==id);
    const obj2=[...remained,{Id:id,PNum:prev - 1}]
          setPageNumber(obj2);
        }
  function findPnum(obid){
    const x= pagenumber.filter((el,idx)=> el.Id===obid);
    if(x.length!== 0)
    {return x[x.length-1].PNum;}
    return 1;
    
  }  console.log(pagenumber,numpages)

  function findNumP(obid){
    const x= numpages.filter((el,idx)=> el.Id===obid);
    if(x.length!== 0)
    {return x[x.length-1].NumP;}
    return ;
  }
function closeTab(id){
  const remained1= pagenumber.filter((el,idx)=> el.Id!==id);
  setPageNumber(remained1);
  const remained2= numpages.filter((el,idx)=> el.Id!==id);
  setNumPages(remained2);
  const remained3= list.filter((el,idx)=> el.Id!==id);
  setlist(remained3);
  
}

    const contentViewer=list.map(({Id,Name,Author,Src},idx)=>
    
    <Tab eventKey={Id} key={Id} title={<Fragment>{Name} <CloseButton onClick={()=>closeTab(Id)}></CloseButton> </Fragment>}>
     
    <Carousel indicators={false} controls={false} interval={null} variant="dark">
   
  <Carousel.Item style={{marginTop:"20px"}}>

    <Document file={Src}  onLoadSuccess={(numPages)=>onDocumentLoadSuccess(numPages,Id)} >
      <Page pageNumber={findPnum(Id)} size="A4"/>
      <button className='carousel-control-prev' disabled={findPnum(Id) <= 1} onClick={()=>pageBackward(Id)}><span className="glyphicon glyphicon-chevron-left carousel-control-prev-icon" aria-hidden="true"></span></button>
      
      <button className='carousel-control-next' disabled={findPnum(Id) >= findNumP(Id)}  onClick={ ()=> pageForeward(Id)}><span className="glyphicon glyphicon-chevron-left carousel-control-next-icon" aria-hidden="true"></span></button> 
    </Document>
    
    <div style={{color:"black",fontSize:"20px",fontStyle:"bold"}}>
    <span style={{textAlign:"right"}}>{`${Name} By ${Author}`}</span>
    <span style={{textAlign:"right",marginLeft:"50px"}}> {`Page ${findPnum(Id)} of ${findNumP(Id)}`}</span>
    </div>
     
    
  </Carousel.Item>
  
    </Carousel>
  </Tab>
    
    )
    
  return (
  <Tabs >
    {contentViewer}
  </Tabs>
  )
}

export default Multi
