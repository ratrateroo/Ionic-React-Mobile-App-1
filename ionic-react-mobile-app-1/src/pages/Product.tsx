import React from 'react';

import {
	IonToolbar,
	IonTitle,
	IonContent,
	IonText,
	IonGrid,
	IonRow,
	IonCol,
	IonButton,
	IonIcon,
} from '@ionic/react';
import Head2 from '../components/head/Head2';
import { star } from 'ionicons/icons';
import './Product.css';

const Product: React.FC = () => {
	return (
		<React.Fragment>
			<Head2 />
			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol size="12">
							<IonText
								color="darkpurple"
								className="ion-text-center product-main-name">
								<h3>Avenger Automatic 45 Seawolf Night Mission</h3>
							</IonText>
							<IonText
								color="redorange"
								className="ion-text-left product-brand-name">
								<h5>Breitling</h5>
							</IonText>
							<IonText color="orange" className="ion-text-left">
								<h5>DLC-Coated Titanium - Black</h5>
							</IonText>
						</IonCol>

						<IonCol size="7">
							<IonText
								color="coal"
								className="ion-text-left product-rating">
								<h5>
									Rating:{' '}
									<IonIcon
										color="yellow"
										icon={star}
										slot="icon-only"
										size="small"
									/>
									<IonIcon
										color="yellow"
										icon={star}
										slot="icon-only"
										size="small"
									/>
									<IonIcon
										color="yellow"
										icon={star}
										slot="icon-only"
										size="small"
									/>
									<IonIcon
										color="yellow"
										icon={star}
										slot="icon-only"
										size="small"
									/>
									<IonIcon
										color="yellow"
										icon={star}
										slot="icon-only"
										size="small"
									/>
								</h5>
							</IonText>
						</IonCol>
						<IonCol size="5">
							<IonButton
								className="productitemadd"
								color="lightpurple"
								expand="block">
								Add to wish list
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid></IonGrid>
			</IonContent>
		</React.Fragment>
	);
};

export default Product;
