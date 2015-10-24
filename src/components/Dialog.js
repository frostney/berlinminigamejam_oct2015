import React, {Component} from 'react';
import TypeWriter from 'react-typewriter';

class Dialog extends Component {
  static defaultProps = {
    visible: true,
    options: [],
    onOptionClick: function() {},
  }

  constructor(props) {
    super(props);

    this.state = {
      speed: 1,
      optionsVisible: true,
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

  onTypingEnd = () => {
    this.setState({
      optionsVisible: true,
    });
  }

  render() {
    const options = this.props.options.map((name, index) => {
      const click = (index, name) => {
        return () => {
          this.props.onOptionClick(index, name.action, name.text);
        };
      };

      return <div onClick={click(index, name)} className={`option option-${index}`} key={index}>{index + 1}. {name.text}</div>
    });

    let message = this.props.message.split('\n').map(function(line) {
      return <div className="line">{line}</div>
    });

    let className = 'dialog';

    if (!this.props.visible) {
      className += ' invisible';
    }

    let optionsClassName = 'options';

    if (!this.state.optionsVisible) {
      optionsClassName += ' invisible';
    }

    return (
      <div className={className} onClick={this.onClick}>
        <div className="text">
          {/*(message) ? <TypeWriter typing={this.state.speed} fixed={true} onTypingEnd={this.onTypingEnd}>{message}</TypeWriter> : null*/}
          {message}
        </div>
        <div className={optionsClassName}>{options}</div>
      </div>
    )
  }
}

export default Dialog;
