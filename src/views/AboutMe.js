import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

const AboutMe = () => {
  return (
    <ScrollOverPack className='about'>
      <TweenOne
        key='image'
        className='about-image'
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim type={'right'} className='about-text' key='text' leaveReverse>
        <h2 key='h2'>Is this the droid that you seek?</h2>
        <h1 key='h1'>Elin Ölund Forsling</h1>
        <p key='p1'>
          Hello, I'm an overbearing cat-mom and a very loving but often
          neglectful plant-mom. I write excellent code and make excellent
          cocktails. In a team, I'm the moodmaker, and I aspire to be the person
          that automatically gets the onboarding duty, as I love meeting new
          people, and to talk about code and the ins and outs and arounds of it.
        </p>
        <p key='p2'>
          My past work experience include a lot of 3D art, from environment
          artist on Minecraft: Dungeons to VFX artist for Hollywood productions,
          and from that I'm used to fast-paced working environments, SCRUM,
          AGILE workflows and an unexpected appriciation for McDonalds.
        </p>
        <p>
          Recently, I graduated &lt;salt /&gt;, who hand-picked me and 33 others
          among 1600 applicants for their full-stack development program. I'm
          currently a consultant with them looking for full-time work.
        </p>
        <p key='p3'>
          <b>I'm superb at these:</b> Javascript, Typescript, React, Hooks,
          Redux, Express, Node, React Testing Liberary, Eslint, Kotlin, CSS,
          MySql, MongoDB, Mongoose, Firebase
          <br />
          <b>I can also do these:</b> Java, Swift, ThreeJS, Kubernets, Amazon
          Web Services Services, Babel, Webpack, Docker, SASS
          <br />
          <b>In dire times I'll do: </b> C#
        </p>
      </QueueAnim>
    </ScrollOverPack>
  );
};

export default AboutMe;
