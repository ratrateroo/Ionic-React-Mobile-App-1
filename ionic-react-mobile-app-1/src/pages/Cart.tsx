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
	IonIcon,
	IonImg,
} from '@ionic/react';
import Head2 from '../components/head/Head2';
import {
	caretDown,
	caretDownOutline,
	cart,
	cartOutline,
	trashBinOutline,
	trashOutline,
} from 'ionicons/icons';
import './Cart.css';
const Cart: React.FC = () => {
	return (
		<React.Fragment>
			<Head2 />
			<IonContent className="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol className="ion-no-padding" size="10">
							<IonText color="darkpurple" className="ion-text-left">
								<h5 className="wish-list-title">My Cart</h5>
							</IonText>
						</IonCol>
						<IonCol size="2" className="ion-no-padding">
							<IonText>
								<h5>
									<IonIcon
										color="darkpurple"
										icon={cart}
										slot="icon-only"
										size="large"
									/>
									<span className="cart-item-number">0</span>
								</h5>
							</IonText>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid>
					<div className="wishlist-item-card">
						<IonRow>
							<IonCol size="3" className="ion-no-padding">
								<IonImg
									className="withlist-image"
									src="assets/products/product1.jpg"
								/>
							</IonCol>
							<IonCol size="9">
								<IonGrid>
									<IonRow>
										<IonCol className="ion-no-padding">
											<IonText className="" color="darkpurple">
												<p>Evil Eye Necklace</p>
											</IonText>
											<IonText className="" color="orange">
												<p>Swarovski</p>
											</IonText>
										</IonCol>
										<IonCol className="ion-no-padding">
											<IonText className="ion-text-end" color="coal">
												<h3>$ 165.37</h3>
											</IonText>
										</IonCol>
									</IonRow>
									<IonRow>
										<IonCol className="ion-no-padding">
											<IonButton color="orange" expand="block">
												<IonIcon
													icon={caretDownOutline}
													about="quantity"
													slot="end"
												/>
												Quantity
											</IonButton>
										</IonCol>
										<IonCol className="ion-no-padding">
											<IonButton color="red" expand="block">
												<IonIcon
													icon={trashBinOutline}
													slot="icon-only"
													about="Add to wish list"
												/>
											</IonButton>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonCol>
						</IonRow>
					</div>
				</IonGrid>

				<IonGrid>
					<IonRow>
						<IonCol>
							<IonText className="ion-text-start" color="darkpurple">
								<h3>Total</h3>
							</IonText>
						</IonCol>
						<IonCol>
							<IonText className="ion-text-end" color="darkpurple">
								<h3>$ 165.37</h3>
							</IonText>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonButton color="darkpurple" expand="full">
								Checkout
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</React.Fragment>
	);
};

export default Cart;
