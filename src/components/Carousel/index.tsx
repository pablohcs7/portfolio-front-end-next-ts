import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

interface CarouselProps {
  
}

export const Carousel: React.FC<CarouselProps> = () => {
  return (
    <>
      <Swiper slidesPerView={3}>
        <SwiperSlide>TESTE1</SwiperSlide>
        <SwiperSlide>TESTE2</SwiperSlide>
        <SwiperSlide>TESTE3</SwiperSlide>
        <SwiperSlide>TESTE4</SwiperSlide>
        <SwiperSlide>TESTE5</SwiperSlide>
        <SwiperSlide>TESTE6</SwiperSlide>
      </Swiper>
    </>
  );
};
