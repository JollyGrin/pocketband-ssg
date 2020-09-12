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

    const styles = {
      bgImg: {
        backgroundImage: `url(${video.thumbnails.high.url})`,
      },
    };

    return (
      <Fragment>
        {console.log('props', this.props)}
        {/* {console.log('video', video)}
        {console.log('yaml', details)} */}

        <div className='video-box'>
          <a
            href={`https://youtu.be/${video.id}`}
            target='_blank'
            className='youtube-wrapper'
            style={styles.bgImg}
          />
          <div className='info-wrapper'>
            <div className='info-header'>
              <span className='author'>{details?.author}</span>
              <span className='po-type'>
                {details?.po ? details.po : '...'}
              </span>
            </div>
            <div className='info-content'>
              <span className='title'>{details?.title}</span>
            </div>
            <div className='info-buttons'>
              <a href={`/${video.id}`}>
                <i className='fas fa-info-circle' />
              </a>
              <a href={details.download} className='button'>
                download
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
