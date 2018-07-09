import getXmlFiles from './getXmlFiles';
import xmlToJS from './xmlToJS';

const convertJobObject = (xmlFile, { data }) => ({
  xmlFile,
  timestamp: Date.parse(data.timestamp),
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
    error: e.message.replace(/(\r\n|\n|\r)/gm, ' | ')
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
  const jobs = await Promise.all(promises);
  const jobsState = jobs.sort((a, b) => {
    const aTime = new Date(a.timestamp || 0).getTime();
    const bTime = new Date(b.timestamp || 0).getTime();

    return bTime - aTime;
  });

  return jobsState;
};
