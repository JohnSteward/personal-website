import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import TestLink from './TestLink';
function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path='/' element={<TestLink />}></Route>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
