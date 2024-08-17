import React from 'react';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRouterLink, IonRow} from '@ionic/react';
import MyFooter from "../../components/MyFooter/MyFooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './SeeMore.css';

const GameSetup: React.FC = () => {

  return (
    <IonPage>
      <IonContent color='main'>
        <IonGrid>
          <IonRow className='custom-card'>
            <IonImg src='/icon/2-1.png'></IonImg>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonCard className="custom-card">
                <IonRouterLink routerLink="/playgame">
                <img src="/card/2-3.png" alt="Book Cover" />
                </IonRouterLink>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-card">
                <IonRouterLink routerLink="/playgame">
                <img src="/card/2-4.png" alt="Book Cover" />
                </IonRouterLink>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-card">
                <IonRouterLink routerLink="/playgame">
                <img src="/card/2-5.png" alt="Book Cover" />
                </IonRouterLink>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-card">
                <IonRouterLink routerLink="/playgame">
                <img src="/card/2-6.png" alt="Book Cover" />
                </IonRouterLink>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-card">
                <IonRouterLink routerLink="/playgame">
                <img src="/card/2-7.png" alt="Book Cover" />
                </IonRouterLink>
              </IonCard>
            </IonCol>

            {/* <IonCol size="12" className='cardContainer'>
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
            </IonCol> */}
          </IonRow>

         

        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default GameSetup;
