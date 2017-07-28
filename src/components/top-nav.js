import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class TopNav extends Component {
  render() {
    return (
      
		<nav className="navbar navbar-default topNav">
		  
		    <div className="navbar-header">
		      <Link className="navbar-brand" to="/portfolio">Maggie Storino</Link>
		    </div>
		    <div className="navContainerTest">
		      
		      <ul className="nav navbar-nav navbar-right topList">
		            <li>
		              <a className="navbar-link socialLinks github" href="https://github.com/mstorino"><img border="0" alt="github" src="/portfolio/assets/img/github4.png" width="40" height="34"/></a>
		            </li>
		              
		            <li>
		              <a className="navbar-link socialLinks" href="mailto:maggiestorino@gmail.com?subject=Hello Maggie"><img border="0" alt="contact" src="/portfolio/assets/img/contact2.png" width="36" height="36"/></a>
		            </li>
		            <li>
		              <a className="navbar-link socialLinks" href="https://www.linkedin.com/in/maggiestorino"><img border="0" alt="linkedin" src="/portfolio/assets/img/linkedin4.png" width="40" height="40"/></a>
		            </li>
		        
		      </ul>
		    </div>
		
		</nav>

    );
  }
}




