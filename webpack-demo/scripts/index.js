
var $ = require('jquery');
var Gotop=require('./goTop.js');
var Carousel=require('./carousel.js');
var autoLoad=require('./autoLoad.js');

// import $ from 'jquery'
// import Carousel from './carousel'
// import Gotop from './goTop'
// import autoLoad from './autoLoad'


new Gotop($(".contain"));
new Carousel($(".carousel"));
new autoLoad($(".news-wrap"));
