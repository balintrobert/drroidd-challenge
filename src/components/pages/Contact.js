import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-wrapper'>
        <div className='contact--image'>
          <i class='fas fa-address-book'></i>
        </div>
        <h2 className='contact--title'>contact</h2>
        <p className='contact--text'>
          <span className='email'>droid@droid.com</span>
          <span className='phone'>
            tel. 123- 456 - 789
            <br />
            tel. 887 - 236 - 324
          </span>
          <span className='adress'>
            Cluj, Cluj-Napoca
            <br />
            Romania
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
