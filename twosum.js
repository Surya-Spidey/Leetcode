let num = [1,2,3,4,5];
const target = 5;
var twoSum = function(nums, target) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];
        if (map.has(need)) {
            let indices = map.get(need);
            for (let index of indices) {
                result.push([index, i]);
            }
        }
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }
    return result;
};

console.log(twoSum(num, target));


/// 

let nums2 = [1,2,3,4,5];
target2 = 5;
let result2 = [];
var twoSum2 = function(nums2, target2) {
    for (let i = 0; i < nums2.length; i++)
        for (let j = i + 1; j < nums2.length; j++)
            if (nums2[i] + nums2[j] === target2) 
                result2.push(i,j);
    return result2 ;
}
console.log(twoSum2(nums2, target2));