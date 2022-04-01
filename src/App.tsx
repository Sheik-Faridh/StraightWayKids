import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Routes from 'routes';
import ErrorBoundary from 'components/error_boundary';
import store from 'store';
import { fetchCommonDetails } from 'store/actions/common.actions';
import theme from 'themes';
import './App.css';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<ErrorBoundary>
					<Routes />
				</ErrorBoundary>
			</Provider>
		</ThemeProvider>
	);
};

const initialLoadActions = () => {
	store.dispatch(fetchCommonDetails());
};

initialLoadActions();

export default App;
