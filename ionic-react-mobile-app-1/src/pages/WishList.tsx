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
} from '@ionic/react';
import Head2 from '../components/head/Head2';
import { cart } from 'ionicons/icons';
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
									<sup>0</sup>
								</h5>
							</IonText>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</React.Fragment>
	);
};

export default WishList;
