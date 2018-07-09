import React from 'react';
import { Card } from 'semantic-ui-react'

const Contact = () => {
  return (
    <div className='contact' >
      <Card.Group itemsPerRow={1} className='contact-container' >
        <Card color='red'>
          <div className='card-content' >
            <img className='icon' src='./assets/phone.jpg'/>
            <h1>Phone</h1>
            <h2>(303) 386-2980</h2>
          </div>
        </Card>
        <Card color='yellow'>
          <div className='card-content' >
            <img className='icon' src='./assets/email.png' />
            <h1>Email</h1>
            <h2>hlzulkoski@gmail.com</h2>
          </div>
        </Card>
        <Card color='green'>
          <div className='card-content' >
            <img className='icon' src='./assets/github.png' />
            <h1>GitHub</h1>
            <h2><a target='_blank' href='https://github.com/hayz999'>/hayz999</a></h2>
          </div>
        </Card>
        <Card color='blue'>
          <div className='card-content' >
            <img className='icon' src='./assets/linkedin.png' />
            <h1>Linkedin</h1>
            <h2><a target='_blank' href='https://www.linkedin.com/in/hayley-zulkoski-webdev/'> /hayley-zulkoski-webdev/</a></h2>
          </div>
        </Card>
      </Card.Group>
    </div>
  );
};

export default Contact;