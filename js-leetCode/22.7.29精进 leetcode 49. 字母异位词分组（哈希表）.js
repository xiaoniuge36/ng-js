var groupAnagrams = function(strs) {
    var res = [];
    var map = new Map();
    for(var i=0;i<strs.length;i++){
        var k = strs[i].split('').sort().join('');
        if(map.has(k)){
            map.get(k).push(strs[i]);
        }else{
            map.set(k, [strs[i]]);    
        }
    }
    map.forEach((val, key)=>{
        res.push(val);
    })
    return res;
    
};

