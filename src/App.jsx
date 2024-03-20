import { Provider } from 'react-redux';
import './App.css';
import { Home } from './features/Home/Home.jsx';
import store from './store/index.js';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
