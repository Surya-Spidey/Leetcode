let num = [1,2,3,4,5];
target = 5;
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let need = target -nums[i];
        if(map.has(need)){
            return [map.get(need), i];
        }        map.set(nums[i], i); 
    }
};

console.log(twoSum(num, target));