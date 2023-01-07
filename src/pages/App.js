import './App.css';
import { Provider } from 'react-redux';
import { store, Index } from '../config/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Index />
      </Provider>
    </div >
  );
}


export default App;
