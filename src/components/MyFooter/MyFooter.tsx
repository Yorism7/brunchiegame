import {  IonIcon, IonLabel, IonTabBar, IonTabButton  } from '@ionic/react';
import { appsOutline, appsSharp, atSharp, bag, bagOutline, banSharp, call, chatbubblesOutline, cutOutline, home, homeOutline, logoAlipay, logOutOutline, logOutSharp, moonSharp, openSharp, person, playCircle, settings } from 'ionicons/icons';
import '../MyFooter/MyFooter.css';
const MyFooter: React.FC = () => {
  return (
    <>
        <IonTabBar slot="bottom" className="custom-tab-bar">
          <IonTabButton href="/Gamesetup" tab="home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton href="https://www.brunchtimeshop.com/products" tab="contacts">
            <IonIcon icon={bag} />
            <IonLabel>Shop</IonLabel>
          </IonTabButton>
          <IonTabButton href="https://www.brunchtimeshop.com" tab="settings">
            <IonIcon icon={openSharp} />
            <IonLabel>Website</IonLabel>
          </IonTabButton>
          <IonTabButton href="/" tab="profile">
            <IonIcon icon={logOutSharp} />
            <IonLabel>Logout</IonLabel>
          </IonTabButton>
        </IonTabBar>
    </>
  );
};

export default MyFooter;
