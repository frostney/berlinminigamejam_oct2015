import React, {Component} from 'react';

class Credits extends Component {
  render() {
    const names = ['Made at Berlin Mini Game Jam Oct \'15:', 'Johannes Stein', 'Jake Yonai', 'Alejandro Rodriguez'].map(function(name, index) {
      return <div key={index} className="name">{name}</div>;
    });

    return (
      <div className="credits">{names}</div>
    );
  }
}

export default Credits;
