/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function (n, edgeList, queries) {
    edgeList = edgeList.sort(([, , dis1], [, , dis2]) => dis1 - dis2)
    // 先记录下原始的索引，然后再排序
    // 这里记录下的索引，是给res进行操作的时候用的
    queries = queries.map(
        (item, index) => [...item, index]
    ).sort(([, , dis1], [, , dis2]) => dis1 - dis2)
    const uf = new UF(n)
    const res = Array(queries.length).fill(false)
    let pos = 0
    for (let [i, j, limit, index] of queries) {
        // 遍历edgeList，且edgeList[pos]的limit小于规定的limit才允许连通
        while (pos < edgeList.length && edgeList[pos][edgeList[pos].length - 1] < limit) {
            const [node1, node2] = edgeList[pos]
            uf.unionSet(node1, node2)
            pos++
        }
        // 判断是否有连通即可
        if (uf.connected(i, j)) {
            res[index] = true
        }
    }

    // console.log(res)
    return res
};

class UF {
    constructor(size) {
        this.parents = Array(size).fill(0).map((_, i) => i)
        this.sizes = Array(size).fill(1)
    }

    // 得到集合数量
    getSizeOfSet(x) {
        const px = this.findSet(x)
        return this.sizes[px]
    }

    // 查找元
    findSet(x) {
        if (x !== this.parents[x]) {
            // 路径优化，在findSet进行 会将这个节点到元的所有元素的parents指向元
            this.parents[x] = this.findSet(this.parents[x])
        }
        return this.parents[x]
    }

    // 合并集合
    unionSet(x, y) {
        const px = this.findSet(x);
        const py = this.findSet(y);
        if (px === py) return

        // 将较短的集合的元的parents指向较长的集合的元
        if (this.sizes[px] > this.sizes[py]) {
            this.parents[py] = px;
            this.sizes[px] += this.sizes[py];
        } else {
            this.parents[px] = py;
            this.sizes[py] += this.sizes[px];
        }
    }

    connected(x, y) {
        return this.findSet(x) === this.findSet(y)
    }
}

