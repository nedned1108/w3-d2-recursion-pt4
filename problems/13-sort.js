/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/
// 1. takes an array of int, 'nums'
// 2. returns an array containing those ints sorted from least to greatest
function sort(nums, sorted = []) {
    if (!nums.length) return sorted;
    let smallest = nums[0]
    let min = 0
    sorted = nums.filter((el, i) => {
        if (el < nums[min]) {
            min = i;
            smallest = el;
        }
    })
    sorted.push(smallest)
    nums.splice(min, 1)
    return sort(nums, sorted)
}

// function sort(nums, sorted = []) {
//     debugger
//     if (!nums.length) return sorted;
//     let min = 0;
//     debugger
//     nums.forEach((el, i) => {
//         debugger
//         if (el < nums[min]) {
//             min = i;   
//             debugger
//         }
//     })
//     debugger
//     sorted.push(nums.splice(min, 1)[0])
//     debugger
//     return sort(nums, sorted)
// }

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
