# MyQ Jobs Archive Parser

MyQ Jobs Archive Parser for Windows, Linux and Mac OS X.

# For developers

## The Redux state example of application

```js
{
  locale: 'en',
  filter: {
    users: [
      'dlatek6p',
      'mesp60'
    ],
    jobsType: [
      'print',
      'scan',
      'copy'
    ],
    dateRange: [
      null,
      null
    ]
  },
  jobsFolder: '/home/username/Desktop/__data__',
  jobs: {
    isFetching: false,
    list: [
      {
        key: 0,
        xmlFile: '/home/username/Desktop/__tests__/dirs/job-print.xml',
        timestamp: 1501903926000,
        jobType: 'print',
        printerAddr: '53.201.154.38',
        serverName: 'SRV-MYQ01.domain.local',
        serverVersion: '6.2.4.27',
        username: 'mesp60',
        files: [
          'job-0.pdf',
          'job-1.pdf'
        ]
      },
      {
        key: 1,
        xmlFile: '/home/username/Desktop/__tests__/xml/job-copy.xml',
        timestamp: 1501903926000,
        jobType: 'copy',
        printerAddr: '53.201.154.38',
        serverName: 'SRV-MYQ01.domain.local',
        serverVersion: '6.2.4.27',
        username: 'dlatek6p',
        files: [
          'job-0.pdf',
          'job-1.pdf',
          'job-2.pdf'
        ]
      },
      {
        key: 2,
        xmlFile: '/home/username/Desktop/__tests__/dirs/dir_1/job-scan.xml',
        timestamp: 1501903926000,
        jobType: 'scan',
        printerAddr: '53.201.154.38',
        serverName: 'SRV-MYQ01.domain.local',
        serverVersion: '6.2.4.27',
        username: 'mesp60',
        files: [
          'job-0.pdf'
        ]
      },
      {
        key: 3,
        xmlFile: '/home/username/Desktop/__tests__/dirs/dir_4/job-invalid.xml',
        error: 'Non-whitespace before first tag. | Line: 0 | Column: 1 | Char: I'
      },
      {
        key: 4,
        xmlFile: '/home/username/Desktop/__tests__/dirs/job-invalid.xml',
        error: 'Non-whitespace before first tag. | Line: 0 | Column: 1 | Char: I'
      }
    ]
  }
}
```
