import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import {About} from './components/About/About';
import {Experience} from './components/Experience/Experience';
import {Projects} from './components/Projects/Projects';
import {Contact} from './components/Contact/Contact';

function App() {


  return (
    <div className={styles.App}>
      <Navbar /> 
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <a href="https://www.freepik.com/free-ai-image/3d-render-cute-boy-with-backpack-bokeh-background_89259179.htm#fromView=search&page=3&position=45&uuid=773160c5-93e0-4b5c-a9f3-c6f5abae9a7a">Image by flatart on Freepik</a>
      <br></br>
      <a href="https://www.freepik.com/free-ai-image/3d-rendering-kid-playing-online_72607011.htm#fromView=search&page=1&position=4&uuid=773160c5-93e0-4b5c-a9f3-c6f5abae9a7a">Image by freepik</a>
    </div>
  )
}

export default App
