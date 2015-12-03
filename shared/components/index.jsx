// This index file is where React Router can inject everything into
import React from 'react';

export default class AppView extends React.Component {
  render() {
    return (
      <div id='app-view'>
        <h1>Almanac News</h1>
        <hr />
        <div>Soroush</div>
        {this.props.children}
      </div>
    );
  }
}
