import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
      <main>
        <img id="profile__img" src="./1.jpg" alt="This is me" />
        <p id="slack">pels_x</p>
        <p className="name">Akintibubo Pelumi</p>
        <a
          href="https://twitter.com/TemitopePels"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="twitter">Twitter Link</button>
        </a>
  
        <a
          href="https://training.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="btn__zuri">Zuri Team</button>
        </a>
        <a
          href="http://books.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="books">Zuri Books</button>
        </a>
  
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<pels_X>"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="book__python">Python Books</button>
        </a>
        <a
          href="https://background.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="pitch">Background Check for Coders</button>
        </a>
  
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="book__design">Design Books</button>
        </a>
        <Link to={"/contact"}><button id="contact">Contact Me</button></Link>
        
        <div id="logo">
          <img
            className="image"
            src="https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Mark-Logo.wine.svg"
            alt="slack"
          />
          <img
            className="image"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
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
            alt="ingressive for good"
          />
        </div>
      </main>
    );
  }
  export default Home;