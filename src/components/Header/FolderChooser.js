import React from 'react';
import { Button, Icon } from 'antd';

// React Ref to choose data path
// React.createRef() API: https://reactjs.org/docs/refs-and-the-dom.html
const chooseFolderRef = React.createRef();

export default () => (
  <div>
    <Button type="primary" onClick={() => chooseFolderRef.current.click()}>
      Select folder to parse <Icon type="upload" />
    </Button>

    {/* Hidden input nwdirectory type for choose data folder over ref */}
    <input
      type="file"
      style={{ display: 'none' }}
      ref={chooseFolderRef}
      onChange={e => {
        console.log(e.target.value);
      }}
      nwdirectory="true"
    />
  </div>
);
