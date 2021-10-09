import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonHeader, IonToolbar, IonMenuButton, IonTitle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from "./components/Menu";
import Home from './pages/Home';
import Page1 from "./pages/Page1";

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

/* Theme variables */
import './theme/variables.css';

const App = () => (
    <IonApp>
        <IonReactRouter>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" autoHide="false"/>
                    <IonTitle>Pokecho</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonSplitPane contentId="main">
                <Menu />

                <IonRouterOutlet id="main">
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>

                    <Route exact path="/page1">
                        <Page1 />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    </IonApp>
);

export default App;
