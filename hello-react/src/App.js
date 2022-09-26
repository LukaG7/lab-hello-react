import logo from './logo.svg';
import ih from './images/ironhack-logo.png';
import icon1 from './images/icon-1.png';
import icon2 from './images/icon-2.png';
import icon3 from './images/icon-3.png';
import icon4 from './images/icon-4.png';
import './App.css';

function App() {
  return (
  <body>
    <div className="App">
      <img className='ih-logo' src={ih}/>
      <div className='header'>
        <h1>Say Hello to React JS</h1>
        <p>You will learn how to use the most popular frontend library,
           and become a super Ninja developer.</p>
           <button>Awesome!</button>
      </div>
      <img className='Logo-1' src={logo}/>
      <img className='Logo-2' src={logo}/>
      <img className='Logo-3' src={logo}/>
      <img className='Logo-4' src={logo}/>
      <img className='Logo-5' src={logo}/>
      <img className='Logo-6' src={logo}/>
    </div>

    <div className='icon-div'>
      <img className='icon-img' src={icon1}/>
      <img className='icon-img' src={icon2}/>
      <img className='icon-img' src={icon3}/>
      <img className='icon-img' src={icon4}/>
    </div>

  </body>
  );
}

export default App;
