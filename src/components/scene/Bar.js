import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Credits from '../Credits';
import Dialog from '../Dialog';
import World from 'store/World';
import GameObject from '../GameObject';

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
      }, () => {
        setTimeout(() => {
          this.setState({
            dialogIndex: 0,
          });
        }, 400)
      });
    } else {
      this.setState({
        dialogIndex: action,
      });
    }
  }

  onRufus = () => {
    this.setState({
      dialogVisible: true,
    }, function() {
      World.trigger('dialog', 'rufus');
    });
  }

  render() {
    var curDialog = (function(curDialog) {
      return curDialog;
    })(data[this.state.dialog][this.state.dialogIndex]);

    return (
      <Scene name="bar">
        <BackgroundImage src="images/saloon.png" />
        <Credits />
        <Dialog visible={this.state.dialogVisible} message={curDialog.text} options={curDialog.options} onOptionClick={this.onOptionClick} />
        <GameObject onClick={this.onRufus} width={70} height={147} left={428} top={244} />
      </Scene>
    );
  }
}

export default Bar;
