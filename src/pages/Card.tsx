import { IonPage, IonContent, IonApp, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
const Card: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle>Eu nuca:</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Eu nunca dei pt
      </IonContent>
    </IonPage>
  )
}

export default Card;