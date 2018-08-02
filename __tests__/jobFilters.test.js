import {
  filterNoErrors,
  filterByType,
  filterByUsers,
  filterByDaterange
} from '../src/libs/jobFilters';

test('Jobs filter: no errors', () => {
  expect(filterNoErrors(jobs)).toEqual(result.filterNoErrors);
});

test('Jobs filter: scans only', () => {
  const filtered = filterByType(['scan'])(jobs);
  expect(filtered).toEqual(result.filterByType);
});

test('Jobs filter: jobs owners is `oeagleston2l` and `jlivzey1y`', () => {
  const filtered = filterByUsers(['oeagleston2l', 'jlivzey1y'])(jobs);
  expect(filtered).toEqual(result.filterByUsers);
});

test('Jobs filter: jobs in the date range', () => {
  const start = 1531785990000;
  const end = 1531856650000;

  const filtered = filterByDaterange([start, end])(jobs);
  expect(filtered).toEqual(result.filterByDateRange);
});

const jobs = [
  {
    timestamp: 1531856650000,
    jobType: 'copy',
    username: 'bhaskell2k',
    files: ['job-674.pdf']
  },
  {
    timestamp: 1531785990000,
    jobType: 'print',
    username: 'mesp60',
    files: ['job-451.pdf']
  },
  {
    timestamp: 1531694951000,
    jobType: 'scan',
    username: 'dcaudelier6r',
    files: ['job-501.pdf']
  },
  {
    timestamp: 1531684742000,
    jobType: 'scan',
    username: 'bcooch82',
    files: ['job-120.pdf']
  },
  {
    timestamp: 1531676574000,
    jobType: 'scan',
    username: 'oeagleston2l',
    files: ['job-862.pdf']
  },
  {
    timestamp: 1531614880000,
    jobType: 'scan',
    username: 'dhedney29',
    files: ['job-769.pdf']
  },
  {
    timestamp: 1531498557000,
    jobType: 'scan',
    username: 'dhedney29',
    files: ['job-410.pdf']
  },
  {
    timestamp: 1531495071000,
    jobType: 'print',
    username: 'pvedntyev11',
    files: ['job-850.pdf']
  },
  {
    timestamp: 1531486558000,
    jobType: 'copy',
    username: 'brosendahl2c',
    files: ['job-782.pdf']
  },
  {
    timestamp: 1531486386000,
    jobType: 'copy',
    username: 'ctooheyk',
    files: ['job-626.pdf']
  },
  {
    timestamp: 1531463107000,
    jobType: 'scan',
    username: 'lchaves71',
    files: ['job-540.pdf']
  },
  {
    timestamp: 1531447704000,
    jobType: 'print',
    username: 'nbarnett2n',
    files: ['job-956.pdf']
  },
  {
    timestamp: 1531436855000,
    jobType: 'print',
    username: 'dstrotton65',
    files: ['job-1031.pdf']
  },
  {
    timestamp: 1531435215000,
    jobType: 'print',
    username: 'jlivzey1y',
    files: ['job-467.pdf']
  },
  {
    timestamp: 1531335608000,
    jobType: 'copy',
    username: 'kgeleman6o',
    files: ['job-1054.pdf']
  },
  {
    timestamp: 1531203980000,
    jobType: 'scan',
    username: 'apocklington6e',
    files: ['job-864.pdf']
  },
  {
    timestamp: 1531202120000,
    jobType: 'print',
    username: 'osimeons19',
    files: ['job-72.pdf']
  },
  {
    timestamp: 1531144760000,
    jobType: 'copy',
    username: 'lfairlaw35',
    files: ['job-91.pdf']
  },
  {
    timestamp: 1531147760000,
    error: 'Error message'
  },
  {
    timestamp: 1531842121000,
    jobType: 'scan',
    username: 'kmillan33',
    files: ['job-703.pdf']
  },
  {
    timestamp: 1531818442000,
    jobType: 'scan',
    username: 'mbutchard3m',
    files: ['job-81.pdf']
  },
  {
    timestamp: 1531808056000,
    jobType: 'scan',
    username: 'apinchen5u',
    files: ['job-250.pdf']
  },
  {
    timestamp: 1531654108000,
    jobType: 'copy',
    username: 'ahockell4l',
    files: ['job-50.pdf']
  },
  {
    timestamp: 1531643821000,
    jobType: 'scan',
    username: 'nsteelo',
    files: ['job-99.pdf']
  },
  {
    timestamp: 1531593086000,
    jobType: 'scan',
    username: 'ehaylock5s',
    files: ['job-225.pdf']
  },
  {
    timestamp: 1531568726000,
    jobType: 'print',
    username: 'frogliero34',
    files: ['job-580.pdf']
  },
  {
    timestamp: 1531413888000,
    jobType: 'scan',
    username: 'lvickars3g',
    files: ['job-422.pdf']
  },
  {
    timestamp: 1531359072000,
    jobType: 'copy',
    username: 'khounsome3j',
    files: ['job-209.pdf']
  },
  {
    timestamp: 1531345427000,
    jobType: 'copy',
    username: 'cosbaldstone1z',
    files: ['job-839.pdf']
  },
  {
    timestamp: 1531255635000,
    jobType: 'copy',
    username: 'bjosef7w',
    files: ['job-314.pdf']
  },
  {
    timestamp: 1531122470000,
    jobType: 'scan',
    username: 'lyushkov32',
    files: ['job-747.pdf']
  },
  {
    timestamp: 1531116111000,
    jobType: 'copy',
    username: 'dcaudelier6r',
    files: ['job-470.pdf']
  }
];

