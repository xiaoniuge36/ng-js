/**
 * 根据两个数组中的数字都是唯一的，可以通过数字来判断
 * 1. 储存pieces的第一个元素到map中
 * 2. 判断arr中是否存在这个值 如果没有即失败
 * 3. 这个整数数组的后续整数能够连接起来 如果不能即失败
 */
 var canFormArray = function (arr, pieces) {
    let m = new Map()
    // 储存pieces的第一个元素到map中
    pieces.forEach(item => {
        m.set(item[0], item)
    })
    for (let i = 0; i < arr.length; i++) {
        if (!m.has(arr[i])) return false // 判断arr中是否存在这个值 如果没有即失败
        // 这个整数数组的后续整数能够连接起来 如果不能即失败
        let item = m.get(arr[i])
        // 从1开始 0已经通过hash判断了
        for (let j = 1; j < item.length; j++) {
            i++; // 增加arr的指针 保证对应
            if (arr[i] !== item[j]) return false
        }
    }
    return true
}

