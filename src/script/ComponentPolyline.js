define('ComponentPolyline', ['./ComponentBase.js'], function(ComponentBase) {
	var ComponentPolyline = function(name, config) {

		var w = config.width,
			h = config.height,
			component = new ComponentBase(name, config),
			canvas = document.createElement("canvas"),
			cxt = canvas.getContext('2d'),
			i;

		canvas.width = +w + 1;
		canvas.height = +h + 1;

		//修改原点位置
		cxt.translate(0.5, 0.5);

		var widthNum = config.data.length + 1;
		var widthUnit = parseInt(w / widthNum);

		function drawPolyline(percent) {
			cxt.clearRect(0, 0, w, h);
			//横线
			cxt.beginPath();
			cxt.strokeStyle = "#ddd";
			cxt.lineWidth = 1;
			var heightNum = 10;
			var heightUnit = parseInt(h / heightNum);
			for (i = 0; i < heightNum + 1; i++) {
				var height = i * heightUnit;
				cxt.moveTo(0, height);
				cxt.lineTo(w, height);
			}
			cxt.stroke();

			//纵线
			cxt.beginPath();
			var widthNum = config.data.length + 1;
			var widthUnit = parseInt(w / widthNum);
			cxt.strokeStyle = "#ddd";
			cxt.lineWidth = 1;
			for (i = 0; i < widthNum + 1; i++) {
				cxt.moveTo(widthUnit * i, 0);
				cxt.lineTo(widthUnit * i, h);
			}
			cxt.stroke();

			//画圆心
			cxt.strokeStyle = "#0099cc";

			for (i = 0; i < config.data.length; i++) {
				var item = config.data[i];
				cxt.beginPath();
				cxt.arc(widthUnit * (i + 1), h * (1 - item[1] * percent), 3, 0, Math.PI * 2);
				cxt.stroke();
			}

			//连线
			cxt.strokeStyle = '#99cccc';
			cxt.beginPath();
			cxt.lineWidth = 3;
			for (i = 0; i < config.data.length; i++) {
				var item = config.data;
				cxt.lineTo(widthUnit * (i + 1), h * (1 - item[i][1] * (percent)));
			}
			cxt.stroke();

			//填充
			cxt.lineTo(widthUnit * (config.data.length), h);
			cxt.lineTo(widthUnit, h);
			cxt.moveTo(widthUnit * 1, h);
			cxt.fillStyle = "rgba(105,149,198,0.5)";
			cxt.fill();
		}


		//绘制数字
		component.on('componentLoad', function() {
			var step = 100,
				j = 0;

			setTimeout(function() {
				for (j; j <= step; j++) {
					! function(num) {
						setTimeout(function() {
							var per = num * 0.01;
							drawPolyline(per);
						}, num * 2);
					}(j);
				}

				setTimeout(function() {
					cxt.fillStyle = "#000";
					for (i = 0; i < config.data.length; i++) {
						var item = config.data;
						cxt.font="15px Arial";
						cxt.fillText(item[i][1] * 100 + '%', widthUnit * (i + 1) - 5, h * (1 - item[i][1]) - 10);
						cxt.fillText(item[i][0], widthUnit * (i + 1) - 10, h * (1 - item[i][1]) - 30);
					}
				}, 200);
			}, config.delay);
		});

		component.on('componentLeave', function() {
			setTimeout(function() {
				cxt.clearRect(-1, -1, w + 1, h + 1);
			}, 1000);
		});

		component.append(canvas);
		return component;
	}

	return ComponentPolyline;
});