export const filterNoErrors = jobs => jobs.filter(job => !job.error);

export const filterByType = types => jobs =>
  jobs.filter(job => types.includes(job.jobType));

export const filterByUsers = users => jobs =>
  jobs.filter(
    job => (users.length === 0 ? true : users.includes(job.username))
  );

export const filterByDaterange = ([start, end]) => jobs =>
  start === null && end === null
    ? jobs
    : jobs.filter(({ timestamp }) => timestamp >= start && timestamp <= end);
