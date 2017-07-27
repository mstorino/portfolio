//container of book-detail
//make use of this.props.book inside container because mapped app state to props of ht is component (mapStateToProps)

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetail extends Component {
	render() {
		// if this.props.book doens't exist yet then return early; initial check in state
		if (!this.props.project){

			return (
				
						<div className="col-md-8">
							
						</div>
					
			);
			
		}


		
			return (
				// <section className="container-fluid codeContainer">
				// 	<div className="row">
						<div className="col-md-8 codeContainer">
							<ul>
								<li>
									<h3>Title: </h3>{this.props.project.title}

								</li>
								<li>
									<h3>Technologies Used: </h3>
									{this.props.project.technologiesUsed}
								</li>
								<li>
									<h3>Github Repo: </h3>
									<a href={this.props.project.githubrepo}>{this.props.project.githubrepo}</a>
									
								</li>
								
									

										<ul className="row screenshotList">
								            <li className="col-xs-6 text-center detailGroup">
								              <div className="screenshot"></div>
								              <h3>Summary</h3>
								              <p className='detailText'>{this.props.project.summary}</p>
								            </li>
								            <li className="col-xs-6 text-center detailGroup">
								              <div className="screenshot"></div>
								              <h3>Screenshot 1</h3>
								              <p className='detailText'>{this.props.project.detail1}</p>
								            </li>
								            <li className="col-xs-6 text-center detailGroup">
								              <div className="screenshot"></div>
								              <h3>Screenshot 2</h3>
								              <p className='detailText'>{this.props.project.detail2}</p>
								            </li>
								            <li className="col-xs-6 text-center detailGroup">
								              <div className="screenshot"></div>
								              <h3>Development Role</h3>
								              <p className='detailText'>{this.props.project.detail3}</p>
								            </li>
								        </ul>

							
								
							</ul>
						</div>
				// 	</div>
				// </section>
			);
		
	}
}

//helper function; specifically refe activeBook because activebook reducer is creating acitve book piece of state

function mapStateToProps(state) {
	return {
		project: state.activeProject
	}
}

export default connect(mapStateToProps)(ProjectDetail);