import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './Ctimeline.css'
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles((theme) => ({
  timeline:{
  padding:'0 0 0 5%',
  marginTop:'-45px'
  },
  timeline_firstItem:{
    minHeight:'20px',
    
  },
  timeline_dot:{
    marginLeft:'7px',
    marginBottom:'0',
    color:'black',
    backgroundColor:'#abd2fa',
    padding:'7px',
    fontSize:'small',
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft:'16px',
      marginBottom:'-2px',
    },
  },
  timeline_dot_down:{
    margin:'0 0 0 6%',
    minHeight:'50px',
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft:'5.2%',
      marginBottom:'0'
    },
  },
  typo_value:{
    fontWeight:'500',
    color:'#787878',
    fontFamily: "Cabin, sans-serif",
  },
  typo_title:{
    fontWeight:'600',
    color:'black',
    fontSize:'1rem',
   
  }
}))

const data = [
  {
   'title' : 'Name',
   "value": "Ninad Sonawane",
   "id":"1"
  },
  {
    'title' : 'Born',
   "value": "06 Nov 2002",
   "id":"2"
   },
   {
   "title" : "Location",
   "value":"Bengaluru,India",
   "id":"3"
   },
   {
     "title":"OPEN TO WORK",
     "value":"",
     "id":"4"
   },
]
export const CTimeline = () => {
  const classes = useStyles()
  return (
    <div>
      <Timeline className={classes.timeline} position='right'>
      <TimelineItem className={classes.timeline_firstItem}>
        <TimelineSeparator>
          <TimelineDot  className={classes.timeline_dot}>{<PersonIcon/>}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>

      {
        data.map((s) => (
          <TimelineItem key={s.id} className={classes.timeline_dot_down}>
          <TimelineSeparator style={{ padding:'0' , margin:'0'}}>
          <TimelineDot  variant="outlined" />
          <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{ marginLeft:'0' }}>
            { s.link ? (
              <Typography className={classes.typo_value} variant="subtitle1">
                <span className={classes.typo_title}>{s.title}</span>
                <a style={{ textDecoration:'none' ,  color:'#787878' , fontSize:'1.0001rem'}} target="_blank" rel="noreferrer" href={`mailto : ${s.link}`}>{`: ${s.value}`}</a>
              </Typography >
            )  :
             (<Typography className={classes.typo_value} variant="subtitle1"  >
                <span className={classes.typo_title}>{s.title}</span>: {s.value}
              
              {/* {`${s.title} : ${s.value}`} */}
             </Typography>)}</TimelineContent>
          </TimelineItem>
        ))
      }

      {/* <TimelineItem className={classes.timeline_dot_down}>
        <TimelineSeparator>
          <TimelineDot  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Name: Ninad</TimelineContent>
      </TimelineItem> */}

  
     
    </Timeline>
    </div>
  )
}
