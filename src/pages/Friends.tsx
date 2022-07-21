import { IonActionSheet, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { beerOutline } from 'ionicons/icons';
import { useState } from 'react';
import './Friends.css'

const Friends: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color={'warning'} onClick={() => setShowActionSheet(true)} translucent={true}>
          <IonIcon icon={beerOutline} />
        </IonFabButton>
      </IonFab>
    </>
  )
}

export default Friends;