import React, { useState } from 'react';
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
	IonPage,
	IonSearchbar,
	IonListHeader,
	IonSelect,
	IonSelectOption,
	IonItemDivider,
	IonSlides,
	IonSlide,
	IonAvatar,
	IonChip,
	IonImg,
	IonThumbnail,
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
	locateOutline,
	locationOutline,
	caretDown,
} from 'ionicons/icons';

type Item = {
	src: string;
	text: string;
};

const items: Item[] = [
	{ src: 'assets/idea.png', text: 'Great Deals' },
	{ src: 'assets/house.png', text: 'Home & Kitchen' },
	{ src: 'assets/book.png', text: 'Books' },
	{ src: 'assets/smartphone.png', text: 'Electronics' },
	{ src: 'assets/heart.png', text: 'Health' },
];

const slideOpts = {
	initialSlide: 0,
	speed: 500,
	autoplay: true,
};

const Home: React.FC = () => {
	const [gender, setGender] = useState();
	const [location, setLocation] = useState('brown');
	return (
		<IonPage>
			<IonSearchbar color="tertiary" />

			{/* <IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent> */}
			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem color="secondary">
								<IonText>
									<IonIcon icon={locationOutline}></IonIcon>
								</IonText>
								<IonText> Location</IonText>
								<IonText slot="end">
									<IonIcon icon={caretDown}></IonIcon>
								</IonText>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonGrid>
								<IonRow>
									<IonCol>
										<IonGrid>
											<IonRow>
												{items.map((image, i) => (
													<IonCol key={i}>
														<IonAvatar>
															<img src={image.src} />
														</IonAvatar>

														<IonText>{image.text}</IonText>
													</IonCol>
												))}
											</IonRow>
										</IonGrid>
									</IonCol>

									{/* <IonCol>
										<IonItem>
											<IonGrid>
												<IonRow>
													<IonCol>
														<IonAvatar color="danger">
															<img src="" />
														</IonAvatar>
													</IonCol>
													<IonCol>
														<IonLabel>Electronics</IonLabel>
													</IonCol>
												</IonRow>
											</IonGrid>
										</IonItem>
									</IonCol>
									<IonCol>
										<IonItem>
											<IonGrid>
												<IonRow>
													<IonCol>
														<IonAvatar>
															<img src="data:image/png;base64,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" />
														</IonAvatar>
													</IonCol>
													<IonCol>
														<IonLabel>Item Avatar</IonLabel>
													</IonCol>
												</IonRow>
											</IonGrid>
										</IonItem>
									</IonCol> */}
								</IonRow>
							</IonGrid>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonSlides pager={true} options={slideOpts}>
							<IonSlide>
								<h1>Slide 1</h1>
							</IonSlide>
							<IonSlide>
								<h1>Slide 2</h1>
							</IonSlide>
							<IonSlide>
								<h1>Slide 3</h1>
							</IonSlide>
						</IonSlides>
					</IonRow>
				</IonGrid>
			</IonContent>

			{/* <IonContent>
				<IonAvatar>
					<IonIcon size="large" icon={locationOutline}></IonIcon>
				</IonAvatar>

				<IonChip>
					<IonAvatar>
						<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
					</IonAvatar>
					<IonLabel>Chip Avatar</IonLabel>
				</IonChip>

				<IonItem>
					<IonAvatar slot="start">
						<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
					</IonAvatar>
					<IonLabel>Item Avatar</IonLabel>
				</IonItem>
			</IonContent> */}
		</IonPage>
	);
};

export default Home;
