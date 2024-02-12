import heroImage from '../../images/illustration-1.svg'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
        
        <input placeholder='Enter your email' type="email" id="email" name="email" required/>
        <button type="submit" className='submit-btn'>Get Started</button>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="hero image" className="hero-image"/>
      </div>
    </div>
  )
}
export default Hero