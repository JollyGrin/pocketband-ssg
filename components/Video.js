import React, { Component, Fragment } from 'react';
import YoutubeVideoClass from '../assets/classes/YoutubeVideoClass';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {},
    };
  }

  componentDidMount() {
    const video = new YoutubeVideoClass(this.props.video);

    this.setState({ video: video });
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1># {this.state.video.title}</h1>
          <span>{this.state.video.yaml}</span>
        </div>
      </Fragment>
    );
  }
}
