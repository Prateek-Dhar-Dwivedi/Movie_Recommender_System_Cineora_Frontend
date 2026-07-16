import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import Actors from "./components/Actors";
import Prediction from "./components/Prediction";
import ProjectInfo from "./components/ProjectInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Recommendations />
      <Actors />
      <Prediction />
      <ProjectInfo />
      <Footer />
    </div>
  );
}

export default App;