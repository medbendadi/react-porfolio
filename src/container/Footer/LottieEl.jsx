import Lottie from 'react-lottie'


import SuccessLottie from '../../assets/lotties/blueLottie.json'





const LottieEl = ({ player }) => {

  
  



  const defaultOptions = {
    loop: false,
    autoplay: {player},
    animationData: SuccessLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div ref={el => player = el}>
      <Lottie 
        className='form-lottie'
        options={defaultOptions}
        
        />
    </div>
  )
}

export default LottieEl