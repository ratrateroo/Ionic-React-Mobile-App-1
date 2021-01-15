import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButtons,
	IonButton,
	IonRippleEffect,
	IonRow,
	IonText,
	IonGrid,
	IonCol,
	IonItem,
	IonLabel,
	IonInput,
	IonMenu,
	IonList,
	IonMenuButton,
	IonRouterOutlet,
	IonIcon,
	IonImg,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import {
	home,
	cart,
	accessibility,
	locate,
	enter,
	create,
	personCircleOutline,
	personOutline,
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
/* Custom Styling */
import './styles/customstyles.css';

import './App.css';

import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

import Home from './pages/Home';
import Orders from './pages/Orders';
import Account from './pages/Account';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Menu from './components/Menu';

import MainPage from './pages/MainPage';

let options = {
	uri: '/assets/Asset 1.png',
	folderName: 'Protonet',
	quality: 90,
	width: 20,
	height: 20,
} as ImageResizerOptions;
const imageResizer = ImageResizer;

imageResizer
	.resize(options)
	.then((filePath: string) => console.log('assets/Asset 1.png', filePath))
	.catch((e) => console.log(e));

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<Menu />

			<div className="ion-page" id="main-part">
				<IonHeader>
					<IonToolbar color="primary">
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonGrid>
							<IonRow>
								<IonCol>
									<IonTitle size="small">
										Shopping While Black
									</IonTitle>
								</IonCol>
								<IonCol>
									<IonImg src="assets/Asset 1.png" id="mainlogo" />
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					<IonGrid>
						<IonRow>
							<IonRouterOutlet>
								<Route exact path="/" component={MainPage} />
								<Route exact path="/home" component={Home} />
								<Route exact path="/orders" component={Orders} />
								<Route exact path="/account" component={Account} />
								<Route exact path="/login" component={LogIn} />
								<Route exact path="/signup" component={SignUp} />
							</IonRouterOutlet>
						</IonRow>
					</IonGrid>
				</IonContent>
			</div>
		</IonReactRouter>
	</IonApp>
);

export default App;
