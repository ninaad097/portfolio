import { Container , Grid} from '@mui/material';
import { ThemeProvider } from "@mui/styles";

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Resume } from './components/Resume';

import { Portfolio } from './components/Portfolio';
import { Profile } from './components/Profile';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Particle } from './components/Particle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/About';
import { Contact } from './components/Contact';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Particle/>
    <div className='all'>
     <Container className="top_60">
     <Grid container spacing={4}>
 
     <Grid item xs={12} sx={12} md={4} lg={3} >
      <Profile />
     </Grid>
     <Grid xs item >
       <Header/>
       <Router>
         <div className="main">

         <Routes>
           <Route exact path="/" element={<About />} />
           <Route exact path="/contact" element={<Contact />} />

           <Route exact path="/resume" element={<Resume />} />
           <Route exact path="/portfolio" element={<Portfolio />} />
         </Routes>
         </div>
       </Router>
       <Footer/>
     </Grid>
     </Grid>
     </Container>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
