import React, { Component } from 'react';

import ProjectList from '../containers/project-list';
import ProjectDetail from '../containers/project-detail';


import TopNav from './top-nav';

import BottomNav from './bottom-nav';


export default class Code extends Component {
  render() {
    return (
      <div>
      	<TopNav />
      	
      	<ProjectDetail />
      	<ProjectList />
      	
      	<BottomNav />
      </div>
    );
  }
}
