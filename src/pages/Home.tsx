import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import DeskMainPage from '../desktop/pages/DeskMainPage';
import { isMobile } from 'react-device-detect';
const Home: React.FC = () => {
  return (
    <>
     {isMobile ? (
        <IonPage>
          <IonTitle>
            이거슨 모바일
          </IonTitle>
        </IonPage>
      ) : (
        <DeskMainPage />
      )
     }
     
    </>
  );
};

export default Home;
