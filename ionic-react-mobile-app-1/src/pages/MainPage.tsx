import React, { useState, useEffect } from 'react';

import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
	IonRow,
	IonGrid,
	IonCol,
	IonItem,
	IonLabel,
	IonInput,
	IonList,
	IonPage,
} from '@ionic/react';

const MainPage: React.FC = () => {
	const [name, setName] = useState('');
	const [value, setValue] = useState('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [formErrors, setFormErrors] = useState({});

	const onChangeHandler = (event: any) => {
		setValue(event.target.value);
		console.log(event.target.value);
	};

	const emailHandler = (e: any) => {
		setEmail(e.target.value);
	};

	const passwordHanler = (e: any) => {
		setPassword(e.target.value);
	};

	const submitHandler = async (e: any) => {
		e.preventDefault();
		try {
			// await login({
			// 	email,
			// 	password,
			// });

			console.log({ email, password });
		} catch (e) {
			setFormErrors(e);
		}
	};

	// useEffect(() => {
	// 	onChangeHandler(name);
	// }, [name]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Main</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader>
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonGrid>
						<IonRow>
							<IonCol>
								<h1>My name is {value}</h1>
								<IonInput
									type="text"
									value={value}
									onIonChange={onChangeHandler}
								/>
							</IonCol>
						</IonRow>
						<IonRow>
							<form onSubmit={submitHandler}>
								{/* <div>{formErrors ? formErrors.message : null}</div> */}
								<IonList>
									<IonItem>
										<IonLabel>Email</IonLabel>
										<IonInput
											name="email"
											type="email"
											value={email}
											onChange={emailHandler}
										/>
									</IonItem>
									<IonItem>
										<IonLabel>Password</IonLabel>
										<IonInput
											name="password"
											type="password"
											value={email}
											onChange={passwordHanler}
										/>
									</IonItem>
								</IonList>

								<IonButton expand="full" type="submit">
									Log in
								</IonButton>
							</form>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonContent>
		</IonPage>
	);
};

export default MainPage;
