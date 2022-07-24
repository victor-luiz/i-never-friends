import { IonPage, IonContent, IonTextarea, IonButton, IonFab, IonFabButton, IonIcon, IonModal } from '@ionic/react';
import { phrasesSub18 } from '../utils/phrases'
import './Card.css'
import { useState, useEffect } from 'react';
import { arrowBack, peopleOutline } from 'ionicons/icons';
import { FriendsPoints } from '../dto/FriendsPoints';
import Friends from './Friends';

const Card: React.FC = () => {
  const [position, setPosition] = useState(handleRandomPosition);
  const [positionUsed, setPositionUsed] = useState<number[]>([]);
  const [open, setOpen] = useState(false);
  const [friendsPoints, setFriendsPoints] = useState<FriendsPoints[]>([]);
  const [isCheck, setIsCheck] = useState<number[]>([]);

  let isValidChange = true;

  const closeModel = () => {
    setOpen(false)
  }

  useEffect(() => {
    const friendsLocalStorage  = localStorage.getItem('friends');
    const friends = friendsLocalStorage ? JSON.parse(friendsLocalStorage) : null;
    setFriendsPoints(friends.map((friend: string[]) => {
      return { name: friend, points: 0 }
    }))
  }, [])

  function handleNextPhrase() {
    const positionRandom = handleRandomPosition();
    if (positionUsed.includes(positionRandom)) {
      handleNextPhrase();
    }
    isValidChange = false;
    setIsCheck([]);
    setPositionUsed([...positionUsed, position]);
    setPosition(positionRandom);
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
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton color={'primary'} routerLink="/">
            <IonIcon icon={arrowBack} />
          </IonFabButton>
        </IonFab>

        { friendsPoints.length > 0
          ? (
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton color={'warning'} onClick={() => setOpen(true)}>
                <IonIcon icon={peopleOutline} />
              </IonFabButton>
            </IonFab>
          ) : <></>
        }
        <IonModal 
          isOpen={open}
          onDidDismiss={closeModel}
          breakpoints={[0, 0.2, 0.5, 0.7]}
          initialBreakpoint={0.5}
          backdropBreakpoint={0.2}
        >
          <Friends
            friends={friendsPoints}
            setFriends={setFriendsPoints}
            isCheck={isCheck} 
            setIsCheck={setIsCheck} 
            isValidChange={isValidChange}
          />
        </IonModal>
      </IonContent>
    </IonPage>
  )
}

export default Card;