import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
          <Route path='/' element={<><Homepage /> <Footer /></>}></Route>
          <Route path='/projects' element={<><ProjectsPage /> <Footer /></>}></Route>
          <Route path='/hobbies' element={<><HobbiesPage /> <Footer /></>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
