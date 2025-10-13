import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa tus imágenes
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.webp';
import slider3 from '../assets/images/slider3.webp';

function ImageSlider() {
  return (
    <div style={{ padding: '20px 0' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
        style={{ width: '650px' }}
      >
        <SwiperSlide><img src={slider1} alt="Fútbol" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="Natación" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="Ciclismo" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;