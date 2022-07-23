import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Card from './pages/Card';
import Score from './pages/Score';

const Routes: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/card">
        <Card />
      </Route>
      <Route exact path="/score">
        <Score />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
)
export default Routes