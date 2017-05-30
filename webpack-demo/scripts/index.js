
var $= require('jquery');
var GoTop=require('./goTop.js');
var Carousel=require('./carousel.js');
var AutoLoad=require('./autoLoad.js');

// import $ from 'jquery'
// import Carousel from './carousel'
// import Gotop from './goTop'
// import autoLoad from './autoLoad'
var gotop=new GoTop($(".contain"));
var carousel=new Carousel($(".carousel"));
var autoload=new AutoLoad($(".news-wrap"));