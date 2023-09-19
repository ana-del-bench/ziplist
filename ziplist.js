const test1 = [1, 2, 3, 4];
const test2 = ['a', 'b', 'c', 'd'];

function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
