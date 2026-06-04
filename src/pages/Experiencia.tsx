import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButtons,
  IonMenuButton
} from '@ionic/react';

const Experiencia: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <h2>Mi experiencia realizando la tarea 3</h2>

            <p>
              En esta sección verás mi video explicando la experiencia
              desarrollando esta aplicación con Ionic.
            </p>

            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/_qo6zLTQ2JA"
              title="Video de experiencia personal"
              allowFullScreen
            ></iframe>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Experiencia;