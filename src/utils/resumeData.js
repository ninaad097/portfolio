/* eslint-disable import/no-anonymous-default-export */
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaptopIcon from '@mui/icons-material/Laptop';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import reviewReserve from '../assests/review-reserve.png'
import todolist from "../assests/to-do-list.png"
import randomApi from "../assests/random-api.png"
import tindog from "../assests/tin-dog.png"
import blog1 from "../assests/blog24:7-1.png"
import blog2 from "../assests/blog24:7-2.png"
import mamaBakery from "../assests/bakery-site.png"
import drumKit from "../assests/drum-kit.png"
import React from "react"
import { GitHub, Language } from '@mui/icons-material';

export default {
  details: [
    {
      title: 'Name',
      value: 'Ninad Sonawane'
    },
    {
      title: 'Email',
      value: 'ninad1064@gmail.com'
    },
    {
      title: 'Phone No.',
      value: '91+ 9106477259'
    },
    {
      title: 'Location',
      value: 'Bengaluru , India'
    },
    {
      title: 'Job',
      value: 'Freelancer'
    },
  ],
  social: [
    {
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/ninad-sonawane-ab4761205',
      icon: <LinkedInIcon />,
      id: '1'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/ninadsonawane_/',
      icon: <InstagramIcon />,
      id: '2'
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/ninadsonawane_',
      icon: <TwitterIcon />,
      id: '3'
    },

  ],
  about: "Hello, I'm Ninad Sonawane. I'm pursuing my Bachelor of Engineering from BMSCE Bangalore. I'm a self-taught full-stack web developer, who is open to learning any new kind of technology. I am also a teamplayer who loves learning from people and building networks. \n I want to work with startups and grow in the dynamic ecosystem. In a nutshell, I'm just a curious guy who wants to get his hands on the latest tech out there. So, just drop a Hi and let me know how can I be help to you ",
  work: [
    {
      pos: "Content Manager",
      dur: "Jan-2021 to May-2021",
      des: "Created and managed content creators integrating with the startup Worked in small teams  maintained and  managed content streaming on Dotphile.",
      id: '1'
    },
    {
      pos: "Website Developer",
      dur: "Jan-2021 to May-2021",
      des: " Responsible for developing and maintenance of website for EEA Association.  Leading the website developing team for the club.",
      id: '2'
    },
    {
      pos: "Full Stack Developer",
      dur: "Feb-2021 to Present",
      des: "Working as Full-Stack Developer at 'The Media Ant'. Mainly responsible for creating dynamic UI for the startup. I also worked on the design part and state mangement of the website.",
      id: '3'
    }

  ],
  edu: [
    {
      sch: 'Full-Stack Development',
      dur: 'Feb-2021 to June-2021',
      des: 'Practiced MERN stack framework with handling authentication process, database operations, google OAuth, hashing passwords, Built more than 10 projects during this bootcamp by Dr Angela Yu.'
    },
    {
      sch: 'Engineering- BMSCE BLR',
      dur: 'JAN-2021 to Apr-2024',
      des: 'Pursuing my engineering in Electronics and electrical engineering from BMSCE Bangalore. Im currently in 2nd year. '
    },
    {
      sch: 'Academics- APS Silvassa',
      dur: 'June-2018 to Apr-2020',
      des: 'Completed my high school from Alok Public School with 85% in 5 subjects.'
    }
  ],
  services: [
    {
      icon: <CodeIcon style={{ width: '100%' }} />,
      pos: 'Web Developer',
      des: 'I have experience of developing for now more than 8 months',
      id: '1'
    },
    {
      icon: <LaptopIcon style={{ width: '100%' }} />,
      pos: 'Open for new Tech',
      des: 'I am open to learn any kind of new tech. I keep updating myself.',
      id: '2'
    },
    {
      icon: <AccessTimeIcon style={{ width: '100%' }} />,
      pos: 'Part time working',
      des: "Can work as part time. I'll be able to work 2-3 hours a day. ",
      id: '3'
    },
  ],
  skills: [
    {
      id: '1',
      title: 'FRONT-END',
      description: ['ReactJs', 'NextJs', 'JavaScript', 'Material-UI', 'Bootstrap']
    },
    {
      id: '2',
      title: 'BACK-END',
      description: ['NodeJS', 'ExpressJS', 'Solidity'],
    },
    {
      id: '3',
      title: 'DATABASES',
      description: ['MongoDb', 'MySQL'],
    },
    {
      id: '4',
      title: 'SOURCE-CONTROL',
      description: ['Git', 'Github'],
    }
  ],
  projects: [
    {
      tag: 'React',
      image: todolist,
      title: 'To-Do List',
      description: 'Its a simple to-do list with CRUD operations built on ReactJs',
      links: [
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ]
    },
    {
      tag: 'MERN',
      image: reviewReserve,
      title: 'Review Reserve',
      description: 'Review Reserve is a simple social media where users and post reviews and lot more.',
      links: [
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ]
    },
    {
      tag: 'MERN',
      image: blog2,
      title: 'Blog24/7',
      description: 'Blog24/7 is also built on MERN Stack. Users can write blogs and it will be stored later in mongDB database.',
      links: [
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ]
    },
    {
      tag: 'JavaScript',
      image: drumKit,
      title: 'Drum-kit',
      description: 'Its a simple drum kit website..',
      links: [
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ]
    },
    {
      tag: 'React',
      image: randomApi,
      title: 'Random Advice',
      description: 'Simple website giving you random thoughts!',
      links: [
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ]
    },
    {
      tag: 'NextJs',
      image: mamaBakery,
      title: "Mama's Bakery",
      description: 'Simple landing page for bakery build on nextjs',
      links: [
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ]
    }
  ]
}