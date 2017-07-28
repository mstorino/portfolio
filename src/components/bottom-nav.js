import React, { Component } from 'react';

import {Link} from 'react-router-dom';


class BottomNav extends Component {

constructor(props) {
  super(props);
  // this.state ={ color: 'pink' };

  // this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
  // this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
}





  // handleOnMouseOver(){
  //   return(
  //     this.setState({color:'blue'})
  //   );
  // }

  // handleOnMouseLeave(){
  //   return(
  //     this.setState({color:'red'})
  //   );
  // }


   // <Link className={this.state.color} to="/blog" onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseLeave}>Test</Link>

    // <li>
    //           <Link className={this.state.color} to="/blog" onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>Test</Link>
    //         </li>
  render() {
    return (

 <nav className="navbar navbar-default navbar-fixed-bottom borderBox">
    <div className="container-fluid">
     
        <div>
          <ul className="nav navbar-nav bottomList">
           
            <li>
              <Link className="codeLink" to="/code">Code</Link>
            </li>
            
            <li>
              <Link className="contactLink" to="/contact">Bio/Contact</Link>
            </li>

            <li>
              <a href="https://dontcallmeoscar.com/">Blog</a>
            </li>
            
          </ul>
          
        </div>
    </div>
  </nav>




    );
  }
}

export default BottomNav;


