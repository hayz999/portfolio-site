import React, { Component } from 'react';
import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'

class Projects extends Component {
  
  render () {
    return (
      <div className='contact-container'>
      <Segment color='green' className='card-content'>
          <Modal trigger={
            <Image className='project-image' src='./assets/zenGallery.png' size='big' />} closeIcon>
          <Modal.Header>About Zen Gallery</Modal.Header>
            <Modal.Content >
            <Image fluid centered size='big' src='./assets/zenGallery.png' />
            <Modal.Description>
              <p>Used React to create a photo gallery application. This project utilizes the Pexels API as well as a random quote API. Styling was done with Material UI and CSS. End to end testing was done using Cypress.  This project taught me how powerful React can be when it comes to creating a dynamic user experience. </p>
              <p><a href='https://github.com/hayz999/Zen-Gallery/tree/master/drills/version-1/my-react-app' target='_blank'>GitHub Repo</a></p>
              <p><a href='https://zengallery-48a6b.firebaseapp.com/' target='_blank'>Link to Site</a></p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Segment>
        <Segment color='green' className='card-content'>
          <Modal trigger={
            <Image className='project-image' src='./assets/wineAboutIt.png' size='big' />} closeIcon>
          <Modal.Header>About Wine-About-It</Modal.Header>
          <Modal.Content >
              <Image fluid centered size='big' src='./assets/wineAboutIt.png' />
            <Modal.Description>
                <p>This was my first solo full stack application while learning to code at Galvanize. During my undergrad at the University of Denver I was a Hospitality major learning the in's and out's of the hotel and restaurant industry. One of my favorite classes while a student was Beverage Management, a course designed to get you to being able to pass the intro level Sommelier certification. This class taught me about the complex process of creating a good bottle of wine and the huge differences that can become possible with each wine.
    
                Obviously my time in the hospitality world came to an end as I fell in love with coding, but my love for wine and that industry has not ended. Naturally making an application to track and rate wines you have tried and add recommended food pairings for that wine, seemed like a pretty good idea.</p>
                <p>Technologies used were React and Material UI for the front end, and Express, Knex, and Node.js for the back end. Other libraries used were React Router and Chart.js for React.</p>
                <p><a href='https://github.com/hayz999/wine-journal' target='_blank'>GitHub Repo</a></p>
                <p><a href='https://wine-about-it.firebaseapp.com/' target='_blank'>Link to Site</a></p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Segment>
        <Segment color='green' className='card-content'>
          <Modal trigger={<Image className='project-image' src='./assets/bettership.jpg' size='big' />} closeIcon>
            <Modal.Header>About Bettership</Modal.Header>
            <Modal.Content >
              <Image fluid centered size='big' src='./assets/bettership.jpg' />
              <Modal.Description>
                <p>Bettership was the result of two things I participated in.  The first was Startup Weekend EDU 2018.  This application idea was pitched by a high school vice principle as a way for students to find internships in an easier way.  During that weekend we were not able to actually build a prototype.  I then brought the app idea to a group project at Galvanize.  Over 4 days we were able to build a working prototype of the student portal. This is a rough working prototype.</p>
                <p>Technologies used were React, Semantic UI, React Router, Express, Knex, Node.js, and Cypress.  We also brought in JWT and bcrypt for user authentication.</p>
                <p><a href='https://github.com/cchooley/Project-CHOK' target='_blank'>GitHub Repo</a></p>
                <p><a href='https://bettership-9f962.firebaseapp.com/' target='_blank'>Link to Site</a></p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Segment>
      </div>
    );  
  }
};

export default Projects;