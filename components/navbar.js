import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, IconButton, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';  
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const router= useRouter();
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <AppBar className='navigationbar' position="static">
          <Toolbar className='nav'>
          
            <Typography className='logo' variant="h4">
              EduBlog
            </Typography>
            <IconButton className='menuicon' edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <ul className='menuitems'>
                <li><Link className='link' href={'/'}>Home</Link></li>
                <li><Link className='link' href={'/about'}>About</Link></li>
                <li><Link className='link' href={'/contact'}>Contact</Link></li>
            </ul>
            <ul className='socialitems'>
            <li><Link className='link' href={'https://twitter.com/'} target='_blank'><TwitterIcon /></Link></li>
                <li><Link className='link' href={'https://www.instagram.com/'} target='_blank'><InstagramIcon /></Link></li>
                <li><Link className='link' href={'https://www.facebook.com/'} target='_blank'><FacebookIcon /></Link></li>
            </ul>
          </Toolbar>
        </AppBar>
        <Drawer anchor='right' open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem button  to="/" onClick={()=>{
                router.push('/');
                handleDrawerClose();
            }}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={()=>{
                router.push('/about');
                handleDrawerClose();

            }}>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button  to="/contact" onClick={()=>{
                router.push('/contact');
                handleDrawerClose();
            }}>
              <ListItemIcon><ContactMailIcon /></ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>  
          </List>
          <ul className='social'>
                <li><TwitterIcon /></li>
                <li><InstagramIcon /></li>
                <li><FacebookIcon /></li>
            </ul>
         
        </Drawer>
      </>
    );
  };
  
  export default Navigation;