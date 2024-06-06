import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
<section>
      <h2>Home</h2>
      <p>Welcome to my portfolio website!</p>
      <a href="https://drive.google.com/file/d/1WPg7n8bUJQu2-0PaDZ5f07rEWfNkhLQM/view">
        <button>My Resume</button>
      </a>
    </section>
);

export default App;
