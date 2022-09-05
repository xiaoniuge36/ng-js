//盛最多水的容器
//双指针法
function maxArea(height) {
    let max = 0;
    let left = 0; //左边的指针
    let right = height.length - 1; //右边的指针
    while ( left  < right) { 
        let area = Math.min(height[left], height[right]) * (right - left);
        if (area > max) {
            max = area;
        }
        // max = Math.max(max, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};

//两个for循环
// var maxArea = function(height) {
//     max = 0;
//     for (let i = 0; i < height.length; i++) {
//         for (j = i + 1; j < height.length; j++) {
//             max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
//         }
//     }
//     return max;
// };

