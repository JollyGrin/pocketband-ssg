import React, { Component, Fragment } from 'react';

export default class HowToPlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className='content-body'>
          <h1>How to load this backup</h1>
          <h3>You'll need:</h3>
          <ul>
            <li>
              a Pocket Operator{this.props.po ? `: ${this.props.po}` : ''}
            </li>
            <li>an AUX cord</li>
            <li>a phone/computer & app to play .FLAC/.AIF at 44100 Hz.</li>
          </ul>

          <h3>1) Download the file</h3>
          <p>
            The file will be an .AIF or .FLAC file which doesn't compress the
            backup.
          </p>

          <h3>2) Load into a 44100Hz app</h3>
          <p>
            The backup file requires an app that doesn't compress the output. On
            a computer you can use audacity and on android you can use{' '}
            <a href='https://play.google.com/store/apps/details?id=com.extreamsd.usbaudiorecorderpro'>
              USB Audio Recorder PRO
            </a>
            . You can also try just using your browser (on android go on chrome
            and go to <a href='file:///sdcard/'>file:///sdcard/</a> then
            navigate to your download folder & select the file.)
          </p>
          <p>
            Once you have the file loaded, turn on airplane mode or turn off
            notifications so your device won't have a random alert interrupt the
            delicate backup loading process.
          </p>

          <h3>3) Backup to PO</h3>
          <p>
            With your device connected to the pocket operator, on your PO click:
            record + sound + write. You'll see "rcv" on your PO.
          </p>
          <p>
            Click play on your app to initiate the backup. Some numbers should
            start to appear on the PO. Wait until the sound file is complete and
            your PO should say "END". If you get "Err" then try again by
            adjusting the sound on your phone (turn it down to avoid clipping or
            turn it up). Additionally try a different app.
          </p>
        </div>
      </Fragment>
    );
  }
}
