
var $ = require('jquery');

var Gotop = (function () {
    function _GoTop(ct) {
        this.ct = ct;
        this.target = $("<div class='gotop'>返回顶部</div>");
        this.creatNode();
        this.bindEvent();
    }
    _GoTop.prototype = {
        creatNode: function () {
            this.ct.append(this.target);
        },
        bindEvent: function () {
            var _this = this;
            $(window).on("scroll", function () {
                if ($(window).scrollTop() < 50) {
                    _this.target.hide();
                } else {
                    _this.target.show();
                }
            })
            this.target.on("click", function () {
                $("html,body").animate({ scrollTop: 0 }, 400)
            })
        }
    }

    return {
        init: function (ct) {
            new _GoTop(ct);
        }
    }

})()

module.exports = GoTop;