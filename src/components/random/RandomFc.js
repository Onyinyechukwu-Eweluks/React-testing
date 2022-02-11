function callBack(val, data) {
  return val + data;
}
function RandomFc(data) {
  return callBack(3, data);
}

function filterByTerm(searchTerm, data) {
  const regex = new RegExp(searchTerm, "i");
  const filteredItem = data.filter((s) => s.url.match(regex));
  return filteredItem;
}

export { RandomFc, filterByTerm };
