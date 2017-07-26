//container of book-detail
//make use of this.props.book inside container because mapped app state to props of ht is component (mapStateToProps)

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetail extends Component {
	render() {
		//if this.props.book doens't exist yet then return early; initial check in state
		if (!this.props.project){

			return (
				<section className="container-fluid rw-wrapper codeContainer">
					<div className="row">
						<div className="col-md-12 text-center codeHero">
							<h1>I build beautiful interactive websites.</h1>

							<h3 className="codeh3">My favorite apps are below.  If you have a second, <br /> click one to see the details.</h3>
						</div>
					</div>
				</section>
			);
			//once they click on a book it will call the app state to rerender at which point this.props.book 
			//will be defined and then we'll go to the next statement and render the selected book
		}


		
			return (
				<section className="container-fluid codeContainer">
					<div className="row">
						<div className="col-md-12">
							<ul>
								<li>
									<h3>Project Title: </h3>
									{this.props.project.title}

								</li>
								<li>
									<h3>Technologies Used: </h3>
									{this.props.project.technologiesUsed}
								</li>
								<li>
									<h3>Github Repo: </h3>
									{this.props.project.githubrepo}
								</li>
								<li>
									<h3>Summary: </h3>
									{this.props.project.summary}

										<ul className="row screenshotList">
								            <li className="col-xs-4 text-center">
								              <div className="screenshot"></div>
								              <h3>Purpose</h3>
								              <p className='detailText'>{this.props.project.detail1}</p>
								            </li>
								            <li className="col-xs-4 text-center">
								              <div className="screenshot"></div>
								              <h3>Functionality</h3>
								              <p className='detailText'>{this.props.project.detail2}</p>
								            </li>
								            <li className="col-xs-4 text-center">
								              <div className="screenshot"></div>
								              <h3>Development Role</h3>
								              <p className='detailText'>{this.props.project.detail3}</p>
								            </li>
								        </ul>

								</li>
								
							</ul>
						</div>
					</div>
				</section>
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