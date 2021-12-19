import { IonContent, IonPage, IonList, IonItem, IonThumbnail, IonLabel, IonImg, IonGrid, IonRow, IonCol, IonTextarea } from '@ionic/react';
import './style.css';
import findPokemons from '../../lib/pokemon/findPokemons';
import games from "../../data/pokemon";

console.log(games.swordShield);

export default function Pokemon() {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                    {Object.values(findPokemons(games.swordShield.pokemons, "")).map(pokemon => {
                        return pokemon.map(form => {
                            return (
                                <IonCol>
                                    <IonItem href={"pokemon/" + form.id}>
                                        <IonThumbnail>
                                            <IonImg src={"assets/images/pokemon/" + form.id + ".png"} />
                                        </IonThumbnail>
                                        <IonLabel text-wrap position="fixed">
                                            {form.name}
                                        </IonLabel>
                                    </IonItem>
                                </IonCol>
                            );
                        })
                    })}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};


//"pokecho.com/pokemon/sword-shield/pokemon/zubat"