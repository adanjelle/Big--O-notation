let twoSum = function(nums, target){
  const map = {};
  
  for(let i = 0; i < nums.length; i++){
    let diff = target - nums[i];
    
    if(map[diff] !== undefined){
      return [map[diff], i];
    }
    
    map[nums[i]] = i;  // Fixed: map[nums[i]] = i
  }
  
  return []; // Return empty array if no solution
};