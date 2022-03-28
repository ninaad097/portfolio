import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const useStyles = makeStyles({
  footer_main:{
    backgroundColor:'white',
    borderRadius:'10px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center',
    minHeight:'40px',
    position:'relative',
    flexWrap:'wrap',
    padding:'20px 25px',
    marginBottom:'2% '
  },
  footer_lefttext:{
    fontWeight:'600',
    fontSize:'1rem'
  },
  footer_righttext:{
    fontWeight:'600',
    fontSize:'1rem',
    color:'#abd2fa'
  }
})

export const Footer = () => {
  var today = new Date();
  var year = today.getFullYear();  
  const classes = useStyles()
  return (
    <div className={classes.footer_main}>
      <div className={classes.footer_left} >
       <Typography className={classes.footer_lefttext} >Made By Ninad with ❤️ </Typography>
      </div>
      <div className={classes.footer_right} >
      <Typography className={classes.footer_righttext}>All rights preserved <span style={{ color:'black'}}>{year}</span></Typography>
      
      </div>
    </div>
  )
}
