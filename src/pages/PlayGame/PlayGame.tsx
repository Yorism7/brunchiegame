import React, { useState, useEffect } from 'react';
import {
  IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRow
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

const getRandomLines = (lines: string[], maxLines: number) => {
  // Shuffle the array
  const shuffled = lines.sort(() => 0.5 - Math.random());
  // Select up to maxLines from the shuffled array
  return shuffled.slice(0, maxLines);
};

interface SlideData  {
  imgSrc: string;
  alt: string;
}

const PlayGame: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const history = useHistory();
  const location = useLocation();
  const slideData = location.state ?? {slideData: { imgSrc: '/icon/default.png', alt: 'Default Alt' }}
  console.log(slideData.path);
  
  const caseCheck = (path: any) => {
    switch (path) {
      case 'icon-5':
        return '/txt/question1.txt';
      case 'data2':
        return '/txt/question2.txt';
      case 'data3':
        return '/txt/question3.txt';
      case 'data4':
        return '/txt/question4.txt';
      default:
        return '/txt/no_more.txt';
    }
  }
  const loadTextContent = async (path: any) => {
    const content = await fetchTextFileContent(caseCheck(path));
    const linesArray = content.split('\n').filter(Boolean);
    // Get up to 10 random lines
    const randomLines = getRandomLines(linesArray, 10);
    setLines(randomLines);
    setCurrentSlide(0); // Reset to the first slide when loading new content
  };

  useEffect(() => {
      loadTextContent(slideData.path); // Load content on component mount or when location changes
  }, [location]);

  const endgamepage = async () => {
    return history.push('/endgame');
  };

  const handleSlideChange = (swiper: any) => {
    if (swiper.activeIndex >= lines.length) {
      endgamepage();
        swiper.slideTo(0);
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
              <IonImg className='top' src='/icon/B3.svg' alt='Progress Icon' />
              <h1>{currentSlide + 1}/{lines.length}</h1> {/* Adjusted to show number of displayed lines */}
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
                    <h1>{line}</h1> {/* Display the randomly selected line */}
                    <IonImg src='/icon/LOGO.svg' className='TopiconInCard' alt='Slide Image' />
                    <IonImg src={'icon/'+slideData.path+'.svg'} className='seccond-TopiconInCard' alt='Icon' />
                    <IonImg src='/icon/LOGO.svg' className='BottomiconInCard' alt='Logo' />
                    <IonImg src={'icon/'+slideData.path+'.svg'} className='seccond-BottomiconInCard' alt='Icon' />
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
