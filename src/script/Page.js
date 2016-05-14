define('Page',['./ComponentBase.js','./ComponentBasePoint.js','./ComponentBaseBar.js','./ComponentPolyline.js','./ComponentPie.js'], 
	function(ComponentBase,ComponentBasePoint,ComponentBaseBar,ComponentPolyline,ComponentPie) {
	var Page = function() {
		this.id = ("page_" + Math.random()).replace('.', '_');
		this.el = $('<div class="fullPage" id="' + this.id + '">');
		this.page = [];
		$('body').append(this.el);

		this.addPage = function(name, text) {
			var page = $('<div class="page section">');
			if (name != undefined) {
				page.addClass('page_' + name);
			}
			if (text != undefined) {
				page.text(text);
			}
			this.el.append(page);

			page.on('pageLoad', function() {
				page.find('.component').trigger('componentLoad');
			})


			page.on('pageLeave', function() {
				page.find('.component').trigger('componentLeave')
			})
			this.page.push(page);
			return this;
		}
 
		this.addComponent = function(name, config) {
			var config = config || {};
			config = $.extend({
				type: 'base'
			}, config);

			var component = null;
			switch (config.type) {
				case 'base':
					component = new ComponentBase(name,config);
					break;
				case 'point':
					component = new ComponentBasePoint(name,config);
					break;
				case 'bar':
					component = new ComponentBaseBar(name,config);
					break;
				case 'polyline':
					component = new ComponentPolyline(name,config);
					break;
				case 'pie':
					component = new ComponentPie(name,config);
					break;
				default:
					break;
			}

			var page = this.page.slice(-1)[0];
			page.append(component);
			return this;
		}
	}
	return Page;
})