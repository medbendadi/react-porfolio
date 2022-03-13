import React, { useState, useRef } from 'react'


import LottieEl from './LottieEl'
import { images } from '../../constants'
import { AppWrapp, MotionWrapp } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'
import { gsap, TweenMax } from "gsap";


function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)


  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;


    setFormData({ ...formData, [name]: value })
  }


  let formSuccess = useRef();
  let footerCards = useRef();
  let h2 = useRef();




  

  const handelSubmit = () => {
    TweenMax.to(formSuccess.current, { y: 40, opacity: 0, stagger: 0.05, ease: 'Circ.easeOut' })
    TweenMax.to(footerCards.current, { opacity: 0, stagger: 0.05, ease: 'Circ.easeOut' }, "-=0.4")
    TweenMax.to(h2.current, { opacity: 1, duration:2,y:20 ,ease: 'Circ.easeOut' }, "-=0.4")
    
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact).then(() => {
      setLoading(false);
      setTimeout(() => {
        // player.play()
        setIsFormSubmitted(true)
      }, 800)
    })
  }


  return (
    <>
      {!isFormSubmitted ?  
        <>
        <h2 className='head-text'>Take a Coffee and chat With me </h2>

        <div className='app__footer-cards' ref={footerCards}>
          <div className='app__footer-card'>
            <img src={images.email} alt="email" />
            <a href="mailto:itsbendadi@gmail.com" className='p-text'>itsbendadi@gmail.com</a>
          </div>
          <div className='app__footer-card'>
            <img src={images.mobile} alt="mobile" />
            <a href="tel: +212658242188" className='p-text'>+212658242188</a>
          </div>
        </div>
        <div className='app__footer-form seq app__flex' ref={formSuccess}>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea className='p-text' placeholder='Your message / Feedback' name='message' value={message} onChange={handleChangeInput} ></textarea>
        </div>
        <button type='button' className='p-text' onClick={handelSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
          </div>
        </>
      :
      
        <div className='app__footer-form-success'>
          <p className='head-text form-success-title' ref={h2}>Succeeded !</p>
          <LottieEl player={isFormSubmitted}/>
        </div>
      }
      
      
    </>
  )
}

// export default Footer

export default AppWrapp(
  MotionWrapp(Footer, 'app__footer'), 'contact', 'app__whitebg');