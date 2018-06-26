import React from 'react';
import { Button, Icon } from 'antd';
import { homedir as getHomeDir } from 'os';

const chooseFolderRef = React.createRef();

const handlerClick = () => {
  chooseFolderRef.current.click();
};

const getTextSelectFolder = () => 'Select folder to parse';

const sliceString = (str, tailLength = 20) =>
  str.length > tailLength ? `...${str.slice(-tailLength)}` : str;

const getButtonText = jobsFolder =>
  jobsFolder === '' ? getTextSelectFolder() : sliceString(jobsFolder);

export default ({ jobsFolder, onChangeJobsFolder }) => (
  <div>
    <Button
      type="primary"
      onClick={handlerClick}
      title={jobsFolder === '' ? getTextSelectFolder() : jobsFolder}
    >
      <Icon type="file-add" /> {getButtonText(jobsFolder)}
    </Button>
    {/* 
      This trick allows to select a folder. 
      More info: https://github.com/nwjs/nw.js/wiki/file-dialogs#why-not-provide-api-in-javascript   
    */}
    <input
      type="file"
      nwdirectory="true"
      nwworkingdir={jobsFolder === '' ? getHomeDir() : jobsFolder}
      ref={chooseFolderRef}
      onChange={e => onChangeJobsFolder(e.target.value)}
      style={{ display: 'none' }}
    />
  </div>
);
