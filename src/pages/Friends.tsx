import { IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import { FriendsPoints } from '../dto/FriendsPoints';
import './Friends.css'

interface Props {
  friends: FriendsPoints[];
  setFriends: (friends: FriendsPoints[]) => void;
  isCheck: number[];
  setIsCheck: (isCheck: number[]) => void;
  isValidChange: boolean;
}

const Friends: React.FC<Props> = ({ friends, setFriends, setIsCheck, isCheck, isValidChange }) => {

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

  return (
    <IonContent color={'dark'}>
      <IonHeader mode='ios' translucent>
        <IonToolbar color={'warning'}>
          <IonTitle className='title'>Eu já...</IonTitle>
        </IonToolbar>
      </IonHeader>
      {friends.map(({ name, points }, index) => {
        return (
          <IonItem color={'dark'} key={index}>
            <IonLabel>{name}</IonLabel>
            <IonLabel color={'medium'}>{points}</IonLabel>
            <IonCheckbox 
              slot="end"
              color={'warning'}
              checked={isCheck.includes(index)}
              onIonChange={event => handleChangePoints(event.detail.checked, index)}
            /> 
          </IonItem>
        )
      })}
    </IonContent>
)
}

export default Friends;