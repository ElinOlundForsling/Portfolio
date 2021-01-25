import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

const Minesweeper = ({ isMobile }) => {
  return (
    <ScrollOverPack className='presentation'>
      <TweenOne
        key='image'
        className='ahoy-image presentation-image'
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim
        type={isMobile ? 'right' : 'bottom'}
        className='presentation-text'
        key='text'
        leaveReverse>
        <h2 key='h2'>Minesweeper</h2>
        <p key='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </QueueAnim>
    </ScrollOverPack>
  );
};

export default Minesweeper;
