import {  IonIcon, IonLabel, IonTabBar, IonTabButton  } from '@ionic/react';
import { appsOutline, appsSharp, atSharp, bag, bagOutline, banSharp, call, chatbubblesOutline, cutOutline, home, homeOutline, logoAlipay, logOutOutline, logOutSharp, moonSharp, openSharp, person, playCircle, settings } from 'ionicons/icons';
import '../MyFooter/MyFooter.css';
import { useHistory } from 'react-router-dom'; // Import useHistory for redirection

const MyFooter: React.FC = () => {
  const history = useHistory(); // Hook to access the history object

  const handleLogout = () => {
    localStorage.removeItem('userSession'); // Remove session from localStorage
    history.push('/login'); // Redirect to login page
  };
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
          <IonTabButton onClick={handleLogout} tab="logout"> {/* Use onClick for logout */}
          <IonIcon icon={logOutSharp} />
          <IonLabel>Logout</IonLabel>
        </IonTabButton>
        </IonTabBar>
    </>
  );
};

export default MyFooter;
