import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonSpinner,
  IonText,
  IonAlert,
} from '@ionic/react';
import { checkmarkCircle, closeCircle, arrowBack } from 'ionicons/icons';
import { validateState, exchangeCodeForToken } from '../../utils/lineAuth';

const Callback: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleLineCallback();
  }, []);
  const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

  const handleLineCallback = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const state = params.get('state');
      setError(null)
      
      if (!code || !state) {
        throw new Error('Missing authentication parameters');
      }

      if (!validateState(state)) {
        throw new Error('Invalid state parameter');
      }

      await exchangeCodeForToken(code);
      setIsSuccess(true);
      
      // await delay(1500);
      // Redirect after success
      setTimeout(() => {
        window.location.replace('/');
      }, 1500);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" color="light">
        <div className="h-full flex items-center justify-center">
          <IonCard className="max-w-md w-full mx-4">
            <IonCardHeader className="text-center">
              <IonCardTitle className="text-xl">
                LINE Authentication
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent className="text-center">
              {isLoading ? (
                <div className="py-8">
                  <IonSpinner name="circular" />
                  <IonText>
                    <p className="mt-4">Verifying your authentication...</p>
                  </IonText>
                </div>
              ) : isSuccess ? (
                <div className="py-8">
                  <IonIcon
                    icon={checkmarkCircle}
                    color="success"
                    style={{ fontSize: '48px' }}
                  />
                  <IonText color="success">
                    <h2 className="mt-4 font-bold">Authentication Successful!</h2>
                    <p className="mt-2">Redirecting to dashboard...</p>
                  </IonText>
                </div>
              ) : (
                <div className="py-8">
                  <IonIcon
                    icon={closeCircle}
                    color="danger"
                    style={{ fontSize: '48px' }}
                  />
                  <IonText color="danger">
                    <h2 className="mt-4 font-bold">Authentication Failed</h2>
                    <p className="mt-2">{error}</p>
                  </IonText>
                  <IonButton
                    expand="block"
                    color="medium"
                    className="mt-4"
                    onClick={() => history.replace('/')}
                  >
                    <IonIcon slot="start" icon={arrowBack} />
                    Return to Login
                  </IonButton>
                </div>
              )}
            </IonCardContent>
          </IonCard>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Callback;
