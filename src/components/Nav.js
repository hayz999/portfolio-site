import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Bio from './Bio'
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

export default class MenuExampleTabular extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <BrowserRouter > 
          <div>
            <Menu tabular>
              <Link to='/'><Menu.Item color='blue' name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} /></Link>
              <Link to='/projects'><Menu.Item color='green' name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} /></Link>
              <Link to='/resume'> <Menu.Item color='violet' name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick} /></Link>
              <Link to='/contact'> <Menu.Item color='red' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} /></Link>
            </Menu>
            <Switch>
              <Route exact path="/" component={Bio} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </BrowserRouter> 
      </div>
    )
  }
}