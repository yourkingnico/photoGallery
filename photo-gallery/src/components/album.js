import { Link } from "gatsby"
import { Row, Col, Jumbotron, Button } from 'reactstrap';
import PropTypes from "prop-types"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import "react-image-gallery/styles/css/image-gallery.css";
import {setTripNumber } from '../state/app';

class Album extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        };
    }

    componentWillMount(){
        if( window.outerWidth < 600) {
            this.setState({isMobile: true})
        }
    }

    setTrip = () => {
        this.props.setTripNumber(this.props.index);
    };

    renderText(){
        return(
            <Col xs="7" sm="7" md="7" lg="7" xl="7">
                <div style={{ margin: '15px'}}>
                    <p className="lead">
                        {this.props.description}
                    </p>
                    <hr className="my-2" />
                    <p>{this.props.info}</p>
                    <p className="lead">
                        <Link to="/">
                            <Button 
                                style={{ float: 'right'}}
                                color="success"
                                onClick={this.setTrip }
                                >
                                    View
                            </Button>
                        </Link>
                        
                    </p>
                </div>
            </Col>
        )
    }

    renderMedia(){
        return(
            <Col xs="5" sm="5" med="5" lg="5" xl="5">
                <img style={{ 
                    position: 'inherit',
                    display: 'block',
                    margin: 'auto',
                    width: '90%' }} 
                    src={this.props.imageSrc}>
                </img>
            </Col>
        )
    }

    renderColumns(){
        if(this.props.imageRight){
            return(
                <div style={{ display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    {this.renderMedia()}
                    {this.renderText()}
                </div>
            )
        }else{
            return(
                <div style={{ display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    {this.renderText()}
                    {this.renderMedia()}
                </div>
            )
        }
    }

    renderForEnvironment(){
        if(this.state.isMobile){
            return(
                <>
                <Row style={{backgroundColor: '#8DAB7F'}}>
                    {this.renderMedia()}
                    
                </Row>
                <Row>
                    {this.renderText()}
                </Row></>
            )
        }else{
            return(
                <Row style={{backgroundColor: '#8DAB7F'}}>
                    <>{this.renderColumns()}</>
                </Row>
            )
        }
    }

    render() {
        return(
            <Jumbotron style={{ backgroundColor: '#394032'}} >
                <Row>
                    <Col>
                        <h1 className="display-3">{this.props.title}</h1>
                    </Col>
                </Row>
                {this.renderForEnvironment()}
          </Jumbotron>
        )
    }
}

Album.defaultProps = {
    imageRight: true,
    description: "",
    index: 1
  }
  
Album.propTypes = {
    imageSrc: PropTypes.string,
    imageRight: PropTypes.bool,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    index: PropTypes.number
}
  
function mapStateToProps(state) {
    return {
      tripNumber: state.app.tripNumber
    };
}
const mapDispatchToProps = {
    setTripNumber
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(Album);