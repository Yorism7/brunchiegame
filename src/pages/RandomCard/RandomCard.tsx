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

// Function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];  // Swap elements
  }
  return shuffledArray;
};

// Fetch text file content (same as before)
const fetchTextFileContent = async (filePath: string) => {
  const response = await fetch(filePath);
  const text = await response.text();
  return text;
};

// Function to get random lines from an array
const getRandomLines = (lines: { text: string, iconFile: string }[], maxLines: number) => {
  const shuffled = shuffleArray(lines);  // Shuffle the array
  return shuffled.slice(0, maxLines);  // Select up to maxLines from the shuffled array
};

const RandomCard: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lines, setLines] = useState<{ text: string, iconFile: string }[]>([]);
  const history = useHistory();
  const location = useLocation<string[]>();
  const slideData = location.state;

  // Icon mapping for each question file
  const iconMapping: { [key: string]: string } = {
    'question1': 'icon-5',
    'question2': 'icon-2',
    'question3': 'icon-3',
    'question4': 'icon-4',
    'question6': 'icon-6',
    'question7': 'icon-7',
  };

  // The function to load all the content
  const loadMultipleTextContent = async () => {
    const allLines: { text: string, iconFile: string }[] = [];
    const questionFiles = ['question1', 'question2', 'question3', 'question4', 'question6', 'question7'];

    // Fetch lines for each question file
    const questionFileLines: { [key: string]: { text: string, iconFile: string }[] } = {};

    for (let questionFile of questionFiles) {
      const filePath = `/txt/${questionFile}.txt`;
      const content = await fetchTextFileContent(filePath);
      const linesArray = content.split('\n').filter(Boolean); // Remove empty lines

      const linesWithIcons = linesArray.map(line => ({
        text: line,
        iconFile: iconMapping[questionFile] || 'default-icon',
      }));

      questionFileLines[questionFile] = linesWithIcons; // Store lines for each file
    }

    // Step 2: Even distribution of lines per file
    const totalLines = 20;  // We want to select a total of 20 lines
    const linesPerFile = Math.floor(totalLines / questionFiles.length); // Divide the total by the number of files
    let finalLines: { text: string, iconFile: string }[] = [];

    // Select lines randomly from each question file
    for (let questionFile of questionFiles) {
      const fileLines = questionFileLines[questionFile];
      const linesToPick = Math.min(linesPerFile, fileLines.length);

      const selectedLines = getRandomLines(fileLines, linesToPick);

      finalLines = [...finalLines, ...selectedLines];
    }

    // Step 3: If we have fewer than 20 lines, fill the remaining lines randomly
    const remainingLines = totalLines - finalLines.length;
    if (remainingLines > 0) {
      const allRemainingLines = Object.values(questionFileLines).flat();
      const randomRemainingLines = getRandomLines(allRemainingLines, remainingLines);
      finalLines = [...finalLines, ...randomRemainingLines];
    }

    // Step 4: Shuffle the final lines to randomize the card order
    const shuffledFinalLines = shuffleArray(finalLines);
    setLines(shuffledFinalLines);  // Set the shuffled lines
    setCurrentSlide(0); // Reset the slide to the first one
  };

  useEffect(() => {
    loadMultipleTextContent();  // Load content when the component mounts
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
            <IonCol size="12" className="ProgressTab">
              <IonImg className="top" src="/icon/B3.svg" alt="Progress Icon" />
              <h1>{currentSlide + 1}/{lines.length}</h1> {/* Show current slide number */}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="cardContainer">
              <Swiper
                effect="cards"
                modules={[EffectCards]}
                className="mySwiper"
                observer={true}
                observeParents={true}
                onSlideChange={handleSlideChange}
              >
                {lines.map((line, index) => (
                  <SwiperSlide key={index} className={`slide ${line.iconFile}`}>
                    <h1>{line.text}</h1> {/* Display the text from the question */}
                    <IonImg src="/icon/LOGO.svg" className="TopiconInCard" alt="Slide Image" />
                    <IonImg src={`/icon/${line.iconFile}.svg`} className="seccond-TopiconInCard" alt="Icon" />
                    <IonImg src="/icon/LOGO.svg" className="BottomiconInCard" alt="Logo" />
                    <IonImg src={`/icon/${line.iconFile}.svg`} className="seccond-BottomiconInCard" alt="Icon" />
                  </SwiperSlide>
                ))}
                <SwiperSlide className="slide">
                  <h1>End of Game</h1>
                </SwiperSlide>
              </Swiper>
            </IonCol>
            <IonCol size="12">
              <IonButton expand="block" color="main2" shape="round" fill="solid" onClick={seemorepage}>
                <b>All Category</b>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default RandomCard;
