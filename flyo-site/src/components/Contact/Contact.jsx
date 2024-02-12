import './Contact.css'


const Contact = () => {
  return (
   <>
   <div className="contact-section">
    <div className="contact-left">
      <h1>Get early access today</h1>
      <p> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
     
    </div>
    <div className="contact-right">
        <input placeholder='email@example.com' type="email" id="email" name="email" required/>
        <button type="submit" className='submit-btn'>Get Started For Free</button>
    </div>
   </div>
   </>
  )
}
export default Contact