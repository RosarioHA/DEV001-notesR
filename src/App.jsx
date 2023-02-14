/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import login from './components/login';
import signup from './components/signup';
import notes from './components/notes';

function App() {
  return (
    <Routes>
      <Route path="/" element={login} />
      <Route path="/signup" element={signup} />
      <Route path="/notes" element={notes} />
    </Routes>
  );
}

export default App;
