//container of book-detail
//make use of this.props.book inside container because mapped app state to props of ht is component (mapStateToProps)

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetail extends Component {
	render() {
		// if this.props.book doens't exist yet then return early; initial check in state
		if (!this.props.project){

			return (
				
						<div className="col-md-9">
							
						</div>
					
			);
			
		}


		
			return (
				// <section className="container-fluid codeContainer">
				// 	<div className="row">
						<div className="col-sm-12 col-md-9 codeContainer">
							<ul>
								<li>
									<h2>{this.props.project.title} | <a href={this.props.project.githubrepo}>{this.props.project.githubrepo}</a></h2> 
									
									
								</li>
								<li>
									 <img className="screenshot" border="0" alt={this.props.project.title} src={this.props.project.image1}/>
								             
								</li>

										<ul className="row screenshotList">
								            <li className="col-xs-12 col-sm-6 detailGroup">
								            	
								            		<img border="0" alt={this.props.project.title} src={this.props.project.image5} width="100%"/>
								     		
								              	<h3>Summary</h3>
								              	<p className='detailText'>{this.props.project.summary}</p>
								            </li>

								            <li className="col-xs-6 detailGroup">
								              <img className="screenshot" border="0" alt={this.props.project.title} src={this.props.project.image3}/>
								              <h3>Functionality</h3>
								              <p className='detailText'>{this.props.project.detail1}</p>
								            </li>

								            <li className="col-xs-6 detailGroup">
								            	
								            	  <img border="0" alt={this.props.project.title} src={this.props.project.image4} width="100%"/>
								            	

								              <h3>Development Responsibilities</h3>
								              <p className='detailText'>{this.props.project.detail2}</p>
								            </li>
								            
								            <li className="col-xs-6 detailGroup">
								              <img className="screenshot" border="0" alt={this.props.project.title} src={this.props.project.image2}/>
								              <h3>Technologies Used</h3>
								              <p className='detailText'>{this.props.project.technologiesUsed}</p>
								             
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