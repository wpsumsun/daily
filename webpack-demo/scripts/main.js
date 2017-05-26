requirejs.config({
      baseUrl: "./scripts",
    paths: {
        jquery: "jquery-2.1.1.min",
        goTop: "GoTop",
        carousel: "carousel",
        autoLoad: "autoLoad",
    }
});
requirejs(["index"]);
// define(["jquery","GoTop","Carousel","autoLoad"],function($,GoTop,Carousel,autoLoad){
//     var backTop = new GoTop($(".contain")),
//         carousel=new Carousel($(".carousel")),
//         newsautoload=new autoLoad($(".news-wrap"));
// })