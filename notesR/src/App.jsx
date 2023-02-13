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
      <Route path="/" element={<login />} exact />
      <Route path="/signup" element={<signup />} exact />
      <Route path="/notes" element={<notes />} exact />
    </Routes>
  );
}

export default App;
