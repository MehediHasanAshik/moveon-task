import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import ShoeContextProvider from './Context/ShoeContext';

function App() {
  return (
    <div className="App">
      <ShoeContextProvider>
        <Products />
      </ShoeContextProvider>
    </div>
  );
}

export default App;
