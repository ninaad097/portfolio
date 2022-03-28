/* eslint-disable import/no-anonymous-default-export */
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaptopIcon from '@mui/icons-material/Laptop';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import  discord  from "../assests/discord.png"

import React from "react"
import { GitHub, Language, YoutubeSearchedForOutlined } from '@mui/icons-material';

export default {
  details: [
  {
    title:'Name',
    value:'Ninad Sonawane'
  },
  {
    title:'Email',
    value:'ninad1064@gmail.com'
  },
  {
    title:'Phone No.',
    value:'91+ 9106477259'
  },
  {
    title:'Location',
    value:'Bengaluru , India'
  },
  {
    title:'Job',
    value:'Freelancer'
  },
  ],
  social: [
    {
     title:'LinkedIn',
     link:'https://linkedin.com/in/ninad-sonawane-ab4761205',
     icon:<LinkedInIcon />,
     id:'1'
    },
    {
      title:'Instagram',
      link:'https://www.instagram.com/ninadsonawane_/',
      icon:<InstagramIcon />,
      id:'2'
     },
     {
      title:'Twitter',
      link:'https://twitter.com/ninadsonawane_',
      icon:<TwitterIcon />,
      id:'3'
     },
    
  ],
  about:"Hello, I'm Ninad Sonawane from BMSCE  Bangalore pursuing engineering.I am a self-taught full-stack web developer. I am open to learning any new kind of tech. I like working with small teams, learning from people, building networks, growing. \n I want to work with startups and get into the ecosystem. So overall I'm just a curious guy who wants to get hands on the latest tech out there. So, just drop hii and let me know how can I help you ",
  work: [
    {
      pos:"Content Manager",
      dur:"Jan-2021 to May-2021",
      des:"Created and managed content creators integrating with the startup Worked in small teams  maintained and  managed content streaming on Dotphile.",
      id:'1'
    },
    {
      pos:"Website Developer",
      dur:"Jan-2021 to May-2021",
      des:" Responsible for developing and maintenance of website for EEA Association.  Leading the website developing team for the club.",
      // Leading the website developing team for the club.",
      id:'2'
    }

  ],
  edu : [
    {
      sch:'Full-Stack Development',
      dur:'Feb-2021 to June-2021',
      des:'Practiced MERN stack framework with handling authentication process, database operations, google OAuth, hashing passwords, Built more than 10 projects during this bootcamp by Dr Angela Yu.'
    },
    {
      sch:'Engineering- BMSCE BLR',
      dur:'JAN-2021 to Apr-2024',
      des:'Pursuing my engineering in Electronics and electrical engineering from BMSCE Bangalore. Im currently in 2nd year. '
    },
    {
      sch:'Academics- APS Silvassa',
      dur:'June-2018 to Apr-2020',
      des:'Completed my high school from Alok Public School with 85% in 5 subjects.'
    }
  ],
  services:[
    {
      icon:<CodeIcon style={{ width:'100%'}} />,
      pos:'Web Developer',
      des:'I have experience of developing for now more than 8 months',
      id:'1'
    },
    {
      icon:<LaptopIcon style={{ width:'100%'}}  />,
      pos:'Open for new Tech',
      des:'I am open to learn any kind of new tech. I keep updating myself.',
      id:'2'
    },
    {
      icon:<AccessTimeIcon style={{ width:'100%'}} />,
      pos:'Part time working',
      des:"Can work as part time. I'll be able to work 2-3 hours a day. ",
      id:'3'
    },
  ],
  skills:[
    {
      id:'1',
      title:'FRONT-END',
      description:['ReactJs' , 'NextJs' , 'JavaScript' , 'Material-UI' , 'Bootstrap']
    },
    {
      id:'2',
      title:'BACK-END',
      description:['NodeJS' , 'ExpressJS' , 'Solidity'],
    },
    {
      id:'3',
      title:'DATABASES',
      description:['MongoDb' , 'MySQL'],
    },
    {
      id:'4',
      title:'SOURCE-CONTROL',
      description:['Git' , 'Github'],
    }
  ],
  projects:[
    {
      tag:'React',
      image:'https://upload.wikimedia.org/wikipedia/commons/6/66/Adult_male_Royal_Bengal_tiger.jpg',
      title:'First React Project',
      description:'This is my first react project',
      links:[
        { link:'https://www.google.com' , icon: <GitHub /> },
        { link:'https://www.google.com' , icon: <YoutubeSearchedForOutlined /> },
        { link:'https://www.google.com' , icon: <Language /> },
      ]
    },
    {
      tag:'MERN',
      image:'https://upload.wikimedia.org/wikipedia/commons/6/66/Adult_male_Royal_Bengal_tiger.jpg',
      title:'First MERN Project',
      description:'This is my first react project',
      links:[
        { link:'https://www.google.com' , icon: <GitHub /> },
        { link:'https://www.google.com' , icon: <YoutubeSearchedForOutlined /> },
        { link:'https://www.google.com' , icon: <Language /> },
      ]
    },
    {
      tag:'React',
      image:'https://upload.wikimedia.org/wikipedia/commons/6/66/Adult_male_Royal_Bengal_tiger.jpg',
      title:'Second React Project',
      description:'This is my first react project',
      links:[
        { link:'https://www.google.com' , icon: <GitHub /> },
        { link:'https://www.google.com' , icon: <YoutubeSearchedForOutlined /> },
        { link:'https://www.google.com' , icon: <Language /> },
      ]
    },
    {
      tag:'Flutter',
      image:'https://upload.wikimedia.org/wikipedia/commons/6/66/Adult_male_Royal_Bengal_tiger.jpg',
      title:'First Flutter Project',
      description:'This is my first react project',
      links:[
        { link:'https://www.google.com' , icon: <GitHub /> },
        { link:'https://www.google.com' , icon: <YoutubeSearchedForOutlined /> },
        { link:'https://www.google.com' , icon: <Language /> },
      ]
    },
  ]
}