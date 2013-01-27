// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
var dymonav = {
	opts	: 	{
		navBoundary : $('#navigation_boundary'),
		nav	: $('.navigation'),
		arrows : $('.dymo_nav'),
		next_btn: $('#next'),
		prev_btn: $('#prev')
	},
	GetBoundaryWidth : function () {
		return this.opts.navBoundary[0].offsetWidth;
	},
	GetNavWidth	: function () {
		var width = 0;
		this.opts.nav.find('li').each(function(i, ele) {
		      width += (ele.offsetWidth + 10);
		})
		return width;
	},
	IsNavigationWidthLessThanBoundaryWidth: function () {
		var b_width = this.GetBoundaryWidth(), n_width = this.GetNavWidth();
		return (n_width < b_width) ? true : false;
	},
	ToggleNavigationSlider: function() {
		b = this.IsNavigationWidthLessThanBoundaryWidth();
		if(!b) { this.opts.arrows.parent().find('#next').show(); }
		else { this.opts.arrows.hide(); }
		// return "cool exit!";
	},
	Init	: function (args) {
		if (args) {this.opts = args;}
		else {args = this.opts;}
	}
};
