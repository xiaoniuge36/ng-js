//剑指 Offer 03. 数组中重复的数字

var findRepeatNumber = function (num) {
  let set = new Set();
  for (let i = 0; i < num.length; i++) {
    if (set.has(num[i])) {
      return num[i];
    }
    set.add(num[i]);
  }
};
