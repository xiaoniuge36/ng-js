/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
 var orderOfLargestPlusSign = function(n, mines) {
    // 1. 二分查找
    // 2. 前缀和
    if (mines.length === n * n) return 0;
    let m = new Map();
    for (let [r,c] of mines) {
        if (!m.has(r)) m.set(r, new Set());
        m.get(r).add(c);
    }
    let ll = 1, rr = Math.ceil(n/2);
    let rowPre = new Array(n).fill(0).map(i => []);
    let colPre = new Array(n).fill(0).map(i => []);
    for (let r=0; r<n; r++) {
        let sum = 0;
        for (let c=0; c<n; c++) {
            if (!m.has(r) || !m.get(r).has(c)) sum += 1;
            rowPre[r].push(sum);
        }
    }
    for (let c=0; c<n; c++) {
        let sum = 0;
        for (let r=0; r<n; r++) {
            if (!m.has(r) || !m.get(r).has(c)) sum += 1;
            colPre[c].push(sum);
        }
    }
    function find(o) {
        let tar = 4 * (o-1) + 2;
        for (let r=o-1; r<=n-o; r++) {
            for (let c=o-1; c<=n-o; c++) {
                // [c-o+1, c+o-1]
                // [r-o+1, r+o-1]
                let a = c-o+1 === 0 ? rowPre[r][c+o-1] : rowPre[r][c+o-1] - rowPre[r][c-o];
                let b = r-o+1 === 0 ? colPre[c][r+o-1] : colPre[c][r+o-1] - colPre[c][r-o];
                if (a+b === tar) return true;
            }
        }
        return false;
    }
    while (ll < rr) {
        // find last can.
        let mm = Math.ceil((ll+rr)/2);
        if (find(mm)) ll = mm;
        else rr = mm - 1;
    }
    return ll;
};
