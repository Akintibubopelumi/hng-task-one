import React from "react";
function Contact() {
  return (
    <><div id="main">
      <h1 id="title">Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind</p>
      <form>
        <div className="side">
          <div>
            <label for="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your firstname" required maxlength="45" />
          </div>

          <div>
            <label for="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your lastname" required maxlength="45" />
          </div>
        </div>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="yourname@email.com" required maxlength="45"/>
        <label for="comment">Message</label>
        <textarea
          id="message"
          name="comment"
          placeholder="Send me a message and i will reply you as soon as possible"  required maxlength="500"/>
        <input type="radio" id="agree" />
        <label for="agree">
          You agree to provide your data to Pelumi who may contact you
        </label>
        <input type="submit" id="btn__submit" value="Send Message" />
      </form>
    </div>
    <hr />
    <div id="footer">
        <h3 className="zuri">
          Zuri<span style={{ color: "#fc2390" }}>.</span>Internship
        </h3>
        <p className="HNG">HNG Internship 9 Frontend Task</p>
        <img
          className="footer"
          src="https://www.vanguardngr.com/wp-content/uploads/2020/11/INGRESS.jpg"
          alt="ingressive for good" />
      </div></>
  );
}
export default Contact;
