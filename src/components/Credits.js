import React, {Component} from 'react';

class Credits extends Component {
  render() {
    const names = ['Johannes Stein', 'Jake Yonai', 'Alejandro Rodriguez'].map(function() {
      return <div className="name">{name}</div>;
    });

    return (
      <div className="credits">{names}</div>
    );
  }
}

export default Credits;
