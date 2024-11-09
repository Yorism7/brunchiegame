import React, { useEffect, useRef, useState, useCallback } from 'react';
import { IonContent, IonPage ,useIonViewWillEnter} from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom'; // Change this import
import './RiffleShuffle.css';

// Define types for card size and the state passed from the previous page
interface CardSize {
  width: number;
  height: number;
}

interface LocationState {
  path: string;
  src: string;
}

const RiffleShuffle: React.FC = () => {
  const [cardSize, setCardSize] = useState<CardSize>({ width: 0, height: 0 });
  const [isShuffling, setIsShuffling] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const location = useLocation<LocationState>(); // useLocation from react-router-dom
  const stateData = location.state;
  const path = stateData?.path;   
  const src = stateData?.src;
  const history = useHistory(); // Use useHistory from react-router-dom
  const animationRef = useRef<number>();
  
  // Sample card images
  const cardImages = [src, src, src, src, src, src];

  const calculateOptimalCardSize = useCallback((imgWidth: number, imgHeight: number): CardSize => {
    const maxWidth = window.innerWidth * 0.5;
    const maxHeight = window.innerHeight * 0.6;
    
    const aspectRatio = imgWidth / imgHeight;
    let finalWidth = imgWidth;
    let finalHeight = imgHeight;

    if (finalWidth > maxWidth) {
      finalWidth = maxWidth;
      finalHeight = finalWidth / aspectRatio;
    }

    if (finalHeight > maxHeight) {
      finalHeight = maxHeight;
      finalWidth = finalHeight * aspectRatio;
    }

    return { width: finalWidth, height: finalHeight };
  }, []);

  const preloadImages = useCallback(async () => {
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    try {
      const firstImage = await loadImage(cardImages[0]);
      const size = calculateOptimalCardSize(firstImage.width, firstImage.height);
      setCardSize(size);

      await Promise.all(cardImages.slice(1).map(src => loadImage(src)));
    } catch (error) {
      console.error('Error loading images:', error);
      window.location.reload();
    }
  }, [calculateOptimalCardSize]);

  const peekShuffle = useCallback(() => {
    if (isShuffling || !cardsRef.current.length) return;
    setIsShuffling(true);

    const numCards = cardImages.length;
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);

    let startTime: number;
    const duration = 2000; // Total animation duration in ms
    let isAnimationComplete = false;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      if (progress < 1 && !isAnimationComplete) {
        // Animation steps (same as before)
        if (progress < 0.3) {
          // Initial spread
          cards.forEach((card, i) => {
            const angle = (i - (numCards - 1) / 2) * 30;
            const radius = cardSize.width * 1.2;
            const x = Math.sin(angle * Math.PI / 180) * radius * (progress / 0.3);
            const y = -Math.cos(angle * Math.PI / 180) * radius * (progress / 0.3);

            card.style.transform = `
              translate(${x}px, ${y}px)
              rotate(${angle * (progress / 0.3)}deg)
            `;
          });
        } else if (progress < 0.7) {
          // Shuffle movement
          const shuffleProgress = (progress - 0.3) / 0.4;
          cards.forEach((card, i) => {
            const angle = (i - (numCards - 1) / 2) * 30;
            const radius = cardSize.width * 1.2;
            const randomOffset = (Math.random() - 0.5) * (cardSize.width * 0.3);
            const x = Math.sin(angle * Math.PI / 180) * radius + randomOffset * shuffleProgress;
            const y = -Math.cos(angle * Math.PI / 180) * radius + randomOffset * shuffleProgress;

            card.style.transform = `
              translate(${x}px, ${y}px)
              rotate(${angle + randomOffset * shuffleProgress}deg)
            `;
          });
        } else if (progress < 0.85) {
          // Quick gather
          const gatherProgress = (progress - 0.7) / 0.15;
          cards.forEach(card => {
            const randomX = (Math.random() - 0.5) * (cardSize.width * 0.5) * (1 - gatherProgress);
            const randomY = (Math.random() - 0.5) * (cardSize.width * 0.5) * (1 - gatherProgress);
            card.style.transform = `
              translate(${randomX}px, ${randomY}px)
              rotate(${(Math.random() * 20 - 10) * (1 - gatherProgress)}deg)
            `;
          });
        } else {
          // Final stack
          const stackProgress = (progress - 0.85) / 0.15;
          const newOrder = [...cards].sort(() => Math.random() - 0.5);
          newOrder.forEach((card, i) => {
            card.style.transform = `translateY(${i * 2 * stackProgress}px)`;
            card.style.zIndex = String(numCards - i);
          });

          if (stackProgress >= 1) {
            isAnimationComplete = true;
          }
        }

        animationRef.current = requestAnimationFrame(animate);
      } else {
          setIsShuffling(true);
          // Use history.push instead of router.push
          Promise.resolve().then(() => { // Use Promise.resolve() to delay the navigation
            history.replace({
              pathname: '/playgame',
              state: path
            });
          });
          
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup function for when the component unmounts or when navigation happens
    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cardSize.width, history, isShuffling, cardImages.length]);

  useEffect(() => {
    preloadImages();

    const handleResize = () => {
      const img = new Image();
      img.onload = function() {
        const size = calculateOptimalCardSize(img.width, img.height);
        setCardSize({
          width: size.width * 1.5,  // Upsize by 50%
          height: size.height * 1.5, // Upsize by 50%
        });
      };
      img.src = cardImages[0];
    };
    

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [preloadImages, calculateOptimalCardSize]);

  useEffect(() => {
    if (cardSize.width > 0 && cardSize.height > 0) {
      setTimeout(peekShuffle, 500);
    }
  }, [cardSize, peekShuffle]);

  return (
    <IonPage>
      <IonContent>
        <div className="cards-container">
          {cardImages.map((src, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="card"
              style={{
                width: `${cardSize.width}px`,
                height: `${cardSize.height}px`,
                zIndex: cardImages.length - i,
                transform: `translateY(${i * 2}px)`
              }}
            >
              <img src={src} alt={`Card ${i + 1}`} />
            </div>
          ))}
        </div>
      </IonContent>
      </IonPage>
  );
};

export default RiffleShuffle;