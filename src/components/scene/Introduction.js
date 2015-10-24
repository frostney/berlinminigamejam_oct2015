import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';

class Introduction extends Component {
  render() {
    return (
      <Scene name="introduction">
        <BackgroundImage src="images/introduction.png" />
      </Scene>
    )
  }
}

export default Introduction;
