import React, { useState } from 'react';

import {
	IonButton,
	IonButtons,
	IonCard,
	IonCol,
	IonContent,
	IonGrid,
	IonIcon,
	IonImg,
	IonItem,
	IonItemDivider,
	IonItemGroup,
	IonItemOption,
	IonItemOptions,
	IonItemSliding,
	IonLabel,
	IonList,
	IonListHeader,
	IonNote,
	IonPopover,
	IonRow,
	IonSearchbar,
	IonSelect,
	IonSelectOption,
	IonText,
	IonTitle,
} from '@ionic/react';
import Head2 from '../components/head/Head2';

import './Products.css';
import {
	arrowDown,
	caretDownOutline,
	ellipsisHorizontal,
	ellipsisVertical,
	personCircle,
	search,
	star,
} from 'ionicons/icons';

const Products: React.FC = () => {
	const [gender, setGender] = useState<string>();
	const [hairColor, setHairColor] = useState<string>('brown');
	const [popoverState, setShowPopover] = useState({
		showPopover: false,
		event: undefined,
	});

	return (
		<React.Fragment>
			<Head2 />
			<IonContent fullscreen>
				{/* <IonSearchbar className="productssearch" color="light" /> */}
				<IonGrid>
					<IonRow>
						<IonCol size="6">
							<IonButton color="cyan" expand="block" strong={true}>
								<IonIcon icon={caretDownOutline} slot="end" />
								Sort
							</IonButton>
						</IonCol>
						<IonCol size="6">
							<IonButton color="cyan" expand="block" strong={true}>
								<IonIcon icon={caretDownOutline} slot="end" />
								Filter
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow>
						<IonCol size="6">
							<div className="productcard">
								<IonText className="productitembrand" color="orange">
									<p>Swarovski</p>
								</IonText>
								<IonImg src="assets/products/product1.jpg" />

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Evil Eye Necklace</p>
								</IonText>
								<IonGrid>
									<IonRow>
										<IonCol size="7">
											<IonButton
												className="productitemadd"
												color="lightpurple"
												expand="block"
												size="small">
												Add to wish list
											</IonButton>
										</IonCol>
										<IonCol size="5">
											<IonText
												className="productitemprice"
												color="coal">
												<p>$ 165.37</p>
											</IonText>
										</IonCol>
									</IonRow>
								</IonGrid>
							</div>
						</IonCol>
						<IonCol size="6">
							<div className="productcard">
								<IonText className="productitembrand" color="orange">
									<p>Swarovski</p>
								</IonText>
								<IonImg src="assets/products/product2.jpg" />

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Further Pendant Double</p>
								</IonText>

								<IonButton
									className="productitemadd"
									color="lightpurple"
									expand="block"
									size="small">
									Add to wish list
								</IonButton>

								<div className="ion-text-end ion-padding">
									<IonText color="coal">
										<h5>$ 322.42</h5>
									</IonText>
								</div>
							</div>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</React.Fragment>
	);
};

export default Products;
