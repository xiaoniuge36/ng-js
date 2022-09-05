//三数之和
//时间复杂度O(n^2)
//遇到重复的数字，可以跳过 
var threeSum = function(nums) { //nums是一个数组
    var result = []; //存放结果
    nums.sort((a, b) => a - b); //排序
    for (var i = 0; i < nums.length; i++) { //遍历数组
        if (nums[i] > 0) break; //如果当前数大于0，则跳出循环
        if (i > 0 && nums[i] == nums[i - 1]) continue; //如果当前数等于上一个数，则跳过 
        var left = i + 1; //左指针
        var right = nums.length - 1; //右指针
        while (left < right) { //左指针小于右指针
            var sum = nums[i] + nums[left] + nums[right]; //三数之和
            if (sum == 0) { //如果三数之和等于0
                result.push([nums[i], nums[left], nums[right]]); //将三数之和放入结果数组
                while (left < right && nums[left] == nums[left + 1]) left++; //如果左指针等于右指针，则左指针向右移动 排除相等的数
                while (left < right && nums[right] == nums[right - 1]) right--; //如果左指针等于右指针，则右指针向左移动 排除相等的数
                left++; //左指针向右移动
                right--; //右指针向左移动
            } else if (sum < 0) { //如果三数之和小于0
                left++; //左指针向右移动
            } else {
                right--; //右指针向左移动
            }
        }
    }
    return result; //返回结果数组
}