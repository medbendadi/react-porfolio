import React from 'react'

import './About.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { AppWrapp, MotionWrapp } from '../../wrapper'

import { urlFor, client } from '../../client'


// const abouts =[
//   {
//     title: 'Web Development',
//     description: 'I am a Good web developer',
//     imgUrl: images.about01
//   },
//   {
//     title: 'Frontend Development',
//     description: 'I am a Good web developer',
//     imgUrl: images.about02
//   },
//   {
//     title: 'Backend Development',
//     description: 'I am a Good web developer',
//     imgUrl: images.about04
//   },
// ]




function About() {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'


    client.fetch(query).then((data)=> setAbouts(data))


    }
, [])
  
  return (
    <>
      <h2 className='head-text app__profiles-title'>I know that <span> Clean Code</span><br />means <span> Clean Project</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0,1] }}
            whileHover={{ scale: 1.05 }}
            
            translate={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrapp(
  MotionWrapp(About, 'app__about'), 'about', 'app__aboutbg');