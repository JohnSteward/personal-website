import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import ProjectsPage from './ProjectsPage';
import Homepage from './Homepage';
import HobbiesPage from './HobbiesPage';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route path='/projects' element={<ProjectsPage />}></Route>
          <Route path='/hobbies' element={<HobbiesPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
