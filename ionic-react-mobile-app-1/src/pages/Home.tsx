import React from 'react';

import './Home.css';
import {
	IonToolbar,
	IonContent,
	IonButton,
	IonRow,
	IonText,
	IonGrid,
	IonCol,
	IonItem,
	IonIcon,
	IonSlides,
	IonSlide,
	IonImg,
	IonCard,
} from '@ionic/react';

import { locationOutline, caretDown } from 'ionicons/icons';

import Head from '../components/head/Head';

type Item = {
	src: string;
	text: string;
};

const items: Item[] = [
	{ src: 'assets/idea.png', text: 'Good Deals' },
	{ src: 'assets/house.png', text: 'Home' },
	{ src: 'assets/book.png', text: 'Books' },
	{ src: 'assets/smartphone.png', text: 'Gadgets' },
	{ src: 'assets/heart.png', text: 'Health' },
];

const slideOpts = {
	initialSlide: 0,
	speed: 1000,
	autoplay: true,
};

const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Head />
			<IonContent className="homepage" id="bg">
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
													<IonCol key={i} size="auto">
														<div className="icon-holder">
															<IonImg
																className="categoryicons"
																src={image.src}
															/>
														</div>

														<div className="icon-name-holder">
															<p>{image.text}</p>
														</div>
													</IonCol>
												))}
											</IonRow>
										</IonGrid>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonSlides options={slideOpts}>
							<IonSlide>
								<IonText>
									<IonImg src="assets/img11.png" />
								</IonText>
							</IonSlide>
							<IonSlide>
								<IonText>
									<IonImg src="assets/img22.png" />
								</IonText>
							</IonSlide>
							<IonSlide>
								<IonText>
									<IonImg src="assets/img33.png" />
								</IonText>
							</IonSlide>
							<IonSlide>
								<IonText>
									<IonImg src="assets/img44.png" />
								</IonText>
							</IonSlide>
						</IonSlides>
					</IonRow>

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
										<IonButton color="danger" expand="full">
											Discover More Brands
										</IonButton>
									</IonToolbar>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonRow>
				</IonGrid>
				<IonGrid>
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
				</IonGrid>
				<IonGrid>
					<IonRow>
						<IonCol size="4">
							<p className="ion-text-center"> </p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center"> </p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center"> </p>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="4">
							<p className="ion-text-center"> </p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center"> </p>
						</IonCol>
						<IonCol size="4">
							<p className="ion-text-center"> </p>
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
				</IonGrid>
			</IonContent>
			{/* <IonContent>
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
			</IonContent> */}
		</React.Fragment>
	);
};

export default Home;
