import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonRouterOutlet, IonSplitPane, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonSearchbar, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from "./components/menu";
import Pokemon from './pages/pokemon';

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
import "./App.css";

export default function App() {
    return (
        <IonApp>
            <IonReactRouter>
                <IonHeader>
                    <IonToolbar>
                        <IonMenuButton slot="start"/>
                        <IonTitle slot="start">Pokecho</IonTitle>
                        <IonSelect slot="start" value="pokemon" interface="popover">
                            <IonSelectOption value="pokemon">Pokemon</IonSelectOption>
                            <IonSelectOption value="monster-hunter">Monster Hunter</IonSelectOption>
                            <IonSelectOption value="mario-kart">Mario Kart</IonSelectOption>
                        </IonSelect>
                        <IonSelect slot="start" value="pokemon" interface="popover">
                            <IonSelectOption value="pokemon">Pokemon</IonSelectOption>
                            <IonSelectOption value="moves">Moves</IonSelectOption>
                        </IonSelect>
                        <IonSearchbar slot="start" />
                        <IonButton slot="start">Build Finder</IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonSplitPane contentId="main">
                        <Menu />
                        <IonRouterOutlet id="main">
                            <Route exact path="/pokemon">
                                <Pokemon />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/pokemon" />
                            </Route>
                        </IonRouterOutlet>
                    </IonSplitPane>
                </IonContent>
            </IonReactRouter>
        </IonApp>
    );
}
