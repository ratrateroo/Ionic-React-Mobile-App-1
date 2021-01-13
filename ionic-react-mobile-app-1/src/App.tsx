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

const App: React.FC = () => (
	<IonApp>
		<IonMenu side="start" content-id="main-part">
			<IonHeader>
				<IonToolbar>
					<IonTitle size="large">Welcome Username</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItem routerLink="/home">
						<IonIcon icon={home} slot="start"></IonIcon>
						<IonLabel>Home</IonLabel>
					</IonItem>
					<IonItem routerLink="/orders">
						<IonIcon icon={cart} slot="start"></IonIcon>
						<IonLabel>Orders</IonLabel>
					</IonItem>
					<IonItem routerLink="/account">
						<IonIcon icon={accessibility} slot="start"></IonIcon>
						<IonLabel>Account</IonLabel>
					</IonItem>

					<IonItem routerLink="/login">
						<IonIcon icon={locate} slot="start"></IonIcon>
						<IonLabel>Categories</IonLabel>
					</IonItem>

					<IonItem routerLink="/categories">
						<IonIcon icon={enter} slot="start"></IonIcon>
						<IonLabel>Log In</IonLabel>
					</IonItem>

					<IonItem routerLink="/signup">
						<IonIcon icon={create} slot="start"></IonIcon>
						<IonLabel>Sign Up</IonLabel>
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
					<IonRouterOutlet>
						<Route exact path="/home" component={Home} />
						<Route exact path="/orders" component={Orders} />
						<Route exact path="/account" component={Account} />
						<Route exact path="/login" component={LogIn} />
						<Route exact path="/signup" component={SignUp} />
					</IonRouterOutlet>
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
