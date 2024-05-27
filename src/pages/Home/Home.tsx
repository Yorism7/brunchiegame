import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import './style/Home.css';
import { call, person, playCircle, settings } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'main'}>
        <IonGrid>
          <IonRow>
            <IonImg src='public\icon\KJKJ_LOGO.png'></IonImg>
          </IonRow>
          {/* className='relativeObject' */}
          <IonRow>
          <IonCol size='12'>
              {/* cardBg */}
              <div className="relativeObject">
                  <IonImg src='public/icon/1-3.png' className='cardBg' 
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   history.push('/');
                  // }}
                  ></IonImg>
                  {/* bonusIcon */}
                  <IonImg src='public/icon/1-2.png' className='bonusIcon'></IonImg>
              </div>
          </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* button */}
              {/* <IonImg src='public/icon/1-2.png'></IonImg> */}

            </IonCol>
            <IonCol>
              {/* button */}
              {/* <IonImg src='public/icon/1-2.png'></IonImg> */}
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonContent>
        <IonFooter className="tab-bar-footer">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton fill="clear" routerLink="/home">
                <IonIcon icon={playCircle} />
                <IonLabel>Listen now</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton fill="clear" routerLink="/tab1">
                <IonIcon icon={call} />
                <IonLabel>Tab 1</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton fill="clear" routerLink="/tab2">
                <IonIcon icon={person} />
                <IonLabel>Tab 2</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton fill="clear" routerLink="/tab3">
                <IonIcon icon={settings} />
                <IonLabel>Tab 3</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
