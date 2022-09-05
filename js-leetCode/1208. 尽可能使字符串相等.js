var equalSubstring = function (s, t, maxCost) {
    let left = 0
    let right = 0
    const gap = s.split('').map((i, index) => Math.abs(i.charCodeAt() - t[index].charCodeAt()))
    const len = s.length
    while (right < len) {
        if (maxCost >= gap[right]) {
            maxCost -= gap[right]
        } else {
            maxCost += gap[left]-gap[right]
            left++
        }
        right++
    }
    return right - left
};


