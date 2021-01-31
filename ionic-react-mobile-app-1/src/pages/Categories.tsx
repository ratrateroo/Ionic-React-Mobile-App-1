import React from 'react';

import {
	IonToolbar,
	IonTitle,
	IonContent,
	IonSearchbar,
	IonGrid,
	IonRow,
	IonCol,
	IonText,
	IonIcon,
	IonButton,
} from '@ionic/react';
import Head2 from '../components/head/Head2';
import { caretDown, caretForward, cart } from 'ionicons/icons';
import './Categories.css';
const Categories: React.FC = () => {
	return (
		<React.Fragment>
			<Head2 />
			<IonContent className="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol className="ion-no-padding" size="10">
							<IonText color="darkpurple" className="ion-text-left">
								<h5 className="categories-title">Categories</h5>
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
						<IonCol size="12">
							<IonSearchbar className="productssearch" color="light" />
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonButton color="light" expand="full">
								Good Deals
								<IonIcon icon={caretForward} slot="end" />
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton color="light" expand="full">
								Home and Kitchen
								<IonIcon icon={caretForward} slot="end" />
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="category-selected">
							<IonButton color="light" expand="full">
								Books
								<IonIcon icon={caretDown} slot="end" />
							</IonButton>
						</IonCol>
						<IonCol size="12">
							<IonButton color="light" expand="full" size="small">
								All Books
							</IonButton>
						</IonCol>
						<IonCol size="12">
							<IonButton color="light" expand="full" size="small">
								Children's Books
							</IonButton>
						</IonCol>
						<IonCol size="12">
							<IonButton color="light" expand="full" size="small">
								History
							</IonButton>
						</IonCol>
						<IonCol size="12">
							<IonButton color="light" expand="full" size="small">
								fiction
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton color="light" expand="full">
								Gadgets
								<IonIcon icon={caretForward} slot="end" />
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton color="light" expand="full">
								Health
								<IonIcon icon={caretForward} slot="end" />
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</React.Fragment>
	);
};

export default Categories;
