import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonLoading, IonToast } from '@ionic/react';
import { validateState, exchangeCodeForToken } from '../../utils/lineAuth';

interface CallbackState {
  status: 'loading' | 'error' | 'success';
  message: string;
  details?: string;
}

const Callback: React.FC = () => {
  const history = useHistory();
  const [state, setState] = useState<CallbackState>({
    status: 'loading',
    message: 'Authenticating with LINE...',
  });
  const [showToast, setShowToast] = useState(false);
  
  useEffect(() => {
    const processCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const error = params.get('error');
        const errorDescription = params.get('error_description');
        const code = params.get('code');
        const stateParam = params.get('state');

        // Check for LINE auth errors
        if (error) {
          throw new Error(errorDescription || 'LINE authentication failed');
        }

        // Validate required parameters
        if (!code || !stateParam) {
          throw new Error('Missing required authentication parameters');
        }

        // Validate state to prevent CSRF attacks
        if (!validateState(stateParam)) {
          throw new Error('Invalid state parameter - possible CSRF attack');
        }

        // Exchange code for access token
        await exchangeCodeForToken(code);

        setState({
          status: 'success',
          message: 'Successfully authenticated with LINE!',
          details: 'Redirecting you to the dashboard...',
        });

        // Redirect to home page after successful authentication
        setTimeout(() => {
          history.replace('/home', { replace: true });
        }, 1500);
      } catch (error) {
        setState({
          status: 'error',
          message: 'Authentication failed',
          details:
            error instanceof Error
              ? error.message
              : 'An unexpected error occurred',
        });

        // Redirect back to login page after error
        setTimeout(() => {
          history.replace('/', { replace: true });
        }, 3000);
      }
    };

    processCallback();
  }, [history]);

  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Callback</IonTitle>
      </IonHeader>
      <IonContent className="ion-padding">
        {state.status === 'loading' && (
          <IonLoading isOpen={true} message={'Authenticating...'} />
        )}
        {state.status !== 'loading' && (
          <div className={`text-center ${state.status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
            <h2 className="font-semibold text-xl">{state.message}</h2>
            {state.details && <p className="text-sm">{state.details}</p>}
            {state.status === 'error' && (
              <IonButton
                expand="full"
                color="danger"
                onClick={() => history.replace('/')}
              >
                Return to Login
              </IonButton>
            )}
          </div>
        )}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={state.message}
          duration={3000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Callback;
