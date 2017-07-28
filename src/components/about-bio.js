import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class AboutBio extends Component {
  render() {
    return (

    <section className="container aboutSection">
  
      <div className="row">
        <div className="col-md-12 spacer"></div>
      </div> 

      <div className="row">  
        <div className="col-md-3 borderBox">
          <h3>Everything you may want to know</h3> 
        </div>
        
        <div className="col-md-9 bioLinks">
          <p>My creative work, the viral project <a href="https://www.dontcallmeoscar.com">Don't Call Me Oscar</a>, has been featured year-after-year by <a href="http://www.vanityfair.com/hollywood/2017/02/oscar-babies-2017-best-picture-recreations-kids-la-la-land">Vanity Fair</a>, <a href="http://people.com/awards/oscars-2017-best-picture-nominees-kids-posters/">People</a>, <a href="http://www.huffingtonpost.com/entry/adorable-kids-recreate-the-2016-oscar-nominated-movie-posters_us_56cf14cee4b0bf0dab30e69e">Huffington Post</a>, <a href="http://www.today.com/popculture/oscar-greats-see-these-little-girls-re-enact-year-s-t108559">Today</a>, <a href="http://www.indiatimes.com/culture/who-we-are/adorable-sisters-recreate-the-looks-of-oscars-best-picture-nominees-in-the-cutest-way-possible-272203.html">India Times</a>, <a href="http://www.dailymail.co.uk/news/article-4256070/Children-enact-Oscar-nominees-year.html"> Daily Mail</a>, <a href="http://www.chicagotribune.com/lifestyles/ct-kids-dont-call-me-oscars-parenting-20170228-story.html">Chicago Tribune</a>, and more, reaching an audience of several million annually. I received a JD at Notre Dame Law School before diving into the world of full stack development at the Creative Circus, Starter League and Northwestern University.
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
            <div className="col-md-12">
              <ul className="aboutLinks">
                      <li>
                        <a href="https://github.com/mstorino"><img border="0" alt="github" src="portfolio/assets/img/github3.png" width="30" height="30"/>github.com/mstorino</a>
                      </li>
                        
                      <li>
                        <a href="mailto:maggiestorino@gmail.com?subject=Hello Maggie"><img border="0" alt="contact" src="portfolio/assets/img/contact.png" width="30" height="30"/>maggiestorino@gmail.com</a>
                      </li>

                      <li>
                        <a href="https://www.linkedin.com/in/maggiestorino"><img border="0" alt="linkedin" src="portfolio/assets/img/linkedin3.png" width="30" height="30"/>linkedin.com/in/maggiestorino</a>
                      </li>
                </ul>
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













