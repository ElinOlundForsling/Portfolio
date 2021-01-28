import React, { useState, useEffect } from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'SUCCESS' || status === 'ERROR') {
      const timer = setTimeout(() => {
        setStatus('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <ScrollOverPack className='contact'>
      <QueueAnim
        type={'right'}
        className='contact-text'
        key='text'
        leaveReverse>
        <h2 key='h2'>Contact</h2>
        <p key='p'>
          I'm currently employed by &lt;salt /&gt; as a consultant. If you're
          interested in my services, please reach out to Sara at
          sara@appliedtechnology.se
        </p>
        <p key='p'>For other matters, leave a message below :&#41;</p>
        <form
          className='contact-form'
          onSubmit={handleSubmit}
          action='https://formspree.io/f/xnqowkzw'
          method='POST'>
          <input
            type='email'
            name='_replyto'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            placeholder='Message'
            name='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
          {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </form>
      </QueueAnim>
      <TweenOne
        key='image'
        className='contact-image'
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
};

export default Contact;
