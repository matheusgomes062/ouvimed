import { Provider } from 'react-redux'
import store from '../redux/store/configureStore'
import App from './app'


const Home = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

export default Home;