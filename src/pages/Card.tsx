import { IonPage, IonContent, IonTitle, IonTextarea, IonButton } from '@ionic/react';
import './Card.css'

const Card: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'dark'} fullscreen>
        <IonTitle color={'warning'}>Eu nunca...</IonTitle>
        <div className="message">
          <IonTextarea
            color={'medium'}
            readonly={true}
            autoGrow={true}
            value={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'} 
          />
        </div>
        <IonButton
          id="btnNext"
          shape='round' 
          size='large' 
          expand='block'     
        >
          Proximo
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Card;