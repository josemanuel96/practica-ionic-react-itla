import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonImg,
  IonButtons,
  IonMenuButton
} from '@ionic/react';

const Inicio: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Inicio</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>

          <IonCardContent>

            <IonImg
              src="/assets/foto.jpg"
              style={{
                width: '150px',
                height: '150px',
                margin: 'auto'
              }}
            />

            <h2>José Manuel Vicente Checo</h2>
            
            <p>
              Matrícula estudiantil: 2023-1073
            </p>
            <p>
              Estudiante de Desarrollo de Software
            </p>

            <p>
              20231073@itla.edu.do
            </p>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Inicio;