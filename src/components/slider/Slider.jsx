
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';
// import bannerImg from '/public/image.png'
import event1 from '/public/event1.jpeg';
import event2 from '/public/event2.jpeg';
import event3 from '/public/event3.jpeg';
import event4 from '/public/event4.jpeg';
import event5 from '/public/event5.jpeg';
import event6 from '/public/event6.jpeg';
import event7 from '/public/event7.jpeg';
import event8 from '/public/event8.jpeg';
import event9 from '/public/event9.jpeg';

// import required modules
import { EffectCards } from 'swiper/modules';


const Slider = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-full' src={event1} alt="" />
        </SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={event2} alt="" />
        </SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={event3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={event4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={event5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={event6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={event7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={event8} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={event9} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;