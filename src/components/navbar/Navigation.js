import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {browserHistory} from 'react-router';
import { Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
  state = {activeItem : 'home'}

  handleItemClick = (e, { name }) => {
    // browserHistory.push({
    //   pathname: to});
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={Link}
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          to="/"
        >
          Diagnostic Differentials
        </Menu.Item>

        <Menu.Item
          as={Link}
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          to="/about"
        >
         About
        </Menu.Item>

        <Menu.Item
          as={Link}
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
          to="/contact"
        >
        Contact
        </Menu.Item>
      </Menu>
    )
  }
}
