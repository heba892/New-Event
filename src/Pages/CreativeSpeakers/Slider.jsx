import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from "swiper";
import spaekerData from '../../design-system/components/CreativeSpeaker/SpaekersData';
import CreativeSpaekerComponent from '../../design-system/components/CreativeSpeaker/CreativeSpeaker';

export default function Slider() {
  return (
      <Swiper
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
              modules={[Autoplay]} spaceBetween={50} slidesPerView={4}>
              {spaekerData.map((item) => {
                return <SwiperSlide key={item.key}>
                <CreativeSpaekerComponent img={item.img} alt={item.alt} name={item.name} job={item.job}></CreativeSpaekerComponent>

                </SwiperSlide>
              })}
    </Swiper>
  )
}
