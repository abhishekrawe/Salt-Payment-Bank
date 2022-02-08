import React from 'react';
import './App.css';
import Header from './Components/Header';
import Features from './Components/Features';
import About from './Components/About';
import Persentation from './Components/Presentaion';
import MainContent from './Components/mainContent';
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png';
import Contact from './Components/Contact';
import './App.scss'


function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <About image={aboutimage} title='Comes with All you need ' button='Get the App'/>
       <MainContent/>
       <Persentation/>
      <About image={aboutimage1}  title="Download And Get The App Now " button="Download Now"  />
       <Contact/>
    </div>
  );
}

export default App;
