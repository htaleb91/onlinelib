import React from 'react'
//import styles from './sidebar.module.css'
import Stories from './ChildenStories/Stories'


//import Literature from './Literature/Literature';
//import Science from './scientific/Science'

function LibSidebar( {libContentCallbackHandller}) {
  const libContentCallbackHandller1= (e,Id,idx)=> {
    libContentCallbackHandller(e,Id,idx);
    
    }
  return (
    <div>
      <Stories libContentCallbackHandller1={libContentCallbackHandller1}/>

    </div>
  )
}

export default LibSidebar;
/*
  <div className={styles.scontainer}>
        <h1>SideBar</h1>
        <Stories libContentCallbackHandller1={libContentCallbackHandller1}/>
      {  // <Science/>
        // <Literature/>
      }

    </div>


    <Row>
            <Col>
              <Stories style={{ flexWrap:"wrap"}} libContentCallbackHandllerL1={libContentCallbackHandller1}/>
            </Col>
           
            </Row>
*/