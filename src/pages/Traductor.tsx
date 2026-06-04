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

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];

  const especiales = [
    'diez', 'once', 'doce', 'trece', 'catorce',
    'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'
  ];

  const decenas = [
    '', '', 'veinte', 'treinta', 'cuarenta',
    'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
  ];

  const centenas = [
    '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos',
    'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
  ];

  const convertirMenor100 = (n: number): string => {
    if (n < 10) return unidades[n];

    if (n >= 10 && n < 20) return especiales[n - 10];

    if (n === 20) return 'veinte';

    if (n > 20 && n < 30) return 'veinti' + unidades[n - 20];

    const d = Math.floor(n / 10);
    const u = n % 10;

    if (u === 0) return decenas[d];

    return decenas[d] + ' y ' + unidades[u];
  };

  const convertirNumero = (n: number): string => {
    if (n < 1 || n > 1000) {
      return 'Debe ingresar un número del 1 al 1000';
    }

    if (n === 1000) return 'mil';

    if (n === 100) return 'cien';

    if (n < 100) return convertirMenor100(n);

    const c = Math.floor(n / 100);
    const resto = n % 100;

    if (resto === 0) return centenas[c];

    return centenas[c] + ' ' + convertirMenor100(resto);
  };

  const traducir = () => {
    const n = Number(numero);
    const texto = convertirNumero(n);
    setResultado(texto);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Traductor</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>

            <IonItem>
              <IonInput
                label="Número del 1 al 1000"
                labelPlacement="floating"
                type="number"
                value={numero}
                onIonInput={(e) => setNumero(e.detail.value!)}
              />
            </IonItem>

            <br />

            <IonButton expand="block" onClick={traducir}>
              Traducir
            </IonButton>

            {resultado && (
              <h2>Resultado: {resultado}</h2>
            )}

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Traductor;