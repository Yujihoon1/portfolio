import logo from "./logo.svg";
import "./css/style.css";
import About from "./js/About";
import Skill from "./js/Skill";
import Project from "./js/Project";
import Footer from "./js/Footer";
import Home from "./js/Home";

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <About />
        <Skill />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
