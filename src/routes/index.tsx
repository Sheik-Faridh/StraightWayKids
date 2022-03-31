import { useLayoutEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from 'pages/about_us';
import Admission from 'pages/admission';
import ContactUs from 'pages/contact_us';
import Footer from 'components/footer';
import Header from 'components/header';
import Gallery from 'pages/gallery';
import Home from 'pages/home';
import NotFound from 'pages/not_found';

const ScrollToTop = () => {
	const location = useLocation();

	useLayoutEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [location]);

	return null;
};

const Routes = () => {
	return (
		<Router>
			<Header />
			<ScrollToTop />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about-us' exact component={AboutUs} />
				<Route path='/admission' exact component={Admission} />
				<Route path='/gallery' exact component={Gallery} />
				<Route path='/contact-us' exact component={ContactUs} />
				<Route path='/not-found' exact component={NotFound} />
				<Route path='*' component={() => <Redirect to='/not-found' />} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default Routes;
