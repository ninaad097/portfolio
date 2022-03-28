/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import TimelineDot from '@mui/lab/TimelineDot';

import { makeStyles } from '@mui/styles'
import { Link , Button, Container, Grid  , Paper, TextField, Typography} from '@mui/material'
import clsx from 'clsx'
import resumeData from '../utils/resumeData'

const useStyles = makeStyles((theme) => ({
  contact_title:{
    fontFamily: "Cabin, sans-serif",
    fontWeight:'00',
   fontSize:'14px',
   
  },
  contact_value:{
    display:'flex',
    alignItems:'center',
    margin:'2%',
    fontWeight:'600',
    lineHeight:'2rem',
    color:'black',
    fontFamily: "Work Sans, sans-serif",
    },
    timeline_dot:{
    borderColor:'#abd2fa',
    padding:'4px',
    marginRight:'5%'
    },
  contact_dropb:{
    fontWeight:'600',
    fontFamily: "Cabin, sans-serif",
    margin:'2%',
    padding:'3%',
    backgroundColor:'#abd2fa',
    [theme.breakpoints.between('sm', 'md')]: {
      margin:'0',
      padding:'1.5%'
    },
    color:'black',
      '&:hover' : {
        color:'#abd2fa',
        backgroundColor:'black',
        "boxShadow":"1px 2px 5px 3px rgba(171,210,250,0.75)","WebkitBoxShadow":"1px 2px 5px 3px rgba(171,210,250,0.75)","MozBoxShadow":"1px 2px 5px 3px rgba(171,210,250,0.75)"
      },
  },
  contact_drop:{
  fontWeight:'550',
  margin:'2%',
  fontFamily: "Cabin, sans-serif",
  },
  contact_inputm:{
  width:'100%',
  margin:'2% auto',
  
  },
  contact_input:{
  width:"46%",
  margin:'2%'
  },
  contact_paper:{
   padding:'2%',
   width:'100%',
   minHeight:'359px',
   maxHeight:'359px',
   borderRadius:'10px'
  },
  section:{
    display:'flex',
    justifyContent:'space-between'
    },
    section_title:{
    position:'relative',
    display:'inline-block',
    padding:'0 3px',
    },
    section_title_text :{
    fontSize:'20px',
    fontWeight:'600',
    position:'relative',
    margin:'0',
    
    },
    span:{
      position:'absolute',
      height:'7px',
      width:'100%',
      bottom:'8px',
      left:'0',
      opacity:'0.4',
      backgroundColor:'#abd2fa'
    },
  
    social:{
     display:'flex',
     marginTop:'25%',
     width:'50%',
     justifyContent:'space-between',
     [theme.breakpoints.between('xs', 'md')]: {
      marginTop:'7%',
    
    },
    },
    maps:{
      
     borderRadius:'10px',
      "boxShadow":"1px 2px 5px 3px rgba(171,210,250,0.75)","WebkitBoxShadow":"1px 2px 5px 3px rgba(171,210,250,0.75)","MozBoxShadow":"1px 2px 5px 3px rgba(171,210,250,0.75)"
    }
}))

export const Contact = () => {
  const { social , details } = resumeData;
  const classes = useStyles()
  return (
    <>
    <Grid container spacing={2} >

     <Grid item xs={12} sx={12} md={6}  lg={6}>
     {/* CONTACT ME */}
     <Grid container style={{ marginTop:'5%'}} className={classes.section}>
    <Grid item  className={clsx(classes.section_title, 'mb_30')}>
     <span className={classes.span} />
       <Typography className={classes.section_title_text}>Contact Me</Typography>
    
    </Grid>
    </Grid>
      {/* CONTACT ME end*/}
      <Paper elevation={3} className={classes.contact_paper}>
        <Typography align='center' className={classes.contact_drop} variant='h6'>Drop me Hi!!🙋🏼‍♂️</Typography>
         <TextField type={'text'} label="Name" variant="outlined" className={classes.contact_input} />
         <TextField className={classes.contact_input}  type={"email"} label="Email" variant="outlined"  />
         <TextField multiline="true" className={classes.contact_inputm} type={'text'} fullWidth label="Message" variant="outlined" minRows={4}   />
         <Typography align='center'><Button className={classes.contact_dropb} >Submit</Button></Typography>
       </Paper>
    </Grid>


   
     <Grid item  xs={12} sx={12} md={6} lg={6}>

         {/* CONTACT Details*/}
     <Grid container style={{ marginTop:'5%'}} className={classes.section}>
    <Grid item  className={clsx(classes.section_title, 'mb_30')}>
     <span className={classes.span} />
       <Typography className={classes.section_title_text}>Contact Details</Typography>
    
    </Grid>
    </Grid>
        {/* CONTACT Details end*/}
        <Paper elevation={3} className={classes.contact_paper}>
       <Grid container>
       <Grid item xs={12} sx={12} md={12} lg={12}>
        {
          details.map((d) => (
            
            <Typography variant='body2' className={classes.contact_value}>
            <TimelineDot variant='outlined' className={classes.timeline_dot}/>
            <span className={classes.contact_title}>{d.title}</span>  : {d.value}
          </Typography>
        //  ))}
          ))
        }
        <Container className={classes.social} >
        {
          social.map((s) => (
            <Typography className={classes.contact_social_icon}>
             <Link href={`${s.link}`} target="_blank"   rel='noopener noreferrer external'   >{s.icon}</Link>
            </Typography>
          ))
        }

        </Container>
       </Grid>
       <Grid xs={12} sx={12} md={12} lg={12}>
         
         </Grid>
       </Grid>
         
         
       </Paper>
       </Grid>
    </Grid>
    <Grid container >
    <Grid container style={{ marginTop:'5%'}} className={classes.section}>
    <Grid item  className={clsx(classes.section_title, 'mb_30')}>
     <span className={classes.span} />
       <Typography className={classes.section_title_text}>Let's Grab Coffee!☕️</Typography>
    
    </Grid>
    </Grid>
    <Grid item xs={12} sx={12} md={12} lg={12}>
      <Container className={classes.maps}>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5076219787547!2d77.5610636149537!3d12.939336619086108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15473defa719%3A0x6669d89ba30af846!2sHari%20PG%20accommodation!5e0!3m2!1sen!2sin!4v1639308601333!5m2!1sen!2sin" width="600" height="450" style={{ border:'0' , width:'100%'}} allowfullscreen="" loading="lazy"></iframe>
      </Container>
    </Grid>
    </Grid>
    </>
  )
}
