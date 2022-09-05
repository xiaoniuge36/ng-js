//手写ajax
function ajax(url,data,callback){
        var xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(xhr.responseText);
        }
    }
}
//测试
ajax('http://localhost:8080/test.php',{name:'张三',age:18},function(data){
    console.log(data);
}
);
//手写ajax
function ajax(url,data,callback){
    var xhr = new XMLHttpRequest();
xhr.open('POST',url,true);
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xhr.send(data);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        callback(xhr.responseText);
    }
}
}
//测试
ajax('http://localhost:8080/test.php',{name:'张三',age:18},function(data){
console.log(data);
}
);

