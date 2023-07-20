import logo from './logo.svg';
import './App.css';
import Index from './layout/admin';
import { BrowserRouter } from 'react-router-dom';
import IndexSite from './site';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Index/>
    </BrowserRouter>
    </div>
  );
}

export default App;
