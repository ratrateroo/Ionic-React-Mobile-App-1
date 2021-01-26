import React from 'react';

import { IonToolbar, IonTitle, IonContent } from '@ionic/react';
import Head from '../components/head/Head';

const Orders: React.FC = () => {
	return (
		<React.Fragment>
			<Head />
			<IonContent>
				<IonToolbar>
					<IonTitle size="large">Orders Page</IonTitle>
				</IonToolbar>
			</IonContent>
		</React.Fragment>
	);
};

export default Orders;
