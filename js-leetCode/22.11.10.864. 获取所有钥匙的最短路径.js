/**
 * @param {string[]} grid
 * @return {number}
 */
 var shortestPathAllKeys = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // BFS队列，[i, j, k, s]  i,j表示grid的坐标，k是拥有的钥匙，s代表步数
    let queue = []
    // 代表走过的坐标
    const seen = new Set();
    // 钥匙的总数, 二进制压缩状态
    let keys = 0; 
    // 四个方向步数 上下左右
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    // 变成二进制中的一位
    const zip = (char) => 1 << (char.toLocaleLowerCase().charCodeAt() - 97)

    // 寻找到起点
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '@') {
                queue.push([i, j, 0, 0])
                seen.add(`${i},${j},0`) // 降成一维存储
            }
            if (/[a-f]/.test(grid[i][j])) {
                keys |= zip(grid[i][j])
            }
        }
    }

    // 广度优先遍历
    while (queue.length) {
        const [i, j, k, s] = queue.shift();
        // 如果找到所有钥匙直接返回，BFS保证最短路径
        if (keys === k) {
            return s
        }
        for (let z = 0; z < dirs.length; z++) {
            const nextI = i + dirs[z][0];
            const nextJ = j + dirs[z][1];
           
            // 超过边界
            if (nextI < 0 || nextJ < 0 || nextI >= m || nextJ >= n) {
                continue;
            }
            // 是墙
            if (grid[nextI][nextJ] === '#') {
                continue;
            }
            // 是锁，且没有对应钥匙(换言之拥有的钥匙二级制数中，对应的位数是0)
            if (/[A-F]/.test(grid[nextI][nextJ]) && !(k & zip(grid[nextI][nextJ]))) {
                continue;
            }
            // 走过的不需要再走
            const uniqKey = `${nextI},${nextJ},${k}`
            if (seen.has(uniqKey)) {
                continue
            }
            // 记录走过的
            seen.add(uniqKey)
            // 是钥匙的话，需要存储
            if (/[a-f]/.test(grid[nextI][nextJ])) {
                queue.push([nextI, nextJ, k | zip(grid[nextI][nextJ]), s+1])
            } else {
                
                queue.push([nextI, nextJ, k, s+1])
            }
        }
    }
    
    return -1;
};