const result = {
  filterNoErrors: [
    {
      files: ['job-674.pdf'],
      jobType: 'copy',
      timestamp: 1531856650000,
      username: 'bhaskell2k'
    },
    {
      files: ['job-451.pdf'],
      jobType: 'print',
      timestamp: 1531785990000,
      username: 'mesp60'
    },
    {
      files: ['job-501.pdf'],
      jobType: 'scan',
      timestamp: 1531694951000,
      username: 'dcaudelier6r'
    },
    {
      files: ['job-120.pdf'],
      jobType: 'scan',
      timestamp: 1531684742000,
      username: 'bcooch82'
    },
    {
      files: ['job-862.pdf'],
      jobType: 'scan',
      timestamp: 1531676574000,
      username: 'oeagleston2l'
    },
    {
      files: ['job-769.pdf'],
      jobType: 'scan',
      timestamp: 1531614880000,
      username: 'dhedney29'
    },
    {
      files: ['job-410.pdf'],
      jobType: 'scan',
      timestamp: 1531498557000,
      username: 'dhedney29'
    },
    {
      files: ['job-850.pdf'],
      jobType: 'print',
      timestamp: 1531495071000,
      username: 'pvedntyev11'
    },
    {
      files: ['job-782.pdf'],
      jobType: 'copy',
      timestamp: 1531486558000,
      username: 'brosendahl2c'
    },
    {
      files: ['job-626.pdf'],
      jobType: 'copy',
      timestamp: 1531486386000,
      username: 'ctooheyk'
    },
    {
      files: ['job-540.pdf'],
      jobType: 'scan',
      timestamp: 1531463107000,
      username: 'lchaves71'
    },
    {
      files: ['job-956.pdf'],
      jobType: 'print',
      timestamp: 1531447704000,
      username: 'nbarnett2n'
    },
    {
      files: ['job-1031.pdf'],
      jobType: 'print',
      timestamp: 1531436855000,
      username: 'dstrotton65'
    },
    {
      files: ['job-467.pdf'],
      jobType: 'print',
      timestamp: 1531435215000,
      username: 'jlivzey1y'
    },
    {
      files: ['job-1054.pdf'],
      jobType: 'copy',
      timestamp: 1531335608000,
      username: 'kgeleman6o'
    },
    {
      files: ['job-864.pdf'],
      jobType: 'scan',
      timestamp: 1531203980000,
      username: 'apocklington6e'
    },
    {
      files: ['job-72.pdf'],
      jobType: 'print',
      timestamp: 1531202120000,
      username: 'osimeons19'
    },
    {
      files: ['job-91.pdf'],
      jobType: 'copy',
      timestamp: 1531144760000,
      username: 'lfairlaw35'
    },
    {
      files: ['job-703.pdf'],
      jobType: 'scan',
      timestamp: 1531842121000,
      username: 'kmillan33'
    },
    {
      files: ['job-81.pdf'],
      jobType: 'scan',
      timestamp: 1531818442000,
      username: 'mbutchard3m'
    },
    {
      files: ['job-250.pdf'],
      jobType: 'scan',
      timestamp: 1531808056000,
      username: 'apinchen5u'
    },
    {
      files: ['job-50.pdf'],
      jobType: 'copy',
      timestamp: 1531654108000,
      username: 'ahockell4l'
    },
    {
      files: ['job-99.pdf'],
      jobType: 'scan',
      timestamp: 1531643821000,
      username: 'nsteelo'
    },
    {
      files: ['job-225.pdf'],
      jobType: 'scan',
      timestamp: 1531593086000,
      username: 'ehaylock5s'
    },
    {
      files: ['job-580.pdf'],
      jobType: 'print',
      timestamp: 1531568726000,
      username: 'frogliero34'
    },
    {
      files: ['job-422.pdf'],
      jobType: 'scan',
      timestamp: 1531413888000,
      username: 'lvickars3g'
    },
    {
      files: ['job-209.pdf'],
      jobType: 'copy',
      timestamp: 1531359072000,
      username: 'khounsome3j'
    },
    {
      files: ['job-839.pdf'],
      jobType: 'copy',
      timestamp: 1531345427000,
      username: 'cosbaldstone1z'
    },
    {
      files: ['job-314.pdf'],
      jobType: 'copy',
      timestamp: 1531255635000,
      username: 'bjosef7w'
    },
    {
      files: ['job-747.pdf'],
      jobType: 'scan',
      timestamp: 1531122470000,
      username: 'lyushkov32'
    },
    {
      files: ['job-470.pdf'],
      jobType: 'copy',
      timestamp: 1531116111000,
      username: 'dcaudelier6r'
    }
  ],
  filterByType: [
    {
      files: ['job-501.pdf'],
      jobType: 'scan',
      timestamp: 1531694951000,
      username: 'dcaudelier6r'
    },
    {
      files: ['job-120.pdf'],
      jobType: 'scan',
      timestamp: 1531684742000,
      username: 'bcooch82'
    },
    {
      files: ['job-862.pdf'],
      jobType: 'scan',
      timestamp: 1531676574000,
      username: 'oeagleston2l'
    },
    {
      files: ['job-769.pdf'],
      jobType: 'scan',
      timestamp: 1531614880000,
      username: 'dhedney29'
    },
    {
      files: ['job-410.pdf'],
      jobType: 'scan',
      timestamp: 1531498557000,
      username: 'dhedney29'
    },
    {
      files: ['job-540.pdf'],
      jobType: 'scan',
      timestamp: 1531463107000,
      username: 'lchaves71'
    },
    {
      files: ['job-864.pdf'],
      jobType: 'scan',
      timestamp: 1531203980000,
      username: 'apocklington6e'
    },
    {
      files: ['job-703.pdf'],
      jobType: 'scan',
      timestamp: 1531842121000,
      username: 'kmillan33'
    },
    {
      files: ['job-81.pdf'],
      jobType: 'scan',
      timestamp: 1531818442000,
      username: 'mbutchard3m'
    },
    {
      files: ['job-250.pdf'],
      jobType: 'scan',
      timestamp: 1531808056000,
      username: 'apinchen5u'
    },
    {
      files: ['job-99.pdf'],
      jobType: 'scan',
      timestamp: 1531643821000,
      username: 'nsteelo'
    },
    {
      files: ['job-225.pdf'],
      jobType: 'scan',
      timestamp: 1531593086000,
      username: 'ehaylock5s'
    },
    {
      files: ['job-422.pdf'],
      jobType: 'scan',
      timestamp: 1531413888000,
      username: 'lvickars3g'
    },
    {
      files: ['job-747.pdf'],
      jobType: 'scan',
      timestamp: 1531122470000,
      username: 'lyushkov32'
    }
  ],
  filterByUsers: [
    {
      files: ['job-862.pdf'],
      jobType: 'scan',
      timestamp: 1531676574000,
      username: 'oeagleston2l'
    },
    {
      files: ['job-467.pdf'],
      jobType: 'print',
      timestamp: 1531435215000,
      username: 'jlivzey1y'
    }
  ],
  filterByDateRange: [
    {
      files: ['job-674.pdf'],
      jobType: 'copy',
      timestamp: 1531856650000,
      username: 'bhaskell2k'
    },
    {
      files: ['job-451.pdf'],
      jobType: 'print',
      timestamp: 1531785990000,
      username: 'mesp60'
    },
    {
      files: ['job-703.pdf'],
      jobType: 'scan',
      timestamp: 1531842121000,
      username: 'kmillan33'
    },
    {
      files: ['job-81.pdf'],
      jobType: 'scan',
      timestamp: 1531818442000,
      username: 'mbutchard3m'
    },
    {
      files: ['job-250.pdf'],
      jobType: 'scan',
      timestamp: 1531808056000,
      username: 'apinchen5u'
    }
  ]
};
