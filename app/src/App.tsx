
import './App.css';
import Systems  from './components/Systems';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Systems />
    </div>
  );
}

export default App;
