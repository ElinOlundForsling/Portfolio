import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

const Project = ({ project, reversed }) => {
  const { name, lc, desc, techStack, urlName, url, githubUrl } = project;
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollOverPack className={`presentation ${reversed && 'reversed'}`}>
        <TweenOne
          key='image'
          className={`${lc}-image presentation-image`}
          animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          onClick={() => setOpen(true)}
        />
        <QueueAnim
          type='right'
          className='presentation-text'
          key='text'
          leaveReverse>
          <h2 key='h2'>{name}</h2>
          <ul className='language-list' key='ul'>
            {techStack.map(lang => {
              return (
                <li>
                  <img
                    src={`/images/icons/${lang}.png`}
                    className='language-icon'
                    alt={lang}
                  />
                </li>
              );
            })}
          </ul>
          <p key='p'>{desc}</p>
          {url && (
            <a href={url} key='a1'>
              <button>{urlName}</button>
            </a>
          )}
          <a href={githubUrl} key='a2'>
            <button>Github</button>
          </a>
        </QueueAnim>
      </ScrollOverPack>
      {open && (
        <dialog
          className='dialog'
          style={{ position: 'fixed' }}
          open
          onClick={() => setOpen(false)}>
          <img
            className='image'
            src={`/images/screenshots/screenshot-${lc}.png`}
            onClick={() => setOpen(false)}
            alt={name}
          />
        </dialog>
      )}
    </>
  );
};

export default Project;
