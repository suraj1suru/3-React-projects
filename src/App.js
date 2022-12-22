import './App.css';
import SearchFilter from './Components/SearchFilter';
import Counter from './Components/counter';
import Temp from './Components/tempControl'



function App() {
  return (
    <div className="App">
      <Counter />
      <Temp />
     <SearchFilter />
    </div>
  );
}

export default App;
