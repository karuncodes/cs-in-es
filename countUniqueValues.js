// Multiple Counters problem 
// count unique values in a given array of number, array is sorted. 


// [1,2,2,2,2,3,3,4,4,4,4,4,4,4,4]


function countUniqueVals(arr){
    let left = 0;
    let right = 1;
    let unique = 1;
    if(arr.length === 0 ) {
        return 0
    }
    if(arr.length === 1) {
        return 1
    }
    while (right < arr.length) {
        if(arr[right]-arr[left] !== 0) {
            unique++;
            right++;
            left = right-1;
        }
        else {
            right++
        }
    }
    return unique
}