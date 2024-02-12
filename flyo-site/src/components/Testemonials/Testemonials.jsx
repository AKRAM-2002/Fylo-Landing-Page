
import arrow from '../../images/icon-arrow.svg';
import curve from '../../images/bg-curve-desktop.svg';
import testemonialtImage from '../../images/illustration-2.svg';
import quotes from '../../images/icon-quotes.svg'
import avatar from '../../images/avatar-testimonial.jpg'
import './Testemonials.css'

const Testemonials = () => {
  return (

   <>
   <div className="curve-img">
     <img src={curve} alt="curve" />
   </div>
   
   <div className="testesmonial-section">
    <div className="testesmonial-left">
      <h1>Stay productive, whenever you are</h1>
      <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
      <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
      <div className="link">
        <a href="" target='_blank'>See how Flyo works</a>
        <img src={arrow} alt="" />
      </div>
      <div className="testemonial-card">
        <img src={quotes} alt="" />
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine</p>
        <div className="user-profile">
            <img src={avatar} alt=""  />
            <div className="username">
            <h4>Kyle Burton</h4>
            <h6>Founder & CEO, Huddle</h6>
            </div>
        </div>
      </div>
    </div>
    <div className="testesmonial-right">
      <img src={testemonialtImage} alt="People" className="teste-image"/>
    </div>
  </div>
   </>
  )
}
export default Testemonials