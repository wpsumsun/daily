define(['jquery'], function ($) {
    function Carousel(ct) {
        this.ct = ct;
        this.isAnimate = false;
        this.curPage = 0;
        this.init();
        this.bind();
        this.autoPlay();
    }
    Carousel.prototype = {
        init: function () {
            var imgWrap = this.imgWrap = this.ct.find(".img-wrap");
            var imgLi = this.imgLi = imgWrap.find("li"),

                imgLength = this.imgLength = imgLi.length,
                imgWidth = this.imgWidth = imgLi.first().width(),
                fistImg = imgLi.first().clone(),
                lastImg = imgLi.last().clone(),
                bulletli = this.bulletLi = this.ct.find(".bullet").children(),
                prevBtn = this.prevBtn = this.ct.find(".prev-btn"),
                nextBtn = this.nextBtn = this.ct.find(".next-btn");


            imgWrap.append(fistImg);
            imgWrap.prepend(lastImg);
            imgWrap.css("width", this.imgWidth * imgWrap.children().length)
            imgWrap.css("left", -this.imgWidth);
        },
        bind: function () {
            var _this = this;
            this.prevBtn.on("click", function () {
                _this.playPrev(1);
            })
            this.nextBtn.on("click", function () {
                _this.playNext(1);
            })
            this.bulletLi.on("click", function () {
                var bulletLiIndex = $(this).index();
                var num = bulletLiIndex - _this.curPage;
                console.log(bulletLiIndex + "," + num);
                if (num > 0) {
                    _this.playNext(num);
                } else {
                    _this.playPrev(-num);
                }
            })
            this.ct.hover(function () {
                _this.stopAutoPlay();
            }, function () {
                _this.autoPlay();
            })
        },
        playPrev: function (n) {
            var _this = this;
            if (this.isAnimate) {
                return;
            } else {
                this.isAnimate = true;
                this.imgWrap.animate({
                    left: "+=" + this.imgWidth * n
                }, function () {
                    _this.curPage -= n;
                    if (_this.curPage < 0) {
                        _this.imgWrap.css("left", -_this.imgWidth * _this.imgLength);
                        _this.curPage = _this.imgLength - 1;
                    }
                    _this.setBullet();
                    _this.isAnimate = false;
                })

            }
        },
        playNext: function (n) {
            var _this = this;
            if (this.isAnimate) {
                return
            } else {
                this.isAnimate = true;
                this.imgWrap.animate({
                    left: "-=" + this.imgWidth * n
                }, function () {
                    _this.curPage += n;
                    if (_this.curPage === _this.imgLength) {
                        _this.imgWrap.css("left", -_this.imgWidth);
                        _this.curPage = 0;
                    }
                    _this.setBullet();
                    _this.isAnimate = false;
                })
            }
        },
        setBullet: function () {
            this.bulletLi.eq(this.curPage).addClass("active").siblings().removeClass("active");
        },
        autoPlay: function () {
            var _this = this;
            this.timer = setInterval(function () {
                _this.playNext(1)
            }, 1500)
        },
        stopAutoPlay: function () {
            clearInterval(this.timer)
        }
    }
    return Carousel;
})