export let getStoredJobs = () => {
  let storedJobs = localStorage.getItem("applied");
  if (storedJobs) {
    return JSON.parse(storedJobs);
  } else {
    return [];
  }
};

export let saveJobs = (job) => {
  let storedJobs = getStoredJobs();
  storedJobs.push(job);
  localStorage.setItem('applied', JSON.stringify(storedJobs))
};
