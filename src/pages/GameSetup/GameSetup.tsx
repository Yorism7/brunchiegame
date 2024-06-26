import React, { useState } from 'react';
import {
  IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid,
  IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, useIonViewDidEnter
} from '@ionic/react';
import MyFooter from "../../components/MyFooter/MyFooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './style.css';

const GameSetup: React.FC = () => {

  return (
    <IonPage>
      <IonContent color='main'>
        <IonGrid>
          <IonRow>
            <IonImg src='/icon/2-1.png'></IonImg>
          </IonRow>

          <IonRow>
            <IonCol size="12" className='cardContainer'>
              <IonImg className="topIcon" src='/icon/2-2.png'></IonImg>
              <Swiper
                effect={'cards'}
                // grabCursor={true}
                modules={[EffectCards]}
                observer={true}
                observeParents={true}
              >
                <SwiperSlide>งาน</SwiperSlide>
                <SwiperSlide>เงิน</SwiperSlide>
                <SwiperSlide>ธุรกิจ</SwiperSlide>
                <SwiperSlide>ครอบครัว</SwiperSlide>
                <SwiperSlide>เพื่อน</SwiperSlide>
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand='block' color="light" shape='round' fill='outline' routerLink='/playgame'><b>กดค้างเพื่อค้นใจ</b></IonButton>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default GameSetup;
