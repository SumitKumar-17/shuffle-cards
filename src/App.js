import './App.css';
import ShuffleHero from './components/ShuffleHero';

function App() {
  return (
    <div className="App flex flex-col items-center ">
      <h1 className="p-4 text-4xl">Shuffle Cards</h1>
      <div className="border border-t-4">
        <ShuffleHero />
      </div>
    </div>
  );
}

export default App;
