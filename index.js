// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter( function (name) {
      return name.toLowerCase() === string.toLowerCase()
  });
}

function fuzzyMatch(array, string) {
  let nameLength = string.length;
  return array.filter(function (driverName){
    return driverName.slice(0, nameLength) === string;
  });
}

function matchName(array, string) {
  return array.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
