





function friendlyDate(time){
    var offsetTime=new Date().getTime()-time;
    var mins=offsetTime/(60*1000);
    var hours=offsetTime/(60*60*1000);
    var days=offsetTime/(24*60*60*1000);
    var  mons=offsetTime/(30*24*60*60*1000);
    var  years=offsetTime/(12*30*24*60*60*1000);
    if(mins<1){
        return "刚刚";
    }
    else if(hours<1){
        return "三分钟前";
    }
    else if(days<1){
        return "8小时前";
    }
    else if(mons<1){
        return "3天前";
    }
    else if(years<1){
        return "2个月前";
    }else{
        return "8年前";
    }
}