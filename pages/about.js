import Footer from '@/components/footer'
import Navigation from '@/components/navbar'
import { Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
  <>
  <Navigation />
  {/* <h1>About</h1> */}
  <div className="about">
  <div className="picture">
    <img src="https://lh3.googleusercontent.com/a/AGNmyxbs202MXx4klTIwchfJVFUri0b-G_YecruGZVKOBA=s288" alt="" />
    <Typography sx={{fontSize:26, fontWeight: 500, marginTop: 1 }}>Uzair Zahoor</Typography>
    <Typography sx={{
        fontSize:16,
        marginBottom:2
    }} variant='subtitle2'>Software Engineer, Content Writer 
    </Typography>
  </div>
  <div className="content">
    <Typography variant='h5' sx={{marginBottom: 1}}>About me</Typography>
    <Typography>As a software engineer, I have been trained on various programming languages, frameworks, and tools. I am able to write efficient and reliable code that meets the requirements of the project, and I am familiar with computer science principles and programming concepts. I can work independently and as part of a team, and I have strong problem-solving skills. <br />
    As a web developer, I have knowledge of various web development frameworks and tools. I can create user-friendly, responsive, and visually appealing websites that meet the needs of clients. I am knowledgeable about web design principles, user experience, and web development best practices. <br />
    As a content writer, I am able to create written content for various mediums, including websites, blogs, and social media. I can produce high-quality content that is engaging, informative, and persuasive to my target audience. I am able to write in a clear and concise manner, conduct research on various topics, and adapt my writing style to fit the brand voice and tone of my clients. I am also familiar with SEO best practices to ensure my content is optimized for search engines.
    </Typography>
  </div>
  </div>
  <Footer />
  </>
  )
}
export default About
