import React, {Component} from 'react';
import TypeWriter from 'react-typewriter';

class Dialog extends Component {
  render() {
    return (
      <div className="dialog">
        <div className="text">
          <TypeWriter typing={1} fixed={true} onTypingEnd={this.props.onTypingEnd}>{this.props.message}</TypeWriter>
        </div>
        <div className="options">
          Skip
        </div>
      </div>
    )
  }
}

export default Dialog;
