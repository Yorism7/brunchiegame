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
  const [questionCount, setQuestionCount] = useState<number>(0);

  const incrementCount = () => {
    console.log('Increment button clicked');
    setQuestionCount(questionCount + 10);
  };

  const decrementCount = () => {
    console.log('Decrement button clicked');
    if (questionCount > 0) {
      setQuestionCount(questionCount - 10);
    }
  };

  useIonViewDidEnter(() => {
    console.log('IonViewDidEnter: Page has fully loaded');
  });

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
                grabCursor={true}
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
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonList className='designInput'>
                <IonItem className='CounterButton'>
                  <IonButton 
                    shape='round' 
                    className='addNumber' 
                    color='base' 
                    onClick={incrementCount}
                  >
                    +
                  </IonButton>
                  <IonInput 
                    type="number" 
                    value={questionCount}
                    onIonChange={e => setQuestionCount(Number(e.detail.value))}
                    disabled={true}
                    placeholder="จำนวนคำถาม"
                  ></IonInput>
                  <IonButton 
                    shape='round' 
                    className='delNumber' 
                    color='base' 
                    onClick={decrementCount}
                  >
                    -
                  </IonButton>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton expand='block' color="light" shape='round' fill='outline' href='/home'><b>กดค้างเพื่อค้นใจ</b></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default GameSetup;
