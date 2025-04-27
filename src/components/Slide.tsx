import React from 'react';
import Slider from 'react-slick';
import { Button } from 'antd';

interface SlideItem {
  key: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const slideItems: SlideItem[] = [
  {
    key: '1',
    title: 'Slide 1 Title',
    description: 'Description for slide 1',
    buttonText: 'Learn More',
    buttonLink: '#',
    backgroundImage: 'https://via.placeholder.com/1200x400?text=Slide+1',
  },
  {
    key: '2',
    title: 'Slide 2 Title',
    description: 'Description for slide 2',
    buttonText: 'Shop Now',
    buttonLink: '#',
    backgroundImage: 'https://via.placeholder.com/1200x400?text=Slide+2',
  },
  {
    key: '3',
    title: 'Slide 3 Title',
    description: 'Description for slide 3',
    buttonText: 'Contact Us',
    buttonLink: '#',
    backgroundImage: 'https://via.placeholder.com/1200x400?text=Slide+3',
  },
];

const Slide: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {slideItems.map((item) => (
        <div key={item.key} className="relative">
          <div
            className="h-96 bg-cover bg-center flex flex-col justify-center items-start p-10 text-white"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
            {item.description && <p className="mb-6">{item.description}</p>}
            {item.buttonText && item.buttonLink && (
              <Button type="primary" href={item.buttonLink}>
                {item.buttonText}
              </Button>
            )}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Slide;
