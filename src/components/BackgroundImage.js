import React, {Component} from 'react';

class BackgroundImage extends Component {
  render() {
    var style = {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      position: 'absolute',
    };

    return <img src={this.props.src} style={style} />;
  }
}

export default BackgroundImage;
