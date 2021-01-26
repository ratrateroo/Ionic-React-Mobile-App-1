import React from 'react';

import { IonToolbar, IonTitle, IonContent } from '@ionic/react';
import Head from '../components/head/Head';

const Categories: React.FC = () => {
	return (
		<React.Fragment>
			<Head />
			<IonContent>
				<IonToolbar>
					<IonTitle size="large">Categories Page</IonTitle>
				</IonToolbar>
			</IonContent>
		</React.Fragment>
	);
};

export default Categories;
