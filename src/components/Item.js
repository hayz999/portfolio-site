import React from 'react'
import { Item } from 'semantic-ui-react'


const items = [
  {
    childKey: 0,
    image: './assets/profile.jpg',
    header: 'About Me',
    description: 'As long as I can remember I have had a great passion for learning. My curiosity as to why certain things work and why they work that way has given me the drive that I have to further and develop my career. Early on I spent 3 years working in the service industry as a banquet manager. This job helped me develop an understanding of urgency, and how to provide excellent customer service. I was exposed to hospitality related technology in this position in the form of POS systems and payroll/scheduling software. This was my first exposure to how technology is an integral part of not only life but the workplace as well.'
  },
  {
    childKey: 1,
    description: 'While at DU I earned a Bachelor of Science in Hospitality Management. Part of that degree program exposed me further to hospitality tech.After graduation I landed a job with OpenTable where I could teach consumers about the technology and services we could provide them with. My passion for learning though lead me down another path.'
  },
  {
    childKey: 2,
    description: 'Being exposed to so many applications and software solutions, I wanted to learn how those technologies worked. That lead me to the Galvanize Web Development Immersive program. This program armed me with a full stack skill set and the ability to confidently apply my stack, improve my stack, and keep it flexible. The greatest thing I learned while learning to code, was that in the tech industry my continuous hunt to understand more will be endless, and that is amazing.'
  },
  {
    childKey: 3,
    description: 'My passionate hope is to continue to work in the tech industry, particularly with companies who share my passion to create applications and services to improve the experiences of their users and to use that technology to improve the world.'
  }
]

const ItemExampleProps = () => <Item.Group items={items} />

export default ItemExampleProps