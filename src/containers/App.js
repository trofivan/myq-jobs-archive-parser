import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppComponent from '../components/App';

class AppContainer extends Component {
  render() {
    return <AppComponent />;
  }
}

export default connect()(AppContainer);
