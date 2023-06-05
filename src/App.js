import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar';

function App() {
	return (

    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>

    </Routes>
    <Footer/>
  </BrowserRouter>

	);
}

export default App;
