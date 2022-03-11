import React,{useState} from 'react';
import styles from './App.module.css';
import LibContent from './Component/Content/content';
import LibFooter from './Component/Footer/Footer';
import Libheader from './Component/Header/header';
import LibSidebar from './Component/SideBar/sidebar';
import pdfFiles from "./Component/SideBar/ChildenStories/FilesObj";
import FilesPath from './Component/SideBar/ChildenStories/FilesPath';
//import Files from './Component/SideBar/ChildenStories/FilesPath';

function App() {
 const [contentobj,setContentobj]= useState([{
  Id:1,
  Name:"Week 1",
  Author:"Author1",
  Src:FilesPath.file1
 }]);
    const libContentCallbackHandller= (e,Idclick,idx)=> {
      const x=contentobj.find(el=>el.Id===Idclick);
      if(x===undefined){
    const newobj= pdfFiles.filter((el,idx)=> el.Id===Idclick);
    const toview=[...contentobj,newobj[0]];
    setContentobj(toview);}
    };
    console.log (contentobj);
  return (
    <div className={styles.App}>
      <Libheader/>
      <section className={styles.section}>
          <LibSidebar libContentCallbackHandller={libContentCallbackHandller} />
          <LibContent setcontent={setContentobj} contentobj ={contentobj}/>  
      </section>
      
      <LibFooter/>
      "
    </div>
  );
}

export default App;
