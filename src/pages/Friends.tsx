import { IonButton, IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { FriendsPoints } from '../dto/FriendsPoints';
import './Friends.css'

const Friends: React.FC = () => {
  const [friends, setFriends] = useState<FriendsPoints[]>([
    { name: 'Victor', points: 0 },
    { name: 'João', points: 0 },
    { name: 'Maria', points: 0 },
    { name: 'Júlia', points: 0 },
  ]);
  const [isCheck, setIsCheck] = useState<number[]>([]);
  let isValidChange = true;

  function handleChangePoints(isChecked: boolean, position: number) {
    if (isValidChange) {
      const updateFriends = friends.map((friend, index) => {
        if (index === position) {
          return verifyChecked(isChecked, friend, position);
        } else {
          return friend;
        }
      });
      setFriends(updateFriends);
    }
  }

  function verifyChecked(isChecked: boolean, friends: FriendsPoints, index: number): FriendsPoints {
    if (isChecked) {
      setIsCheck([...isCheck, index]);
      return { ...friends, points: friends.points + 1 };
    } else {
      setIsCheck(isCheck.filter(item => item !== index));
      return { ...friends, points: friends.points - 1 };
    }
  }

  function handleResetCheckBoxes() {
    isValidChange = false;
    setIsCheck([]);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'warning'}>
          <IonTitle>Quem já?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'dark'}>
        {friends.map(({ name }, index) => {
          return (
            <IonItem color={'dark'} key={index}>
              <IonLabel>{name}</IonLabel>
              <IonCheckbox 
                slot="end"
                color={'warning'}
                checked={isCheck.includes(index)}
                onIonChange={event => handleChangePoints(event.detail.checked, index)}
              /> 
            </IonItem>
          )
        })}
        <IonButton onClick={handleResetCheckBoxes}>Reset</IonButton>
        <IonLabel>{isCheck}</IonLabel>
      </IonContent>
    </IonPage>
  )
}

export default Friends;