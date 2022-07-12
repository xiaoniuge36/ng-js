const matrix = new Array(2).fill(0).map(() => new Array(3).fill(0));

console.log(matrix);

console.log(new Array(2).fill(0));

//生成一个二维数组
console.log([0,0].map(() => new Array(3).fill(0)));


console.log([0,0].map(()=>console.log(arguments)));

var oddCells = function(m, n, indices) {
    let res = 0;
    const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (const index of indices) {
        for (let i = 0; i < n; i++) {
            matrix[index[0]][i]++;
        }
        for (let i = 0; i < m; i++) {
            matrix[i][index[1]]++;
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((matrix[i][j] & 1) !== 0) {
                res++;
            }
        }
    }
    return res;
};