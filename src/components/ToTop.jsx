import React, { useState, useEffect, useRef } from 'react'
import { gsap, TweenMax } from "gsap";


import { HiChevronUp } from 'react-icons/hi'




const ToTop = () => {
   let el = useRef();
   const [handleShow, setHandleShow] = useState(false);

   function scrollUp() {
      if (window.scrollY >= 1200) {
         setHandleShow(true);
      }
      else {
         setHandleShow(false)

      }
   }
         (handleShow) ?  TweenMax.to(el.current, { x : 0, duration:0.5, opacity:1}) : TweenMax.to(el.current, { x: 100, duration: 0.5, opacity: 0 })

   useEffect(() => {
      setHandleShow(window.addEventListener('scroll', ()=> scrollUp()))
   }, [])
   return (
      <div className={`app__goTop`} ref={el}>
      <a href="#home">
         <HiChevronUp/>
      </a>
   </div>
   )
   
}

export default ToTop