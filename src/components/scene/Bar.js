import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Credits from '../Credits';
import Dialog from '../Dialog';
import World from 'store/World';

import data from 'data';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialog: 'intro',
      dialogIndex: 0,
      dialogVisible: true,
    };
  }

  componentDidMount() {
    World.on('dialog', dialogState => {
      this.setState({
        dialog: dialogState,
      });
    });

    World.on('dialogIndex', dialogIndex => {
      this.setState({
        dialogIndex: dialogIndex,
      });
    });
  }

  onOptionClick = (index, action, text) => {
    if (action === -1) {
      this.setState({
        dialogVisible: false,
      });
    } else {
      this.setState({
        dialogIndex: action,
      });
    }
  }

  render() {
    var curDialog = (function(curDialog) {
      return curDialog;
    })(data[this.state.dialog][this.state.dialogIndex]);

    return (
      <Scene name="bar">
        <BackgroundImage src="images/saloon.png" />
        <Credits />
        <Dialog message={curDialog.text} options={curDialog.options} />
      </Scene>
    );
  }
}

export default Bar;
