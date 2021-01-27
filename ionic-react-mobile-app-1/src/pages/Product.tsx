import React, { useState } from 'react';

import {
	IonContent,
	IonText,
	IonGrid,
	IonRow,
	IonCol,
	IonButton,
	IonIcon,
	IonImg,
} from '@ionic/react';
import Head2 from '../components/head/Head2';
import { caretDownOutline, star } from 'ionicons/icons';
import './Product.css';

const Product: React.FC = () => {
	const [imageSelected, setImageSelected] = useState(
		'assets/products/product11-1.jpg'
	);

	const [colorname, setColorName] = useState('Black');

	const imageSelectHandler = (image: string) => {
		setImageSelected(image);
	};

	const colorHandler = (color: string, image: string) => {
		setColorName(color);
		setImageSelected(image);
	};
	return (
		<React.Fragment>
			<Head2 />
			<IonContent>
				<IonGrid>
					<IonRow>
						{/* Product Title, Product Brand and Product Subtitle */}
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
						{/* Product Rating and Add to Wish List */}
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

				{/* Product Images */}
				<IonGrid>
					<IonRow>
						<IonCol size="2">
							<IonImg
								onClick={() => {
									imageSelectHandler(
										'assets/products/product11-1.jpg'
									);
								}}
								className="product-image-holder"
								src="assets/products/product11-1.jpg"
							/>
							<IonImg
								onClick={() => {
									imageSelectHandler(
										'assets/products/product11-2.jpg'
									);
								}}
								className="product-image-holder"
								src="assets/products/product11-2.jpg"
							/>
							<IonImg
								onClick={() => {
									imageSelectHandler(
										'assets/products/product11-3.jpg'
									);
								}}
								className="product-image-holder"
								src="assets/products/product11-3.jpg"
							/>
							<IonImg
								onClick={() => {
									imageSelectHandler(
										'assets/products/product11-4.jpg'
									);
								}}
								className="product-image-holder"
								src="assets/products/product11-4.jpg"
							/>
						</IonCol>
						<IonCol size="10">
							<IonImg
								className="product-image-holder"
								src={imageSelected}
							/>
						</IonCol>
					</IonRow>
				</IonGrid>

				{/* Product Color */}
				<IonGrid>
					<IonRow>
						<IonCol size="3">
							<IonText className="product-color-name" color="darkpurple">
								<h5>Color: {colorname}</h5>
							</IonText>
						</IonCol>

						<IonCol>
							<IonGrid>
								<IonRow>
									<IonCol>
										<IonImg
											onClick={() => {
												colorHandler(
													'Yellow',
													'assets/products/product11-y.jpg'
												);
											}}
											className="product-image-holder-mini"
											src="assets/products/product11-y.jpg"
										/>
									</IonCol>
									<IonCol>
										<IonImg
											onClick={() => {
												colorHandler(
													'Blue',
													'assets/products/product11-b.jpg'
												);
											}}
											className="product-image-holder-mini"
											src="assets/products/product11-b.jpg"
										/>
									</IonCol>
									<IonCol>
										<IonImg
											onClick={() => {
												colorHandler(
													'Silver',
													'assets/products/product11-s.jpg'
												);
											}}
											className="product-image-holder-mini"
											src="assets/products/product11-s.jpg"
										/>
									</IonCol>
									<IonCol>
										<IonImg
											onClick={() => {
												colorHandler(
													'Black',
													'assets/products/product11-1.jpg'
												);
											}}
											className="product-image-holder-mini"
											src="assets/products/product11-1.jpg"
										/>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCol>
					</IonRow>
				</IonGrid>

				<IonGrid>
					<IonRow>
						<IonCol size="12">
							<IonText className="product-availability" color="cyan">
								<h4>In Stock</h4>
							</IonText>
						</IonCol>
						<IonCol size="6">
							<IonButton
								className="product-quantity"
								color="redorange"
								expand="block">
								<IonIcon icon={caretDownOutline} slot="end" />
								Quantity: 1
							</IonButton>
						</IonCol>
						<IonCol size="6">
							<IonText className="product-price" color="coal">
								<span>Price:</span>
								<span>$ 4795.00</span>
							</IonText>
						</IonCol>

						<IonCol size="6">
							<IonButton
								className="product-add-to-cart"
								color="yellow"
								expand="block">
								Add to Cart
							</IonButton>
						</IonCol>
						<IonCol size="6">
							<IonButton
								className="product-buy-now"
								color="darkpurple"
								expand="block">
								But Now
							</IonButton>
						</IonCol>

						<IonCol size="12" className="ion-padding">
							<IonText
								className="product-sold-by ion-padding-top"
								color="coal">
								<span>Sold by: </span>
								<span className="product-sold-by-brand">Breitling</span>
							</IonText>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow>
						<IonCol size="12">
							<IonText className="product-description ion-no-padding">
								<p className="product-description-title">Description</p>
								<p className="product-description-content">
									Bold, extremely robust and shock resistant, the
									Avenger Automatic 45 Seawolf is a lightweight pilots’
									watch prepared for adventures well below the ocean’s
									surface (up to 300 bars - 3.000m). As a true
									Breitling Avenger, it can be used wearing gloves and
									offers unrivalled safety and reliability to any
									airborne adventurer.
								</p>
							</IonText>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="12">
							<IonText className="product-information ion-no-padding">
								<p className="product-information-title">
									Product Information
								</p>
								<div className="product-information-table">
									<table className="product-table">
										<thead className="product-table-head">
											<tr>
												<th colSpan={2}>Movement</th>
											</tr>
										</thead>
										<tbody className="product-table-body">
											<tr>
												<th>Caliber</th>
												<td>Breitling 17</td>
											</tr>
											<tr>
												<th>Movement</th>
												<td>self-winding mechanical</td>
											</tr>
											<tr>
												<th>Power reserve</th>
												<td>approx. 38 hrs</td>
											</tr>
											<tr>
												<th>Vibration</th>
												<td>28,800 v.p.h</td>
											</tr>
											<tr>
												<th>Jewel</th>
												<td>25 jewels</td>
											</tr>
											<tr>
												<th>Calendar</th>
												<td>Dial aperture</td>
											</tr>
										</tbody>

										<thead className="product-table-head">
											<tr>
												<th colSpan={2}>Case</th>
											</tr>
										</thead>
										<tbody className="product-table-body">
											<tr>
												<th>Caseback</th>
												<td>Screwed in</td>
											</tr>

											<tr>
												<th>Water resistance</th>
												<td>3,000 m (10,000 ft)</td>
											</tr>

											<tr>
												<th>Bezel</th>
												<td>Unidirectional, ratcheted</td>
											</tr>

											<tr>
												<th>Crown</th>
												<td>Screw-locked, two gaskets</td>
											</tr>

											<tr>
												<th>Crystal</th>
												<td>
													Convex sapphire crystal, glareproofed
													both sides
												</td>
											</tr>
										</tbody>

										<thead className="product-table-head">
											<tr>
												<th colSpan={2}>Dimensions</th>
											</tr>
										</thead>
										<tbody className="product-table-body">
											<tr>
												<th>Diameter</th>
												<td>45.00 mm</td>
											</tr>
										</tbody>

										<thead className="product-table-head">
											<tr>
												<th colSpan={2}>Strap</th>
											</tr>
										</thead>
										<tbody className="product-table-body">
											<tr>
												<th>Lug</th>
												<td>22/20 mm</td>
											</tr>
										</tbody>
									</table>
								</div>
							</IonText>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="12">
							<IonText className="product-review ion-no-padding">
								<p className="product-review-title">Customer Reviews</p>
								<div className="product-review-container">
									<p className="product-review-content">
										The Night Mission interpretation of the Avenger
										Automatic 45 Seawolf features a sturdy 45mm
										DLC-coated titanium case, black dial and a black
										military leather strap that fits either a
										DLC-coated stainless-steel pin buckle or folding
										clasp. Its specific Arabic numerals recall the
										stenciled numbers used on the decks of aircraft
										carriers. With an impressive water resistance, the
										Seawolf is at ease up in the air and deep down the
										oceans. Thanks to its rugged bezel and its special
										grip-pattern on the crown, the Avenger Automatic
										45 Seawolf Night Mission can be easily operated
										wearing gloves.
									</p>

									<p className="product-review-author">
										Posted by{' '}
										<span className="product-review-author-name">
											Percy Jackson
										</span>{' '}
										on <span>January 25, 2010</span>
									</p>
								</div>
							</IonText>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Spacer</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</React.Fragment>
	);
};

export default Product;
