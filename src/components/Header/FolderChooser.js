import React from 'react';
import { Button } from 'antd';
import { homedir as getHomeDir } from 'os';
import { FormattedMessage } from 'react-intl';

const chooseFolderRef = React.createRef();

const handleClick = () => {
  chooseFolderRef.current.click();
};

const sliceString = (str, tailLength = 20) =>
  str.length > tailLength ? `...${str.slice(-tailLength)}` : str;

export default ({
  isFetchingJobs,
  jobsFolder,
  onSetJobsFolder,
  onCancelJobsFetching
}) => (
  <div>
    <Button.Group>
      <FormattedMessage id="App.folderChooser.text">
        {selectFolderText => (
          <Button
            type="primary"
            onClick={handleClick}
            title={jobsFolder === '' ? selectFolderText : jobsFolder}
            loading={isFetchingJobs}
            icon="file-add"
          >
            {jobsFolder === '' ? selectFolderText : sliceString(jobsFolder)}
          </Button>
        )}
      </FormattedMessage>
      {isFetchingJobs ? (
        <Button type="danger" onClick={onCancelJobsFetching} icon="close" />
      ) : (
        ''
      )}
    </Button.Group>
    {/* 
      This trick allows to select a folder. 
      More info: https://github.com/nwjs/nw.js/wiki/file-dialogs#why-not-provide-api-in-javascript   
    */}
    <input
      type="file"
      nwdirectory="true"
      nwworkingdir={jobsFolder === '' ? getHomeDir() : jobsFolder}
      ref={chooseFolderRef}
      onChange={e => onSetJobsFolder(e.target.value)}
      style={{ display: 'none' }}
    />
  </div>
);
