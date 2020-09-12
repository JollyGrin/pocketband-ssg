import React, { Component, Fragment } from 'react';
import VideoBox from './VideoBox';

export default class SectionVideos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <section id='section-videos'>
          {/* <VideoBox /> */}

          {this.props.youtube.map((video, index) => (
            <VideoBox key={index} video={video} />
          ))}
        </section>
      </Fragment>
    );
  }
}
