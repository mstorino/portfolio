import React, { Component } from 'react';

import TopNav from './top-nav';


import About from './about-container';
import AboutBio from './about-bio';

import Resume from './resume';

import BottomNav from './bottom-nav';


export default class Contact extends Component {
  render() {
    return (
      <div>
      	<TopNav />
      	<About />
      	<AboutBio />
      	<Resume />
        
      	<BottomNav />
      </div>
    );
  }
}
