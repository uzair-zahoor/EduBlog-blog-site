import React from 'react'
import Link from 'next/link';
import { Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <Typography variant='subtitle2'>&copy; 2023 EduBlog. All rights reserved</Typography>
        <ul className='f-social'>
                <li><Link className='link' href={'https://twitter.com/'} target='_blank'><TwitterIcon /></Link></li>
                <li><Link className='link' href={'https://www.instagram.com/'} target='_blank'><InstagramIcon /></Link></li>
                <li><Link className='link' href={'https://www.facebook.com/'} target='_blank'><FacebookIcon /></Link></li>
            </ul>
    </footer>
    </>
  )
}

export default Footer
