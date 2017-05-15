define(['jquery'],function($){
    function AutoLoad(ct) {
            this.curPage = 1;
            this.perPageCount = 15;
            this.heightArr = [];
            this.isDataArrive = true;
            this.ct = ct;
            this.getNews();
            this.bind();
        }
        AutoLoad.prototype = {
            getNews: function () {
                var _this=this;
                $.ajax({
                    url: 'http://platform.sina.com.cn/slide/album_tech',
                    type: 'get',
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback',
                    data: {
                        app_key: 1271687855,
                        num: this.perPageCount,
                        page: this.curPage
                    },
                    success: function (ret) {
                        if (ret.status.code === "0") {
                            _this.dataArr = ret.data;
                            var $nodes = _this.render(_this.dataArr);
                            _this.waterFull($nodes);
                            _this.curPage++;
                            _this.isDataArrive = true;
                        }
                    },
                    error: function () {
                        console.log("出错了");
                    }


                })
            },
            bind: function () {
                var _this=this;
                $(window).on("scroll", function () {
                    if (_this.isVisible($("#load")) && _this.isDataArrive) {
                        _this.isDataArrive = false;
                        _this.getNews();
                    }
                })
                $(window).on("resize", function () {
                    _this.heightArr = [];
                    _this.waterFull($(".item"))
                })
            },
            render: function (data) {
                var html = "";
                var $nodes;
                for (var i = 0; i < data.length; i++) {
                    html += "<li class='item'><a href=" + data[i].url + ">";
                    html += "<img src=" + data[i].img_url + "></a>";
                    html += "<h4 class='news-title'>" + data[i].short_name + "</h4>";
                    html += "<p class='news-detail'>" + data[i].short_intro + "</p></li>";
                }
                var $nodes = $(html)
                this.ct.append($nodes);
                return $nodes;
            },
            waterFull:function(node){
                var _this=this;
                var itemWidth = node.outerWidth(true);
                var colLength = parseInt($(".contain").width() / itemWidth);
                if (this.heightArr.length === 0) {
                    for (var i = 0; i < colLength; i++) {
                        this.heightArr[i] = 0;
                    }
                }
                $.each(node,function(i){
                    node.eq(i).find("img").on("load",function(){
                        var minVal = Math.min.apply(null, _this.heightArr);
                        var minIndex =_this.heightArr.indexOf(minVal);
                        node.eq(i).css({
                            "left": itemWidth * minIndex,
                            "top": _this.heightArr[minIndex]
                        })
                        _this.heightArr[minIndex] += node.eq(i).outerHeight(true);
                        var maxVal = Math.max.apply(null,_this.heightArr);
                        _this.ct.height(maxVal);
                    })
                    
                })
            },
            isVisible:function($node){
                var nodeHeight = $node.outerHeight(true),
                    nodeTop = $node.offset().top,
                    winScrollTop = $(window).scrollTop(),
                    winHeight = $(window).height();
                if (winHeight + winScrollTop > nodeTop && winScrollTop < nodeTop + nodeHeight) {
                    return true;
                } else {
                    return false;
                }
            }

        }

        return AutoLoad;
})