import React from 'react';

import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonRow,
	IonGrid,
	IonCol,
	IonMenuButton,
	IonImg,
	IonSearchbar,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */

/* Custom Styling */

const Head: React.FC = () => (
	<IonHeader translucent>
		<IonToolbar color="darkpurple">
			<IonGrid>
				<IonRow>
					<IonCol size="2">
						<IonButtons>
							<IonMenuButton></IonMenuButton>
						</IonButtons>
					</IonCol>
					<IonCol size="7">
						<div className="ion-text-center">
							<IonTitle size="small">
								<h4>Shopping While Black</h4>
							</IonTitle>
						</div>
					</IonCol>
					<IonCol size="3">
						<IonImg src="assets/Asset 1.png" />
					</IonCol>
				</IonRow>
			</IonGrid>
			<IonSearchbar className="searchbar" color="light" />
		</IonToolbar>
	</IonHeader>
);

export default Head;
