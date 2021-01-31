import React from 'react';
import { useHistory } from 'react-router-dom';

import {
	IonButton,
	IonCol,
	IonContent,
	IonGrid,
	IonIcon,
	IonImg,
	IonRow,
	IonSearchbar,
	IonText,
	IonToolbar,
} from '@ionic/react';
import Head2 from '../components/head/Head2';

import './Products.css';
import { caretDownOutline, heart } from 'ionicons/icons';

const Products: React.FC = () => {
	const history = useHistory();

	const routeChange = () => {
		let path = `product`;
		history.push(path);
	};

	return (
		<React.Fragment>
			<Head2 />
			<IonContent>
				<IonSearchbar className="productssearch" color="light" />
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

								<div className="ion-text-end product-item-price">
									<IonText color="coal">
										<p>$ 322.42</p>
									</IonText>
								</div>
							</div>
						</IonCol>
						<IonCol size="6">
							<div className="productcard">
								<IonText className="productitembrand" color="orange">
									<p>Swarovski</p>
								</IonText>
								<IonImg src="assets/products/product3.jpg" />

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Ornament Red Swan</p>
								</IonText>
								<IonGrid>
									<IonRow>
										<IonCol size="4">
											<IonButton
												className="productitemadd"
												color="lightpurple">
												<IonIcon
													icon={heart}
													slot="icon-only"
													about="Add to wish list"
												/>
											</IonButton>
										</IonCol>
										<IonCol size="8">
											<div className="ion-text-end">
												<IonText color="coal">
													<h5>$ 182.01</h5>
												</IonText>
											</div>
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
								<IonImg src="assets/products/product4.jpg" />

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Iconic Swan</p>
								</IonText>
								<IonGrid>
									<IonRow>
										<IonCol size="4">
											<IonButton
												className="productitemadd"
												color="lightpurple">
												<IonIcon
													icon={heart}
													slot="icon-only"
													about="Add to wish list"
												/>
											</IonButton>
										</IonCol>
										<IonCol size="8">
											<div className="ion-text-end">
												<IonText color="coal">
													<h5>$ 186.17</h5>
												</IonText>
											</div>
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
								<IonImg src="assets/products/product5.jpg" />

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Futher Pendant Dual Loop</p>
								</IonText>
								<IonGrid>
									<IonRow>
										<IonCol size="4">
											<IonButton
												className="productitemadd"
												color="lightpurple">
												<IonIcon
													icon={heart}
													slot="icon-only"
													about="Add to wish list"
												/>
											</IonButton>
										</IonCol>
										<IonCol size="8">
											<div className="ion-text-end">
												<IonText color="coal">
													<h5>$ 218.41</h5>
												</IonText>
											</div>
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
								<IonImg src="assets/products/product6.jpg" />

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Attracted Souls Bracelet</p>
								</IonText>
								<IonGrid>
									<IonRow>
										<IonCol size="4">
											<IonButton
												className="productitemadd"
												color="lightpurple">
												<IonIcon
													icon={heart}
													slot="icon-only"
													about="Add to wish list"
												/>
											</IonButton>
										</IonCol>
										<IonCol size="8">
											<div className="ion-text-end">
												<IonText color="coal">
													<h5>$ 239.21</h5>
												</IonText>
											</div>
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
								<IonImg src="assets/products/product7.jpg" />

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Mandala Necklace</p>
								</IonText>
								<IonGrid>
									<IonRow>
										<IonCol size="4">
											<IonButton
												className="productitemadd"
												color="lightpurple">
												<IonIcon
													icon={heart}
													slot="icon-only"
													about="Add to wish list"
												/>
											</IonButton>
										</IonCol>
										<IonCol size="8">
											<div className="ion-text-end">
												<IonText color="coal">
													<h5>$ 260.02</h5>
												</IonText>
											</div>
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
								<IonImg src="assets/products/product8.jpg" />

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Sparkling Heart</p>
								</IonText>
								<IonGrid>
									<IonRow>
										<IonCol size="4">
											<IonButton
												className="productitemadd"
												color="lightpurple">
												<IonIcon
													icon={heart}
													slot="icon-only"
													about="Add to wish list"
												/>
											</IonButton>
										</IonCol>
										<IonCol size="8">
											<div className="ion-text-end">
												<IonText color="coal">
													<h5>$ 322.42</h5>
												</IonText>
											</div>
										</IonCol>
									</IonRow>
								</IonGrid>
							</div>
						</IonCol>

						<IonCol size="6">
							<div className="productcard">
								<IonText className="productitembrand" color="orange">
									<p>Breitling</p>
								</IonText>

								<IonImg
									onClick={routeChange}
									src="assets/products/product11.jpg"
								/>

								<IonText
									className="productitemtitle"
									color="darkpurple">
									<p>Avenger Automatic 45 Seawolf Night Mission</p>
								</IonText>
								<IonGrid>
									<IonRow>
										<IonCol size="4">
											<IonButton
												className="productitemadd"
												color="lightpurple">
												<IonIcon
													icon={heart}
													slot="icon-only"
													about="Add to wish list"
												/>
											</IonButton>
										</IonCol>
										<IonCol size="8">
											<div className="ion-text-end">
												<IonText color="coal">
													<h5>$ 4795.00</h5>
												</IonText>
											</div>
										</IonCol>
									</IonRow>
								</IonGrid>
							</div>
						</IonCol>
					</IonRow>
				</IonGrid>
				{/* <IonGrid>
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
				</IonGrid> */}
			</IonContent>
			<IonToolbar>
				<IonText>bottomtext</IonText>
			</IonToolbar>
		</React.Fragment>
	);
};

export default Products;
