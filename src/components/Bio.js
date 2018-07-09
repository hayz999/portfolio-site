import React from 'react';
import { Segment, Card } from 'semantic-ui-react'
import Item from './Item';


const Bio = () => {
  return (
    <div className='bio' >
      <Segment color='blue'  >
        <Item />
      </Segment>
    </div>
  );
};

export default Bio;