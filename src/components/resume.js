import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class Resume extends Component {
  render() {
    return (

      <section className="aboutSection">
      <div className="container">
        <div className="row">
          <div className="col-md-12 borderBox">
            <h3>Resume</h3>
          
            <div className="btn-group"></div>

            <div className="row resume">

              <div className="col-md-3">
                  
                  <a href="assets/img/resume.pdf" download>
                    <button className="btn btn-default btn-sm" type="button" aria-haspopup="true"><span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download Resume
                    </button>
                  </a>
                  
              </div>

              <div className="col-md-4">
              
                <ul>
                  <li><h3><span className="glyphicon glyphicon-apple" aria-hidden="true"></span> Education</h3>
                    <ul>
                      <li><strong>Northwestern University Bootcamp (2017 | Evanston,IL)</strong> &#8212; Project-based full-stack web development course within the School of Professional Studies</li>
                      
                      <li><strong>Starter League (2013 | Chicago, IL)</strong> &#8212; Advanced HTML5 / CSS3 and web design courses.</li>

                      <li><strong>Creative Circus (2010 | Atlanta, GA)</strong> &#8212; Front end development program specializing in pixel-perfect design and user experience.</li>

                      <li><strong>Notre Dame Law School, JD, cum laude (2005 | Notre Dame, IN)</strong> &#8212; Dean’s List ’03-05, awarded highest grade in Evidence and Remedies classes, attended Notre Dame Program of International Law (London, England ’03-’04</li>

                      <li><strong>Barnard College, Columbia University, BA magna cum laude (2002| NY, NY)</strong> &#8212; Dean’s List ’99 - ’01; Academic All Ivy ’02, Barnard College Leadership Award 2002, Columbia University Leadership Award ’02, Rhodes Scholar nominee. Columbia University Women’s Crew ’98-’02, Crew Captain ’01-’02</li>

                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col-md-1"></div>

              <div className="col-md-4">
              
                <ul>
                  <li><h3><span className="glyphicon glyphicon-console" aria-hidden="true"></span> Experience</h3>
                    <ul>
                      <li><strong>Creative, Don’t Call Me Oscar (2010 - present)</strong> &#8212; Created viral blog with massive global reach of several million, featured annually in Vanity Fair, Today, Daily Mail, People, Chicago Tribune, Mashable, Huffington Post, BuzzFeed, etc. @dontcallmeoscar</li>
                      
                      <li><strong>Small Business Websites and Digital Presence (2013 - 2017)</strong> &#8212; Establish digital presence and improved SEO for local businesses for clients to maintain.
                      Examples: simplifycjs.com (implement graphic design) | salliestanleystudio.com (organize body of work into concise digital portfolio) | willowwood-preschool.org (create site and MailChimp campaign for school to maintain)
                      </li>

                      <li><strong>Attorney, Bankruptcy and Complex Litigation (2005 – 2010)</strong> &#8212; Front end development program specializing in pixel-perfect design and user experience.</li>

                    </ul>
                  </li>
                </ul>

              </div>

            </div>  
          </div>
        </div>
      </div>
      <div className="container-fluid aboutSectionEnd"></div>
      </section>


    );
  }
}




