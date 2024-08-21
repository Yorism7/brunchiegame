import React, { useState, useEffect } from 'react';
import {
  IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRow,
  useIonViewDidEnter
} from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import MyFooter from "../../components/MyFooter/MyFooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './PlayGame.css';

const fetchTextFileContent = async (filePath: string) => {
  const response = await fetch(filePath);
  const text = await response.text();
  return text;
};

const PlayGame: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const history = useHistory();
  const location = useLocation();

  const slideData = location.state?.slideData || { imgSrc: '/icon/default.png', alt: 'Default Alt' };

  const loadTextContent = async () => {
    const content = await fetchTextFileContent('/txt/question.txt');
    const linesArray = content.split('\n').filter(Boolean);
    setLines(linesArray);
    setCurrentSlide(0); // Reset to the first slide when loading new content
  };

  // Call loadTextContent when the page is entered
  useEffect(() => {
    loadTextContent(); // Load content on component mount
  }, [location]);

  const endgamepage = async () => {
    return history.push('/endgame');
  };

    const handleSlideChange = (swiper: any) => {
      if (swiper.activeIndex >= lines.length) {
        endgamepage();
        swiper.slideTo(0); // Reset swiper to the first slide
      } else {
        setCurrentSlide(swiper.activeIndex);
      }
    };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size='12' className='ProgressTab'>
              <IonImg className='top' src='/icon/B3.svg' alt='Progress Icon'></IonImg>
              <h1>{currentSlide + 1}/{lines.length + 1}</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className='cardContainer'>
              <Swiper
                effect={'cards'}
                modules={[EffectCards]}
                className="mySwiper"
                observer={true}
                observeParents={true}
                onSlideChange={handleSlideChange}
              >
                {lines.map((line, index) => (
                  <SwiperSlide key={index} className='slide'>
                    <h1>{line}</h1>
                    <IonImg src={slideData.imgSrc} className='TopiconInCard' alt='Slide Image'></IonImg>
                    <IonImg src='/icon/icon-5.svg' className='seccond-TopiconInCard' alt='Additional Icon'></IonImg>
                    <IonImg src='/icon/LOGO.svg' className='BottomiconInCard' alt='Logo'></IonImg>
                    <IonImg src='/icon/icon-5.svg' className='seccond-BottomiconInCard' alt='Additional Icon'></IonImg>
                  </SwiperSlide>
                ))}
                <SwiperSlide className='slide'>
                  <h1>End of Game</h1>
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
function loadTextContent() {
  throw new Error('Function not implemented.');
}

