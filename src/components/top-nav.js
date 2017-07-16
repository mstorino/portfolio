import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class TopNav extends Component {
  render() {
    return (
      
		<nav className="navbar navbar-default topNav">
		  
		    <div className="navbar-header">
		      <Link className="navbar-brand" to="/">Maggie Storino</Link>
		    </div>
		    <div className="navContainerTest">
		      
		      <ul className="nav navbar-nav navbar-right topList">
		            <li>
		              <Link className="navbar-link socialLinks github" to="https://github.com/mstorino"><img border="0" alt="github" src="assets/img/github4.png" width="40" height="34"/></Link>
		            </li>
		              
		            <li>
		              <Link className="navbar-link socialLinks" to="mailto:maggiestorino@gmail.com?subject=Hello Maggie"><img border="0" alt="contact" src="assets/img/contact2.png" width="36" height="36"/></Link>
		            </li>
		            <li>
		              <Link className="navbar-link socialLinks" to="https://www.linkedin.com/in/maggiestorino"><img border="0" alt="linkedin" src="assets/img/linkedin4.png" width="40" height="40"/></Link>
		            </li>
		        
		      </ul>
		    </div>
		
		</nav>

    );
  }
}




