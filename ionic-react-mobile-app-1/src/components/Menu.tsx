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

const Menu: React.FC = () => {
	return (
		<IonMenu side="start" content-id="main-part">
			<IonHeader>
				<IonToolbar>
					<IonTitle>Welcome Username</IonTitle>
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

					<IonItem routerLink="/categories">
						<IonIcon icon={locate} slot="start"></IonIcon>
						<IonLabel>Categories</IonLabel>
					</IonItem>

					<IonItem routerLink="/login">
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
	);
};

export default Menu;
