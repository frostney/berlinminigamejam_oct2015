import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Credits from '../Credits';
import Dialog from '../Dialog';

import dialog from 'data/dialog.json';

class Bar extends Component {
  render() {
    return (
      <Scene name="bar">
        <BackgroundImage src="images/saloon.png" />
        <Credits />
        <Dialog message={dialog.intro} options={['[Continue]']} />
      </Scene>
    );
  }
}

export default Bar;
