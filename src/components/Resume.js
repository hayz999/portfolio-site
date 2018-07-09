import React from 'react';
import { Card, Segment } from 'semantic-ui-react'

const src = './assets/Resume.png'

const Resume = () => {
  return (
    <div className='resume-container' >
    <Segment color='violet'>
      <Card fluid color='violet'  >
        <img src={src} alt='resume' className='resume' />
      </Card>
    </Segment>
    </div>
  );
};

export default Resume;