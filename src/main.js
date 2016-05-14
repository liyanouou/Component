var $ = require('../node_modules/jquery/dist/jquery.js');
var fullPage = require('../node_modules/fullpage.js/jquery.fullPage.js');
require('./css/main.scss');
require('./css/Page.css');
require('./css/ComponentBase.css');
require('./css/ComponentBasePoint.css');
require('./css/ComponentBaseBar.css');
require('./css/ComponentPolyline.css');

var Page = require('./script/Page');
var page = new Page();
var config = {
	type: 'base',
	bg: 'url(../../h5/src/img/title.png)',
	width: 256,
	height: 84,
	css: {
		top: -200,
	}, 
	animateIn: {
		top: 180
	},
	center: true
}

page.addPage('title')
	.addComponent('title', {
		type: 'base',
		bg: 'url(../../h5/src/img/title.png)',
		width: 256,
		height: 84,
		css: {
			top: -200,
		},
		animateIn: {
			top: 180,
			opacity: 1
		},
		animateOut: {
			top: -200,
			opacity: 0
		},
		center: true
	})
	.addComponent('person1', {
		type: 'base',
		bg: 'url(../../h5/src/img/person1.png)',
		width: 113,
		height: 190,
		css: {
			bottom: -200,
			left: 5
		},
		animateIn: {
			bottom: 10,
			opacity: 1
		},
		animateOut: {
			bottom: -200,
			opacity: 0
		},
		delay: 500
	})
	.addComponent('person2', {
		type: 'base',
		bg: 'url(../../h5/src/img/person2.png)',
		width: 131,
		height: 198,
		css: {
			bottom: -200,
			left: 80
		},
		animateIn: {
			bottom: 15,
			opacity: 1
		},
		animateOut: {
			bottom: -200,
			opacity: 0
		},
		delay: 1000
	})
	.addComponent('person3', {
		type: 'base',
		bg: 'url(../../h5/src/img/person3.png)',
		width: 132,
		height: 196,
		css: {
			bottom: -200,
			left: 160,
			zIndex: 5
		},
		animateIn: {
			bottom: 10,
			opacity: 1
		},
		animateOut: {
			bottom: -200,
			opacity: 0
		},
		delay: 2000
	})
	.addComponent('person4', {
		type: 'base',
		bg: 'url(../../h5/src/img/person4.png)',
		width: 130,
		height: 187,
		css: {
			bottom: -200,
			left: 240
		},
		animateIn: {
			bottom: 15,
			opacity: 1
		},
		animateOut: {
			bottom: -200,
			opacity: 0
		},
		delay: 1500
	})
	.addPage('point')
	.addComponent('point_title', {
		type: 'base',
		bg: 'url(../../h5/src/img/point.png)',
		width: 197,
		height: 47,
		css: {
			left: 0,
			top: 50
		}
	})
	.addComponent('point_pic', {
		type: 'point',
		width: 130,
		height: 130,
		data: [ 
			['钢铁侠', 0.5, '#ffcc99', 0, 0, 'scale'],
			['绿巨人', 0.4, '#ffff99', 0, '-130px'],
			['黄蜂侠', 0.4, '#99ccff', 0, '160px'],
		],
		css: {
			top: '40%',
			opacity: 0,
		},
		animateIn: {
			opacity: 1
		},
		animateOut: {
			opacity: 0
		},
		center: true,
		delay: 500
	})
	.addPage('bar')
	.addComponent('bar_title',{
		type: 'base',
		bg: 'url(../../h5/src/img/bar.png)',
		width: 197,
		height: 47,
		css: {
			left: 0,
			top: 50
		}
	})
	.addComponent('bar_pic',{
		type: 'bar',
		width: 300,
		data: [
			['钢铁侠', 0.5, '#ffcc99'],
			['绿巨人', 0.4, '#ffff99'],
			['黄蜂侠', 0.4, '#99ccff'],
			['蚁&#12288;人', 0.3, '#ffcc77']
		],
		css: {
			top: '40%',
			opacity: 0
		},
		animateIn: {
			opacity: 1
		},
		aniamateOut: {
			opacity:0
		},
		center:true,
		delay: 500
	})
	.addPage('polyline')
	.addComponent('polyline_title',{
		type: 'base',
		bg: 'url(../../h5/src/img/polyline.png)',
		width: 197,
		height: 47,
		css: {
			left: 0,
			top: 50
		}
	})
	.addComponent('polyline_pic',{
		type: 'polyline',
		width: '280',
		height:'200',
		data: [
			['钢铁侠', 0.5], //输入为百分比
			['绿巨人', 0.6],
			['黄蜂侠', 0.3],
			['蚁人', 0.4]
		],
		css: {
			top:'40%',
			opacity: 0
		},
		animateIn: {
			opacity: 1
		},
		aniamateOut: {
			opacity: 0
		},
		delay: 500,
		center:true
	})
	.addPage('pie')
	.addComponent('pie_title',{
		type:'base',
		bg: 'url(../../h5/src/img/pie.png)',
		width: 197,
		height: 47,
		css: {
			left: 0,
			top: 50
		}
	})
	.addComponent('pie_pic',{
		type:'pie',
		width: '300',
		height:'300',
		data: [ 
			['钢铁侠', 0.4, '#ff6666'],
			['绿巨人', 0.3, '#ffcc99'],
			['黄蜂侠', 0.2, '#ffcc00'],
			['蚁人', 0.1, '#66cccc']
		],
		css: {
			top:'30%'
		},
		delay: 1000,
		center:true
	})
	


$('.fullPage').fullpage({
	afterLoad: function(anchorLink, index) {
		$(".fullPage").find('.section').eq(index - 1).trigger('pageLoad');
	},
	onLeave: function(index, nextIndex, direction) {
		console.log('pageLeave');
		$(".fullPage").find('.section').eq(index - 1).trigger('pageLeave');
	}
});