import {  IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonLabel, IonPage,  IonRow,  IonTabBar, IonTabButton  } from '@ionic/react';
import MyFooter from "../../components/MyFooter/MyFooter";
const GameSetup: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'main'}>
        <IonGrid>

          <IonRow>
            <IonImg src='public\icon\KJKJ_LOGO.png'></IonImg>
          </IonRow>
          <IonRow>
            <IonCol size="12">
            <IonButton expand='block' color="light" shape='round' fill='outline' href='/GameSetup'><b>กดค้างเพื่อค้นใจ</b></IonButton>
            </IonCol>
          </IonRow>

        </IonGrid>
        </IonContent>
        <MyFooter></MyFooter>
    </IonPage>
  );
};

export default GameSetup;
