import React from 'react'
import { makeStyles } from "@mui/styles";
import { Paper, Typography } from '@mui/material';
import { CTimeline } from './Timeline/CTimeline';
import { CButton } from './CButton';
import { fontSize } from '@mui/system';
import Ninad from '../assests/ninad1.jpg'
import DownloadIcon from '@mui/icons-material/Download';

const useStyles = makeStyles((theme) => ({
  profile_bottom:{
  position:'relative'
  },
  btn_P:{
    position:'absolute',
    top:'1%',
  },
  profile_container:{
    backgroundColor:'white',
    borderRadius:'10px',
    width:'100%',
    display:'inline-block'
  },
  profile_title:{
    lineHeight:'18px',
    padding:'20px'
  },
  profile_designation: {
    fontWeight:'normal',
    fontSize:'1rem',
    color:'#777',
    [theme.breakpoints.between('sm', 'md')]: {
      fontWeight:'550',
      fontSize:'1.6rem',
    },
    [theme.breakpoints.between('sm', 'xs')]: {
      fontWeight:'normal',
      fontSize:'1rem',
    },
  },
  profile_name:{
  fontWeight:'550',
  fontSize:'1.6rem',
  [theme.breakpoints.between('sm', 'md')]: {
    fontWeight:'650',
    fontSize:'2.6rem',
  },
  
  },
  profile_img:{
   WebkitClipPath:'polygon(0 9%,100% 0,100% 94%,0% 100%)',
   clipPath:'polygon(0 9%,100% 0,100% 94%,0% 100%)',
   marginTop:'-10px',
   [theme.breakpoints.between('sm', 'md')]: {
    margin:'auto'
  },
  }
  
}))
export const Profile = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.profile_container}>
      <div className={classes.profile_title}>
      <Typography className={classes.profile_name} variant="h4">Ninad Sonawane</Typography>
      <Typography className={classes.profile_designation} variant="subtitle1">MERN Stack Developer</Typography>
      </div>
      <div className={classes.profile_img}>
      <img  style={{ width:'100%'}} src={Ninad} alt="profile" />
      </div>
      <div className={classes.profile_bottom}>
       <CTimeline />
       <CButton  className={classes.btn_P} text={'Download CV'}  icon={<DownloadIcon/>}/>
      </div>
    </Paper>
  )
}
