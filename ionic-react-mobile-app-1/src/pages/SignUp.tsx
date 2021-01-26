import React from 'react';

import {
	IonContent,
	IonButton,
	IonRow,
	IonText,
	IonGrid,
	IonCol,
	IonItem,
	IonLabel,
	IonInput,
} from '@ionic/react';
import Head2 from '../components/head/Head2';

const SignUp: React.FC = () => {
	return (
		<React.Fragment>
			<Head2 />
			<IonContent className="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol className="ion-text-center">
							<IonText color="dark">
								<h1>User Sign Up</h1>
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
							<IonButton color="primary">Sign Up</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="ion-text-center">
							<IonButton size="small" href="/login" color="secondary">
								Already Registered?
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</React.Fragment>
	);
};

export default SignUp;
