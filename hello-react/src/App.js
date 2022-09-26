import logo from './logo.svg';
import ih from './images/ironhack-logo.png';
import dash from './images/dash-dash.png';
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
      <img className='dash' src={dash}/>
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

    <section className='icon-section'>
        <div className='icons-div'>
          <img className='icon-img' src={icon1}/>
          <h2>Declarative</h2>
          <p className='img-p'>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='icons-div'>
          <img className='icon-img' src={icon2}/>
          <h2>Components</h2>
          <p className='img-p'>Build encapsulated components that manage their state.</p>      
        </div>
        <div className='icons-div'>
          <img className='icon-img' src={icon3}/>
          <h2>Single-Way</h2>
          <p className='img-p'>A set of immutable values are passed to the component's.</p>
        </div>
        <div className='icons-div'>
          <img className='icon-img' src={icon4}/>
          <h2>JSX</h2>
          <p className='img-p' >Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>

  </body>
  );
}

export default App;
