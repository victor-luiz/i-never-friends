import { IonPage, IonContent, IonTitle, IonTextarea, IonButton } from '@ionic/react';
import './Card.css'
import Friends from './Friends';

const Card: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'dark'} fullscreen>
        <div className="content-card">
          <span className="title-header">Eu nunca...</span>
          <div className="message">
            <IonTextarea
              className="phrase"
              color={'light'}
              readonly={true}
              autoGrow={true}
              value={'precisei ir ao médico devido a um objeto estranho preso em meu nariz ou ouvido.'} 
            />
          </div>
          <IonButton
            id="btnNext"
            shape='round' 
            size='large' 
            expand='block'
            color={'warning'}
            fill='outline'
          >
            Proximo
          </IonButton>
        </div>
        <Friends />
      </IonContent>
    </IonPage>
  )
}

export default Card;