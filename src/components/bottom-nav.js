import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class BottomNav extends Component {
  render() {
    return (

 <nav className="navbar navbar-default navbar-fixed-bottom borderBox">
    <div className="container-fluid">
     
        <div>
          <ul className="nav navbar-nav bottomList">
            
            <li>
              <Link className="blogLink" to="/blog">Blog</Link>
            </li>
            
            <li>
              <Link className="codeLink" to="/code">Code</Link>
            </li>
            
            <li>
              <Link className="contactLink" to="/contact">Bio/Contact</Link>
            </li>
            
          </ul>
          
        </div>
    </div>
  </nav>




    );
  }
}




