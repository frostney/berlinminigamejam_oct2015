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
    AppStore.on('scene', sceneName => this.setState({scene: sceneName}));
  }

  render() {
    return (
      <div className="scene-director">{scene[this.state.scene]}</div>
    );
  }
}

export default SceneDirector;
