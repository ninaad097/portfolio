import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Paper, Typography } from '@mui/material'
import TimelineDot from '@mui/lab/TimelineDot';

import resumeData from '../utils/resumeData'
import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
  justifyContent:{
    [theme.breakpoints.down("xs")]: {
      
    },
  },
  skill:{
  borderRadius:'8px',
  padding:'20px',
  minHeight:'186px',
  boxShadow: "3px 3px 19px 7px rgba(171,210,250,0.43)",
  WebkitBoxShadow: "3px 3px 19px 7px rgba(171,210,250,0.43)",
  MozBoxShadow: "3px 3px 19px 7px rgba(171,210,250,0.43)",
  height:'100%'
      },
  skill_title:{
    fontFamily: "Cabin, sans-serif",
    fontWeight:'600',
   fontSize:'14px',
   
   lineHeight:'35px'
  },
  skill_des:{
  display:'flex',
  alignItems:'center',
  
  fontWeight:'400',
  lineHeight:'18px',
  color:'black',
  fontFamily: "Work Sans, sans-serif",
  },
  timeline_dot:{
  borderColor:'#abd2fa',
  padding:'4px',
  marginRight:'5%'
  },
  service:{

  },
  service_des:{
    color:'black',
    fontFamily: "Work Sans, sans-serif",
  },
  service_icon:{

   margin:'0 auto',
   padding:'0'
  },
  service_pos:{
    fontFamily: "Cabin, sans-serif",
    fontWeight:'600'
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
  section_aboutmetext:{
  // color:'#777',
  font:'large',
  lineHeight:'22px' , 
  whiteSpace:'pre-line',
  color:'black',
  fontFamily: "Work Sans, sans-serif",
  fontWeight:'500'
  },
  span:{
    position:'absolute',
    height:'7px',
    width:'100%',
    bottom:'8px',
    left:'0',
    opacity:'0.4',
    backgroundColor:'#abd2fa' ,
    // [theme.breakpoints.down("md")]: {
    //   backgroundColor:'red' 
    // },
  },
 

}))

export const About = () => {
  const classes = useStyles()
  const { services , skills} = resumeData;
  
  return (
    <>
    {/* Aboutme */}
    <Grid container className={clsx(classes.section, 'pb_45')}>
    <Grid item  className={clsx(classes.section_title, 'mb_30')}>
     <span className={classes.span} />
       <Typography className={classes.section_title_text}>About Me</Typography>
    
    </Grid>
    <Grid item >
     <Typography className={classes.section_aboutmetext}>{resumeData.about}</Typography>
    </Grid>
    </Grid>
    {/* Services */}
    <Grid container  className={classes.section}>
    <Grid item  className={clsx(classes.section_title, 'mb_30')}>
     <span className={classes.span} />
       <Typography className={classes.section_title_text}>Services</Typography>
    
    </Grid>
    </Grid>
    <Grid container spacing={5} justifyContent={'space-around'}  className={classes.section}>
    {
    services.map((s) => (
      <Grid className={classes.service}  item xs={12} sx={4} md={4} key={s.id}>
    

       
        <Typography variant='h6'   className={classes.service_icon}>{s.icon}</Typography>
        <Typography align="center" variant='h6' className={classes.service_pos}>{s.pos}</Typography>
        <Typography align="center"  variant='body2' className={classes.service_des}>{s.des}</Typography>

      </Grid>
    ))
    }
    </Grid>
    {/* Skills */}
    <Grid container style={{ marginTop:'5%'}} className={classes.section}>
    <Grid item  className={clsx(classes.section_title, 'mb_30')}>
     <span className={classes.span} />
       <Typography className={classes.section_title_text}>Skills</Typography>
    
    </Grid>
    </Grid>
     <Grid className={classes.section_skill} container spacing={2} justifyContent={'space-between'} >
     {
       skills.map((skill) => (
         <Grid className={classes.justifyContent}  item  xl={3} lg={3} md={4} sm={4} xs={6} key={skill.id}>
          <Paper elevation={0} className={classes.skill}>
            <Typography variant='h6'className={classes.skill_title}>
              {skill.title}
            </Typography>
            {skill.description.map((des) => (
              <Typography variant='body2' className={classes.skill_des}>
               <TimelineDot variant='outlined' className={classes.timeline_dot}/>
               {des}
             </Typography>
            ))}
          </Paper>
         </Grid>
       ))
     }
     </Grid>
    </>
  )
}
