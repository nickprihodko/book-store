const getSearchString = (filter, query) => {
  let searchString = "";

  // first: look in store
  const entries = Object.entries(filter);
  entries.forEach(([key, value]) => {
    if (value) {
      searchString += `${key}=${value}&`;
    }
  });
  if (searchString) {
    return searchString.slice(0, searchString.length - 1);
  }

  // second: look in location
  for (let param of query) {
    searchString += `${param[0]}=${param[1]}&`;
  }
  return searchString.slice(0, searchString.length - 1);
};

export default getSearchString;
