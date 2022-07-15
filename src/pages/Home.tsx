import { IonButton, IonContent , IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'dark'} fullscreen>
        <main className='content'>
          <span>Eu Nunca</span>
          <div>
            <IonButton 
              shape='round' 
              size='large' 
              expand='block' 
              color={'warning'}
            >
              Iniciar
            </IonButton>
            <IonButton 
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
          <span>Power by Victor</span>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
