import { Grid, Typography  , Button} from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './Timeline/Ctimeline.css'
import { makeStyles } from "@mui/styles";
import clsx from "clsx"
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../utils/resumeData';
import React from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const useStyles = makeStyles((theme) => ({
  title_text:{
  fontSize:'1.5rem',
  fontFamily: "Cabin, sans-serif",
  margin:'3.1%',
  fontWeight:'600'
  },
  c1:{
  fontFamily: "Cabin, sans-serif",
  fontWeight:'550'
  },
  c3:{
  color:'black',
  fontFamily: "Work Sans, sans-serif",

  },
  dur:{
  color:'#787878',
 
  },
  timeline:{
    padding:'0 0 0 5%',
    marginTop:'0',
    
    },
    timeline_firstItem:{
      minHeight:'20px',
      marginLeft:'1.3%'
    },
    timeline_dot:{
      marginLeft:'6.6px',
      marginBottom:'0',
      color:'black',
      backgroundColor:'#abd2fa',
      padding:'7px',
      fontSize:'small',
      [theme.breakpoints.between('sm', 'md')]: {
        marginRight:'25%',
        marginBottom:'0'
      },
    },
    timeline_dot_down:{
      margin:'0 0 0 6%',
      minHeight:'50px',
      [theme.breakpoints.between('sm', 'md')]: {
        marginLeft:'4%',
        marginBottom:'0.6%'
      },
    },
    typo_value:{
      fontWeight:'500',
      color:'#787878'
    },
    typo_title:{
      fontWeight:'550',
      color:'black',
      fontSize:'1rem'
    },
  section_title:{
    position:'relative',
    display:'inline-block',
    padding:'0 3px',
    width:'100%'
    },
    section_title_text :{
    fontSize:'20px',
    fontWeight:'600',
    position:'relative',
    margin:'0'
    },
    section_aboutmetext:{
    color:'#777',
    font:'smaller',
    lineHeight:'22px' , 
    whiteSpace:'pre-line'
    },
    span:{
      position:'absolute',
      height:'7px',
      width:'10%',
      bottom:'8px',
      left:'0',
      opacity:'0.4',
      backgroundColor:'#abd2fa'
    },
    content:{
      margin:'2.5% 1%'
    },
    arrow:{
      marginLeft:'17px',
      paddingTop:'0',
      color:'black',
      position:'relative',
      top:'-5'
     
    }
}))


export const Resume = () => {
  const classes = useStyles()
  const { work  , edu} = resumeData;
  return (
    <Grid container>
          <Grid item  className={clsx(classes.section_title, 'mb_30')}>
     <span className={classes.span} />
       <Typography className={classes.section_title_text}>Resume</Typography>
    
    </Grid>

     <Grid item   md={6} sx={12}>
     <Timeline position="right" className={classes.timeline} >
       <TimelineItem className={classes.timeline_firstItem} >
       <TimelineSeparator>
          <TimelineDot  className={classes.timeline_dot}>{<WorkIcon/>}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Typography className={classes.title_text}>Work History</Typography></TimelineContent>
       </TimelineItem>
      {
        work.map((w) => (
          <TimelineItem key={w.id} className={classes.timeline_dot_down} >
            <TimelineSeparator style={{ padding:'0' , margin:'0'}}>
              <TimelineDot variant='outlined' />

             <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.content}>
                <Typography className={classes.c1} variant='h5'>
                  {w.pos}
                </Typography>
                <Typography className={classes.dur} variant='subtitle1'>
                  {w.dur}
                </Typography>
                <Typography className={classes.c3}  variant='body2'>
                  {w.des}
                </Typography>
              </TimelineContent>
          </TimelineItem>
        ))
      }
     <ArrowDropDownCircleIcon className={classes.arrow} />
    
 
     </Timeline>
     </Grid>
     <Grid item  md={6} sx={12}>
     <Timeline position="right" className={classes.timeline} >
       <TimelineItem className={classes.timeline_firstItem} >
       <TimelineSeparator>
          <TimelineDot  className={classes.timeline_dot}>{<SchoolIcon />}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Typography className={classes.title_text}>Education History</Typography></TimelineContent>
       </TimelineItem>
      {
        edu.map((w) => (
          <TimelineItem key={w.id} className={classes.timeline_dot_down} >
            <TimelineSeparator style={{ padding:'0' , margin:'0'}}>
              <TimelineDot variant='outlined' />

             <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.content}>
                <Typography className={classes.c1} variant='h5'>
                  {w.sch}
                </Typography>
                <Typography className={classes.dur} variant='subtitle1'>
                  {w.dur}
                </Typography>
                <Typography className={classes.c3}  variant='body2'>
                  {w.des}
                </Typography>
              </TimelineContent>
          </TimelineItem>
        ))
      }
     <ArrowDropDownCircleIcon className={classes.arrow} />
    
 
     </Timeline>
     </Grid>
    </Grid>
  )
}

