import React from 'react';
import {
  IonButton, IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRow} from '@ionic/react';
import MyFooter from "../../components/MyFooter/MyFooter";
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';
import { useHistory } from 'react-router-dom';

const EndGame: React.FC = () => {

  const history = useHistory();

  const joyagain = async () => {
    return history.replace('/home');
  };
 
  return (
    <IonPage>
      <IonContent color='main'>
        <IonGrid>
          <IonRow>
            <IonImg className='JoyAgain' src='icon/end-text.svg'></IonImg>
          </IonRow>
          <IonRow>
            <div className='JoyAgain' onClick={joyagain}>
                <IonImg src='icon/JoyAgain.svg'></IonImg>
            </div>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton expand='block' color="light" shape='round' fill='outline' routerLink='/home'><b>ให้คะแนนเรา</b></IonButton>
              <IonButton expand='block' color="light" shape='round' fill='outline' href='https://www.brunchtimeshop.com/'><b>สนับสนุนเรา</b></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default EndGame;
