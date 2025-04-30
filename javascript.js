/* Exercise 1 : Translate border-left-width to borderLeftWidth */
    /* fin the dash, convert every letter after that into uppercase */


/* const testWord = "-this-word-is-cool";
const splittedWord = testWord.split('-');
const filteredWord = splittedWord.filter(element => element !== "");
const capitalizedWord = filteredWord.map((element, index) => {
    if (index === 0){
        return element;
    } else {
        let newWord = element[0].toUpperCase() + element.slice(1);
        return newWord;
    }
}
);
const joinedlWord = capitalizedWord.join('');

console.log(joinedlWord); */







/*  Exercise 2

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array. */


/* let arr = [5, 3, 8, 1];

function checkIfInRange (arr, max, min) {
    return arr.filter(
        element => (element <= max && element >= min)
    );
    };

newArr = checkIfInRange(arr,10,5);

console.log(newArr) */


/* Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything. */
/* let arr = [5, 3, 8, 1, 9, 2, 4];

function modifyArr(arr, max, min) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= max || arr[i] <= min) {
      arr.splice(i, 1);
    }
  }
}

modifyArr(arr, 5, 3);
console.log(arr);  // [] */


