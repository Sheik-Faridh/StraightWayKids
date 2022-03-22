import { Provider } from 'react-redux';
import Routes from 'routes';
import store from 'store';
import { fetchCommonDetails } from 'store/actions/common.actions';
import { ThemeProvider } from 'styled-components';
import theme from 'themes';
import './App.css';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Routes />
			</Provider>
		</ThemeProvider>
	);
};

const initialLoadActions = () => {
	store.dispatch(fetchCommonDetails());
};

initialLoadActions();

export default App;
