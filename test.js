






function isValidPassword(str){
    if(str.length<6||str.length>20||/\W/.test(str)){return false}
    var count=0;
    if(/[A-Z]/.test(str)){count++}
    if(/[a-z]/.test(str)){count++}
    if(/[0-9]/.test(str)){count++}
    if(/_/.test(str)){count++}
    return count>=2?true:false;
}