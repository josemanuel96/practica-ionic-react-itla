import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  homeOutline,
  homeSharp,
  calculatorOutline,
  calculatorSharp,
  languageOutline,
  languageSharp,
  gridOutline,
  gridSharp,
  videocamOutline,
  videocamSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Sumadora',
    url: '/sumadora',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp
  },
  {
    title: 'Traductor',
    url: '/traductor',
    iosIcon: languageOutline,
    mdIcon: languageSharp
  },
  {
    title: 'Tabla de Multiplicar',
    url: '/tabla',
    iosIcon: gridOutline,
    mdIcon: gridSharp
  },
  {
    title: 'Experiencia Personal',
    url: '/experiencia',
    iosIcon: videocamOutline,
    mdIcon: videocamSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Mi Aplicación</IonListHeader>
          <IonNote>Práctica Ionic React</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
