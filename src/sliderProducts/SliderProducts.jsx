import React from 'react';
import './styleSliderProducts.scss'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderProducts = () => {

  const carouseles = [
    {
      title: "Pizza super especial para Frontends",
      image1: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/9c277af3-bef3-4048-b3db-9796911f0642.jpg",
      image2: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/9c277af3-bef3-4048-b3db-9796911f0642.jpg",
      image3: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/9c277af3-bef3-4048-b3db-9796911f0642.jpg",
      price: "$99 MXN"
    },
    {
      title: "Javascript + React Pizza",
      image1: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/06e68290-9e08-48a1-ae15-a21f871f7377.jpg",
      image2: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/06e68290-9e08-48a1-ae15-a21f871f7377.jpg",
      image3: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/06e68290-9e08-48a1-ae15-a21f871f7377.jpg",
      price: "$129 MXN"
    },
    {
      title: "Pizza super especial para Frontends",
      image1: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/ad935b62-61a9-4d87-86ee-ec1888967cf6.jpg",
      image2: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/ad935b62-61a9-4d87-86ee-ec1888967cf6.jpg",
      image3: "https://cache.dominos.com/wam/prod/market/CO/_es/images/promo/ad935b62-61a9-4d87-86ee-ec1888967cf6.jpg",
      price: "$200 MXN"
    },
  ]

  return (
    <>
      <section className='section__caruselFondo'>
        {carouseles.map((slide) => (
          <>
            <Carousel className='section__caruselGeneral' autoPlay showIndicators={true} showThumbs={false}>
              <div>
                <img src={slide.image1} alt="" />
              </div>
              <div>
                <img src={slide.image2} alt="" />
              </div>
              <div>
                <img src={slide.image3} alt="" />
              </div>
            </Carousel>
          </>
        ))}
      </section>
    </>
  );
};

export default SliderProducts;
