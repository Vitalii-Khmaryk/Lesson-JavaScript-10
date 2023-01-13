function arrCopy(arr) {
  return arr.slice();
}
const arr1 = arrCopy([1, 2, 3]);
console.log(arr1);
const arr2 = arrCopy([1, 2, 3, [10, 20]]);
console.log(arr2);



function arrToString(arr) {
  return arr.map((arr) => "" + arr);
}
const arr3 = arrToString([1, 2, 3]);
console.log(arr3);
const arr4 = arrToString([10, 200, 3333]);
console.log(arr4);




function getLength(arr) {
  let newArray = [];
  for (const i in arr) {
    newArray.push(arr[i].length);
  }
  return newArray;
}
const arr5 = getLength(["Ivan", "Pavlo", "Ira"]);
console.log(arr5);
const arr6 = getLength(["Oleksiy", "Andriana"]);
console.log(arr6);



function removeDuplicates(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
const arr7 = removeDuplicates(["html", "css", "html", "js"]);
console.log(arr7);
const arr8 = removeDuplicates(["html","css","js","html","js","python","js","scss",]);
console.log(arr8);
