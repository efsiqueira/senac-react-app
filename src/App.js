import { Button, ButtonBase, ButtonGroup } from '@mui/material';
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá mundo</h1>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>Uno</Button>
          <Button>Two</Button>
          <Button>Três</Button>
        </ButtonGroup>
        <Contador />
      </header>
    </div>
  );
}

export default App;
