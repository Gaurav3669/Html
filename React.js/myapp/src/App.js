import './App.css';
import HomeCarousels from './HomeCarousels';
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar';
import NavBar from './NavBar';
import Imagecard from './component/Imagecard';
import ImageData from './ImageData';


const ncard = (val) =>{
    return <Imagecard title={val.title} imgsrc={val.imgsrc} desc={val.desc} />
}



function App() {
  return (
     <div>
     <NavBar/>
     <HomeCarousels/>
     <div className='row'>
  {ImageData.map((val,index) => (
        <div key={val.id} className='col-md-3'>
        {ncard(val)}
        </div>
    ))}
  </div>
     </div>
  );
}

export default App;
