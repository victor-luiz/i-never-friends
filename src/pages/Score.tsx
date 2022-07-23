import { 
  IonButton,
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel 
} from '@ionic/react';
import './Score.css';

const Score: React.FC = () => {

  const participantes = [
    {name: 'Diego', score: 5},
    {name: 'Victor', score: 4},
    {name: 'Fabricio', score: 6},
    {name: 'Gustavo', score: 7},
    {name: 'Fernando', score: 8},
  ]

  return (
    <>
      <IonPage>
        <IonContent color={'dark'}>
          <main className='content'>
            <span className="title-header">Eu nunca...</span>
            <IonList>
              {
                participantes.map(it => {
                  return (
                    <IonItem color={'black'} lines='none'>
                      <IonLabel>{it.name}</IonLabel>
                      <IonLabel>{it.score}</IonLabel>
                    </IonItem>
                  )
                })
              }
            </IonList>
          </main>
          <footer>
            <IonButton
              id="btnNext"
              shape='round' 
              size='large' 
              expand='block'
              color={'warning'}
              fill='solid'
              className='button-newgame'
              routerLink="/"
            >
              Novo jogo
            </IonButton>
          </footer>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Score;