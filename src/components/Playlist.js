import React, { Component } from 'react';

class Playlist extends Component{

  render() {
    let style = {}
    let imageUrl = null

    if ( this.props.image && this.props.image.length){
      imageUrl = this.props.image[0].url
      style = {  width: "158px", borderRadius: '50%', height: '158px',  border: '1px solid white' }
    }// Check if image exists
    else{
      style = { display: "none" }
    }// If image does not exist

    return(
      <div onClick={this.props.clicked}>
        <img src = { imageUrl } style = {style} alt = { this.props.name } className = "playlistImage"/>
        <div className = "Playlist-name">
          { this.props.name.length > 40 ? this.props.name.slice(0, 40).concat("...") : this.props.name }
        </div>
      </div>
    )
  }
}


export default Playlist;
