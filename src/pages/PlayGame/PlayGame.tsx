import React from 'react';
import {
  IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRow, useIonViewDidEnter
} from '@ionic/react';
import MyFooter from "../../components/MyFooter/MyFooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './PlayGame.css';

const PlayGame: React.FC = () => {

  useIonViewDidEnter(() => {
    console.log('IonViewDidEnter: Page has fully loaded');
  });

  return (
    <IonPage>
      <IonContent >
        <IonGrid>
          <IonRow>
            <IonCol size='12' className='ProgressTab'>
              <IonImg className='top' src='/icon/B3.svg'></IonImg>
              <h1>9/10</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className='cardContainer'>
              <Swiper
                effect={'cards'}
                // grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                observer={true}
                observeParents={true}
              >
                <SwiperSlide className='slide'>
                  <h1>อยากรู้แต่ไม่อยากถาม</h1>
                  <IonImg src='/icon/LOGO.svg' className='TopiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-TopiconInCard'></IonImg>
                  <IonImg src='/icon/LOGO.svg' className='BottomiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-BottomiconInCard
                  
                  
                  '></IonImg>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                  <h1>คำถามไม่ต้องการคำตอบ</h1>
                  <IonImg src='/icon/LOGO.svg' className='TopiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-TopiconInCard'></IonImg>
                  <IonImg src='/icon/LOGO.svg' className='BottomiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-BottomiconInCard'></IonImg>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                  <h1>คำถามไม่ต้องการคำตอบ</h1>
                  <IonImg src='/icon/LOGO.svg' className='TopiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-TopiconInCard'></IonImg>
                  <IonImg src='/icon/LOGO.svg' className='BottomiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-BottomiconInCard'></IonImg>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                  <h1>คำถามไม่ต้องการคำตอบ</h1>
                  <IonImg src='/icon/LOGO.svg' className='TopiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-TopiconInCard'></IonImg>
                  <IonImg src='/icon/LOGO.svg' className='BottomiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-BottomiconInCard'></IonImg>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                  <h1>คำถามไม่ต้องการคำตอบ</h1>
                  <IonImg src='/icon/LOGO.svg' className='TopiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-TopiconInCard'></IonImg>
                  <IonImg src='/icon/LOGO.svg' className='BottomiconInCard'></IonImg>
                  <IonImg src='/icon/icon-5.svg' className='seccond-BottomiconInCard'></IonImg>
                </SwiperSlide>
              </Swiper>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default PlayGame;
