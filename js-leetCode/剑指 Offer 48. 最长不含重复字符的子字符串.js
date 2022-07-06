
//哈希表
/**
  * @param {string} s
  * @return {number}
  */
var lengthOfLongestSubstring = function (s) {
    let dic = new Map();
    let res = 0,
        tmp = 0;
    for (let j = 0; j < s.length; j++) {
        let i = dic.has(s[j]) ? dic.get(s[j]) : -1;
        dic.set(s[j], j);
        tmp = tmp < j - i ? tmp + 1 : j - i;
        res = Math.max(res, tmp);
    }
    return res;
};

//手写promise
function Promise(fn) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolve = [];
    this.onReject = [];
    fn(this.resolve.bind(this), this.reject.bind(this));
}
Promise.prototype.resolve = function (value) {
    if (this.status === 'pending') {
        this.status = 'resolved';
        this.value = value;
        this.onResolve.forEach(fn => fn());
    }
}
Promise.prototype.reject = function (reason) {
    if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onReject.forEach(fn => fn());
    }
}
Promise.prototype.then = function (onResolve, onReject) {
    if (this.status === 'resolved') {
        onResolve(this.value);
    } else if (this.status === 'rejected') {
        onReject(this.reason);
    } else {
        this.onResolve.push(onResolve);
        this.onReject.push(onReject);
    }
}
Promise.prototype.catch = function (onReject) {
    this.then(null, onReject);
}
Promise.prototype.finally = function (fn) {
    this.then(fn, fn);
}
