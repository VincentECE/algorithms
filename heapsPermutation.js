/* This is Heap's algorithm for generating all permutations
It's a modern approach for bruteforce that's O(n!).
This algorithm is great because it manipulates arrays in place to save space.
This is a slightly modified version from Justin Kim. I find that using arrow functions
can make code less legible for new learners so no arrow functions will be used here.
More info here:
https://www.youtube.com/watch?v=xghJNlMibX4
*/

const getPermutations = function(arr) {
  const output = [];

  const swapInPlace = function(arrToSwap, indexA, indexB) {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = function(n, heapArr) {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for(let i = 0; i < n -1; i++) {
      if(n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
}

console.log(JSON.stringify(getPermutations([1, 2, 3])));

