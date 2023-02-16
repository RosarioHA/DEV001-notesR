import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes';

function App() {
  return (
    <div className = "App">
      <div>
        <Routes>
        <Route path="/" element={<Login/>} exact/>
          <Route path="/signup" element={<Signup/>} exact/>
          <Route path="/notes" element={<Notes/>} exact/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
