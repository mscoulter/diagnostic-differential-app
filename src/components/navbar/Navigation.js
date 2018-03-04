import React, { Component } from 'react'
import {Route, Link, NavLink} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
  state = {activeItem : 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/">Diagnostic Differentials</NavLink>
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/about"> About </NavLink>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/contact">Contact</NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}
