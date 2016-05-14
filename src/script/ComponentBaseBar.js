define('ComponentBaseBar', ['./ComponentBase.js'], function(ComponentBase) {
	var ComponentBaseBar = function(name, config) {
		var component = new ComponentBase(name, config),
			total = 0,
			max = 0;

		component.addClass('component_bar');
		$.each(config.data, function(index, item) {
			total += item[1];
			if (item[1] > max)
				max = item[1];
		});

		$.each(config.data, function(index, item) {
			var container = $('<div class="container">');
			var name = $('<div class="name">');
			name.html(item[0]);
			var bar = $('<div class="bar">');
			bar.css({
				width: item[1] * config.width * 0.6 / max,
			});
			var content = $('<div class="content">');
			content.css({
				backgroundColor: item[2],
				width: 0
			});

			bar.append(content);
			var rate = $('<div class="rate">');
			rate.css({
				opacity: 0
			});

			var num = (item[1] / total * 100);
			rate.html(num.toFixed(0) + '%');
			container.append(name).append(bar).append(rate);
			component.append(container);
		});

		component.on('componentLoad', function() {
			var that = $(this);
			setTimeout(function() {
				component.addClass('component_base_load').removeClass('component_base_leave');
				config.animateIn && component.animate(config.animateIn);
				that.find('.content').animate({
					width: '100%'
				});
				setTimeout(function() {
					that.find('.rate').animate({
						opacity: 1
					});
				}, 500)
			}, config.delay || 0);
		});

		component.on('componentLeave', function() {
			var that = $(this);
			setTimeout(function() {
				component.addClass('component_base_leave').removeClass('component_base_load');
				config.animateOut && component.animate(config.animateOut);
				that.find('.content').css({
					width: 0
				});
				that.find('.rate').css({
					opacity:0
				})
			}, config.delay || 0);
		});
		return component;
	}
	return ComponentBaseBar;
});