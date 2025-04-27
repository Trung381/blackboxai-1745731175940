import React from 'react';
import Slider from 'react-slick';

const partnerLogos = [
  'https://via.placeholder.com/150x80?text=Partner+1',
  'https://via.placeholder.com/150x80?text=Partner+2',
  'https://via.placeholder.com/150x80?text=Partner+3',
  'https://via.placeholder.com/150x80?text=Partner+4',
  'https://via.placeholder.com/150x80?text=Partner+5',
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const CompanyPartnerLogo: React.FC = () => {
  return (
    <div className="py-10 px-6">
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo} alt={`Partner ${index + 1}`} className="max-h-20 object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyPartnerLogo;
