import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {

    const innerBox = () => {
      const newOpacity = this.props.opacity - 0.1;
      if(newOpacity >= 0.2) {
        return <ColorBox opacity={newOpacity}/>
      }
    };
    
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {innerBox()}
      </div>
    )
  }
  
}
