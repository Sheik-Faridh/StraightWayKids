import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/header';
import Home from 'pages/home';
import Footer from 'components/footer';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
