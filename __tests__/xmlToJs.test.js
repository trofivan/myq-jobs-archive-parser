import path from 'path';
import xmlToJs from '../src/libs/xmlToJS';

test('XML to JS test (copy)', async () => {
  expect.assertions(1);

  const xmlCopy = path.join(__dirname, 'xml', 'job-copy.xml');
  const jsCopy = await xmlToJs(xmlCopy);

  const resultCopy = {
    data: {
      timestamp: '2017-01-30 15:42:51',
      username: 'dlatek6p',
      jobType: 'copy',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      printerAddr: '102.85.96.219',
      files: {
        file: 'job-2.pdf'
      }
    }
  };

  expect(jsCopy).toEqual(resultCopy);
});

test('XML to JS test (scan)', async () => {
  expect.assertions(1);

  const xmlScan = path.join(__dirname, 'xml', 'job-scan.xml');
  const jsScan = await xmlToJs(xmlScan);

  const resultScan = {
    data: {
      files: { file: 'job-1.pdf' },
      jobType: 'scan',
      printerAddr: '236.79.97.64',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: '2017-06-12 10:33:55',
      username: 'mturone31'
    }
  };

  expect(jsScan).toEqual(resultScan);
});

test('XML to JS test (print)', async () => {
  expect.assertions(1);

  const xmlPrint = path.join(__dirname, 'xml', 'job-print.xml');
  const jsPrint = await xmlToJs(xmlPrint);

  const resultPrint = {
    data: {
      files: { file: 'job-0.pdf' },
      jobType: 'print',
      printerAddr: '53.201.154.38',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: '2017-08-05 08:32:06',
      username: 'mesp60'
    }
  };

  expect(jsPrint).toEqual(resultPrint);
});

test('XML to JS test (*.xml not found)', async () => {
  expect.assertions(1);
  try {
    const xmlFake = path.join(__dirname, 'xml', 'job-fake.xml');
    await xmlToJs(xmlFake);
  } catch (e) {
    expect(e.message).toMatch('no such file or directory');
  }
});

test('XML to JS test (invalid *.xml file)', async () => {
   expect.assertions(1);
  try {
    const xmlFake = path.join(__dirname, 'xml', 'job-invalid.xml');
    const jsFake = await xmlToJs(xmlFake);
    console.log(jsFake)
  } catch (e) {
    expect(e.message).toMatch('Non-whitespace before first tag');
  }
});
