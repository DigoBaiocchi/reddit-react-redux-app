import './App.css';
import { Header } from './features/Header/Header.jsx';
import { Home } from './features/Home/Home.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
