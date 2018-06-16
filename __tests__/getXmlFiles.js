import path from 'path';
import getXmlFiles from '../src/libs/getXmlFiles';

const result = [
  `${__dirname}/dirs/job-copy.xml`,
  `${__dirname}/dirs/job-scan.xml`,
  `${__dirname}/dirs/dir_4/job-invalid.xml`,
  `${__dirname}/dirs/dir_4/job-print.xml`,
  `${__dirname}/dirs/job-invalid.xml`,
  `${__dirname}/dirs/dir_1/job-invalid.xml`,
  `${__dirname}/dirs/dir_1/subdir_1/job-invalid.xml`,
  `${__dirname}/dirs/dir_1/subdir_1/job-print.xml`,
  `${__dirname}/dirs/dir_1/job-print.xml`,
  `${__dirname}/dirs/dir_3/job-invalid.xml`,
  `${__dirname}/dirs/dir_3/job-print.xml`,
  `${__dirname}/dirs/job-print.xml`
];

test('Recursively getting XML files in directory', async () => {
  expect.assertions(1);

  const dir = path.join(__dirname, 'dirs');
  const xmlFiles = await getXmlFiles(dir);

  expect(xmlFiles).toEqual(result);
});
