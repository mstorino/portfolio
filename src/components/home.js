import React, { Component } from 'react';

import TopNav from './top-nav';
import BottomNav from './bottom-nav';

export default class Home extends Component {
  render() {
    return (
      <div>
      	<TopNav />
      	
		<section className="container-fluid rw-wrapper borderBox heroContainer">
		  <div className ="row ">
		    <div className="col-md-12">
		      <h1 className="rw-sentence borderBox">

		        <span>Hi there!</span>
		        <br/>
		        <span> I am a </span>
		        <div className="rw-words rw-words-1">
		          <span>developer</span>
		          <span>viral blogger</span>
		          <span>designer</span>
		          <span>lawyer</span>
		          <span>mom</span>
		        </div>
		        <br/>
		        <span>living and working in Chicago.</span>
		    
		      </h1>
		    </div>
		  </div>
		</section>




      	<BottomNav />
      </div>
    );
  }
}
