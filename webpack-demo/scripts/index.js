
var $ = require('jquery');
var GoTop=require('./goTop.js');
var Carousel=require('./carousel.js');
var autoLoad=require('./autoLoad.js');



GoTop.init($(".contain"))
Carousel.init($(".carousel"))
autoLoad.init($(".news-wrap"))
