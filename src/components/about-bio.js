import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class AboutBio extends Component {
  render() {
    return (

    <section className="container-fluid aboutSection">
  
      <div className="row">
        <div className="col-md-12 spacer"></div>
      </div> 

      <div className="row">  
        <div className="col-md-3 borderBox">
          <h3>Everything you want to know</h3> 
        </div>
        
        <div className="col-md-9 borderBox">
          <p>My creative work, the viral project <a href="https://www.dontcallmeoscar.com">Don't Call Me Oscar</a>, has been featured year-after-year by Vanity Fair, People, Huffington Post, Today, Good Morning America, CBS, the Daily Mail, and more, reaching an audience of several million annually. I received a JD at Notre Dame Law School before diving into the world of full stack development at the Creative Circus, Starter League and Northwestern University.
          </p>
        </div>

      </div> 

      <div className="row">
        <div className="col-md-12 spacer"></div>
      </div> 
      
      <div className="row">
        <div className="col-md-3 borderBox">
          <h3>Contact</h3>
        </div>
       
        <div className="col-md-9 borderBox">

          <div className="row">
            <div className="col-md-8">
              <ul className="aboutLinks">
                      <li>
                        <a href="https://github.com/mstorino"><img border="0" alt="github" src="assets/img/github3.png" width="30" height="30"/>github.com/mstorino</a>
                      </li>
                        
                      <li>
                        <a href="mailto:maggiestorino@gmail.com?subject=Hello Maggie"><img border="0" alt="contact" src="assets/img/contact.png" width="30" height="30"/>maggiestorino@gmail.com</a>
                      </li>

                      <li>
                        <a href="https://www.linkedin.com/in/maggiestorino"><img border="0" alt="linkedin" src="assets/img/linkedin3.png" width="30" height="30"/>linkedin.com/in/maggiestorino</a>
                      </li>
                </ul>
            </div>

            <div className="col-md-4">cool image here
            </div>
          </div> 
        </div> 
      </div> 

      <div className="row">
        <div className="col-md-2 spacer"></div>
      </div> 

      <div className="row">
        <div className="col-md-3 borderBox">
          <h3>Skills</h3>
        </div>

        <div className="col-md-9 borderBox">

          <div className="row">
            <div className="col-xs-4">
              <ul>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="col-xs-4">
              <ul>
                
                <li>Javascript</li>
                <li>Handlebars</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="col-xs-4">
              <ul>
                <li>Bootstrap</li>
                <li>CSS3/HTML5</li>
                <li>Squarespace</li>
                <li>MailChimp</li>
                <li>Adobe Suite</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
 










    </section>


    );
  }
}













