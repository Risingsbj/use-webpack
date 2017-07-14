var $ = require('./jquery-3.2.1.min.js')
var Carousel = require('./Carousel.js')
var	GoTop = require('./GoTop.js')
var	LoadMore = require('./loadmore.js')

GoTop.init($('#footer'))

Carousel.init($('.carousel'))

LoadMore.init($('.waterfall-ct'), $('.loadmore'))
