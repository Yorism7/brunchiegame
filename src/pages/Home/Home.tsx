import {  IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonLabel, IonPage,  IonRow,  IonTabBar, IonTabButton  } from '@ionic/react';
import './Home.css';
import MyFooter from "../../components/MyFooter/MyFooter";
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'main'}>
        <IonGrid>

          <IonRow>
            <IonImg src='/icon/KJKJ_LOGO.png'></IonImg>
          </IonRow>

          <IonRow>
          <IonCol size='12'>
            {/* cardBg */}
            <div className="relativeObject" >
              <Link to="/GameSetup">
                <IonImg src='/icon/1-3.png' className='cardBg' 
                ></IonImg>
              </Link>
              {/* bonusIcon */}
              <IonImg src='/icon/1-2.png' className='bonusIcon'></IonImg>
            </div>
          </IonCol>
          </IonRow>

          <IonRow style={{'padding': '4em 0'}}>
            <IonCol>
              <IonButton expand='block' color="light" shape='round' fill='outline' href='/home'><b>ดูรายการคำถาม</b></IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand='block' color="light" shape='round' fill='outline' href='/GameSetup'><b>วิธีการเล่น</b></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonContent>
        <MyFooter></MyFooter>
    </IonPage>
  );
};

export default Home;
