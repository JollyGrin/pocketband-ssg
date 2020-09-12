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
                <li>
                  <a href='https://www.youtube.com/playlist?list=PLUinGl87WYqKHXxGsuDY-0k0hHDA7RKTP'>
                    drums
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/playlist?list=PLvH9O_kut3i8OqHTjD0CbXEcBCVWm_lE2'>
                    more drums
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/playlist?list=PLDqCLxj1K5QxZzyLqo3dZOuFKR-5dD9sf'>
                    moar drums
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
