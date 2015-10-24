import World from 'store/World';
import React, {Component} from 'react';
import scene from './scene';

class SceneDirector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: 'Introduction',
    };
  }

  componentDidMount() {
    World.on('scene', sceneName => this.setState({scene: sceneName}));
  }

  render() {
    if (!this.state.scene) {
      return null;
    }

    if (scene) {
      var sceneName = React.createElement(scene[this.state.scene]);
    }

    var style = {
      width: '100%',
      height: '100%',
    };

    return (
      <div className="scene-director" style={style}>{sceneName}</div>
    );
  }
}

export default SceneDirector;
