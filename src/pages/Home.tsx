import { IonButton, IonContent, IonModal, IonPage } from '@ionic/react';
import { useRef } from 'react';
import AddFriends from './AddFriends';


import './Home.css'

const Home: React.FC = () => {

  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  function openCard() {
    localStorage.setItem('friends', JSON.stringify([]));
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
              onClick={openCard}
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
          <AddFriends closeModel={dismiss} />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
