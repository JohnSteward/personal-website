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
          <Route path='/' element={<><Homepage /> <Footer colour="rgb(0, 122, 122)"/></>}></Route>
          <Route path='/projects' element={<><ProjectsPage /> <Footer colour="rgb(153, 0, 0)"/></>}></Route>
          <Route path='/hobbies' element={<><HobbiesPage /> <Footer colour="rgba(0, 107, 27, 1)"/></>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
