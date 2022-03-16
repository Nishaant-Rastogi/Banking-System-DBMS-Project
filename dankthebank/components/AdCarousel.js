import React from 'react';
import {Carousel} from 'react-bootstrap';

function AdCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel className="CAROUSEL" variant="dark" indicators={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 CAROUSELIMG"
      src="vault.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 CAROUSELIMG"
      src="account.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 CAROUSELIMG" 
      src="bankimage.png"
      alt="Third slide"
    />
    </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default AdCarousel