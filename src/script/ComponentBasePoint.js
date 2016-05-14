define('ComponentBasePoint', ['./ComponentBase.js'], function(ComponentBase) {
	var ComponentBasePoint = function(name, config) {
		var component = new ComponentBase(name, config);
		var base = config.data[0][1];
		$.each(config.data, function(index, item) {
			var point = $('<div class="point point_' + index + '">');
			var title = $('<div class="title">' + item[0] + '</div>');
			var rates = $('<div class="value">' + item[1] + '</div>');

			point.append(title);
			point.append(rates);
			var width = item[1] / base * config.width;
			var height = item[1] / base * config.height;
			point.width(width);
			point.height(height);

			if (item[2] != undefined) {
				console.log('background');
				point.css({
					'background': item[2]
				})
			}

			if (item[5] != undefined) {
				console.log('animate');
				var point_animate = $('<div class="point_animate">');
				point_animate.css({
					width: width,
					height: height,
					left: item[3],
					top: item[4]
				});
				component.append(point_animate);
				console.log('aniamte');
			}

			component.append(point);
		});

		component.on('componentLoad', function() {
			var that = $(this);
			setTimeout(function() {
				component.addClass('component_base_load').removeClass('component_base_leave');
				config.animateIn && component.animate(config.animateIn);
				$.each(config.data, function(index, item) {
					setTimeout(function() {
						that.find('.point').eq(index).animate({
							left: item[3],
							top: item[4]
						});
					}, 500)
				});
			}, config.delay || 0);
		});

		component.on('componentLeave', function() {
			var that = $(this);
			setTimeout(function() {
				component.addClass('component_base_leave').removeClass('component_base_load');
				config.animateOut && component.animate(config.animateOut);
				that.find('.point').css({
					left: 0,
					top: 0
				});
			}, config.delay || 0);
		});
		return component;
	}
	return ComponentBasePoint;
});