import PropTypes from "prop-types"
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {setTripNumber } from '../state/app';
import { Link } from "gatsby"

class Header extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
       isMobile: false,
       showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(){
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  mobileMenu(){
    return(
      <button onClick={this.showMenu} className='mobileMenu'>Menu</button>
    )
  }

  setTrip = (num) => {
    this.props.setTripNumber(num);
    this.showMenu();
  };
  
    render() {
        let classNav = "collapse navbar-collapse navbar-right navbar-main-collapse";
        if(this.state.showMenu){
          classNav = "navbar-collapse navbar-right navbar-main-collapse"
        }
        return(
          <nav className="navbar navbar-custom " role="navigation" style={{
            opacity:'0.7'
          }}>

          <div className="container" 
          style={{
            
            backgroundColor: 'black'
          }}>
            <div className="navbar-header">
              <button className="navbar-toggle" data-target=".navbar-main-collapse" data-toggle="collapse" type="button">
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand page-scroll" href="http://nicktorres.net">
                <div>
                  { this.props.siteTitle }
                </div>
              </a>
              {this.mobileMenu()}
            </div>
            
            <div className={classNav}>
              
              <ul className="nav navbar-nav" id="nav-links" >
                <li>
                <Link to="/directory/">Directory</Link>
                </li>
                <li>
                  <a onClick={() => this.setTrip(0) } className="page-scroll">
                    BWCA 2014
                  </a>
                </li>
                <li>
                  <a onClick={() => this.setTrip(1) } className="page-scroll">
                    BWCA 2015
                  </a>
                </li>
                <li>
                  <a onClick={() => this.setTrip(2) } className="page-scroll">
                    BWCA 2017
                  </a>
                </li>
               
              </ul>
              {this.props.tripNumber}
            </div>
          </div>
          </nav>
        )
    }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function mapStateToProps(state) {
  return {
    tripNumber: state.tripNumber
  };
}
const mapDispatchToProps = {
  setTripNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
