import { Provider } from 'react-redux';
import './App.css';
import { Header } from './features/Header/Header.jsx';
import { Home } from './features/Home/Home.jsx';
import store from './store/index.js';

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <main>
        <Home />
        </main>
      </>
    </Provider>
  );
}

export default App;
