import React from 'react';
import PageSection from '../PageSection';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';

// install Swiper components
// SwiperCore.use([Navigation, Pagination]);
// import 'swiper/swiper.scss';

const Index = (props) => {
  return (
    <PageSection id="about" className="BgDark" vWhitespace={true}>
    	 <Swiper
	      spaceBetween={50}
	      slidesPerView={3}
	      navigation
	      pagination={{ clickable: true }}
	      scrollbar={{ draggable: true }}
	      onSwiper={(swiper) => console.log(swiper)}
	      onSlideChange={() => console.log('slide change')}
	    >
	      <SwiperSlide>Slide 1</SwiperSlide>
	      <SwiperSlide>Slide 2</SwiperSlide>
	      <SwiperSlide>Slide 3</SwiperSlide>
	      <SwiperSlide>Slide 4</SwiperSlide>
	    </Swiper>
    </PageSection>
  )
}

export default Index;