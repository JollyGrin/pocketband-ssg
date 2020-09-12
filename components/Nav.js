import React, { Component, Fragment } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        <section id='nav'>
          <div className='nav-left'>
            <a href='/'>
              <img src='media/square.svg'></img>
            </a>
          </div>
          <div className='nav-right'>
            <span>
              <a href='https://discord.gg/rnWutwS'>
                <i className='fab fa-discord' />
              </a>
            </span>
            <span>
              <a href='https://github.com/JollyGrin/pocketband-ssg'>
                <i className='fab fa-github' />
              </a>
            </span>
          </div>
        </section>
      </Fragment>
    );
  }
}
