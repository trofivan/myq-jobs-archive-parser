import React from 'react';

const RenderFilesColumn = (files, { path }) => (
  <ul style={{ padding: 0, listStyleType: 'none' }}>
    {files.map((name, index) => (
      <li key={index} href="#">
        <a
          href="file:///${path}/${name}"
          onClick={e => {
            e.preventDefault();
            nw.Shell.openExternal(`file:///${path}/${name}`);
          }}
        >
          {name}
        </a>
      </li>
    ))}
  </ul>
);

export default RenderFilesColumn;
