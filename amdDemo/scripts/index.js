define(["jquery","GoTop","Carousel","autoLoad"],function($,GoTop,Carousel,autoLoad){
    var backTop = new GoTop($(".contain")),
        carousel=new Carousel($(".carousel")),
        newsautoload=new autoLoad($(".news-wrap"));
})