import {  IonIcon, IonLabel, IonTabBar, IonTabButton  } from '@ionic/react';
import { call, person, playCircle, settings } from 'ionicons/icons';
import '../MyFooter/MyFooter.css';
const MyFooter: React.FC = () => {
  return (
    <>
        <IonTabBar slot="bottom" className="custom-tab-bar">
          <IonTabButton href="/" tab="home">
            <IonIcon icon={playCircle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton href="/" tab="contacts">
            <IonIcon icon={call} />
            <IonLabel>Contacts</IonLabel>
          </IonTabButton>
          <IonTabButton href="/" tab="settings">
            <IonIcon icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
          <IonTabButton href="/" tab="profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
    </>
  );
};

export default MyFooter;
