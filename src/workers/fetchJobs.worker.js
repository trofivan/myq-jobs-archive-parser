import getReduxStateJobs from '../libs/getReduxStateJobs';

const handleGetReduxStateJobs = async e => {
  const jobsFolder = e.data;
  const jobs = (await getReduxStateJobs(jobsFolder)).map((job, key) => ({
    key,
    ...job
  }));
  self.postMessage(jobs);
};

self.addEventListener('message', handleGetReduxStateJobs, false);
