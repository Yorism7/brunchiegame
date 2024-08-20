import React, { useState, useEffect } from 'react';
import {
  IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRow, useIonViewDidEnter
} from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import MyFooter from "../../components/MyFooter/MyFooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './PlayGame.css';

// Function to read the content from a text file
const fetchTextFileContent = async (filePath: string) => {
  const response = await fetch(filePath);
  const text = await response.text();
  return text;
};

const PlayGame: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lines, setLines] = useState<string[]>([]); // State to store lines of text
  const history = useHistory();
  const location = useLocation();

  // Safely access slideData with a fallback to default values
  const slideData = location.state?.slideData || { imgSrc: '/icon/default.png', alt: 'Default Alt' };

  useEffect(() => {
    // Fetch and set text content from the file
    const loadTextContent = async () => {
      const content = await fetchTextFileContent('/txt/question.txt');
      const linesArray = content.split('\n').filter(Boolean); // Split content into lines and filter out empty lines
      setLines(linesArray);
    };

    loadTextContent();
  }, []);

  useEffect(() => {
    if (lines.length > 0 && currentSlide >= lines.length) {
      history.push('/endgame');
    }
  }, [currentSlide, lines.length, history]);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
    console.log('Current slide index:', swiper.activeIndex);
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size='12' className='ProgressTab'>
              <IonImg className='top' src='/icon/B3.svg' alt='Progress Icon'></IonImg>
              <h1>{currentSlide + 1}/{lines.length}</h1> {/* Display the current slide */}
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
                    <h1>{line}</h1> {/* Display each line of text on a separate slide */}
                    <IonImg src={slideData.imgSrc} className='TopiconInCard' alt='Slide Image'></IonImg>
                    <IonImg src='/icon/icon-5.svg' className='seccond-TopiconInCard' alt='Additional Icon'></IonImg>
                    <IonImg src='/icon/LOGO.svg' className='BottomiconInCard' alt='Logo'></IonImg>
                    <IonImg src='/icon/icon-5.svg' className='seccond-BottomiconInCard' alt='Additional Icon'></IonImg>
                  </SwiperSlide>
                ))}
                
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
