import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import ProjectsPage from './ProjectsPage';
import Homepage from './Homepage';
import HobbiesPage from './HobbiesPage';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <Router basename='/personal-website'>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/projects' component={ProjectsPage}></Route>
          <Route exact path='/hobbies' component={HobbiesPage}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
