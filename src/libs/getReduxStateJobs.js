import path from 'path';
import getXmlFiles from './getXmlFiles';
import xmlToJS from './xmlToJS';

const convertJobObject = (xmlFile, { data }) => ({
  xmlFile,
  timestamp: data.timestamp,
  jobType: data.jobType,
  printerAddr: data.printerAddr,
  serverName: data.serverName,
  serverVersion: data.serverVersion,
  username: data.username,
  files:
    typeof data.files.file === 'string'
      ? [data.files.file]
      : [...data.files.file]
});

const errToResolvePromise = (xmlFile, e) =>
  Promise.resolve({
    xmlFile,
    error: true
  });

const xmlFilesToPromises = xmlFiles =>
  xmlFiles.map(file =>
    xmlToJS(file)
      .then(job => convertJobObject(file, job))
      .catch(e => errToResolvePromise(file, e))
  );

export default async rootDir => {
  const xmlFiles = await getXmlFiles(rootDir);
  const promises = xmlFilesToPromises(xmlFiles);
  const jobsState = await Promise.all(promises);

  return jobsState;
};
