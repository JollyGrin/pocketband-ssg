import React, { Component, Fragment } from 'react';
import Nav from './Nav';

export default class Hero extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <section id='hero'>
          <div className='hero-content-wrapper'>
            <div className='hero-content-left'>
              <h1>
                Share <br /> pocket operator <br /> <strong>backups</strong>
              </h1>
            </div>
            <div className='hero-content-right'>
              <ul>
                <li>backup?</li>
                <li>share?</li>
                <li>samples</li>
              </ul>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
