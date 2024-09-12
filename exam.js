function Mission1(array) {
  return array.filter((number) => number % 2 === 0);
}

function Mission2(string) {
  const splitString = string.split(" ");

  return splitString.filter((word) => word.length >= 4).length;
}
function Mission3(array) {
  return array.flat();
}

function Mission4(array) {
  let ascending = true;
  let descending = true;
  const amountOfRuns = array.length - 1;

  for (let item = 0; item < amountOfRuns; item++) {
    if (array[item] < array[item + 1]) {
      descending = false;
    }
    if (array[item] > array[item + 1]) {
      ascending = false;
    }
  }
  if (ascending == descending) return 0;
  if (ascending > descending) return 1;
  if (descending > ascending) return 2;
}

module.exports = {
  Mission1,
  Mission2,
  Mission3,
  Mission4,
};
