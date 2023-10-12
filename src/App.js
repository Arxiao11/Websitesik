import 'tailwindcss/tailwind.css';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ImageSlider from './components/Photo';
import Content from './components/Content';
import Content2 from './components/Content2';
import NewsContent from './components/Berita';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <header class="header">
        <Header/>
      </header>
      <nav>
        <Navbar/>
      </nav>
      <div>
        <ImageSlider/>
      </div>
      <div>
        <Content/>
        <Content2/>
        <NewsContent/>
      </div>
      <footer>
        <Footer/>
      </footer>
      </div>
  )
}

export default App;
