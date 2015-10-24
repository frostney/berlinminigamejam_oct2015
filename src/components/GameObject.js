import React, {Component} from 'react';

class GameObject extends Component {
  static defaultProps = {
    className: [],
  }

  render() {
    const style = {
      left: this.props.left,
      top: this.props.top,
      right: this.props.right,
      bottom: this.props.bottom,
    };

    const className = [].concat(['game-object', this.props.className]);

    return (
      <div className={className} style={style} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}

export default GameObject;
