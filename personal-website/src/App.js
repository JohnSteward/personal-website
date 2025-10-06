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
      {/* <div className="App"> */}
      <Header />
      <Routes>
        <Route exact path='/personal-website' element={<Homepage />}></Route>
        <Route path='/personal-website/projects' element={<ProjectsPage />}></Route>
        <Route path='/personal-website/hobbies' element={<HobbiesPage />}></Route>
      </Routes>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
