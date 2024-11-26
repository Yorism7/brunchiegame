import {  IonIcon, IonLabel, IonTabBar, IonTabButton  } from '@ionic/react';
import { bag, home, logOutSharp, openSharp,people } from 'ionicons/icons';
import '../MyFooter/MyFooter.css';
import { useHistory } from 'react-router-dom'; // Import useHistory for redirection
import Swal from 'sweetalert';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../../utils/lineAuth';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser'

interface UserProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
  email?: string;
}
// Function to handle opening external URLs
const openExternalUrl = async (url: string) => {
  if (Capacitor.isNativePlatform()) {
    // For mobile platforms (iOS/Android)
    try {
      await Browser.open({ url });
    } catch (error) {
      console.error('Error opening browser:', error);
      // Fallback to window.open
      window.open(url, '_blank');
    }
  } else {
    // For web platform
    window.open(url, '_blank');
  }
};

const MyFooter: React.FC = () => {
  const history = useHistory(); // Hook to access the history object
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const openWebsite = async () => {
    openExternalUrl('https://www.brunchtimeshop.com');
  };
  const openWebsitePd = async () => {
    openExternalUrl('https://www.brunchtimeshop.com/products');
  };
  
  useEffect(() => {
    
    const token = localStorage.getItem('line_access_token');
    if (token) {
      const fetchProfile = async () => {
        try {
          const userProfile = await getUserProfile();
          setProfile(userProfile);
        } catch (err) {
          console.error('Profile fetch error:', err);
        } 
      };

      fetchProfile();
      
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('userSession'); // Remove session from localStorage
    localStorage.removeItem('line_access_token'); // Remove line session from localStorage
    history.push('/login'); // Redirect to login page
  };

  const handleAccount = () => {
    swal({
      title: `ยินดีต้อนรับ ${profile?.displayName}`,
      text: `
        รายละเอียดบัญชี:
        ${profile?.email ? `\nอีเมล: ${profile.email}` : ''}
        ${profile?.statusMessage ? `\nสถานะ: ${profile.statusMessage}` : ''}
        \nUser ID: ${profile?.userId}
      `,
      icon: 'success',
      content: {
        element: "div",
        attributes: {
          innerHTML: `
            <div class="flex justify-center">
              <img
                src="${profile?.pictureUrl}"
                alt="${profile?.displayName}"
                class="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          `
        }
      }
    });
  }

  return (
    <>
        <IonTabBar slot="bottom" className="custom-tab-bar">
          <IonTabButton onClick={() => history.replace('/home')} tab="home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton onClick={openWebsitePd} tab="contacts">
            <IonIcon icon={bag} />
            <IonLabel>Shop</IonLabel>
          </IonTabButton>
          <IonTabButton onClick={openWebsite} tab="settings">
            <IonIcon icon={openSharp} />
            <IonLabel>Website</IonLabel>
          </IonTabButton>
          {profile && (
            <IonTabButton onClick={handleAccount} tab="account">
              <IonIcon icon={people} />
              <IonLabel>Account</IonLabel>
          </IonTabButton>
          )}
          <IonTabButton onClick={handleLogout} tab="logout"> {/* Use onClick for logout */}
          <IonIcon icon={logOutSharp} />
          <IonLabel>Logout</IonLabel>
        </IonTabButton>
        </IonTabBar>
    </>
  );
};

export default MyFooter;
