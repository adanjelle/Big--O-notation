
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
//Accessing Nested Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(matrix[0][1]); // 2
console.log(matrix[1][2]); // 6
//
// let  containDuplicate  = function(nums){
//   let seen = new set();
//   for (let num of nums){
//     if(seen.has(num)){
//       return true;
//     }
//     seen.add(num);
//   }
//    return false;
// }
//

//Problem: Contains Duplicate
let containDuplicate = function(nums){
  let seen= new Set();
  for (let num of nums){
    if (seen.has(num)){
      return true;
    }
    seen.add(num);
  }
  return false
}
//Problem: Two Sum
let twosSum = function(nums, target){
  let map = new Map();
  for(let i =0; i<nums.length; i++){
    let needed = target-nums[i];
    if(map.has(needed)){
      return [map.get(needed), i];
    }
    map.set(nums[i], i);
  }
};
//
// Example: Checking if a key exists in a dictionary



    def measure_time(func: Callable, *args):

    start = time.time()
    result = func(*args)
    end = time.time()
    return result, end - start

print("=" * 50)
print("BIG O NOTATION LEARNING GUIDE")
print("=" * 50)