import React, { Component, Fragment } from 'react';
import YoutubeVideoClass from '../assets/classes/YoutubeVideoClass';

export default class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const vidObj = new YoutubeVideoClass(this.props.video);
    return (
      <Fragment>
        <div>
          <h1># {vidObj.title}</h1>
          <span>{vidObj.yaml}</span>
        </div>
      </Fragment>
    );
  }
}
