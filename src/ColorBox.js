import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let opacity = this.props.opacity

    if (opacity > 0.2) {
      opacity -= 0.1
      return <div className="color-box" style={{opacity: opacity + 0.1}}>
        { <ColorBox opacity={opacity}/> }
      </div>
    } else {
      return null
    }
    
    
  }
  
}
