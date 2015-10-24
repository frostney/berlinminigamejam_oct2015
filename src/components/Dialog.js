import React, {Component} from 'react';
import TypeWriter from 'react-typewriter';

class Dialog extends Component {
  static defaultProps = {
    visible: true,
  }

  constructor(props) {
    super(props);

    this.state = {
      speed: 1,
    };
  }

  onClick = () => {
    if (this.state.speed === 1) {
      this.setState({
        speed: 10,
      });
    } else {
      this.setState({
        speed: 1,
      });
    }
  }

  render() {
    const options = this.props.options.map(function(name, index) {
      return <div className={`option option-${index}`} key={index}>{index + 1}. {name}</div>
    });

    const message = this.props.message.split('\n').map(function(line) {
      return <div className="line">{line}</div>
    });

    let className = 'dialog';

    if (!this.props.visible) {
      className += ' invisible';
    }

    return (
      <div className={className} onClick={this.onClick}>
        <div className="text">
          <TypeWriter typing={this.state.speed} fixed={true} onTypingEnd={this.props.onTypingEnd}>{message}</TypeWriter>
        </div>
        <div className="options">{options}</div>
      </div>
    )
  }
}

export default Dialog;
