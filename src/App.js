import { Route, Routes } from 'react-router-dom';

import './App.scss';

// import Home from './pages/Home';
import Leyout from './components/Leyout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects/index';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Leyout /> }>
        <Route index element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/contact" element={ <Contact /> }/>
        <Route path="/projects" element={ <Projects /> }/>
      </Route>

    </Routes>
  );
}

export default App;
