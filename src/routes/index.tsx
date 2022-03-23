import { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from 'pages/about_us';
import Admission from 'pages/admission';
import Footer from 'components/footer';
import Header from 'components/header';
import Home from 'pages/home';
import { RootState } from 'store';

const Routes = () => {
	const commonDetails = useSelector((state: RootState) => state.common);

	const renderLayout = useMemo(
		() => !!Object.keys(commonDetails).length,
		[commonDetails]
	);

	return (
		<Router>
			{renderLayout && <Header />}
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about-us' exact component={AboutUs} />
				<Route path='/admission' exact component={Admission} />
			</Switch>
			{renderLayout && <Footer />}
		</Router>
	);
};

export default Routes;
