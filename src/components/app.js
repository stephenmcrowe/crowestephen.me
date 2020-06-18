import React from 'react';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
import About from './about';
import Experience from './experience';
import Portfolio from './portfolio';
import Home from './home';
import Navbar from './navbar';
import '../styles/stylesheet.scss';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
    </div>
  );
};

export default App;
// ReactDOM.render(<App />, document.getElementById('main'));
