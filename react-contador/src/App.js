
import './App.css';
import {Counter} from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 2) manda a llamar al componente */}
    <Counter initCout={7}  />
        <Counter initCout={8}  />

      </header>
    </div>
  );
}

export default App;
