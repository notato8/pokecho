import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from "@ionic/react";
import games from "../../data/pokemon";

export default function Menu() {
    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList>
                    {Object.values(games).map(game => {
                        return (
                            <IonItem button>{game.name}</IonItem>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    )
}