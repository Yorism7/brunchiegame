import React, { useState } from 'react';
import {
  IonButton, IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRow
} from '@ionic/react';
import MyFooter from "../../components/MyFooter/MyFooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router-dom';
import './style.css';

const GameSetup: React.FC = () => {
  const history = useHistory();
  const [selectedSlide, setSelectedSlide] = useState<any>();

  const handleSlideChange = (slideData: any) => {
    setSelectedSlide(slideData); // Save the selected slide's data
  };

  const handleButtonClick = () => {
    if (selectedSlide) {
      const path = selectedSlide.slideData ;
      history.push({
        pathname: '/playgame',
        state: path, // Pass the selected slide's data to /playgame
      });
    } else {
      history.push({
        pathname: '/playgame',
        state: "random", // Pass the selected slide's data to /playgame
      });
    }
  };

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
                modules={[EffectCards]}
                observer={true}
                observeParents={true}
                onSlideChange={(swiper) => {
                  const slideIndex = swiper.activeIndex;
                  const slideData = swiper.slides[slideIndex].querySelector('img')?.getAttribute('alt'); // Get the alt attribute
                  handleSlideChange({ slideData }); // Pass only the alt value
                } }
              >
                <SwiperSlide>
                  <div className="slide-content" onClick={handleButtonClick}>
                    <img src="/card/2-3.png" alt="random" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content" onClick={handleButtonClick}>
                    <img src="/card/2-4.png" alt="icon-5" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content" onClick={handleButtonClick}>
                    <img src="/card/2-5.png" alt="icon-2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content" onClick={handleButtonClick}>
                    <img src="/card/2-6.png" alt="icon-3" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content" onClick={handleButtonClick}>
                    <img src="/card/2-7.png" alt="icon-4" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand='block' color="light" shape='round' fill='outline' onClick={handleButtonClick}><b>เริ่มค้นใจ</b></IonButton>
            </IonCol>
            <IonCol size="12">
              <IonButton expand='block' color="light" shape='round' fill='outline' routerLink='/seemore'><b>All Category</b></IonButton>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default GameSetup;
