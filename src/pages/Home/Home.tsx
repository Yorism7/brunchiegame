import {  IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonLabel, IonPage,  IonRow,  IonTabBar, IonTabButton  } from '@ionic/react';
import './style/Home.css';
import MyFooter from "../../components/MyFooter/MyFooter";
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'main'}>
        <IonGrid>

          <IonRow>
            <IonImg src='public\icon\KJKJ_LOGO.png'></IonImg>
          </IonRow>

          <IonRow>
          <IonCol size='12'>
            {/* cardBg */}
            <div className="relativeObject" >
              <IonImg src='public/icon/1-3.png' className='cardBg' 
              ></IonImg>
              {/* bonusIcon */}
              <IonImg src='public/icon/1-2.png' className='bonusIcon'></IonImg>
            </div>
          </IonCol>
          </IonRow>

          <IonRow style={{'padding': '4em 0'}}>
            <IonCol>
              {/* button */}
              <IonButton expand='block' color="light" shape='round' fill='outline' href='/home'><b>ดูรายการคำถาม</b></IonButton>
              {/* <IonImg src='public/icon/1-2.png'></IonImg> */}
            </IonCol>
            <IonCol>
              {/* button */}
              <IonButton expand='block' color="light" shape='round' fill='outline' href='/GameSetup'><b>วิธีการเล่น</b></IonButton>
              {/* <IonImg src='public/icon/1-2.png'></IonImg> */}
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonContent>
        <MyFooter></MyFooter>
    </IonPage>
  );
};

export default Home;
