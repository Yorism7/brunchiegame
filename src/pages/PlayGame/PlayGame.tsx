import React, { useState, useEffect } from 'react';
import {
  IonButton,
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

const PlayGame: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [Icon_name, setIcon_name] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const history = useHistory();
  const location = useLocation<string[]>();
  const slideData = location.state;

  const checkRandomStatus = (status: any) => {
    if(status != 'random'){
      return status;
    }
    else{
       // for random ,Create an array of the possible paths
    const paths = [
      'icon-5',
      'icon-2',
      'icon-3',
      'icon-4',
      'icon-6',
      'icon-7'
    ];
    // Select a random index from the paths array
    const randomIndex = Math.floor(Math.random() * paths.length);
    return paths[randomIndex];
    }
  }
  
  const pathQuestion = (pathList: any) => {
    switch (pathList) {
      case 'icon-5':
        return '/txt/question1.txt';
      case 'icon-2':
        return '/txt/question2.txt';
      case 'icon-3':
        return '/txt/question3.txt';
      case 'icon-4':
        return '/txt/question4.txt';
      case 'icon-6':
        return '/txt/question6.txt';
      case 'icon-7':
        return '/txt/question7.txt';
      default:
        return '/txt/no_more.txt';
    }
  }
  const loadTextContent = async (pathList: any) => {
    const content = await fetchTextFileContent(pathQuestion(pathList));
    const linesArray = content.split('\n').filter(Boolean);
    // Get up to 10 random lines
    const randomLines = getRandomLines(linesArray, 20);
    setLines(randomLines);
    setCurrentSlide(0); // Reset to the first slide when loading new content
    setIcon_name(pathList);
  };

  useEffect(() => {
      loadTextContent(checkRandomStatus(slideData)); // Load content on component mount or when location changes
  }, [location]);

  const seemorepage = async () => {
    return history.replace('/seemore');
  };
  const endgamepage = async () => {
    return history.push('/endgame');
  };

  const handleSlideChange = (swiper: any) => {
    if (swiper.activeIndex >= lines.length) {
      swiper.slideTo(0);
      endgamepage();
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
                  <SwiperSlide key={index} className={'slide'+' '+Icon_name}>
                    <h1>{line}</h1> {/* Display the randomly selected line */}
                    <IonImg src='/icon/LOGO.svg' className='TopiconInCard' alt='Slide Image' />
                    <IonImg src={'icon/'+Icon_name+'.svg'} className='seccond-TopiconInCard' alt='Icon' />
                    <IonImg src='/icon/LOGO.svg' className='BottomiconInCard' alt='Logo' />
                    <IonImg src={'icon/'+Icon_name+'.svg'} className='seccond-BottomiconInCard' alt='Icon' />
                  </SwiperSlide>
                ))}
                <SwiperSlide className='slide'>
                  <h1>End of Game</h1>
                </SwiperSlide>
              </Swiper>
            </IonCol>
            <IonCol size="12">
              <IonButton expand='block' color="main2" shape='round' fill='solid' onClick={seemorepage}><b>All Category</b></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default PlayGame;
