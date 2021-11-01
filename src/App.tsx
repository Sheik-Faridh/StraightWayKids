import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import theme from 'themes';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
