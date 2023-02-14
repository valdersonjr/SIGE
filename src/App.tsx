import {ThemeProvider} from 'styled-components';
import {Gateway} from './routes';
import {GlobalStyles, theme} from '@theme';
import {BrowserRouter as Router} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <RecoilRoot>
            <Router>
                <GlobalStyles/>
                <ThemeProvider theme={theme}>
                    <Gateway/>
                    <ToastContainer/>
                </ThemeProvider>
            </Router>
        </RecoilRoot>
    );
}

export default App;
