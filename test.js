function getRandColor(){
    var dict="0123456789abcdef";
    var colorStr="#",n;
    for(var i=0;i<6;i++){
        n=Math.floor( Math.random()*(dict.length) );
        colorStr+=dict[n];
    }
    return colorStr
}