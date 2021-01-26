import React from 'react';

import { IonToolbar, IonTitle, IonContent } from '@ionic/react';
import Head from '../components/head/Head';

const Account: React.FC = () => {
	return (
		<React.Fragment>
			<Head />
			<IonContent>
				<IonToolbar>
					<IonTitle size="large">Account Page</IonTitle>
				</IonToolbar>
			</IonContent>
		</React.Fragment>
	);
};

export default Account;
