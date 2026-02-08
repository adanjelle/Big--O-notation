
// 0(1) Constant time 
function getFirst(arr){
  return arr(0);
}

//linear time
//0(n)
function printAll(arr){
  for(let i= 0; i<arr.length; i++){

  }
  console.log(arr[i])
}

// Nested loop
// 0(N2) 
function  pairs(arr){
  for ( let i=0; i< arr.length; i++){
    for(let i= 0; i<arr.length; i++){
      console.log(arr[i], arr[i])
    }
  }
}
// what is the time and space complexity of two Sum
let twoSum= function (nums, target){
  const map ={};
  for(let i=0; i<nums.length; i++){
   let diff = target-nums[i];
   if (map[diff]!== undefined){
    return [map[diff], i];
   }
   map[nums[i]= i];
  }
};