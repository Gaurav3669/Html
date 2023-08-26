import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Imagecard = (props) => {

   const [Count,setCount] = useState(0);
    const HandleClick =() => {
    setCount(Count+1);
    console.log("Button Clicked",Count);
  }

  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgsrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      <Card.Text>
          {props.desc}  {Count}
        </Card.Text>
        
        <Button onClick={HandleClick} variant="primary">Go somewhere</Button>
      
      </Card.Body>
    </Card>
    </div>
   
  )
}

export default Imagecard