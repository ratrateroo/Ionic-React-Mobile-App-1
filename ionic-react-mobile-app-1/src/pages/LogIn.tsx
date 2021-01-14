import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
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
	IonPage,
	IonAlert,
	isPlatform,
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

const LogIn: React.FC = () => {
	const fingerprintScanner = () => {
		const androidFingerprintAuth = AndroidFingerprintAuth;

		if (isPlatform('cordova')) {
			// You're on a device, call the native plugins. Example:
			//
			// var url: string = '';
			//
			// Camera.getPicture().then((fileUri) => url = fileUri);

			androidFingerprintAuth.isAvailable().then((result) => {
				alert('Result ' + JSON.stringify(result));
				if (result.isHardwareDetected) {
					alert('Fingerprint Hardware Detected');
				}

				if (result.isAvailable) {
					androidFingerprintAuth
						.encrypt({
							clientId: 'clientId',
							username: 'username',
							password: 'password',
						})
						.then((result) => {
							alert('Result ' + JSON.stringify(result));
							if (result.withFingerprint) {
								alert('Successfully encrypted credentials.');
								alert('Encrypted credentials: ' + result.token);
							} else if (result.withBackup) {
								alert('Authenticated with backup password');
							} else {
								alert('Not Authenticated');
							}
						});
				}
			});
		} else {
			// You're testing in browser, do nothing or mock the plugins' behaviour.
			//
			// var url: string = 'assets/mock-images/image.jpg';
			alert('No Cordova');
		}
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login Page</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol className="ion-text-center">
							<IonButton onClick={fingerprintScanner}>Click</IonButton>
						</IonCol>
					</IonRow>
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
							<IonButton onClick={fingerprintScanner}>Click</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default LogIn;
