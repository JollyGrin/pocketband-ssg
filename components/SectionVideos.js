import React, { Component, Fragment } from 'react';
import VideoBox from './VideoBox';

export default class SectionVideos extends Component {
  render() {
    return (
      <Fragment>
        <section id='section-videos'>
          <VideoBox />
        </section>
      </Fragment>
    );
  }
}
