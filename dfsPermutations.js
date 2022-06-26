/* This is the most simple method for understanding permutation that I've seen.
It involves a DFS approach for finding permutations. More info can be found here:
https://www.youtube.com/watch?v=4FdPoW4Qzb4
*/

function permute(arr) {
  const result = [];

  function dfs(i, dfsArr) {
    //base case
    if(i === arr.length) {
      result.push(dfsArr.slice());
      return;
    }

    for(let j = i; j < dfsArr.length; j++) {
      [dfsArr[i], dfsArr[j]] = [dfsArr[j], dfsArr[i]];
      dfs(i+1, dfsArr);
      [dfsArr[j], dfsArr[i]] = [dfsArr[i], dfsArr[j]];
    }
  }

  dfs(0, arr);

  return result;
}

console.log(permute([1, 2, 3]));