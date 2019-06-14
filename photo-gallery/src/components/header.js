import PropTypes from "prop-types"
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {setTripNumber } from '../state/app'

class Header extends Component {
 
  setTrip = (num) => {
    this.props.setTripNumber(num)
  };
  
    render() {
        return(
          <nav className="navbar navbar-custom navbar-fixed-top" role="navigation" style={{
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
            </div>
            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
              
              <ul className="nav navbar-nav" id="nav-links" >
               
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
