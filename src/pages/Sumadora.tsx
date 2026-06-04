import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/react';

import { useState } from 'react';

const Sumadora: React.FC = () => {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    setResultado(n1 + n2);
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Sumadora</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>

          <IonCardContent>

            <IonItem>
              <IonInput
                label="Primer número"
                labelPlacement="floating"
                type="number"
                value={numero1}
                onIonInput={(e) =>
                  setNumero1(e.detail.value!)
                }
              />
            </IonItem>

            <IonItem>
              <IonInput
                label="Segundo número"
                labelPlacement="floating"
                type="number"
                value={numero2}
                onIonInput={(e) =>
                  setNumero2(e.detail.value!)
                }
              />
            </IonItem>

            <br />

            <IonButton
              expand="block"
              onClick={sumar}
            >
              Sumar
            </IonButton>

            {resultado !== null && (
              <h2>
                Resultado: {resultado}
              </h2>
            )}

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Sumadora;