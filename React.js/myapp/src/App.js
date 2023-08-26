import { useEffect } from 'react';
import './App.css';
import HomeCarousels from './HomeCarousels';
import './NavBar';
import NavBar from './NavBar';
import Imagecard from './component/Imagecard';
import React,{useState} from "react";
import ImageData from './ImageData';


const ncard = (val) =>{
    return <Imagecard title={val.title} imgsrc={val.image} desc={val.price} />
}



function App() {

   const [Data,SetData]=useState([]);
   useEffect(()=>{
      const fetchdata = async () => {
         try{
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          SetData(data);
         }
         catch(error){
         console.log("Error occured",error);
         }
      };
      fetchdata();
   }, []);
  return (
     <div>
     <NavBar/>
     <HomeCarousels/>
     <div className='row'>
  {Data.map((val,index) => (
        <div key={val.id} className='col-md-3'>
        {ncard(val)}
        </div>
    ))}
       </div>
     </div>
  );
}

export default App;
