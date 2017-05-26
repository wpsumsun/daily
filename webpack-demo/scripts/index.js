
// var $ = require('jquery');
// var Gotop=require('./goTop');
// var Carousel=require('./carousel');
// var autoLoad=require('./autoLoad');

import $ from 'jquery'
import Carousel from './carousel'
import Gotop from './goTop'
import autoLoad from './autoLoad'


Gotop.init($(".contain"))
Carousel.init($(".carousel"))
autoLoad.init($(".news-wrap"))
