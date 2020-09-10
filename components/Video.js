import React, { Component, Fragment } from 'react';
import YoutubeVideoClass from '../assets/classes/YoutubeVideoClass';

export default class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const video = new YoutubeVideoClass(this.props.video);
    return (
      <Fragment>
        <div>
          <h1># {video.title}</h1>
          <span>{video.yaml}</span>
        </div>
      </Fragment>
    );
  }
}
