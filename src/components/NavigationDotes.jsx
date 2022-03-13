import React from 'react'



const NavigationDotes = ({ active }) => {
  return (
     <div className='app__navigation'>
        {['home', 'about', 'work', 'skills','Testimonials', 'contact'].map((item, index)=> 
            <a
               href={`#${item}`}
               key={item + index}
               className='app__navigation-dot'
               style={active === item ? { backgroundColor: '#4C4C6D' } : {}}
            ></a>
         )}
    </div>
  )
}

export default NavigationDotes