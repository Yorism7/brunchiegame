import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login/Login';

import Home from "./pages/Home/Home";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import GameSetup from './pages/GameSetup/GameSetup';
import SeeMore from './pages/SeeMore/SeeMore';
import PlayGame from './pages/PlayGame/PlayGame';
import EndGame from './pages/EndGame/EndGame';
import Register from './pages/Register/Register';
import RandomCard from './pages/RandomCard/RandomCard';
import Callback from './pages/Callback/Callback';

setupIonicReact();

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Check session state

  useEffect(() => {
    // Check for LINE token in local storage
    const token = localStorage.getItem('line_access_token');
    // Check for Basic token in local storage
    const userSession = localStorage.getItem('userSession');
    if (token || userSession) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []);

  // Show a loading state while checking authentication
  if (isAuthenticated === null) {
    return null; // or a loading spinner/component
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            {isAuthenticated ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/callback">
            <Callback />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/gamesetup">
            {isAuthenticated ? <GameSetup /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/seemore">
            {isAuthenticated ? <SeeMore /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/playgame">
            {isAuthenticated ? <PlayGame /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/randomcard">
            {isAuthenticated ? <RandomCard /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/endgame">
            {isAuthenticated ? <EndGame /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};


export default App;
