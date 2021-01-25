import React from 'react';
import Ahoy from './views/Ahoy';
import Landing from './views/Landing';
import Footer from './views/Footer';
import enquire from 'enquire-js';

let isMobile = false;
enquire.register('screen and (max-width:40em)', {
  match: function () {
    isMobile = true;
    console.log('true');
  },
  unmatch: function () {
    isMobile = false;
    console.log('false');
  },
});

const App = () => {
  return (
    <div className='App'>
      <Landing />
      <Ahoy isMobile={isMobile} />
      <Ahoy isMobile={isMobile} />
      <Footer />
    </div>
  );
};

export default App;
