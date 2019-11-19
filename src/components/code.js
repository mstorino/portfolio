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
        <section className="container-fluid rw-wrapper">
          <div className="row">
            <div className="col-md-12 text-center codeHero">

                  
                
              <h1>I build beautiful interactive websites.</h1>

              <h3 className="codeh3">My apps are below.  If you have a second, <br /> click one to see the details.</h3>

              <img className="unicorn" alt="github" src="/assets/img/unicorn.png"/>
            </div>
          </div>
        </section>
      	
        <section className="container-fluid codeListContainer">
          <div className= "row">
          	
          	<ProjectList />
            <ProjectDetail />
          </div>
        </section>

      	<BottomNav />
      </div>
    );
  }
}
