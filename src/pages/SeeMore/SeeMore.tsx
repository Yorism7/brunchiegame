import React from 'react';
import {
  IonCard, IonCol, IonContent, IonGrid,
  IonImg, IonPage, IonRow} from '@ionic/react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import MyFooter from "../../components/MyFooter/MyFooter";
import './SeeMore.css';

const SeeMore: React.FC = () => {
  return (
    <IonPage>
      <IonContent color='main'>
        <IonGrid>
          <IonRow className='custom-card'>
            <IonImg src='/icon/2-1.png'></IonImg>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard className="custom-card">
                <Link 
                  to={{
                    pathname: "/playgame",
                    state: { path: "random" }  // Pass the alt value as state
                  }}
                >
                  <img src="/card/2-3.png" alt="random" />
                </Link>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-card">
                <Link 
                  to={{
                    pathname: "/playgame",
                    state: { path: "icon-5" }  // Pass the alt value as state
                  }}
                >
                  <img src="/card/2-4.png" alt="icon-5" />
                </Link>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-card">
                <Link 
                  to={{
                    pathname: "/playgame",
                    state: { path: "icon-2" }  // Pass the alt value as state
                  }}
                >
                  <img src="/card/2-5.png" alt="icon-2" />
                </Link>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-card">
                <Link 
                  to={{
                    pathname: "/playgame",
                    state: { path: "icon-3" }  // Pass the alt value as state
                  }}
                >
                  <img src="/card/2-6.png" alt="icon-3" />
                </Link>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-card">
                <Link 
                  to={{
                    pathname: "/playgame",
                    state: { path: "icon-4" }  // Pass the alt value as state
                  }}
                >
                  <img src="/card/2-7.png" alt="icon-4" />
                </Link>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default SeeMore;
