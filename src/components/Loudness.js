import React, { Component } from 'react';
import styled from 'styled-components';
import FeatureNominal from './FeatureNominal';

class Loudness extends Component{
  render(){
    let loudness = null;

    if(this.props.value < -40){
      loudness = "Quiet"
    }
    else if(this.props.value < -20){
      loudness = "Moderate"
    }
    else {
      loudness = "Loud"
    }

    return(
      <FeatureNominal name = "Loudness" value = { loudness} />
    )
  }
}

export default Loudness
