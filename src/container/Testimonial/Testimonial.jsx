import React , { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'



import { AppWrapp, MotionWrapp } from '../../wrapper'
import { urlFor,client } from '../../client'

import './Testimonial.scss'


function Testimonial() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const query = `*[_type == "testimonials"]`
    const brandsQuery = `*[_type == "brands"]`
    // const currentQuery = `*[_type == "skills"]`

    client.fetch(query).then((data) => {
      setTestimonials(data);
    })
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    })
  }, [])


  const hundelClick = (index) => {
    setCurrentIndex(index)
  }



  const testi = testimonials[currentIndex]
  return (
    <>
      {testimonials.length && (
      <>
          <div className='app__testimonials-item app__flex'>
            <img src={urlFor(testi.imgurl)} alt="testimonial" />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testi.feedback}</p>
              <div>
                <h4 className='bold-text'>{ testi.name }</h4>
                <h5 className='p-text'>{ testi.company }</h5>
              </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => hundelClick(currentIndex ===0 ?  testimonials.length -1 : currentIndex -1)}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => hundelClick(currentIndex === testimonials.length -1 ?  0 : currentIndex  +1)}>
              <HiChevronRight />
            </div>
          </div>
      </>
      )}

      <div className='app__testimonials-add'>
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            className='app__testimonial-add-btn'
        >
          <p className='bold-text'>You want to add your own Feedback</p>
          <a href="#contact">Contact me here</a>

        </motion.div>
      </div>
      
      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}


export default AppWrapp(
  MotionWrapp(Testimonial, 'app__testimonial'), 'testimonial', 'app__whitebg');