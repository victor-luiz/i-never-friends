import { IonButton, IonContent, IonToolbar, IonButtons, IonIcon, IonItem, IonInput, IonHeader, IonTitle } from '@ionic/react';
import { add, arrowForward, close, trashBin } from 'ionicons/icons'
import { useState } from 'react';

import './AddFriends.css'

interface Props {
  closeModel: () => void;
}

const AddFriends: React.FC<Props> = ({ closeModel }) => {
  const [friends, setFriends] = useState<string[]>(['']);

  function dismiss() {
    localStorage.setItem('friends', JSON.stringify(friends));
    closeModel();
  }

  function addNewFriend() {
    setFriends([...friends, '']);
  }

  function removeFriend(position: number) {
    const updateFriends = friends.filter((value, index) => position !== index);
    
    setFriends(updateFriends);
  }

  function handleSaveFriend(position: number, value: string) {
    const updateFriends = friends.map((friend, index) => {
      if (index === position) {
        return value;
      } else {
        return friend;
      }
    });

    setFriends(updateFriends);
  }

  return (
    <IonContent color={'dark'}>
        <IonHeader>
        <IonToolbar color={'warning'}>
          <IonButtons slot='start'>
            <IonButton color="danger" onClick={dismiss}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
          <IonTitle size='small'>ADICIONE SEUS AMIGOS</IonTitle>
          <IonButtons slot= "end">
            <IonButton
              slot='end' 
              color={'primary'} 
              onClick={dismiss} 
              routerLink="/card"
            >
              <IonIcon size='small' icon={arrowForward} />
            </IonButton>
          </IonButtons>
        </IonToolbar> 
      </IonHeader>
      {friends.map((friend, index) => {
        return (
          <IonItem key={index} color={'dark'}>
            <IonInput
              name='friend'
              placeholder='Digite o nome'
              value={friend}
              onIonChange={event => handleSaveFriend(index, event.detail.value!)}
            />
            <IonButtons slot='end'>
              <IonButton onClick={addNewFriend}>
                <IonIcon
                  icon={add} 
                  color={'success'}
                />
              </IonButton>
              <IonButton
                disabled={friends.length < 2}
                onClick={() => removeFriend(index)}
                slot="icon-only"
              >
                <IonIcon
                  icon={trashBin} 
                  color={'danger'}
                />
              </IonButton>
            </IonButtons>
          </IonItem>
        );
      })}
    </IonContent>
  )
}

export default AddFriends;