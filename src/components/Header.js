import React from 'react'
import { Navbar, Container ,  Nav } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles'
import resumeData from '../utils/resumeData'
import {Typography } from '@mui/material';
const useStyles = makeStyles({
  active:{
    fontWeight:'600',
    fontSize:'1..5rem',
    color:'black'
  },
  social_icon:{
    color:'black',
    "&::hover" :{
      // height:'1000px'
    }
  }
})


export const Header = (props) => {
 
  const { social } = resumeData;
  const classes = useStyles()
  const path = window.location.pathname;
  console.log(window.location.pathname);
  return (
    <div>
      <Navbar sticky="top" style={{ borderRadius:'10px'}} collapseOnSelect expand="lg" bg="white" >
  <Container>
  <Navbar.Brand style={{ color: path === '/' ? '#abd2fa' : 'black'}}    href="/"><HomeIcon/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className={classes.active}  style={{ color: path === '/resume' ? '#abd2fa' : 'black'}}  href="/resume">Resume</Nav.Link>
      <Nav.Link className={classes.active}    style={{ color: path === '/portfolio' ? '#abd2fa' : 'black' }}     href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link  className={classes.active}    style={{ color: path === '/contact' ? '#abd2fa' : 'black'}}    href="/contact">Contact</Nav.Link>
    
    </Nav>
    <Nav>
   
    {
          social.map((s) => (
            <Nav.Link  href={`${s.link}`}  className={classes.social_icon}>
            <Typography className={classes.social_icon}>{s.icon}</Typography>
            </Nav.Link>
          ))
        }
      

    </Nav>
  </Navbar.Collapse>

  </Container>
</Navbar>
    </div>
  )
}
