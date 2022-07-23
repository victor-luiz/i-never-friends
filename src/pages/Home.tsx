import { IonButton, IonContent, IonModal, IonPage, IonToolbar, IonButtons, IonIcon, IonItem, IonInput } from '@ionic/react';
import { add, arrowForward, close, trashBin } from 'ionicons/icons'
import { useRef, useState } from 'react';


import './Home.css'

const Home: React.FC = () => {
  const [friends, setFriends] = useState<string[]>([''])

  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
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
        return value
      } else {
        return friend
      }
    });

    setFriends(updateFriends);
  }

  return (
    <IonPage>
      <IonContent color={'dark'} fullscreen>
        <main className='content'>
          <span>Eu Nunca</span>
          <div className='buttons'>
            <IonButton 
              shape='round' 
              size='large' 
              expand='block' 
              color={'warning'}
              routerLink="/card"
            >
              Iniciar
            </IonButton>
            <IonButton 
              id='open-modal'
              shape='round' 
              size='large' 
              expand='block' 
              color={'warning'} 
              fill='outline'
            >
              Iniciar com amigos
            </IonButton>
          </div>
        </main>
        <footer>
          <span>Powered by Diego & Victor</span>
        </footer>
        <IonModal id="example-modal" ref={modal} trigger="open-modal">
          <IonContent color={'dark'}>
            <IonToolbar color={'warning'}>
              <IonButtons>
                <IonButton color="dark" onClick={dismiss}>
                  <IonIcon icon={close} />
                </IonButton>
              </IonButtons>
              <IonButtons slot="end">
                <IonButton slot='end' color="dark" onClick={dismiss} routerLink="/card">
                  <IonIcon icon={arrowForward} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
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
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
