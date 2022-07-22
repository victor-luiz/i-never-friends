import { IonPage, IonContent, IonTextarea, IonButton } from '@ionic/react';
import { phrasesSub18 } from '../utils/phrases'
import './Card.css'
import Friends from './Friends';
import { useState } from 'react';

const Card: React.FC = () => {
  const [position, setPosition] = useState(handleRandomPosition);
  const [positionUsed, setPositionUsed] = useState<number[]>([]); 

  function handleNextPhrase() {
    const positionRandom = handleRandomPosition();
    if (positionUsed.includes(positionRandom)) {
      handleNextPhrase();
    }
    setPositionUsed([...positionUsed, position])
    setPosition(positionRandom)
  }

  function handleRandomPosition(): number {
    return Math.floor(Math.random() * (phrasesSub18.length));
  }

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
              value={phrasesSub18[position]} 
            />
          </div>
          <IonButton
            id="btnNext"
            shape='round' 
            size='large' 
            expand='block'
            color={'warning'}
            fill='outline'
            onClick={handleNextPhrase}
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