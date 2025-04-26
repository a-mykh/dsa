function countSubarraysByTwoLoops(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        count++;
      }
    }
  
    return count;
}

function countSubarraysBySingleLoop(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        count += arr.length - i;
    }
  
    return count;
}

function countSubarraysByFormula(arr) {
    const n = arr.length;

    return n * (n + 1) / 2;
}
