import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProjectsPage from './ProjectsPage';
import Homepage from './Homepage';
import HobbiesPage from './HobbiesPage';
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/projects' element={<ProjectsPage />}></Route>
          <Route path='/hobbies' element={<HobbiesPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
