import React from 'react';
import { Button, Icon } from 'antd';

const chooseFolderRef = React.createRef();

const handlerClick = e => {
  chooseFolderRef.current.click();
};

const handlerChange = e => {
  console.log(e.target.value);
};

export default () => (
  <div>
    <Button type="primary" onClick={handlerClick}>
      <Icon type="file-add" /> Select folder to parse
    </Button>

    {/* 
      This trick allows to select a folder. 
      More info: https://github.com/nwjs/nw.js/wiki/file-dialogs#why-not-provide-api-in-javascript   
    */}
    <input
      type="file"
      nwdirectory="true"
      style={{ display: 'none' }}
      ref={chooseFolderRef}
      onChange={handlerChange}
    />
  </div>
);
