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
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import {
	calculatorOutline,
	refreshOutline,
	mail,
	paperPlane,
	heart,
	archive,
	trash,
	warning,
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

const App: React.FC = () => (
	<IonApp>
		<IonMenu side="start" content-id="main-part">
			<IonHeader>
				<IonToolbar>
					<IonTitle>Start Menu</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItem>
						<IonIcon icon={mail} slot="start"></IonIcon>
						<IonLabel>Inbox</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon={paperPlane} slot="start"></IonIcon>
						<IonLabel>Outbox</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon={heart} slot="start"></IonIcon>
						<IonLabel>Favorites</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon={archive} slot="start"></IonIcon>
						<IonLabel>Archived</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon={trash} slot="start"></IonIcon>
						<IonLabel>Trash</IonLabel>
					</IonItem>
					<IonItem>
						<IonIcon icon={warning} slot="start"></IonIcon>
						<IonLabel>Spam</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
		</IonMenu>

		<div className="ion-page" id="main-part">
			<IonHeader>
				<IonToolbar color="primary">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Mobile App 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol className="ion-text-center">
							<IonText color="dark">
								<h1>User Log In</h1>
							</IonText>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonLabel position="floating">Username:</IonLabel>
								<IonInput type="text"></IonInput>
							</IonItem>

							<IonItem>
								<IonLabel position="floating">Password:</IonLabel>
								<IonInput type="password"></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="ion-text-center">
							<IonButton color="success">Log In</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</div>
	</IonApp>
);

export default App;
