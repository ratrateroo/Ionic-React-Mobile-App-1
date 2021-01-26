import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonRouterOutlet,
	IonIcon,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { cart, accessibility, locate } from 'ionicons/icons';

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
import './theme/variables.css';
/* Custom Styling */
import './styles/customstyles.css';
import './theme/styles.scss';

import './App.css';

import Home from './pages/Home';
import Orders from './pages/Orders';
import Products from './pages/Products';

import Categories from './pages/Categories';
import Account from './pages/Account';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Menu from './components/Menu';

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<Menu />

			<div className="ion-page" id="main-part">
				<IonTabs>
					<IonRouterOutlet>
						<Route exact path="/" />
						<Route exact path="/home" component={Home} />
						<Route exact path="/orders" component={Orders} />
						<Route exact path="/products" component={Products} />
						<Route exact path="/categories" component={Categories} />
						<Route exact path="/account" component={Account} />
						<Route exact path="/login" component={LogIn} />
						<Route exact path="/signup" component={SignUp} />
						<Redirect exact from="/" to="/home" />
					</IonRouterOutlet>
					<IonTabBar slot="bottom">
						<IonTabButton tab="Categories" href="/categories">
							<IonIcon icon={locate} />
						</IonTabButton>
						<IonTabButton tab="Orders" href="/orders">
							<IonIcon icon={cart} />
						</IonTabButton>
						<IonTabButton tab="Account" href="/account">
							<IonIcon icon={accessibility} />
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</div>
		</IonReactRouter>
	</IonApp>
);

export default App;
