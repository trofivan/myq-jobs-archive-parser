import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification, Button, Icon } from 'antd';
import { injectIntl } from 'react-intl';
import { URL_LATEST_RELEASE } from '../constants/externalURLs';
import fetchLatestVersion from '../actions/fetchLatestVersion';
import AppComponent from '../components/App';

class AppContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLatestVersion());
  }

  componentDidUpdate() {
    const {
      versionCurrent,
      versionLatest,
      versionFetchingError
    } = this.props.app;

    notification.destroy();

    if (versionFetchingError) {
      this.showNotificationNewVersionFetchingError();
    } else if (versionLatest !== null && versionLatest !== versionCurrent) {
      this.showNotificationNewVersion(versionCurrent, versionLatest);
    }
  }

  showNotificationNewVersion(versionCurrent, versionLatest) {
    const ButtonDownload = () => (
      <Button
        type="primary"
        icon="download"
        onClick={e => {
          e.preventDefault();
          nw.Shell.openExternal(URL_LATEST_RELEASE);
        }}
      >
        {this.props.intl.formatMessage(
          { id: 'App.message.newVersion.download' },
          { version: versionLatest }
        )}
      </Button>
    );

    const Description = () => (
      <div>
        <p>
          {this.props.intl.formatMessage(
            { id: 'App.message.newVersion.text' },
            { current: versionCurrent, latest: versionLatest }
          )}
        </p>
        <p>
          <ButtonDownload />
        </p>
      </div>
    );

    notification.open({
      message: this.props.intl.formatMessage({
        id: 'App.message.newVersion.title'
      }),
      description: <Description />,
      icon: <Icon type="download" style={{ color: '#30ac90' }} />,
      duration: 0
    });
  }

  showNotificationNewVersionFetchingError() {
    notification.open({
      message: this.props.intl.formatMessage({
        id: 'App.message.newVersionFetchingError.title'
      }),
      description: this.props.intl.formatMessage({
        id: 'App.message.newVersionFetchingError.text'
      }),
      icon: <Icon type="download" style={{ color: '#f5222d' }} />,
      duration: 0
    });
  }

  render() {
    return <AppComponent />;
  }
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps)(injectIntl(AppContainer));
