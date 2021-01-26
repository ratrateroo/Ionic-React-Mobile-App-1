import React, { useState } from 'react';

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
	IonImg,
} from '@ionic/react';
import Head2 from '../components/head/Head2';
import { star } from 'ionicons/icons';
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
				<IonGrid>
					<IonRow>
						<IonCol size="3">
							<IonText color="darkpurple">
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
			</IonContent>
		</React.Fragment>
	);
};

export default Product;
