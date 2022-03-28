import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@mui/styles'
import resumeData from '../utils/resumeData'
import './Port.css'
const useStyles  = makeStyles((theme) => ({
  dialog:{
  height:'90%',
  },
  dialog_des:{
  marginTop:'10px'
  },
  dialog_img:{
    minHeight:'70%',
    objectFit:'cover',
    objectPosition:'center center',
    padding:'auto 5%'
  },
  dialog_links:{
  justifyContent:'center',
  marginBottom:'10px'
  },
  dialog_title:{
  fontWeight:'600'
  },
  card:{
height:'100%',
maxWidth:'250px',
borderRadius:'5px',
outlineWidth:'0',
overflow:'hidden',
boxShadow: "-3px 1px 5px 2px rgba(171,210,250,0.75)",
WebkitBoxShadow: "-3px 1px 5px 2px rgba(171,210,250,0.75)",
MozBoxShadow: "-3px 1px 5px 2px rgba(171,210,250,0.75)",
 [theme.breakpoints.down("sm")]: {
  
  
    },
  },
  card_image:{
  height:'140px'
  },
  card_des:{
    fontWeight:'300',
    color:'#787878'
  },
  card_title:{
  fontWeight:'600'
  },
  custom_tabs:{
  padding:'auto',
  minWidth:'auto',
  marginRight:'auto',
  textTransform:'inherit',
  fontSize:'19px',
  fontWeight:'600',
  outlineWidth:'0',
  width:'80%',
  [theme.breakpoints.down("sm")]: {
    display:'flex',
    width:'auto',
    margin:'auto',
    justifyContent:'space-around'
      },
  
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
    }
}))
export const Portfolio = () => {
  const matches = useMediaQuery('(min-width:430px)');
  const [tabvalue , setTabValue] = useState("All");
  const [projectDialog , setprojectDialog] = useState(false);
  const classes = useStyles()
  return (
    <div>
   <Grid container className={classes.section} spacing={1}>
    <Grid item  className={clsx(classes.section_title, 'mb_30')}>
     <span className={classes.span} />
       <Typography className={classes.section_title_text}>Projects</Typography>
    
    </Grid>
    <Grid item lg={12} >
     
    <Tabs orientation={matches  ?  "horizontal" : "vertical"}
         className={classes.custom_tabs} indicatorColor='white' value={tabvalue} onChange={(event , newvalue) =>  setTabValue(newvalue)} >


   
      <Tab value="All" label="All" className={clsx(classes.custom_item, tabvalue === 'All' ? 'active' : null)} />
      

      {[...new Set(resumeData.projects.map(p => p.tag))].map((tag) =>  (
        <Tab className={clsx(classes.custom_item, tabvalue === tag ? 'active' : null)}  value={tag} label={tag} /> 

      ))}

    </Tabs>

    <Grid item lg={12} >
      <Grid container spacing={2}>
        {
          resumeData.projects.map((p ) => (
            <>
            { tabvalue === p.tag || tabvalue === 'All' ?  (

            <Grid item  xl={3} lg={4} md={4} sm={4} xs={matches ? 6 : 12}>
              <Grow   in >

              <Card className={classes.card} onClick={() => setprojectDialog(p)}>
                <CardActionArea>
                  <CardMedia className={classes.card_image}  image={p.image} />
                  <CardContent>
                    <Typography className={classes.card_title}  variant='h5'>{p.title}</Typography>
                    <Typography className={classes.card_des}  variant='body1'>{p.description}</Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
              </Grow>
            </Grid>
            ) : null}
            </>
          ))
        }
      </Grid>
    </Grid>
    </Grid>
    <Dialog fullWidth maxWidth className={classes.dialog} open={projectDialog} onClose={() => setprojectDialog(false)}>
     <DialogTitle className={classes.dialog_title} open={projectDialog} onClose={() => setprojectDialog(false)}>
     {projectDialog.title}
     </DialogTitle> 
     <img src={projectDialog.image} alt="s" className={classes.dialog_img} />
     <DialogContent>
       <Typography className={classes.dialog_des} variant='body1' >{projectDialog.description}</Typography>
     </DialogContent>
     <DialogActions>
       { projectDialog?.links?.map((l , i) => (
         <Typography align='center' key={i}>  <a className={classes.dialog_links} href={l.link}>{l.icon}</a></Typography>
       
       ))}
     </DialogActions>
    </Dialog>
    </Grid>
    </div>
    
  )
}
