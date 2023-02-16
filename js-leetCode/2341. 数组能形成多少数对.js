var numberOfPairs = function (nums) {
  let n = nums.length;
  let ans = 0;
  let hm = {};
  for (let num of nums) {
    if (!hm[num]) hm[num] = 0;
    hm[num]++;
  }
  for (let key in hm) {
    if (hm[key] >= 2) {
      ans += Math.floor(hm[key] / 2);
    }
  }
  return [ans, n - ans * 2];
};
