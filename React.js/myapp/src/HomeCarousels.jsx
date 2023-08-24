import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const HomeCarousels = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img src='https://th.bing.com/th?id=ORMS.3714974468b4c6e5dbcef7d3c192061b&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0' text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src='https://th.bing.com/th?id=ORMS.873177d762f23aa24e5fb27439858ad9&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0' text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src='https://th.bing.com/th?id=ORMS.066ded6b036aa84ccee6d7802f8d92f6&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0' text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default HomeCarousels