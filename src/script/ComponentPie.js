define('ComponentPie', ['./ComponentBase.js'], function(ComponentBase) {
	var ComponentPie = function(name, config) {
		var component = new ComponentBase(name, config);

		var canvas = document.createElement("canvas");

		var cxt = canvas.getContext('2d');

		var w = config.width,
			h = config.height;

		canvas.width = w;
		canvas.height = h;

		var total = 0;
		for (var i in config.data) {
			total += config.data[i][1];
		}

		total = total.toFixed(2);
		var radius = +canvas.width / 2 * 0.7;
		$(canvas).css({
			position: 'absolute',
			zIndex: 0,
			left: 0,
			top: 0
		});
		cxt.translate(w / 2, h / 2);


		//绘制饼图
		var start = 0;
		for (var i in config.data) {
			var end = start + config.data[i][1] / total * 2 * Math.PI;
			cxt.beginPath();
			cxt.fillStyle = config.data[i][2];
			cxt.strokeStyle = config.data[i][2];
			cxt.arc(0, 0, radius, start, end, false);
			cxt.lineTo(0, 0);
			cxt.fill();
			start = end;
		}

		component.append(canvas);


		//遮罩层
		var canvas2 = document.createElement("canvas");
		var cxt2 = canvas2.getContext('2d');
		component.append(canvas2);
		canvas2.width = w;
		canvas2.height = h;
		cxt2.translate(w / 2, h / 2);
		$(canvas2).css({
			position: 'absolute',
			zIndex: 10,
			left: 0,
			top: 0
		});
		cxt2.fillStyle = '#eee';

		var draw = function(per, load) {
			cxt2.clearRect(-radius, -radius, 2 * radius, 2 * radius);
			cxt2.beginPath();
			if (per <= 0) {
				cxt2.arc(0, 0, radius + 1, 0, 2 * Math.PI, load);
			} else {
				cxt2.arc(0, 0, radius + 1, 0, 2 * Math.PI * per / 100, load);
			}
			cxt2.lineTo(0, 0);
			cxt2.fill();
			if (per == 100) {
				cxt2.clearRect(-radius, -radius, 2 * radius, 2 * radius);
			}
		}
		draw(0, true);


		//文字
		var text = function() {
			var totalArc = 0;
			for (var i in config.data) {
				var item = config.data[i],
					name = $('<div class="pie_name">');
				name.text(item[0] + ' ' + item[1] * 100 + '%');
				name.css('color', item[2]);
				totalArc += item[1];
				var left = (w / 2 + radius * Math.cos(-totalArc * 2 * Math.PI));
				var top = (w / 2 - radius * Math.sin(-totalArc * 2 * Math.PI));
				if (left < w / 2) {
					left = left - 50;
				} else {
					left = left + 10;
				}
				if (top < w / 2) {
					top = top - 30;
				} else {
					top = top + 10;
				}
				name.css({
					left: +left,
					top: +top,
					position: 'absolute',
					zIndex: 12,
					width: 50,
					height: 30,
					opacity: 0
				});
				component.append(name);
			}
		}
		text();


		component.on('componentLoad', function() {
			setTimeout(function() {
				component.addClass('component_base_load').removeClass('component_base_leave');
				// var s = 0;
				for (i = 0; i <= 100; i++) {
					! function(i) {
						setTimeout(function() {
							draw(i, true);
						}, i * 10);
					}(i);
				}
				//显示文字
				setTimeout(function() {
					$('.pie_name').each(function(index) {
						$(this).animate({
							'opacity': 1
						});
					});
				}, 1000);
			}, config.delay || 0);
		});



		component.on('componentLeave', function() {
			setTimeout(function() {
				component.addClass('component_base_leave').addClass('component_base_load');
				//绘制遮罩层
				draw(0, true);
				// cxt2.beginPath();
				// cxt2.arc(0, 0, radius, 0, 2 * Math.PI);
				// cxt2.fill();
				//文字隐藏
				$('.pie_name').each(function(index) {
					$(this).css({
						'opacity': 0
					});
				});
			}, config.delay || 0);
		});

		return component;
	}
	return ComponentPie;
});