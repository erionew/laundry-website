import './App.scss'
import Header from './Components/Header.js'
import About from './Components/About.js'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      {/* <Services />
      <Gallery /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
