import React from 'react';
import {
  IonButton, IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRow} from '@ionic/react';
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
                <SwiperSlide>
                  <div className="slide-content">
                    <img src="/card/2-3.png" alt="Book Cover" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <img src="/card/2-4.png" alt="Book Cover" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <img src="/card/2-5.png" alt="Book Cover" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <img src="/card/2-6.png" alt="Book Cover" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <img src="/card/2-7.png" alt="Book Cover" />
                  </div>
                </SwiperSlide>
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
              <IonButton expand='block' color="light" shape='round' fill='outline' routerLink='/seemore'><b>หมวดจอยทั้งหมด</b></IonButton>
            </IonCol>
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
