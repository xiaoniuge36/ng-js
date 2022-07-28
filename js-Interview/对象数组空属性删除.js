function delEmptyAll(){
    if (params instanceof Array) {
        for (let i = 0; i < params.length; i++) {
            if (params[i] == undefined || params[i] == null || params[i] == '') {   
                params.splice(i, 1)
                i--
            }
            if (params[i] instanceof Array || params[i] instanceof Object) {
                delEmptyAll(params[i])
            }
        }
    }
    if (params instanceof Object) {
        for (let i in params) {
            if (params[i] == undefined || params[i] == null || params[i] == '') {
                delete params[i]
            }
            if (params[i] instanceof Array || params[i] instanceof Object) {
                delEmptyAll(params[i])
            }
        }
    }
}
//递归删除对象数组中的空属性

//filter()删除数组中的空属性
// function delEmpty(arr){
//     return arr.filter(item=>{
//         if(typeof item === 'object'){
//         return delEmpty(item)
//         }else{
//         return item
//         }
//     })
//     }
//     let arr = [{a:1},{b:2},{c:3}]
//     console.log(delEmpty(arr))
    // [ { a: 1 }, { b: 2 }, { c: 3 } ]
    // [ { a: 1 }, { b: 2 }, { c: 3 } ]
