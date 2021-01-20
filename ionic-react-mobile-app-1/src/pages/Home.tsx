import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './Home.css';
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
	IonCard,
	IonFooter,
	IonTabs,
	IonTabBar,
	IonTabButton,
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
import Account from './Account';
import Orders from './Orders';
import Categories from './Categories';

type Item = {
	src: string;
	text: string;
};

const items: Item[] = [
	{ src: 'assets/idea.png', text: 'Good Deals' },
	{ src: 'assets/house.png', text: 'Home' },
	{ src: 'assets/book.png', text: 'Books' },
	{ src: 'assets/smartphone.png', text: 'Electronics' },
	{ src: 'assets/heart.png', text: 'Health' },
];

const slideOpts = {
	initialSlide: 0,
	speed: 1000,
	autoplay: true,
};

const Home: React.FC = () => {
	const [gender, setGender] = useState();
	const [location, setLocation] = useState('brown');
	return (
		<React.Fragment>
			<IonSearchbar className="searchbar" />

			{/* <IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent> */}
			<IonContent className="mainpage">
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
														<IonImg
															className="categoryicons"
															src={image.src}
														/>

														<IonText>
															<p>{image.text}</p>
														</IonText>
													</IonCol>
												))}
												{/* 
												<IonImg
													className="categoryicons"
													src="assets/house.png"
												/>

												<IonImg
													className="categoryicons"
													src="assets/book.png"
												/>

												<IonImg
													className="categoryicons"
													src="assets/heart.png"
												/>

												<IonImg
													className="categoryicons"
													src="assets/idea.png"
												/>

												<IonImg
													className="categoryicons"
													src="assets/smartphone.png"
												/>

												<IonText>Home</IonText> */}
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
						<IonSlides options={slideOpts}>
							<IonSlide>
								<IonText>
									<IonImg src="assets/img1.png" />
								</IonText>
							</IonSlide>
							<IonSlide>
								<IonText>
									<IonImg src="assets/img2.png" />
								</IonText>
							</IonSlide>
							<IonSlide>
								<IonText>
									<IonImg src="assets/img3.png" />
								</IonText>
							</IonSlide>
							<IonSlide>
								<IonText>
									<IonImg src="assets/img4.png" />
								</IonText>
							</IonSlide>
						</IonSlides>
					</IonRow>
					{/* <IonRow>
						<IonSlides options={slideOpts}>
							<IonSlide>
								<IonTitle>Product 1</IonTitle>
							</IonSlide>
							<IonSlide>
								<IonTitle>Product 2</IonTitle>
							</IonSlide>
							<IonSlide>
								<IonTitle>Product 3</IonTitle>
							</IonSlide>
							<IonSlide>
								<IonTitle>Product 4</IonTitle>
							</IonSlide>
						</IonSlides>
					</IonRow> */}
					<IonRow>
						<IonGrid>
							<IonCard>
								<IonRow>
									<IonCol size="8">
										<div>
											<h6>Work from home without worries.</h6>
											<IonImg src="assets/ELECTRONICDESKTOP_N2_620x420.jpg" />
										</div>
									</IonCol>
									<IonCol size="4">
										<div>
											<IonImg src="assets/HOMEDECORDESKTOP_N1_360x420.jpg" />
											<h5>Up to 30% Off</h5>
											<p>Style your home</p>
										</div>
									</IonCol>
								</IonRow>
							</IonCard>
							<IonCard>
								<IonRow>
									<IonCol size="4">
										<div>
											<IonImg src="assets/KITCHENEDESKTOP_N1_360x420.jpg" />
											<h5>Up to 50% Off</h5>
											<p>Kitchen Must Haves</p>
										</div>
									</IonCol>
									<IonCol size="8">
										<div>
											<h6>
												Get comfy with these bed and bath items.
											</h6>
											<IonImg src="assets/BEDBATHDESKTOP_N2_620x420.jpg" />
										</div>
									</IonCol>
								</IonRow>
							</IonCard>
						</IonGrid>
					</IonRow>
					<IonRow>
						<IonGrid>
							<IonRow>
								<IonCol size="12">
									<h5 className="ion-text-center">Just For You</h5>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonRow>
					<IonRow>
						<IonGrid>
							<IonRow>
								<IonCol size="4">
									<div>
										<IonImg src="assets/Men_Homepage_370x430.jpg" />
									</div>
								</IonCol>
								<IonCol size="4">
									<div>
										<IonImg src="assets/Women_Homepage_370x430.jpg" />
									</div>
								</IonCol>
								<IonCol size="4">
									<div>
										<IonImg src="assets/Kids_Homepage_370x430.jpg" />
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol size="4">
									<div>
										<IonImg src="assets/Beauty_Homepage_370x430.jpg" />
									</div>
								</IonCol>
								<IonCol size="4">
									<div>
										<IonImg src="assets/Lifestyle_Homepage_370x430.jpg" />
									</div>
								</IonCol>
								<IonCol size="4">
									<div>
										<IonImg src="assets/Luxury_Homepage_370x430.jpg" />
									</div>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonRow>

					<IonRow>
						<IonGrid>
							<IonRow>
								<IonCol size="12">
									<h5 className="ion-text-center">Trending</h5>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonRow>
					<IonRow>
						<IonGrid>
							<IonRow>
								<IonCol size="6">
									<div>
										<IonImg src="assets/SLEEKSILLHOUETTESDESKTOP_322X300.jpg" />
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol size="6" offset="3">
									<div>
										<IonImg src="assets/LIFEMOTIONDESKTOP_322X300.jpg" />
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol size="6" offset="6">
									<div>
										<IonImg src="assets/STEPFORWARDDESKTOP_322X300.jpg" />
									</div>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonRow>

					<IonRow>
						<IonGrid>
							<IonRow>
								<IonCol size="12">
									<h5 className="ion-text-center">
										Latest Affiliated Brands
									</h5>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonRow>
					<IonRow>
						<IonGrid>
							<IonRow>
								<IonCol>
									<div>
										<IonImg src="assets/brand1.jpg" />
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<div>
										<IonImg src="assets/brand2.jpg" />
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<div>
										<IonImg src="assets/brand3.jpg" />
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<div>
										<IonImg src="assets/brand4.jpg" />
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<div>
										<IonImg src="assets/brand5.jpg" />
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<div>
										<IonImg src="assets/brand6.jpg" />
									</div>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonRow>
				</IonGrid>

				<IonGrid>
					<IonRow>
						<IonGrid>
							<IonRow>
								<IonCol size="12">
									<IonToolbar className="ion-text-center">
										<IonButton color="danger">
											Discover More Brands
										</IonButton>
									</IonToolbar>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonRow>
					<IonRow>
						<IonCol size="4">
							<p className="ion-text-center">Contact</p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center">About</p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center">Login</p>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="4">
							<p className="ion-text-center">FAQ</p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center">Terms and Conditions</p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center">Privacy Policy</p>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="4">
							<p className="ion-text-center"></p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center"></p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center"></p>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="4">
							<p className="ion-text-center"></p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center"></p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center"></p>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
			<IonContent>
				<IonTabs>
					<IonRouterOutlet>
						<Route
							path="/categories"
							component={Categories}
							exact={true}
						/>
						<Route path="/orders" component={Orders} exact={true} />
						<Route path="/account" component={Account} exact={true} />
						<Route
							path="/"
							render={() => <Redirect to="/home" />}
							exact={true}
						/>
					</IonRouterOutlet>
					<IonTabBar slot="bottom">
						<IonTabButton tab="Categories">
							<IonIcon icon={locate} />
						</IonTabButton>
						<IonTabButton tab="Orders">
							<IonIcon icon={cart} />
						</IonTabButton>
						<IonTabButton tab="Account">
							<IonIcon icon={accessibility} />
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonContent>
		</React.Fragment>
	);
};

export default Home;
