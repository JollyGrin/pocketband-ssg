import React, { Component, Fragment } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        <section id='nav'>
          <div className='nav-left'>
            <img src='media/square.svg'></img>
          </div>
          <div className='nav-right'>
            <span>hi</span>
            <span>hi</span>
          </div>
        </section>
      </Fragment>
    );
  }
}
