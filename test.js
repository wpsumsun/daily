






function ajax(opts){
    var xhr=new XMLHttpRequest;
    var str=opts.url+'?';
    for(var key in opts.data){
        str+=key+'='+opts.data[key]+'&';
    }
    str=str.substr(0,str.length-1);
    xhr.onreadystatechange=function(){}
    xhr.open(opts.type,str,true);
    xhr.send();
}