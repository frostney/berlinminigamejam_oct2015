import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';

class Bar extends Component {
  render() {
    return (
      <Scene name="bar">
        <BackgroundImage src="images/saloon.png" />
      </Scene>
    );
  }
}

export default Bar;
