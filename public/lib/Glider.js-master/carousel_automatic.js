$(document).ready(function() {
	var animDuration = 3000;
	var pawsDuration = 5000;
	var timer;
	var swap = function(back) {
		if (typeof back != "undefined") {
			// if called via prev or next then clear timeout
			clearTimeout(timer);
		}
		// stop animation (clearQueue and jumpToEnd are both set to true)
		$("#slideshow .animate").stop(true, true);
		// calculate prev slide (to hide) and next slide (to show)
		var prevItem = $("#slideshow .current");
		var nextItem = back ? prevItem.prev() : prevItem.next();
		if (nextItem.length == 0) {
			nextItem = back ? $("#slideshow img:last") : $("#slideshow img:first");
		}
		// set caption for next slide
		$("#caption").text(nextItem.attr("title"));
		// mark next slide as current
		// unmark prev slide as current, mark as animated, begin animation, unmark as animated
		nextItem.addClass("current");
		prevItem.removeClass("current").addClass("animate").fadeOut(animDuration, function() {
			$(this).removeClass("animate").css("display", "");
		});
		// set timeout for self
		timer = setTimeout(swap, pawsDuration);
	}
	$("#prev").click(function(e) {
		e.preventDefault();
		swap(true);
	});
	$("#next").click(function(e) {
		e.preventDefault();
		swap(false);
	});
	$("#stop").click(function(e) {
		e.preventDefault();
		clearTimeout(timer);
	});
	// set initial state
	$("#caption").text($("#slideshow .current").attr("title"));
	timer = setTimeout(swap, pawsDuration);
});