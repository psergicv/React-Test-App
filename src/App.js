import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
