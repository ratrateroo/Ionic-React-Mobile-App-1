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
	caretDownOutline,
	cart,
	cartOutline,
	trashBinOutline,
	trashOutline,
} from 'ionicons/icons';
import './WishList.css';
const WishList: React.FC = () => {
	return (
		<React.Fragment>
			<Head2 />
			<IonContent className="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol className="ion-no-padding" size="10">
							<IonText color="darkpurple" className="ion-text-left">
								<h5 className="wish-list-title">My Wish List</h5>
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
							<IonCol size="3">
								<IonImg
									className="withlist-image"
									src="assets/products/product1.jpg"
								/>
							</IonCol>
							<IonCol size="6">
								<IonText className="" color="darkpurple">
									<p>Evil Eye Necklace</p>
								</IonText>
								<IonText className="" color="orange">
									<p>Swarovski</p>
								</IonText>
								<IonText className="" color="coal">
									<p>$ 165.37</p>
								</IonText>
							</IonCol>
							<IonCol size="3">
								<IonButton
									className="productitemadd"
									color="lightpurple">
									<IonIcon
										icon={cartOutline}
										slot="icon-only"
										about="Add to wish list"
									/>
								</IonButton>
								<IonButton className="productitemadd" color="red">
									<IonIcon
										icon={trashBinOutline}
										slot="icon-only"
										about="Add to wish list"
									/>
								</IonButton>
							</IonCol>
						</IonRow>
					</div>
				</IonGrid>

				<IonGrid>
					<IonRow>
						<IonCol>
							<IonButton color="orange" expand="full">
								Continue shopping
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonButton color="darkpurple" expand="full">
								Go to my cart
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</React.Fragment>
	);
};

export default WishList;
