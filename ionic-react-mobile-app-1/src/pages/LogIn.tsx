import {
	IonButton,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonInput,
	IonItem,
	IonLabel,
	IonPage,
	IonRouterOutlet,
	IonRow,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Route } from 'react-router';

const LogIn: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login Page</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding" fullscreen={true}>
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
		</IonPage>
	);
};

export default LogIn;
