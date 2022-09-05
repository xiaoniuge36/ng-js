/**
 * @param {number[]} heights
 * @return {number[]}
 */
 var canSeePersonsCount = function(heights) {
    const n = heights.length;
    const res = new Array(n).fill(0);
    // 保证栈中为递增
    const stack = [];
    stack.unshift(n - 1);
    // 从右向左遍历
    for (let i = n - 2; i >= 0; i--) {
        // 栈顶元素比当前元素矮
        while(stack.length && heights[i] > heights[stack[0]]) {
            // 从头部移出下标，后续左侧的人看不到此编号
            stack.shift();
            // 可见人数增加
            res[i]++;
        }
        // 栈中还有元素，那么栈顶元素比当前人员高，到此终止，后续人员看不到
        if (stack.length > 0) {
            res[i]++;
        }
        // 在头部加入下标
        stack.unshift(i);
    }
    return res;
};

