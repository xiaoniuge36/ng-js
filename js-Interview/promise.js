// let p1 = new Promise((resolve, reject) => {
//     resolve('成功')
//     reject('失败')
// })
// console.log('p1', p1)

// let p2 = new Promise((resolve, reject) => {
//     reject('失败')
//     resolve('成功')
// })
// console.log('p2', p2)

// let p3 = new Promise((resolve, reject) => {
//     throw('报错')
// })
// console.log('p3', p3)



//手写Promise
function Promise(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolve = [];
    this.onReject = [];
    let resolve = value => {
        if (this.status === 'pending') {
            this.status = 'resolved';
            this.value = value;
            this.onResolve.forEach(fn => fn(value));
        }
    }
    let reject = reason => {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.reason = reason;
            this.onReject.forEach(fn => fn(reason));
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
Promise.prototype.then = function(onResolve, onReject) {
    if (this.status === 'resolved') {
        onResolve(this.value);
    }
    if (this.status === 'rejected') {
        onReject(this.reason);
    }
    if (this.status === 'pending') {
        this.onResolve.push(onResolve);
        this.onReject.push(onReject);
    }
}
let p = new Promise((resolve, reject) => {
    resolve('成功')
    reject('失败')
}
)
console.log('p', p)
p.then(value => {
    console.log('成功', value)
}
, reason => {
    console.log('失败', reason)
}
)
p.then(value => {
    console.log('成功', value)
}
, reason => {
    console.log('失败', reason)
}
)




