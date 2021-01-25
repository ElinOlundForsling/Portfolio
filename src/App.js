import React from 'react';
import Museion from './views/Museion';
import Eclipse from './views/Eclipse';
import Ahoy from './views/Ahoy';
import Hel from './views/Hel';
import Minesweeper from './views/Minesweeper';
import Landing from './views/Landing';
import Footer from './views/Footer';
import enquire from 'enquire-js';

let isMobile = false;
enquire.register('screen and (max-width:40em)', {
  match: function () {
    isMobile = true;
  },
  unmatch: function () {
    isMobile = false;
  },
});

const App = () => {
  return (
    <div className='App'>
      <Landing />
      <Museion isMobile={isMobile} />
      <Eclipse isMobile={isMobile} />
      <Ahoy isMobile={isMobile} />
      <Hel isMobile={isMobile} />
      <Minesweeper isMobile={isMobile} />
      <Footer />
    </div>
  );
};

export default App;
