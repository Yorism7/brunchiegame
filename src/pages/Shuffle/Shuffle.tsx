import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import './Shuffle.css';

interface Card {
  id: number;
  isInitial: boolean;
  isAnimating: boolean;
}

const Shuffle: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    createCards(20);
  }, []);

  const createCards = (count: number) => {
    const newCards = Array.from({ length: count }, (_, i) => ({
      id: i,
      isInitial: true,
      isAnimating: false
    }));
    setCards(newCards);
  };

  const animateWave = async () => {
    // Remove initial class from all cards
    setCards(cards.map(card => ({
      ...card,
      isInitial: false
    })));

    // Animate cards one by one
    for (let i = 0; i < cards.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setCards(prevCards => {
        const newCards = [...prevCards];
        newCards[i].isAnimating = true;
        return newCards;
      });
    }

    // Wait for animation to complete
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Reset cards to initial state
    setCards(cards.map(card => ({
      ...card,
      isInitial: true,
      isAnimating: false
    })));
  };

  const animateCards = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    try {
      await animateWave();
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <IonPage className='shuffle-page' style={{ background: 'linear-gradient(to bottom right, #2c3e50, #3498db)' }}>
      <IonContent>
        <div className="deck-container">
          {cards.map(card => (
            <div
              key={card.id}
              className={`card ${card.isInitial ? 'initial' : ''} ${card.isAnimating ? 'animating-wave' : ''}`}
              style={{ zIndex: card.id }}
            />
          ))}
        </div>
        <IonButton
          className="shuffle-button"
          disabled={isAnimating}
          onClick={animateCards}
        >
          สุ่มการ์ด
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Shuffle;
