// ทำไม่ทัน

function singleNumber(nums) {
  // Start coding here
  result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        console.log(nums[i], nums[j], "same");
      } else {
        console.log(nums[i], nums[j], "not same");
      }
    }
  }
}

let result1 = singleNumber([2, 2, 1]);
// let result2 = singleNumber([4, 1, 2, 1, 2]);
// let result3 = singleNumber([10]);

console.log(result1); // 1
// console.log(result2); // 4
// console.log(result3); // 10
// console.log(typeof result1); // "number"
