import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import ReactTooltip from 'react-tooltip'

import { AppWrapp, MotionWrapp } from '../../wrapper'
import { urlFor,client } from '../../client'

import './Skills.scss'


function Skills() {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  useEffect(() => {
    const query = `*[_type == "experiences"]`
    const skillsQuery = `*[_type == "skills"]`

    client.fetch(query).then((data) => {
      setExperience(data);
    })
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills and Experience</h2>


      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration:0.5 }}
              className='app__skills-item app__flex'
              key={skill._id}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>


        <motion.div className='app__skills-exp'>
          {experience?.map((works) => (
            <motion.div
              className='app__skills-exp-item'
              key={works._id + works.year}
            >
              <div className='app__skills-exp-year' key={works.year + works._id}>
                <p className='bold-text'>{ works.year }</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {works.works.map((work) => (
                    <div key={works._id + work.name}>
                    <motion.div
                    
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration:0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={works.year + work.name}
                    >
      
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{ work.company }</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#4C4C6D'
                      class='skills-tooltip'
                      key={work.name + works.year}
                    >
                      { work.desc }
                    </ReactTooltip>
                  </div>
                  
                ))}
              </motion.div>
            </motion.div>
          ))}
          
        </motion.div>
      </div>
    </>
  )
}


export default AppWrapp(
  MotionWrapp(Skills, 'app__skills'), 'skills', 'app__whitebg');