import React from 'react';
import { IonContent, IonImg, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './style.css';


interface PlayThegameProps {
  questionCount: number;
}

const PlayThegame: React.FC<PlayThegameProps> = ({ questionCount }) => {
  return (
    <IonPage>
      <IonContent>
        <Swiper
            effect={'cards'}
            // grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            observer={true}
            observeParents={true}
            >
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
            <SwiperSlide><IonImg src='/icon/KJKJ_LOGO.png'></IonImg></SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default PlayThegame;
