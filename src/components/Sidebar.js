import React from 'react'
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar() {
  return (
    <div className="sidebar">
      <List disablePadding dense id="sidebar-content"  >
        <ListItem>
          <Link to="/" className="menu-item">
            <ListItemText>HOME</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/products/contemporary" className="menu-item">
            <ListItemText>CONTEMPORARY</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/products/cubism" className="menu-item">
            <ListItemText>CUBISM</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/products/impressionism" className="menu-item">
            <ListItemText>IMPRESSIONISM</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/products/popart" className="menu-item">
            <ListItemText>POPART</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/products/post-impressionism" className="menu-item">
            <ListItemText>POST IMPRESSIONISM</ListItemText>
          </Link>
        </ListItem>
      
      </List>
    </div>
  )
}

export default Sidebar;