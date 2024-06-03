import {  IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonLabel, IonPage,  IonRow,  IonTabBar, IonTabButton  } from '@ionic/react';
import MyFooter from "../../components/MyFooter/MyFooter";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';
// import required modules
import { EffectCards } from 'swiper/modules';



const GameSetup: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'main'}>
        <IonGrid>

          <IonRow>
            <IonImg src='public\icon\KJKJ_LOGO.png'></IonImg>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide><IonImg src='public\icon\KJKJ_LOGO.png'></IonImg></SwiperSlide>
                <SwiperSlide><IonImg src='public\icon\KJKJ_LOGO.png'></IonImg></SwiperSlide>
                <SwiperSlide><IonImg src='public\icon\KJKJ_LOGO.png'></IonImg></SwiperSlide>
                <SwiperSlide><IonImg src='public\icon\KJKJ_LOGO.png'></IonImg></SwiperSlide>
                <SwiperSlide><IonImg src='public\icon\KJKJ_LOGO.png'></IonImg></SwiperSlide>
                <SwiperSlide><IonImg src='public\icon\KJKJ_LOGO.png'></IonImg></SwiperSlide>
                <SwiperSlide><IonImg src='public\icon\KJKJ_LOGO.png'></IonImg></SwiperSlide>
                <SwiperSlide><IonImg src='public\icon\KJKJ_LOGO.png'></IonImg></SwiperSlide>
              </Swiper>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton expand='block' color="light" shape='round' fill='outline' href='/home'><b>กดค้างเพื่อค้นใจ</b></IonButton>
            </IonCol>
          </IonRow>

        </IonGrid>
        </IonContent>
        <MyFooter></MyFooter>
    </IonPage>
  );
};

export default GameSetup;
