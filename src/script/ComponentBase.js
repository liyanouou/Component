define('ComponentBase', function() {
	var ComponentBase = function(name, config) {
		var config = config || {};
		var id = ('c_' + Math.random()).replace('.', '_');
		var name = 'component_base_' + name;
		var component = $('<div class="component component_base ' + name + '" id="' + id + '">');
		config.text && component.text(config.text);
		config.width && component.css('width', config.width);
		config.height && component.css('height', config.height);
		config.css && component.css(config.css);
		config.bg && component.css('backgroundImage', config.bg);

		if (config.center == true) {
			component.css({
				'left': '50%',
				'marginLeft': (config.width / 2 * -1) + 'px'
			});
		}

		component.on('componentLoad', function() {
			setTimeout(function(){
				component.addClass('component_base_load').removeClass('component_base_leave');
				config.animateIn && component.animate(config.animateIn);
			},config.delay || 0);
		});

		component.on('componentLeave', function() {
			setTimeout(function(){
				component.addClass('component_base_leave').removeClass('component_base_load');
				config.animateOut && component.animate(config.animateOut);

			},config.delay || 0)
			
		});
	
		return component;
	}
	return ComponentBase;
})