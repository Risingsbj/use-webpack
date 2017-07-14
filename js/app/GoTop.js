var GoTop = (function() {
    function _GoTop($ct) {
        this.$ct = $ct
        this.target = $('<button class="btn">回到顶部</button>')
        this.target.css({
            position: 'fixed',
            right: '50px',
            bottom: '50px',
            display: 'none',
            padding: '10px 5px'
        })
        this.createNode()
        this.bindEvent()
    }
    _GoTop.prototype = {
        createNode: function() {
            this.$ct.append(this.target)
        },
        bindEvent: function() {
            var _this = this
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 100) {
                    _this.target.css('display', 'block')
                } else {
                    _this.target.css('display', 'none')
                }
            })
            this.target.on('click', function() {
                $(window).scrollTop(0)
            })
        }

    }
    return {
        init: function($ct) {
            new _GoTop($ct)
        }
    }
})()
module.exports = GoTop
