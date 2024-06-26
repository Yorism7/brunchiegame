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
import { Link } from 'react-router-dom';

const EndGame: React.FC = () => {
    return (
    <IonPage>
      <IonContent color='main'>
        <IonGrid>
          <IonRow>
            <IonImg className='JoyAgain' src='icon/end-text.svg'></IonImg>
          </IonRow>
          <IonRow>
            <Link className='JoyAgain' to="/home">
                <IonImg src='icon/JoyAgain.svg'></IonImg>
            </Link>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton expand='block' color="light" shape='round' fill='outline' routerLink='/playgame'><b>ให้คะแนนเรา</b></IonButton>
              <IonButton expand='block' color="light" shape='round' fill='outline' routerLink='/playgame'><b>สนับสนุนเรา</b></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default EndGame;
