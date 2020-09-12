import React, { Component, Fragment } from 'react';
import YoutubeVideoClass from '../assets/classes/YoutubeVideoClass';
import YAML from 'yaml';

export default class VideoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const video = new YoutubeVideoClass(this.props.video);
    const details = video?.yaml();

    return (
      <Fragment>
        <div className='video-box'>
          {console.log('video', video)}
          {console.log('yaml', details)}
          <span>hi</span>
        </div>
      </Fragment>
    );
  }
}
