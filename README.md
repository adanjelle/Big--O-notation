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

BEGINNER (Easy Big-O intuition)
1️⃣ Two Sum

Problem: Find two numbers that add up to a target.

Brute force: O(n²)

Optimized (HashMap): O(n)

👉 Teaches: How a data structure changes Big-O

2️⃣ Contains Duplicate

Sorting approach: O(n log n)

HashSet approach: O(n)

👉 Teaches: Trade-off between time and space

3️⃣ Valid Palindrome

Time: O(n)

Space: O(1)

👉 Teaches: Two-pointer technique

4️⃣ Reverse String

Time: O(n)

Space: O(1)

👉 Teaches: In-place operations

🟡 INTERMEDIATE (Where Big-O becomes real)
5️⃣ Longest Palindromic Substring

Time: O(n²)

Space: O(1)

👉 Teaches: Nested expansion & why n² happens

6️⃣ Zigzag Conversion

Time: O(n)

Space: O(n)

👉 Teaches: Direction control without nested loops

7️⃣ Group Anagrams

Time: O(n × k)

Space: O(n)

👉 Teaches: Frequency arrays & hashing strings

//BIG-O notation//
is used to describe the time complexity or space complexity of algorithm
-is a way to express the upper bound of an algorithm's time or space complexity
PROPERTISE OF BIG O NOTATION//
1. REFLEXIVITY
 for any function  f(n), f(n) = O(f(n))
 example:  f(n) = N2, then f(n) = O(N2)
 2. Transitivity:
BIG--  is way to measure the time  and space complexity  of an algorithm
* it descibes the upper bound  of the complexity in the worst case scenarion
olynomial Time Complexity: Big O(nk) Complexity
Polynomial time complexity refers to the time complexity of an algorithm that can be expressed as a polynomial function of the input size n. In Big O notation, an algorithm is said to have polynomial time complexity if its time complexity is O(nk), where k is a constant and represents the degree of the polynomial.

Algorithms with polynomial time complexity are generally considered efficient, as the running time grows at a reasonable rate as the input size increases. Common examples of algorithms with polynomial time complexity include linear time complexity O(n), quadratic time complexity O(n2), and cubic time complexity O(n3)