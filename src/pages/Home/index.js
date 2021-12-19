import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonButtons } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './style.css';

const Home = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};

export default Home;
