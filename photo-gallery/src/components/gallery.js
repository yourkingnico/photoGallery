import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import images from '../config';
import "react-image-gallery/styles/css/image-gallery.css";

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            currentAlbum: 1,
            albumIndex: 0,
            tripNumber: 0
        };
    }

    getTripTitle() {
        switch(this.props.tripNumber){
            case 0: 
                return 'Boundary Waters Canoe Area 2014';       
            case 1: 
                return 'Boundary Waters Canoe Area 2015';
            case 2: 
                return 'Boundary Waters Canoe Area 2017';
            default:
                return 'Some Trip'
        }
    } 
    
    gallery(){
        return(
            <ImageGallery
                useTranslate3D={false}
                lazyLoading={false} 
                items={images[this.props.tripNumber]} 
                useBrowserFullscreen={false}>
            </ImageGallery>
        )
    }

    render() {
        const tripTitle = this.getTripTitle();
        return(
            <div style={{ padding: '4%'}}>
                <h2>{tripTitle} </h2>
                <div style={{ marginRight: '15%', marginLeft: '15%', marginBottom: '4%' }}>
                    {this.gallery()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      tripNumber: state.app.tripNumber
    };
}

export default connect(mapStateToProps)(Gallery);