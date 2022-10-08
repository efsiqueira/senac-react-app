import './App.css';
import Contador from './components/Contador';
import FetchNews from './components/FetchNews';
import FetchProducts from './components/FetchProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá mundo</h1>
        <div style={{ padding: "2rem" }}>
          <FetchProducts />
          {/* <FetchNews />
          <Contador /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
