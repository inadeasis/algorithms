// A function that determines whether the second array is a subsequence of the first one.

const isValidSubsequence = (array, sequence) => {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length){
        if (array[arrIdx] === sequence[seqIdx])
            seqIdx++;
        arrIdx++;}
    return seqIdx === sequence.length;
}

// test
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]))
console.log(isValidSubsequence( [5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 6, -1, 8, 10]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[22, 25, 6]))
console.log(isValidSubsequence ([5, 1, 22, 25, 6, -1, 8, 10],[25]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 25, 6, -1, 8, 10, 12]))