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
  IonMenuButton,
  IonList,
  IonLabel
} from '@ionic/react';

import { useState } from 'react';

const TablaMultiplicar: React.FC = () => {

  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState<string[]>([]);

  const generarTabla = () => {

    const n = Number(numero);

    let resultado: string[] = [];

    for (let i = 1; i <= 13; i++) {

      resultado.push(
        `${n} × ${i} = ${n * i}`
      );

    }

    setTabla(resultado);
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>
            Tabla de Multiplicar
          </IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>

          <IonCardContent>

            <IonItem>

              <IonInput
                label="Ingrese un número"
                labelPlacement="floating"
                type="number"
                value={numero}
                onIonInput={(e) =>
                  setNumero(e.detail.value!)
                }
              />

            </IonItem>

            <br />

            <IonButton
              expand="block"
              onClick={generarTabla}
            >
              Generar Tabla
            </IonButton>

            <IonList>

              {tabla.map((linea, index) => (

                <IonItem key={index}>
                  <IonLabel>
                    {linea}
                  </IonLabel>
                </IonItem>

              ))}

            </IonList>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default TablaMultiplicar;