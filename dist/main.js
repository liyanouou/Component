/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(2);
	var fullPage = __webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(16);
	__webpack_require__(18);
	
	var Page = __webpack_require__(20);
	var page = new Page();
	var config = {
		type: 'base',
		bg: 'url(../../h5/src/img/title.png)',
		width: 256,
		height: 84,
		css: {
			top: -200
		},
		animateIn: {
			top: 180
		},
		center: true
	};
	
	page.addPage('title').addComponent('title', {
		type: 'base',
		bg: 'url(../../h5/src/img/title.png)',
		width: 256,
		height: 84,
		css: {
			top: -200
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
	}).addComponent('person1', {
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
	}).addComponent('person2', {
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
	}).addComponent('person3', {
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
	}).addComponent('person4', {
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
	}).addPage('point').addComponent('point_title', {
		type: 'base',
		bg: 'url(../../h5/src/img/point.png)',
		width: 197,
		height: 47,
		css: {
			left: 0,
			top: 50
		}
	}).addComponent('point_pic', {
		type: 'point',
		width: 130,
		height: 130,
		data: [['钢铁侠', 0.5, '#ffcc99', 0, 0, 'scale'], ['绿巨人', 0.4, '#ffff99', 0, '-130px'], ['黄蜂侠', 0.4, '#99ccff', 0, '160px']],
		css: {
			top: '40%',
			opacity: 0
		},
		animateIn: {
			opacity: 1
		},
		animateOut: {
			opacity: 0
		},
		center: true,
		delay: 500
	}).addPage('bar').addComponent('bar_title', {
		type: 'base',
		bg: 'url(../../h5/src/img/bar.png)',
		width: 197,
		height: 47,
		css: {
			left: 0,
			top: 50
		}
	}).addComponent('bar_pic', {
		type: 'bar',
		width: 300,
		data: [['钢铁侠', 0.5, '#ffcc99'], ['绿巨人', 0.4, '#ffff99'], ['黄蜂侠', 0.4, '#99ccff'], ['蚁&#12288;人', 0.3, '#ffcc77']],
		css: {
			top: '40%',
			opacity: 0
		},
		animateIn: {
			opacity: 1
		},
		aniamateOut: {
			opacity: 0
		},
		center: true,
		delay: 500
	}).addPage('polyline').addComponent('polyline_title', {
		type: 'base',
		bg: 'url(../../h5/src/img/polyline.png)',
		width: 197,
		height: 47,
		css: {
			left: 0,
			top: 50
		}
	}).addComponent('polyline_pic', {
		type: 'polyline',
		width: '280',
		height: '200',
		data: [['钢铁侠', 0.5], //输入为百分比
		['绿巨人', 0.6], ['黄蜂侠', 0.3], ['蚁人', 0.4]],
		css: {
			top: '40%',
			opacity: 0
		},
		animateIn: {
			opacity: 1
		},
		aniamateOut: {
			opacity: 0
		},
		delay: 500,
		center: true
	}).addPage('pie').addComponent('pie_title', {
		type: 'base',
		bg: 'url(../../h5/src/img/pie.png)',
		width: 197,
		height: 47,
		css: {
			left: 0,
			top: 50
		}
	}).addComponent('pie_pic', {
		type: 'pie',
		width: '300',
		height: '300',
		data: [['钢铁侠', 0.4, '#ff6666'], ['绿巨人', 0.3, '#ffcc99'], ['黄蜂侠', 0.2, '#ffcc00'], ['蚁人', 0.1, '#66cccc']],
		css: {
			top: '30%'
		},
		delay: 1000,
		center: true
	});
	
	$('.fullPage').fullpage({
		afterLoad: function afterLoad(anchorLink, index) {
			$(".fullPage").find('.section').eq(index - 1).trigger('pageLoad');
		},
		onLeave: function onLeave(index, nextIndex, direction) {
			console.log('pageLeave');
			$(".fullPage").find('.section').eq(index - 1).trigger('pageLeave');
		}
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];
	
	var document = window.document;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "2.2.3",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
	
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
	
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
	
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
	
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		register: function( owner, initial ) {
			var value = initial || {};
	
			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;
	
			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {
	
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key === undefined ) {
				this.register( owner );
	
			} else {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
	
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
	
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
	
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data, camelKey;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||
	
						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );
	
					if ( data !== undefined ) {
						return data;
					}
	
					camelKey = jQuery.camelCase( key );
	
					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {
	
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
	
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	
	var iframe,
		elemdisplay = {
	
			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			display = jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var documentElement = document.documentElement;
	
	
	
	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =
	
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
		}
	
		jQuery.extend( support, {
			pixelPosition: function() {
	
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
	
				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
	
				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {
	
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
	
					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );
	
				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );
	
				documentElement.removeChild( container );
				div.removeChild( marginDiv );
	
				return ret;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {
	
			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
	
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
	
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
	
					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);
	
			jQuery.event.trigger( e, null, elem );
	
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
	
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
	
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {
	
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
	
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * fullPage 2.7.9
	 * https://github.com/alvarotrigo/fullPage.js
	 * @license MIT licensed
	 *
	 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
	 */
	(function(global, factory) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function($) {
	          return factory($, global, global.document, global.Math);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'), global, global.document, global.Math);
	    } else {
	        factory(jQuery, global, global.document, global.Math);
	    }
	})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
	    'use strict';
	
	    // keeping central set of classnames and selectors
	    var WRAPPER =               'fullpage-wrapper';
	    var WRAPPER_SEL =           '.' + WRAPPER;
	
	    // slimscroll
	    var SCROLLABLE =            'fp-scrollable';
	    var SCROLLABLE_SEL =        '.' + SCROLLABLE;
	    var SLIMSCROLL_BAR_SEL =    '.slimScrollBar';
	    var SLIMSCROLL_RAIL_SEL =   '.slimScrollRail';
	
	    // util
	    var RESPONSIVE =            'fp-responsive';
	    var NO_TRANSITION =         'fp-notransition';
	    var DESTROYED =             'fp-destroyed';
	    var ENABLED =               'fp-enabled';
	    var VIEWING_PREFIX =        'fp-viewing';
	    var ACTIVE =                'active';
	    var ACTIVE_SEL =            '.' + ACTIVE;
	    var COMPLETELY =            'fp-completely';
	    var COMPLETELY_SEL =        '.' + COMPLETELY;
	
	    // section
	    var SECTION_DEFAULT_SEL =   '.section';
	    var SECTION =               'fp-section';
	    var SECTION_SEL =           '.' + SECTION;
	    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
	    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
	    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
	    var TABLE_CELL =            'fp-tableCell';
	    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
	    var AUTO_HEIGHT =           'fp-auto-height';
	    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
	    var NORMAL_SCROLL =         'fp-normal-scroll';
	    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';
	
	    // section nav
	    var SECTION_NAV =           'fp-nav';
	    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
	    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
	    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
	    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';
	
	    // slide
	    var SLIDE_DEFAULT_SEL =     '.slide';
	    var SLIDE =                 'fp-slide';
	    var SLIDE_SEL =             '.' + SLIDE;
	    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
	    var SLIDES_WRAPPER =        'fp-slides';
	    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
	    var SLIDES_CONTAINER =      'fp-slidesContainer';
	    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
	    var TABLE =                 'fp-table';
	
	    // slide nav
	    var SLIDES_NAV =            'fp-slidesNav';
	    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
	    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
	    var SLIDES_ARROW =          'fp-controlArrow';
	    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
	    var SLIDES_PREV =           'fp-prev';
	    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
	    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
	    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
	    var SLIDES_NEXT =           'fp-next';
	    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
	    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
	    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;
	
	    var $window = $(window);
	    var $document = $(document);
	
	    var defaultScrollHandler;
	
	    $.fn.fullpage = function(options) {
	        //only once my friend!
	        if($('html').hasClass(ENABLED)){ displayWarnings(); return };
	
	        // common jQuery objects
	        var $htmlBody = $('html, body');
	        var $body = $('body');
	
	        var FP = $.fn.fullpage;
	        // Create some defaults, extending them with any options that were provided
	        options = $.extend({
	            //navigation
	            menu: false,
	            anchors:[],
	            lockAnchors: false,
	            navigation: false,
	            navigationPosition: 'right',
	            navigationTooltips: [],
	            showActiveTooltip: false,
	            slidesNavigation: false,
	            slidesNavPosition: 'bottom',
	            scrollBar: false,
	            hybrid: false,
	
	            //scrolling
	            css3: true,
	            scrollingSpeed: 700,
	            autoScrolling: true,
	            fitToSection: true,
	            fitToSectionDelay: 1000,
	            easing: 'easeInOutCubic',
	            easingcss3: 'ease',
	            loopBottom: false,
	            loopTop: false,
	            loopHorizontal: true,
	            continuousVertical: false,
	            normalScrollElements: null,
	            scrollOverflow: false,
	            scrollOverflowHandler: defaultScrollHandler,
	            touchSensitivity: 5,
	            normalScrollElementTouchThreshold: 5,
	
	            //Accessibility
	            keyboardScrolling: true,
	            animateAnchor: true,
	            recordHistory: true,
	
	            //design
	            controlArrows: true,
	            controlArrowColor: '#fff',
	            verticalCentered: true,
	            resize: false,
	            sectionsColor : [],
	            paddingTop: 0,
	            paddingBottom: 0,
	            fixedElements: null,
	            responsive: 0, //backwards compabitility with responsiveWiddth
	            responsiveWidth: 0,
	            responsiveHeight: 0,
	
	            //Custom selectors
	            sectionSelector: SECTION_DEFAULT_SEL,
	            slideSelector: SLIDE_DEFAULT_SEL,
	
	
	            //events
	            afterLoad: null,
	            onLeave: null,
	            afterRender: null,
	            afterResize: null,
	            afterReBuild: null,
	            afterSlideLoad: null,
	            onSlideLeave: null
	        }, options);
	
	        displayWarnings();
	
	        //easeInOutCubic animation included in the plugin
	        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});
	
	        /**
	        * Sets the autoScroll option.
	        * It changes the scroll bar visibility and the history of the site as a result.
	        */
	        FP.setAutoScrolling = function(value, type){
	            setVariableState('autoScrolling', value, type);
	
	            var element = $(SECTION_ACTIVE_SEL);
	
	            if(options.autoScrolling && !options.scrollBar){
	                $htmlBody.css({
	                    'overflow' : 'hidden',
	                    'height' : '100%'
	                });
	
	                FP.setRecordHistory(originals.recordHistory, 'internal');
	
	                //for IE touch devices
	                container.css({
	                    '-ms-touch-action': 'none',
	                    'touch-action': 'none'
	                });
	
	                if(element.length){
	                    //moving the container up
	                    silentScroll(element.position().top);
	                }
	
	            }else{
	                $htmlBody.css({
	                    'overflow' : 'visible',
	                    'height' : 'initial'
	                });
	
	                FP.setRecordHistory(false, 'internal');
	
	                //for IE touch devices
	                container.css({
	                    '-ms-touch-action': '',
	                    'touch-action': ''
	                });
	
	                silentScroll(0);
	
	                //scrolling the page to the section with no animation
	                if (element.length) {
	                    $htmlBody.scrollTop(element.position().top);
	                }
	            }
	        };
	
	        /**
	        * Defines wheter to record the history for each hash change in the URL.
	        */
	        FP.setRecordHistory = function(value, type){
	            setVariableState('recordHistory', value, type);
	        };
	
	        /**
	        * Defines the scrolling speed
	        */
	        FP.setScrollingSpeed = function(value, type){
	            setVariableState('scrollingSpeed', value, type);
	        };
	
	        /**
	        * Sets fitToSection
	        */
	        FP.setFitToSection = function(value, type){
	            setVariableState('fitToSection', value, type);
	        };
	
	        /**
	        * Sets lockAnchors
	        */
	        FP.setLockAnchors = function(value){
	            options.lockAnchors = value;
	        };
	
	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
	        */
	        FP.setMouseWheelScrolling = function (value){
	            if(value){
	                addMouseWheelHandler();
	                addMiddleWheelHandler();
	            }else{
	                removeMouseWheelHandler();
	                removeMiddleWheelHandler();
	            }
	        };
	
	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
	        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
	        *
	        * @param directions string containing the direction or directions separated by comma.
	        */
	        FP.setAllowScrolling = function (value, directions){
	            if(typeof directions !== 'undefined'){
	                directions = directions.replace(/ /g,'').split(',');
	
	                $.each(directions, function (index, direction){
	                    setIsScrollAllowed(value, direction, 'm');
	                });
	            }
	            else if(value){
	                FP.setMouseWheelScrolling(true);
	                addTouchHandler();
	            }else{
	                FP.setMouseWheelScrolling(false);
	                removeTouchHandler();
	            }
	        };
	
	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
	        */
	        FP.setKeyboardScrolling = function (value, directions){
	            if(typeof directions !== 'undefined'){
	                directions = directions.replace(/ /g,'').split(',');
	
	                $.each(directions, function (index, direction){
	                    setIsScrollAllowed(value, direction, 'k');
	                });
	            }else{
	                options.keyboardScrolling = value;
	            }
	        };
	
	        /**
	        * Moves the page up one section.
	        */
	        FP.moveSectionUp = function(){
	            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);
	
	            //looping to the bottom if there's no more sections above
	            if (!prev.length && (options.loopTop || options.continuousVertical)) {
	                prev = $(SECTION_SEL).last();
	            }
	
	            if (prev.length) {
	                scrollPage(prev, null, true);
	            }
	        };
	
	        /**
	        * Moves the page down one section.
	        */
	        FP.moveSectionDown = function (){
	            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);
	
	            //looping to the top if there's no more sections below
	            if(!next.length &&
	                (options.loopBottom || options.continuousVertical)){
	                next = $(SECTION_SEL).first();
	            }
	
	            if(next.length){
	                scrollPage(next, null, false);
	            }
	        };
	
	        /**
	        * Moves the page to the given section and slide with no animation.
	        * Anchors or index positions can be used as params.
	        */
	        FP.silentMoveTo = function(sectionAnchor, slideAnchor){
	            FP.setScrollingSpeed (0, 'internal');
	            FP.moveTo(sectionAnchor, slideAnchor)
	            FP.setScrollingSpeed (originals.scrollingSpeed, 'internal');
	        };
	
	        /**
	        * Moves the page to the given section and slide.
	        * Anchors or index positions can be used as params.
	        */
	        FP.moveTo = function (sectionAnchor, slideAnchor){
	            var destiny = getSectionByAnchor(sectionAnchor);
	
	            if (typeof slideAnchor !== 'undefined'){
	                scrollPageAndSlide(sectionAnchor, slideAnchor);
	            }else if(destiny.length > 0){
	                scrollPage(destiny);
	            }
	        };
	
	        /**
	        * Slides right the slider of the active section.
	        * Optional `section` param.
	        */
	        FP.moveSlideRight = function(section){
	            moveSlide('next', section);
	        };
	
	        /**
	        * Slides left the slider of the active section.
	        * Optional `section` param.
	        */
	        FP.moveSlideLeft = function(section){
	            moveSlide('prev', section);
	        };
	
	        /**
	         * When resizing is finished, we adjust the slides sizes and positions
	         */
	        FP.reBuild = function(resizing){
	            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed
	
	            isResizing = true;
	
	            var windowsWidth = $window.outerWidth();
	            windowsHeight = $window.height();  //updating global var
	
	            //text resizing
	            if (options.resize) {
	                resizeMe(windowsHeight, windowsWidth);
	            }
	
	            $(SECTION_SEL).each(function(){
	                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
	                var slides = $(this).find(SLIDE_SEL);
	
	                //adjusting the height of the table-cell for IE and Firefox
	                if(options.verticalCentered){
	                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
	                }
	
	                $(this).css('height', windowsHeight + 'px');
	
	                //resizing the scrolling divs
	                if(options.scrollOverflow){
	                    if(slides.length){
	                        slides.each(function(){
	                            createSlimScrolling($(this));
	                        });
	                    }else{
	                        createSlimScrolling($(this));
	                    }
	                }
	
	                //adjusting the position fo the FULL WIDTH slides...
	                if (slides.length > 1) {
	                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
	                }
	            });
	
	            var activeSection = $(SECTION_ACTIVE_SEL);
	            var sectionIndex = activeSection.index(SECTION_SEL);
	
	            //isn't it the first section?
	            if(sectionIndex){
	                //adjusting the position for the current section
	                FP.silentMoveTo(sectionIndex + 1);
	            }
	
	            isResizing = false;
	            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
	            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
	        };
	
	        /**
	        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
	        * are smaller than the set limit values.
	        */
	        FP.setResponsive = function (active){
	            var isResponsive = $body.hasClass(RESPONSIVE);
	
	            if(active){
	                if(!isResponsive){
	                    FP.setAutoScrolling(false, 'internal');
	                    FP.setFitToSection(false, 'internal');
	                    $(SECTION_NAV_SEL).hide();
	                    $body.addClass(RESPONSIVE);
	                }
	            }
	            else if(isResponsive){
	                FP.setAutoScrolling(originals.autoScrolling, 'internal');
	                FP.setFitToSection(originals.autoScrolling, 'internal');
	                $(SECTION_NAV_SEL).show();
	                $body.removeClass(RESPONSIVE);
	            }
	        }
	
	        //flag to avoid very fast sliding for landscape sliders
	        var slideMoving = false;
	
	        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
	        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
	        var container = $(this);
	        var windowsHeight = $window.height();
	        var isResizing = false;
	        var isWindowFocused = true;
	        var lastScrolledDestiny;
	        var lastScrolledSlide;
	        var canScroll = true;
	        var scrollings = [];
	        var nav;
	        var controlPressed;
	        var isScrollAllowed = {};
	        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
	        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);
	        var originals = $.extend(true, {}, options); //deep copy
	
	        //timeouts
	        var resizeId;
	        var afterSectionLoadsId;
	        var afterSlideLoadsId;
	        var scrollId;
	        var scrollId2;
	        var keydownId;
	
	        if($(this).length){
	            init();
	            bindEvents();
	        }
	
	        function init(){
	            //if css3 is not supported, it will use jQuery animations
	            if(options.css3){
	                options.css3 = support3d();
	            }
	
	            options.scrollBar = options.scrollBar || options.hybrid;
	
	
	            setOptionsFromDOM();
	
	            prepareDom();
	            FP.setAllowScrolling(true);
	
	            FP.setAutoScrolling(options.autoScrolling, 'internal');
	
	            //the starting point is a slide?
	            var activeSlide = $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL);
	
	            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
	            if( activeSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && activeSlide.index() !== 0))){
	                silentLandscapeScroll(activeSlide);
	            }
	
	            responsive();
	
	            //setting the class for the body element
	            setBodyClass();
	
	            $window.on('load', function() {
	                scrollToAnchor();
	            });
	        }
	
	        function bindEvents(){
	            $window
	                //when scrolling...
	                .on('scroll', scrollHandler)
	
	                //detecting any change on the URL to scroll to the given anchor link
	                //(a way to detect back history button as we play with the hashes on the URL)
	                .on('hashchange', hashChangeHandler)
	
	                //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
	                .blur(blurHandler)
	
	                //when resizing the site, we adjust the heights of the sections, slimScroll...
	                .resize(resizeHandler);
	
	            $document
	                //Sliding with arrow keys, both, vertical and horizontal
	                .keydown(keydownHandler)
	
	                //to prevent scrolling while zooming
	                .keyup(keyUpHandler)
	
	                //Scrolls to the section when clicking the navigation bullet
	                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)
	
	                //Scrolls the slider to the given slide destination for the given section
	                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)
	
	                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);
	
	            //Scrolling horizontally when clicking on the slider controls.
	            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);
	
	            /**
	            * Applying normalScroll elements.
	            * Ignoring the scrolls over the specified selectors.
	            */
	            if(options.normalScrollElements){
	                $document.on('mouseenter', options.normalScrollElements, function () {
	                    FP.setMouseWheelScrolling(false);
	                });
	
	                $document.on('mouseleave', options.normalScrollElements, function(){
	                    FP.setMouseWheelScrolling(true);
	                });
	            }
	        }
	
	        /**
	        * Setting options from DOM elements if they are not provided.
	        */
	        function setOptionsFromDOM(){
	            //no anchors option? Checking for them in the DOM attributes
	            if(!options.anchors.length){
	                options.anchors = $(options.sectionSelector + '[data-anchor]').map(function(){
	                    return $(this).data('anchor').toString();
	                }).get();
	            }
	
	            //no tooltipos option? Checking for them in the DOM attributes
	            if(!options.navigationTooltips.length){
	                options.navigationTooltips = $(options.sectionSelector + '[data-tooltip]').map(function(){
	                    return $(this).data('tooltip').toString();
	                }).get();
	            }
	        }
	
	        /**
	        * Works over the DOM structure to set it up for the current fullpage optionss.
	        */
	        function prepareDom(){
	            container.css({
	                'height': '100%',
	                'position': 'relative'
	            });
	
	            //adding a class to recognize the container internally in the code
	            container.addClass(WRAPPER);
	            $('html').addClass(ENABLED);
	
	            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
	            windowsHeight = $window.height();
	
	            container.removeClass(DESTROYED); //in case it was destroyed before initilizing it again
	
	            addInternalSelectors();
	
	             //styling the sections / slides / menu
	            $(SECTION_SEL).each(function(index){
	                var section = $(this);
	                var slides = section.find(SLIDE_SEL);
	                var numSlides = slides.length;
	
	                styleSection(section, index);
	                styleMenu(section, index);
	
	                // if there's any slide
	                if (numSlides > 0) {
	                    styleSlides(section, slides, numSlides);
	                }else{
	                    if(options.verticalCentered){
	                        addTableClass(section);
	                    }
	                }
	            });
	
	            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
	            if(options.fixedElements && options.css3){
	                $(options.fixedElements).appendTo($body);
	            }
	
	            //vertical centered of the navigation + active bullet
	            if(options.navigation){
	                addVerticalNavigation();
	            }
	
	            if(options.scrollOverflow){
	                if(document.readyState === 'complete'){
	                    createSlimScrollingHandler();
	                }
	                //after DOM and images are loaded
	                $window.on('load', createSlimScrollingHandler);
	            }else{
	                afterRenderActions();
	            }
	        }
	
	        /**
	        * Styles the horizontal slides for a section.
	        */
	        function styleSlides(section, slides, numSlides){
	            var sliderWidth = numSlides * 100;
	            var slideWidth = 100 / numSlides;
	
	            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
	            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');
	
	            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');
	
	            if(numSlides > 1){
	                if(options.controlArrows){
	                    createSlideArrows(section);
	                }
	
	                if(options.slidesNavigation){
	                    addSlidesNavigation(section, numSlides);
	                }
	            }
	
	            slides.each(function(index) {
	                $(this).css('width', slideWidth + '%');
	
	                if(options.verticalCentered){
	                    addTableClass($(this));
	                }
	            });
	
	            var startingSlide = section.find(SLIDE_ACTIVE_SEL);
	
	            //if the slide won't be an starting point, the default will be the first one
	            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
	            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
	                silentLandscapeScroll(startingSlide);
	            }else{
	                slides.eq(0).addClass(ACTIVE);
	            }
	        }
	
	        /**
	        * Styling vertical sections
	        */
	        function styleSection(section, index){
	            //if no active section is defined, the 1st one will be the default one
	            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
	                section.addClass(ACTIVE);
	            }
	
	            section.css('height', windowsHeight + 'px');
	
	            if(options.paddingTop){
	                section.css('padding-top', options.paddingTop);
	            }
	
	            if(options.paddingBottom){
	                section.css('padding-bottom', options.paddingBottom);
	            }
	
	            if (typeof options.sectionsColor[index] !==  'undefined') {
	                section.css('background-color', options.sectionsColor[index]);
	            }
	
	            if (typeof options.anchors[index] !== 'undefined') {
	                section.attr('data-anchor', options.anchors[index]);
	            }
	        }
	
	        /**
	        * Sets the data-anchor attributes to the menu elements and activates the current one.
	        */
	        function styleMenu(section, index){
	            if (typeof options.anchors[index] !== 'undefined') {
	                //activating the menu / nav element on load
	                if(section.hasClass(ACTIVE)){
	                    activateMenuAndNav(options.anchors[index], index);
	                }
	            }
	
	            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
	            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
	                $(options.menu).appendTo($body);
	            }
	        }
	
	        /**
	        * Adds internal classes to be able to provide customizable selectors
	        * keeping the link with the style sheet.
	        */
	        function addInternalSelectors(){
	            //adding internal class names to void problem with common ones
	            $(options.sectionSelector).each(function(){
	                $(this).addClass(SECTION);
	            });
	            $(options.slideSelector).each(function(){
	                $(this).addClass(SLIDE);
	            });
	        }
	
	        /**
	        * Creates the control arrows for the given section
	        */
	        function createSlideArrows(section){
	            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');
	
	            if(options.controlArrowColor!='#fff'){
	                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
	                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
	            }
	
	            if(!options.loopHorizontal){
	                section.find(SLIDES_ARROW_PREV_SEL).hide();
	            }
	        }
	
	        /**
	        * Creates a vertical navigation bar.
	        */
	        function addVerticalNavigation(){
	            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
	            var nav = $(SECTION_NAV_SEL);
	
	            nav.addClass(function() {
	                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
	            });
	
	            for (var i = 0; i < $(SECTION_SEL).length; i++) {
	                var link = '';
	                if (options.anchors.length) {
	                    link = options.anchors[i];
	                }
	
	                var li = '<li><a href="#' + link + '"><span></span></a>';
	
	                // Only add tooltip if needed (defined by user)
	                var tooltip = options.navigationTooltips[i];
	
	                if (typeof tooltip !== 'undefined' && tooltip !== '') {
	                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
	                }
	
	                li += '</li>';
	
	                nav.find('ul').append(li);
	            }
	
	            //centering it vertically
	            $(SECTION_NAV_SEL).css('margin-top', '-' + ($(SECTION_NAV_SEL).height()/2) + 'px');
	
	            //activating the current active section
	            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
	        }
	
	        /**
	        * Creates the slim scroll scrollbar for the sections and slides inside them.
	        */
	        function createSlimScrollingHandler(){
	            $(SECTION_SEL).each(function(){
	                var slides = $(this).find(SLIDE_SEL);
	
	                if(slides.length){
	                    slides.each(function(){
	                        createSlimScrolling($(this));
	                    });
	                }else{
	                    createSlimScrolling($(this));
	                }
	
	            });
	            afterRenderActions();
	        }
	
	        /**
	        * Actions and callbacks to fire afterRender
	        */
	        function afterRenderActions(){
	            var section = $(SECTION_ACTIVE_SEL);
	
	            section.addClass(COMPLETELY);
	
	            if(options.scrollOverflowHandler.afterRender){
	                options.scrollOverflowHandler.afterRender(section);
	            }
	            lazyLoad(section);
	            playMedia(section);
	
	            $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
	            $.isFunction( options.afterRender ) && options.afterRender.call(container);
	        }
	
	
	        var isScrolling = false;
	        var lastScroll = 0;
	
	        //when scrolling...
	        function scrollHandler(){
	            var currentSection;
	
	            if(!options.autoScrolling || options.scrollBar){
	                var currentScroll = $window.scrollTop();
	                var scrollDirection = getScrollDirection(currentScroll);
	                var visibleSectionIndex = 0;
	                var screen_mid = currentScroll + ($window.height() / 2.0);
	
	                //taking the section which is showing more content in the viewport
	                var sections =  document.querySelectorAll(SECTION_SEL);
	                for (var i = 0; i < sections.length; ++i) {
	                    var section = sections[i];
	
	                    // Pick the the last section which passes the middle line of the screen.
	                    if (section.offsetTop <= screen_mid)
	                    {
	                        visibleSectionIndex = i;
	                    }
	                }
	
	                if(isCompletelyInViewPort(scrollDirection)){
	                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
	                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
	                    }
	                }
	
	                //geting the last one, the current one on the screen
	                currentSection = $(sections).eq(visibleSectionIndex);
	
	                //setting the visible section as active when manually scrolling
	                //executing only once the first time we reach the section
	                if(!currentSection.hasClass(ACTIVE)){
	                    isScrolling = true;
	                    var leavingSection = $(SECTION_ACTIVE_SEL);
	                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
	                    var yMovement = getYmovement(currentSection);
	                    var anchorLink  = currentSection.data('anchor');
	                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
	                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);
	
	                    if(activeSlide.length){
	                        var slideAnchorLink = activeSlide.data('anchor');
	                        var slideIndex = activeSlide.index();
	                    }
	
	                    if(canScroll){
	                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);
	
	                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);
	
	                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);
	                        lazyLoad(currentSection);
	
	                        activateMenuAndNav(anchorLink, sectionIndex - 1);
	
	                        if(options.anchors.length){
	                            //needed to enter in hashChange event when using the menu with anchor links
	                            lastScrolledDestiny = anchorLink;
	
	                            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
	                        }
	                    }
	
	                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
	                    clearTimeout(scrollId);
	                    scrollId = setTimeout(function(){
	                        isScrolling = false;
	                    }, 100);
	                }
	
	                if(options.fitToSection){
	                    //for the auto adjust of the viewport to fit a whole section
	                    clearTimeout(scrollId2);
	
	                    scrollId2 = setTimeout(function(){
	                        //checking fitToSection again in case it was set to false before the timeout delay
	                        if(canScroll && options.fitToSection){
	                            //allows to scroll to an active section and
	                            //if the section is already active, we prevent firing callbacks
	                            if($(SECTION_ACTIVE_SEL).is(currentSection)){
	                                isResizing = true;
	                            }
	                            scrollPage($(SECTION_ACTIVE_SEL));
	
	                            isResizing = false;
	                        }
	                    }, options.fitToSectionDelay);
	                }
	            }
	        }
	
	        /**
	        * Determines whether the active section has seen in its whole or not.
	        */
	        function isCompletelyInViewPort(movement){
	            var top = $(SECTION_ACTIVE_SEL).position().top;
	            var bottom = top + $window.height();
	
	            if(movement == 'up'){
	                return bottom >= ($window.scrollTop() + $window.height());
	            }
	            return top <= $window.scrollTop();
	        }
	
	        /**
	        * Gets the directon of the the scrolling fired by the scroll event.
	        */
	        function getScrollDirection(currentScroll){
	            var direction = currentScroll > lastScroll ? 'down' : 'up';
	
	            lastScroll = currentScroll;
	
	            return direction;
	        }
	
	        /**
	        * Determines the way of scrolling up or down:
	        * by 'automatically' scrolling a section or by using the default and normal scrolling.
	        */
	        function scrolling(type, scrollable){
	            if (!isScrollAllowed.m[type]){
	                return;
	            }
	            var check, scrollSection;
	
	            if(type == 'down'){
	                check = 'bottom';
	                scrollSection = FP.moveSectionDown;
	            }else{
	                check = 'top';
	                scrollSection = FP.moveSectionUp;
	            }
	
	            if(scrollable.length > 0 ){
	                //is the scrollbar at the start/end of the scroll?
	                if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
	                    scrollSection();
	                }else{
	                    return true;
	                }
	            }else{
	                // moved up/down
	                scrollSection();
	            }
	        }
	
	
	        var touchStartY = 0;
	        var touchStartX = 0;
	        var touchEndY = 0;
	        var touchEndX = 0;
	
	        /* Detecting touch events
	
	        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
	        * This way, the touchstart and the touch moves shows an small difference between them which is the
	        * used one to determine the direction.
	        */
	        function touchMoveHandler(event){
	            var e = event.originalEvent;
	
	            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
	            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {
	
	                if(options.autoScrolling){
	                    //preventing the easing on iOS devices
	                    event.preventDefault();
	                }
	
	                var activeSection = $(SECTION_ACTIVE_SEL);
	                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);
	
	                if (canScroll && !slideMoving) { //if theres any #
	                    var touchEvents = getEventsPage(e);
	
	                    touchEndY = touchEvents.y;
	                    touchEndX = touchEvents.x;
	
	                    //if movement in the X axys is greater than in the Y and the currect section has slides...
	                    if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {
	
	                        //is the movement greater than the minimum resistance to scroll?
	                        if (Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
	                            if (touchStartX > touchEndX) {
	                                if(isScrollAllowed.m.right){
	                                    FP.moveSlideRight(); //next
	                                }
	                            } else {
	                                if(isScrollAllowed.m.left){
	                                    FP.moveSlideLeft(); //prev
	                                }
	                            }
	                        }
	                    }
	
	                    //vertical scrolling (only when autoScrolling is enabled)
	                    else if(options.autoScrolling){
	
	                        //is the movement greater than the minimum resistance to scroll?
	                        if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
	                            if (touchStartY > touchEndY) {
	                                scrolling('down', scrollable);
	                            } else if (touchEndY > touchStartY) {
	                                scrolling('up', scrollable);
	                            }
	                        }
	                    }
	                }
	            }
	
	        }
	
	        /**
	         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
	         * Currently works well for iOS - Android might need some testing
	         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
	         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
	         * @return {boolean} true if there is a match to options.normalScrollElements
	         */
	        function checkParentForNormalScrollElement (el, hop) {
	            hop = hop || 0;
	            var parent = $(el).parent();
	
	            if (hop < options.normalScrollElementTouchThreshold &&
	                parent.is(options.normalScrollElements) ) {
	                return true;
	            } else if (hop == options.normalScrollElementTouchThreshold) {
	                return false;
	            } else {
	                return checkParentForNormalScrollElement(parent, ++hop);
	            }
	        }
	
	        /**
	        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
	        * this way we make sure that is really a touch event what IE is detecting.
	        */
	        function isReallyTouch(e){
	            //if is not IE   ||  IE is detecting `touch` or `pen`
	            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
	        }
	
	        /**
	        * Handler for the touch start event.
	        */
	        function touchStartHandler(event){
	            var e = event.originalEvent;
	
	            //stopping the auto scroll to adjust to a section
	            if(options.fitToSection){
	                $htmlBody.stop();
	            }
	
	            if(isReallyTouch(e)){
	                var touchEvents = getEventsPage(e);
	                touchStartY = touchEvents.y;
	                touchStartX = touchEvents.x;
	            }
	        }
	
	        /**
	        * Gets the average of the last `number` elements of the given array.
	        */
	        function getAverage(elements, number){
	            var sum = 0;
	
	            //taking `number` elements from the end to make the average, if there are not enought, 1
	            var lastElements = elements.slice(Math.max(elements.length - number, 1));
	
	            for(var i = 0; i < lastElements.length; i++){
	                sum = sum + lastElements[i];
	            }
	
	            return Math.ceil(sum/number);
	        }
	
	        /**
	         * Detecting mousewheel scrolling
	         *
	         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
	         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
	         */
	        var prevTime = new Date().getTime();
	
	        function MouseWheelHandler(e) {
	            var curTime = new Date().getTime();
	            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);
	
	            //autoscrolling and not zooming?
	            if(options.autoScrolling && !controlPressed && !isNormalScroll){
	                // cross-browser wheel delta
	                e = e || window.event;
	                var value = e.wheelDelta || -e.deltaY || -e.detail;
	                var delta = Math.max(-1, Math.min(1, value));
	
	                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
	                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);
	
	                //Limiting the array to 150 (lets not waste memory!)
	                if(scrollings.length > 149){
	                    scrollings.shift();
	                }
	
	                //keeping record of the previous scrollings
	                scrollings.push(Math.abs(value));
	
	                //preventing to scroll the site on mouse wheel when scrollbar is present
	                if(options.scrollBar){
	                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	                }
	
	                var activeSection = $(SECTION_ACTIVE_SEL);
	                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);
	
	                //time difference between the last scroll and the current one
	                var timeDiff = curTime-prevTime;
	                prevTime = curTime;
	
	                //haven't they scrolled in a while?
	                //(enough to be consider a different scrolling action to scroll another section)
	                if(timeDiff > 200){
	                    //emptying the array, we dont care about old scrollings for our averages
	                    scrollings = [];
	                }
	
	                if(canScroll){
	                    var averageEnd = getAverage(scrollings, 10);
	                    var averageMiddle = getAverage(scrollings, 70);
	                    var isAccelerating = averageEnd >= averageMiddle;
	
	                    //to avoid double swipes...
	                    if(isAccelerating && isScrollingVertically){
	                        //scrolling down?
	                        if (delta < 0) {
	                            scrolling('down', scrollable);
	
	                        //scrolling up?
	                        }else {
	                            scrolling('up', scrollable);
	                        }
	                    }
	                }
	
	                return false;
	            }
	
	            if(options.fitToSection){
	                //stopping the auto scroll to adjust to a section
	                $htmlBody.stop();
	            }
	        }
	
	        /**
	        * Slides a slider to the given direction.
	        * Optional `section` param.
	        */
	        function moveSlide(direction, section){
	            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
	            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
	            var numSlides = slides.find(SLIDE_SEL).length;
	
	            // more than one slide needed and nothing should be sliding
	            if (!slides.length || slideMoving || numSlides < 2) {
	                return;
	            }
	
	            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
	            var destiny = null;
	
	            if(direction === 'prev'){
	                destiny = currentSlide.prev(SLIDE_SEL);
	            }else{
	                destiny = currentSlide.next(SLIDE_SEL);
	            }
	
	            //isn't there a next slide in the secuence?
	            if(!destiny.length){
	                //respect loopHorizontal settin
	                if (!options.loopHorizontal) return;
	
	                if(direction === 'prev'){
	                    destiny = currentSlide.siblings(':last');
	                }else{
	                    destiny = currentSlide.siblings(':first');
	                }
	            }
	
	            slideMoving = true;
	
	            landscapeScroll(slides, destiny);
	        }
	
	        /**
	        * Maintains the active slides in the viewport
	        * (Because he `scroll` animation might get lost with some actions, such as when using continuousVertical)
	        */
	        function keepSlidesPosition(){
	            $(SLIDE_ACTIVE_SEL).each(function(){
	                silentLandscapeScroll($(this), 'internal');
	            });
	        }
	
	        var previousDestTop = 0;
	        /**
	        * Returns the destination Y position based on the scrolling direction and
	        * the height of the section.
	        */
	        function getDestinationPosition(element){
	            var elemPosition = element.position();
	
	            //top of the desination will be at the top of the viewport
	            var position = elemPosition.top;
	            var isScrollingDown =  elemPosition.top > previousDestTop;
	            var sectionBottom = position - windowsHeight + element.outerHeight();
	
	            //is the destination element bigger than the viewport?
	            if(element.outerHeight() > windowsHeight){
	                //scrolling up?
	                if(!isScrollingDown){
	                    position = sectionBottom;
	                }
	            }
	
	            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
	            else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
	                //The bottom of the destination will be at the bottom of the viewport
	                position = sectionBottom;
	            }
	
	            /*
	            Keeping record of the last scrolled position to determine the scrolling direction.
	            No conventional methods can be used as the scroll bar might not be present
	            AND the section might not be active if it is auto-height and didnt reach the middle
	            of the viewport.
	            */
	            previousDestTop = position;
	            return position;
	        }
	
	        /**
	        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
	        */
	        function scrollPage(element, callback, isMovementUp){
	            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function
	
	            var dtop = getDestinationPosition(element);
	
	            //local variables
	            var v = {
	                element: element,
	                callback: callback,
	                isMovementUp: isMovementUp,
	                dtop: dtop,
	                yMovement: getYmovement(element),
	                anchorLink: element.data('anchor'),
	                sectionIndex: element.index(SECTION_SEL),
	                activeSlide: element.find(SLIDE_ACTIVE_SEL),
	                activeSection: $(SECTION_ACTIVE_SEL),
	                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,
	
	                //caching the value of isResizing at the momment the function is called
	                //because it will be checked later inside a setTimeout and the value might change
	                localIsResizing: isResizing
	            };
	
	            //quiting when destination scroll is the same as the current one
	            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }
	
	            if(v.activeSlide.length){
	                var slideAnchorLink = v.activeSlide.data('anchor');
	                var slideIndex = v.activeSlide.index();
	            }
	
	            // If continuousVertical && we need to wrap around
	            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
	                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
	                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down
	
	                v = createInfiniteSections(v);
	            }
	
	            //callback (onLeave) if the site is not just resizing and readjusting the slides
	            if($.isFunction(options.onLeave) && !v.localIsResizing){
	                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
	                    return;
	                }
	            }
	            stopMedia(v.activeSection);
	
	            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
	            lazyLoad(element);
	
	            //preventing from activating the MouseWheelHandler event
	            //more than once if the page is scrolling
	            canScroll = false;
	
	            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);
	
	            performMovement(v);
	
	            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
	            lastScrolledDestiny = v.anchorLink;
	
	            //avoid firing it twice (as it does also on scroll)
	            activateMenuAndNav(v.anchorLink, v.sectionIndex);
	        }
	
	        /**
	        * Performs the movement (by CSS3 or by jQuery)
	        */
	        function performMovement(v){
	            // using CSS3 translate functionality
	            if (options.css3 && options.autoScrolling && !options.scrollBar) {
	                var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
	                transformContainer(translate3d, true);
	
	                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
	                //scrollingSpeed to change in case of using silentMoveTo();
	                if(options.scrollingSpeed){
	                    afterSectionLoadsId = setTimeout(function () {
	                        afterSectionLoads(v);
	                    }, options.scrollingSpeed);
	                }else{
	                    afterSectionLoads(v);
	                }
	            }
	
	            // using jQuery animate
	            else{
	                var scrollSettings = getScrollSettings(v);
	
	                $(scrollSettings.element).animate(
	                    scrollSettings.options,
	                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
	                    if(options.scrollBar){
	
	                        /* Hack!
	                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
	                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
	
	                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
	                        */
	                        setTimeout(function(){
	                            afterSectionLoads(v);
	                        },30);
	                    }else{
	                        afterSectionLoads(v);
	                    }
	                });
	            }
	        }
	
	        /**
	        * Gets the scrolling settings depending on the plugin autoScrolling option
	        */
	        function getScrollSettings(v){
	            var scroll = {};
	
	            if(options.autoScrolling && !options.scrollBar){
	                scroll.options = { 'top': -v.dtop};
	                scroll.element = WRAPPER_SEL;
	            }else{
	                scroll.options = { 'scrollTop': v.dtop};
	                scroll.element = 'html, body';
	            }
	
	            return scroll;
	        }
	
	        /**
	        * Adds sections before or after the current one to create the infinite effect.
	        */
	        function createInfiniteSections(v){
	            // Scrolling down
	            if (!v.isMovementUp) {
	                // Move all previous sections to after the active section
	                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
	            }
	            else { // Scrolling up
	                // Move all next sections to before the active section
	                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
	            }
	
	            // Maintain the displayed position (now that we changed the element order)
	            silentScroll($(SECTION_ACTIVE_SEL).position().top);
	
	            // Maintain the active slides visible in the viewport
	            keepSlidesPosition();
	
	            // save for later the elements that still need to be reordered
	            v.wrapAroundElements = v.activeSection;
	
	            // Recalculate animation variables
	            v.dtop = v.element.position().top;
	            v.yMovement = getYmovement(v.element);
	
	            return v;
	        }
	
	        /**
	        * Fix section order after continuousVertical changes have been animated
	        */
	        function continuousVerticalFixSectionOrder (v) {
	            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
	            // finish moving the elements around so the direct navigation will function more simply
	            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
	                return;
	            }
	
	            if (v.isMovementUp) {
	                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
	            }
	            else {
	                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
	            }
	
	            silentScroll($(SECTION_ACTIVE_SEL).position().top);
	
	            // Maintain the active slides visible in the viewport
	            keepSlidesPosition();
	        }
	
	
	        /**
	        * Actions to do once the section is loaded.
	        */
	        function afterSectionLoads (v){
	            continuousVerticalFixSectionOrder(v);
	
	            v.element.find('.fp-scrollable').mouseover();
	
	            //callback (afterLoad) if the site is not just resizing and readjusting the slides
	            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));
	
	            playMedia(v.element);
	            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
	
	            canScroll = true;
	
	            $.isFunction(v.callback) && v.callback.call(this);
	        }
	
	        /**
	        * Lazy loads image, video and audio elements.
	        */
	        function lazyLoad(destiny){
	            var destiny = getSlideOrSection(destiny);
	
	            destiny.find('img[data-src], source[data-src], audio[data-src]').each(function(){
	                $(this).attr('src', $(this).data('src'));
	                $(this).removeAttr('data-src');
	
	                if($(this).is('source')){
	                    $(this).closest('video').get(0).load();
	                }
	            });
	        }
	
	        /**
	        * Plays video and audio elements.
	        */
	        function playMedia(destiny){
	            var destiny = getSlideOrSection(destiny);
	
	            //playing HTML5 media elements
	            destiny.find('video, audio').each(function(){
	                var element = $(this).get(0);
	
	                if( element.hasAttribute('autoplay') && typeof element.play === 'function' ) {
	                    element.play();
	                }
	            });
	        }
	
	        /**
	        * Stops video and audio elements.
	        */
	        function stopMedia(destiny){
	            var destiny = getSlideOrSection(destiny);
	
	            //stopping HTML5 media elements
	            destiny.find('video, audio').each(function(){
	                var element = $(this).get(0);
	
	                if( !element.hasAttribute('data-ignore') && typeof element.pause === 'function' ) {
	                    element.pause();
	                }
	            });
	        }
	
	        /**
	        * Gets the active slide (or section) for the given section
	        */
	        function getSlideOrSection(destiny){
	            var slide = destiny.find(SLIDE_ACTIVE_SEL);
	            if( slide.length ) {
	                destiny = $(slide);
	            }
	
	            return destiny;
	        }
	
	        /**
	        * Scrolls to the anchor in the URL when loading the site
	        */
	        function scrollToAnchor(){
	            //getting the anchor link in the URL and deleting the `#`
	            var value =  window.location.hash.replace('#', '').split('/');
	            var section = value[0];
	            var slide = value[1];
	
	            if(section){  //if theres any #
	                if(options.animateAnchor){
	                    scrollPageAndSlide(section, slide);
	                }else{
	                    FP.silentMoveTo(section, slide);
	                }
	            }
	        }
	
	        /**
	        * Detecting any change on the URL to scroll to the given anchor link
	        * (a way to detect back history button as we play with the hashes on the URL)
	        */
	        function hashChangeHandler(){
	            if(!isScrolling && !options.lockAnchors){
	                var value =  window.location.hash.replace('#', '').split('/');
	                var section = value[0];
	                var slide = value[1];
	
	                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
	                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
	                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined' && !slideMoving);
	
	
	                if(section.length){
	                    /*in order to call scrollpage() only once for each destination at a time
	                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
	                    event is fired on every scroll too.*/
	                    if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
	                        scrollPageAndSlide(section, slide);
	                    }
	                }
	            }
	        }
	
	        //Sliding with arrow keys, both, vertical and horizontal
	        function keydownHandler(e) {
	
	            clearTimeout(keydownId);
	
	            var activeElement = $(':focus');
	
	            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
	                activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' &&
	                options.keyboardScrolling && options.autoScrolling){
	                var keyCode = e.which;
	
	                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
	                var keyControls = [40, 38, 32, 33, 34];
	                if($.inArray(keyCode, keyControls) > -1){
	                    e.preventDefault();
	                }
	
	                controlPressed = e.ctrlKey;
	
	                keydownId = setTimeout(function(){
	                    onkeydown(e);
	                },150);
	            }
	        }
	
	        function tooltipTextHandler(){
	            $(this).prev().trigger('click');
	        }
	
	        //to prevent scrolling while zooming
	        function keyUpHandler(e){
	            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
	                controlPressed = e.ctrlKey;
	            }
	        }
	
	        //binding the mousemove when the mouse's middle button is released
	        function mouseDownHandler(e){
	            //middle button
	            if (e.which == 2){
	                oldPageY = e.pageY;
	                container.on('mousemove', mouseMoveHandler);
	            }
	        }
	
	        //unbinding the mousemove when the mouse's middle button is released
	        function mouseUpHandler(e){
	            //middle button
	            if (e.which == 2){
	                container.off('mousemove');
	            }
	        }
	
	        //Scrolling horizontally when clicking on the slider controls.
	        function slideArrowHandler(){
	            var section = $(this).closest(SECTION_SEL);
	
	            if ($(this).hasClass(SLIDES_PREV)) {
	                if(isScrollAllowed.m.left){
	                    FP.moveSlideLeft(section);
	                }
	            } else {
	                if(isScrollAllowed.m.right){
	                    FP.moveSlideRight(section);
	                }
	            }
	        }
	
	        //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
	        function blurHandler(){
	            isWindowFocused = false;
	            controlPressed = false;
	        }
	
	        //Scrolls to the section when clicking the navigation bullet
	        function sectionBulletHandler(e){
	            e.preventDefault();
	            var index = $(this).parent().index();
	            scrollPage($(SECTION_SEL).eq(index));
	        }
	
	        //Scrolls the slider to the given slide destination for the given section
	        function slideBulletHandler(e){
	            e.preventDefault();
	            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
	            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());
	
	            landscapeScroll(slides, destiny);
	        }
	
	        /**
	        * Keydown event
	        */
	        function onkeydown(e){
	            var shiftPressed = e.shiftKey;
	
	            switch (e.which) {
	                //up
	                case 38:
	                case 33:
	                    if(isScrollAllowed.k.up){
	                        FP.moveSectionUp();
	                    }
	                    break;
	
	                //down
	                case 32: //spacebar
	                    if(shiftPressed && isScrollAllowed.k.up){
	                        FP.moveSectionUp();
	                        break;
	                    }
	                case 40:
	                case 34:
	                    if(isScrollAllowed.k.down){
	                        FP.moveSectionDown();
	                    }
	                    break;
	
	                //Home
	                case 36:
	                    if(isScrollAllowed.k.up){
	                        FP.moveTo(1);
	                    }
	                    break;
	
	                //End
	                case 35:
	                     if(isScrollAllowed.k.down){
	                        FP.moveTo( $(SECTION_SEL).length );
	                    }
	                    break;
	
	                //left
	                case 37:
	                    if(isScrollAllowed.k.left){
	                        FP.moveSlideLeft();
	                    }
	                    break;
	
	                //right
	                case 39:
	                    if(isScrollAllowed.k.right){
	                        FP.moveSlideRight();
	                    }
	                    break;
	
	                default:
	                    return; // exit this handler for other keys
	            }
	        }
	
	        /**
	        * Detecting the direction of the mouse movement.
	        * Used only for the middle button of the mouse.
	        */
	        var oldPageY = 0;
	        function mouseMoveHandler(e){
	            if(canScroll){
	                // moving up
	                if (e.pageY < oldPageY && isScrollAllowed.m.up){
	                    FP.moveSectionUp();
	                }
	
	                // moving down
	                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
	                    FP.moveSectionDown();
	                }
	            }
	            oldPageY = e.pageY;
	        }
	
	        /**
	        * Scrolls horizontal sliders.
	        */
	        function landscapeScroll(slides, destiny){
	            var destinyPos = destiny.position();
	            var slideIndex = destiny.index();
	            var section = slides.closest(SECTION_SEL);
	            var sectionIndex = section.index(SECTION_SEL);
	            var anchorLink = section.data('anchor');
	            var slidesNav = section.find(SLIDES_NAV_SEL);
	            var slideAnchor = getAnchor(destiny);
	            var prevSlide = section.find(SLIDE_ACTIVE_SEL);
	
	            //caching the value of isResizing at the momment the function is called
	            //because it will be checked later inside a setTimeout and the value might change
	            var localIsResizing = isResizing;
	
	            if(options.onSlideLeave){
	                var prevSlideIndex = prevSlide.index();
	                var xMovement = getXmovement(prevSlideIndex, slideIndex);
	
	                //if the site is not just resizing and readjusting the slides
	                if(!localIsResizing && xMovement!=='none'){
	                    if($.isFunction( options.onSlideLeave )){
	                        if(options.onSlideLeave.call( prevSlide, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement, slideIndex ) === false){
	                            slideMoving = false;
	                            return;
	                        }
	                    }
	                }
	            }
	            stopMedia(prevSlide);
	
	            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);
	            if(!localIsResizing){
	                lazyLoad(destiny);
	            }
	
	            if(!options.loopHorizontal && options.controlArrows){
	                //hidding it for the fist slide, showing for the rest
	                section.find(SLIDES_ARROW_PREV_SEL).toggle(slideIndex!==0);
	
	                //hidding it for the last slide, showing for the rest
	                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
	            }
	
	            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
	            if(section.hasClass(ACTIVE)){
	                setState(slideIndex, slideAnchor, anchorLink, sectionIndex);
	            }
	
	            var afterSlideLoads = function(){
	                //if the site is not just resizing and readjusting the slides
	                if(!localIsResizing){
	                    $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( destiny, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
	                }
	                playMedia(destiny);
	
	                //letting them slide again
	                slideMoving = false;
	            };
	
	            if(options.css3){
	                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';
	
	                addAnimation(slides.find(SLIDES_CONTAINER_SEL), options.scrollingSpeed>0).css(getTransforms(translate3d));
	
	                afterSlideLoadsId = setTimeout(function(){
	                    afterSlideLoads();
	                }, options.scrollingSpeed, options.easing);
	            }else{
	                slides.animate({
	                    scrollLeft : Math.round(destinyPos.left)
	                }, options.scrollingSpeed, options.easing, function() {
	
	                    afterSlideLoads();
	                });
	            }
	
	            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
	            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
	        }
	
	        var previousHeight = windowsHeight;
	
	        //when resizing the site, we adjust the heights of the sections, slimScroll...
	        function resizeHandler(){
	            //checking if it needs to get responsive
	            responsive();
	
	            // rebuild immediately on touch devices
	            if (isTouchDevice) {
	                var activeElement = $(document.activeElement);
	
	                //if the keyboard is NOT visible
	                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
	                    var currentHeight = $window.height();
	
	                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
	                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
	                        FP.reBuild(true);
	                        previousHeight = currentHeight;
	                    }
	                }
	            }else{
	                //in order to call the functions only when the resize is finished
	                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
	                clearTimeout(resizeId);
	
	                resizeId = setTimeout(function(){
	                    FP.reBuild(true);
	                }, 350);
	            }
	        }
	
	        /**
	        * Checks if the site needs to get responsive and disables autoScrolling if so.
	        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
	        */
	        function responsive(){
	            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
	            var heightLimit = options.responsiveHeight;
	
	            //only calculating what we need. Remember its called on the resize event.
	            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
	            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;
	
	            if(widthLimit && heightLimit){
	                FP.setResponsive(isBreakingPointWidth || isBreakingPointHeight);
	            }
	            else if(widthLimit){
	                FP.setResponsive(isBreakingPointWidth);
	            }
	            else if(heightLimit){
	                FP.setResponsive(isBreakingPointHeight);
	            }
	        }
	
	        /**
	        * Adds transition animations for the given element
	        */
	        function addAnimation(element){
	            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;
	
	            element.removeClass(NO_TRANSITION);
	            return element.css({
	                '-webkit-transition': transition,
	                'transition': transition
	            });
	        }
	
	        /**
	        * Remove transition animations for the given element
	        */
	        function removeAnimation(element){
	            return element.addClass(NO_TRANSITION);
	        }
	
	        /**
	         * Resizing of the font size depending on the window size as well as some of the images on the site.
	         */
	        function resizeMe(displayHeight, displayWidth) {
	            //Standard dimensions, for which the body font size is correct
	            var preferredHeight = 825;
	            var preferredWidth = 900;
	
	            if (displayHeight < preferredHeight || displayWidth < preferredWidth) {
	                var heightPercentage = (displayHeight * 100) / preferredHeight;
	                var widthPercentage = (displayWidth * 100) / preferredWidth;
	                var percentage = Math.min(heightPercentage, widthPercentage);
	                var newFontSize = percentage.toFixed(2);
	
	                $body.css('font-size', newFontSize + '%');
	            } else {
	                $body.css('font-size', '100%');
	            }
	        }
	
	        /**
	         * Activating the website navigation dots according to the given slide name.
	         */
	        function activateNavDots(name, sectionIndex){
	            if(options.navigation){
	                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
	                if(name){
	                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
	                }else{
	                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
	                }
	            }
	        }
	
	        /**
	         * Activating the website main menu elements according to the given slide name.
	         */
	        function activateMenuElement(name){
	            if(options.menu){
	                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
	                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
	            }
	        }
	
	        /**
	        * Sets to active the current menu and vertical nav items.
	        */
	        function activateMenuAndNav(anchor, index){
	            activateMenuElement(anchor);
	            activateNavDots(anchor, index);
	        }
	
	        /**
	        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
	        * from the current section.
	        */
	        function getYmovement(destiny){
	            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
	            var toIndex = destiny.index(SECTION_SEL);
	            if( fromIndex == toIndex){
	                return 'none';
	            }
	            if(fromIndex > toIndex){
	                return 'up';
	            }
	            return 'down';
	        }
	
	        /**
	        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
	        * from the current slide.
	        */
	        function getXmovement(fromIndex, toIndex){
	            if( fromIndex == toIndex){
	                return 'none';
	            }
	            if(fromIndex > toIndex){
	                return 'left';
	            }
	            return 'right';
	        }
	
	
	        function createSlimScrolling(element){
	            //needed to make `scrollHeight` work under Opera 12
	            element.css('overflow', 'hidden');
	
	            var scrollOverflowHandler = options.scrollOverflowHandler;
	            var wrap = scrollOverflowHandler.wrapContent();
	            //in case element is a slide
	            var section = element.closest(SECTION_SEL);
	            var scrollable = scrollOverflowHandler.scrollable(element);
	            var contentHeight;
	
	            //if there was scroll, the contentHeight will be the one in the scrollable section
	            if(scrollable.length){
	                contentHeight = scrollOverflowHandler.scrollHeight(element);
	            }else{
	                contentHeight = element.get(0).scrollHeight;
	                if(options.verticalCentered){
	                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
	                }
	            }
	
	            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));
	
	            //needs scroll?
	            if ( contentHeight > scrollHeight) {
	                //was there already an scroll ? Updating it
	                if(scrollable.length){
	                    scrollOverflowHandler.update(element, scrollHeight);
	                }
	                //creating the scrolling
	                else{
	                    if(options.verticalCentered){
	                        element.find(TABLE_CELL_SEL).wrapInner(wrap);
	                    }else{
	                        element.wrapInner(wrap);
	                    }
	                    scrollOverflowHandler.create(element, scrollHeight);
	                }
	            }
	            //removing the scrolling when it is not necessary anymore
	            else{
	                scrollOverflowHandler.remove(element);
	            }
	
	            //undo
	            element.css('overflow', '');
	        }
	
	        function addTableClass(element){
	            element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
	        }
	
	        function getTableHeight(element){
	            var sectionHeight = windowsHeight;
	
	            if(options.paddingTop || options.paddingBottom){
	                var section = element;
	                if(!section.hasClass(SECTION)){
	                    section = element.closest(SECTION_SEL);
	                }
	
	                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
	                sectionHeight = (windowsHeight - paddings);
	            }
	
	            return sectionHeight;
	        }
	
	        /**
	        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
	        */
	        function transformContainer(translate3d, animated){
	            if(animated){
	                addAnimation(container);
	            }else{
	                removeAnimation(container);
	            }
	
	            container.css(getTransforms(translate3d));
	
	            //syncronously removing the class after the animation has been applied.
	            setTimeout(function(){
	                container.removeClass(NO_TRANSITION);
	            },10);
	        }
	
	        /**
	        * Gets a section by its anchor / index
	        */
	        function getSectionByAnchor(sectionAnchor){
	            //section
	            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
	            if(!section.length){
	                section = $(SECTION_SEL).eq( (sectionAnchor -1) );
	            }
	
	            return section;
	        }
	
	        /**
	        * Gets a slide inside a given section by its anchor / index
	        */
	        function getSlideByAnchor(slideAnchor, section){
	            var slides = section.find(SLIDES_WRAPPER_SEL);
	            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');
	
	            if(!slide.length){
	                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
	            }
	
	            return slide;
	        }
	
	        /**
	        * Scrolls to the given section and slide anchors
	        */
	        function scrollPageAndSlide(destiny, slide){
	            var section = getSectionByAnchor(destiny);
	
	            //default slide
	            if (typeof slide === 'undefined') {
	                slide = 0;
	            }
	
	            //we need to scroll to the section and then to the slide
	            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
	                scrollPage(section, function(){
	                    scrollSlider(section, slide);
	                });
	            }
	            //if we were already in the section
	            else{
	                scrollSlider(section, slide);
	            }
	        }
	
	        /**
	        * Scrolls the slider to the given slide destination for the given section
	        */
	        function scrollSlider(section, slideAnchor){
	            if(typeof slideAnchor !== 'undefined'){
	                var slides = section.find(SLIDES_WRAPPER_SEL);
	                var destiny =  getSlideByAnchor(slideAnchor, section);
	
	                if(destiny.length){
	                    landscapeScroll(slides, destiny);
	                }
	            }
	        }
	
	        /**
	        * Creates a landscape navigation bar with dots for horizontal sliders.
	        */
	        function addSlidesNavigation(section, numSlides){
	            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
	            var nav = section.find(SLIDES_NAV_SEL);
	
	            //top or bottom
	            nav.addClass(options.slidesNavPosition);
	
	            for(var i=0; i< numSlides; i++){
	                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
	            }
	
	            //centering it
	            nav.css('margin-left', '-' + (nav.width()/2) + 'px');
	
	            nav.find('li').first().find('a').addClass(ACTIVE);
	        }
	
	
	        /**
	        * Sets the state of the website depending on the active section/slide.
	        * It changes the URL hash when needed and updates the body class.
	        */
	        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
	            var sectionHash = '';
	
	            if(options.anchors.length && !options.lockAnchors){
	
	                //isn't it the first slide?
	                if(slideIndex){
	                    if(typeof anchorLink !== 'undefined'){
	                        sectionHash = anchorLink;
	                    }
	
	                    //slide without anchor link? We take the index instead.
	                    if(typeof slideAnchor === 'undefined'){
	                        slideAnchor = slideIndex;
	                    }
	
	                    lastScrolledSlide = slideAnchor;
	                    setUrlHash(sectionHash + '/' + slideAnchor);
	
	                //first slide won't have slide anchor, just the section one
	                }else if(typeof slideIndex !== 'undefined'){
	                    lastScrolledSlide = slideAnchor;
	                    setUrlHash(anchorLink);
	                }
	
	                //section without slides
	                else{
	                    setUrlHash(anchorLink);
	                }
	            }
	
	            setBodyClass();
	        }
	
	        /**
	        * Sets the URL hash.
	        */
	        function setUrlHash(url){
	            if(options.recordHistory){
	                location.hash = url;
	            }else{
	                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
	                if(isTouchDevice || isTouch){
	                    window.history.replaceState(undefined, undefined, '#' + url);
	                }else{
	                    var baseUrl = window.location.href.split('#')[0];
	                    window.location.replace( baseUrl + '#' + url );
	                }
	            }
	        }
	
	        /**
	        * Gets the anchor for the given slide / section. Its index will be used if there's none.
	        */
	        function getAnchor(element){
	            var anchor = element.data('anchor');
	            var index = element.index();
	
	            //Slide without anchor link? We take the index instead.
	            if(typeof anchor === 'undefined'){
	                anchor = index;
	            }
	
	            return anchor;
	        }
	
	        /**
	        * Sets a class for the body of the page depending on the active section / slide
	        */
	        function setBodyClass(){
	            var section = $(SECTION_ACTIVE_SEL);
	            var slide = section.find(SLIDE_ACTIVE_SEL);
	
	            var sectionAnchor = getAnchor(section);
	            var slideAnchor = getAnchor(slide);
	
	            var sectionIndex = section.index(SECTION_SEL);
	
	            var text = String(sectionAnchor);
	
	            if(slide.length){
	                text = text + '-' + slideAnchor;
	            }
	
	            //changing slash for dash to make it a valid CSS style
	            text = text.replace('/', '-').replace('#','');
	
	            //removing previous anchor classes
	            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
	            $body[0].className = $body[0].className.replace(classRe, '');
	
	            //adding the current anchor
	            $body.addClass(VIEWING_PREFIX + '-' + text);
	        }
	
	        /**
	        * Checks for translate3d support
	        * @return boolean
	        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
	        */
	        function support3d() {
	            var el = document.createElement('p'),
	                has3d,
	                transforms = {
	                    'webkitTransform':'-webkit-transform',
	                    'OTransform':'-o-transform',
	                    'msTransform':'-ms-transform',
	                    'MozTransform':'-moz-transform',
	                    'transform':'transform'
	                };
	
	            // Add it to the body to get the computed style.
	            document.body.insertBefore(el, null);
	
	            for (var t in transforms) {
	                if (el.style[t] !== undefined) {
	                    el.style[t] = 'translate3d(1px,1px,1px)';
	                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
	                }
	            }
	
	            document.body.removeChild(el);
	
	            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
	        }
	
	        /**
	        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
	        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
	        */
	        function removeMouseWheelHandler(){
	            if (document.addEventListener) {
	                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
	                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
	                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
	            } else {
	                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
	            }
	        }
	
	        /**
	        * Adds the auto scrolling action for the mouse wheel and trackpad.
	        * After this function is called, the mousewheel and trackpad movements will scroll through sections
	        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	        */
	        function addMouseWheelHandler(){
	            var prefix = '';
	            var _addEventListener;
	
	            if (window.addEventListener){
	                _addEventListener = "addEventListener";
	            }else{
	                _addEventListener = "attachEvent";
	                prefix = 'on';
	            }
	
	             // detect available wheel event
	            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
	                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
	                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
	
	
	            if(support == 'DOMMouseScroll'){
	                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
	            }
	
	            //handle MozMousePixelScroll in older Firefox
	            else{
	                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
	            }
	        }
	
	        /**
	        * Binding the mousemove when the mouse's middle button is pressed
	        */
	        function addMiddleWheelHandler(){
	            container
	                .on('mousedown', mouseDownHandler)
	                .on('mouseup', mouseUpHandler);
	        }
	
	        /**
	        * Unbinding the mousemove when the mouse's middle button is released
	        */
	        function removeMiddleWheelHandler(){
	            container
	                .off('mousedown', mouseDownHandler)
	                .off('mouseup', mouseUpHandler);
	        }
	
	        /**
	        * Adds the possibility to auto scroll through sections on touch devices.
	        */
	        function addTouchHandler(){
	            if(isTouchDevice || isTouch){
	                //Microsoft pointers
	                var MSPointer = getMSPointer();
	
	                $(WRAPPER_SEL).off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
	                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
	            }
	        }
	
	        /**
	        * Removes the auto scrolling for touch devices.
	        */
	        function removeTouchHandler(){
	            if(isTouchDevice || isTouch){
	                //Microsoft pointers
	                var MSPointer = getMSPointer();
	
	                $(WRAPPER_SEL).off('touchstart ' + MSPointer.down);
	                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move);
	            }
	        }
	
	        /*
	        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
	        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
	        */
	        function getMSPointer(){
	            var pointer;
	
	            //IE >= 11 & rest of browsers
	            if(window.PointerEvent){
	                pointer = { down: 'pointerdown', move: 'pointermove'};
	            }
	
	            //IE < 11
	            else{
	                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
	            }
	
	            return pointer;
	        }
	
	        /**
	        * Gets the pageX and pageY properties depending on the browser.
	        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
	        */
	        function getEventsPage(e){
	            var events = [];
	
	            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
	            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);
	
	            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
	            if(isTouch && isReallyTouch(e) && options.scrollBar){
	                events.y = e.touches[0].pageY;
	                events.x = e.touches[0].pageX;
	            }
	
	            return events;
	        }
	
	        /**
	        * Slides silently (with no animation) the active slider to the given slide.
	        */
	        function silentLandscapeScroll(activeSlide, noCallbacks){
	            FP.setScrollingSpeed (0, 'internal');
	
	            if(typeof noCallbacks !== 'undefined'){
	                //preventing firing callbacks afterSlideLoad etc.
	                isResizing = true;
	            }
	
	            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);
	
	            if(typeof noCallbacks !== 'undefined'){
	                isResizing = false;
	            }
	
	            FP.setScrollingSpeed(originals.scrollingSpeed, 'internal');
	        }
	
	        /**
	        * Scrolls silently (with no animation) the page to the given Y position.
	        */
	        function silentScroll(top){
	            if(options.scrollBar){
	                container.scrollTop(top);
	            }
	            else if (options.css3) {
	                var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
	                transformContainer(translate3d, false);
	            }
	            else {
	                container.css('top', -top);
	            }
	        }
	
	        /**
	        * Returns the cross-browser transform string.
	        */
	        function getTransforms(translate3d){
	            return {
	                '-webkit-transform': translate3d,
	                '-moz-transform': translate3d,
	                '-ms-transform':translate3d,
	                'transform': translate3d
	            };
	        }
	
	        /**
	        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
	        * @type  m (mouse) or k (keyboard)
	        */
	        function setIsScrollAllowed(value, direction, type){
	            switch (direction){
	                case 'up': isScrollAllowed[type].up = value; break;
	                case 'down': isScrollAllowed[type].down = value; break;
	                case 'left': isScrollAllowed[type].left = value; break;
	                case 'right': isScrollAllowed[type].right = value; break;
	                case 'all':
	                    if(type == 'm'){
	                        FP.setAllowScrolling(value);
	                    }else{
	                        FP.setKeyboardScrolling(value);
	                    }
	            }
	        }
	
	        /*
	        * Destroys fullpage.js plugin events and optinally its html markup and styles
	        */
	        FP.destroy = function(all){
	            FP.setAutoScrolling(false, 'internal');
	            FP.setAllowScrolling(false);
	            FP.setKeyboardScrolling(false);
	            container.addClass(DESTROYED);
	
	            clearTimeout(afterSlideLoadsId);
	            clearTimeout(afterSectionLoadsId);
	            clearTimeout(resizeId);
	            clearTimeout(scrollId);
	            clearTimeout(scrollId2);
	
	            $window
	                .off('scroll', scrollHandler)
	                .off('hashchange', hashChangeHandler)
	                .off('resize', resizeHandler);
	
	            $document
	                .off('click', SECTION_NAV_SEL + ' a')
	                .off('mouseenter', SECTION_NAV_SEL + ' li')
	                .off('mouseleave', SECTION_NAV_SEL + ' li')
	                .off('click', SLIDES_NAV_LINK_SEL)
	                .off('mouseover', options.normalScrollElements)
	                .off('mouseout', options.normalScrollElements);
	
	            $(SECTION_SEL)
	                .off('click', SLIDES_ARROW_SEL);
	
	            clearTimeout(afterSlideLoadsId);
	            clearTimeout(afterSectionLoadsId);
	
	            //lets make a mess!
	            if(all){
	                destroyStructure();
	            }
	        };
	
	        /*
	        * Removes inline styles added by fullpage.js
	        */
	        function destroyStructure(){
	            //reseting the `top` or `translate` properties to 0
	            silentScroll(0);
	
	            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();
	
	            //removing inline styles
	            $(SECTION_SEL).css( {
	                'height': '',
	                'background-color' : '',
	                'padding': ''
	            });
	
	            $(SLIDE_SEL).css( {
	                'width': ''
	            });
	
	            container.css({
	                'height': '',
	                'position': '',
	                '-ms-touch-action': '',
	                'touch-action': ''
	            });
	
	            $htmlBody.css({
	                'overflow': '',
	                'height': ''
	            });
	
	            // remove .fp-enabled class
	            $('html').removeClass(ENABLED);
	
	            // remove all of the .fp-viewing- classes
	            $.each($body.get(0).className.split(/\s+/), function (index, className) {
	                if (className.indexOf(VIEWING_PREFIX) === 0) {
	                    $body.removeClass(className);
	                }
	            });
	
	            //removing added classes
	            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
	                options.scrollOverflowHandler.remove($(this));
	                $(this).removeClass(TABLE + ' ' + ACTIVE);
	            });
	
	            removeAnimation(container);
	
	            //Unwrapping content
	            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
	                //unwrap not being use in case there's no child element inside and its just text
	                $(this).replaceWith(this.childNodes);
	            });
	
	            //scrolling the page to the top with no animation
	            $htmlBody.scrollTop(0);
	
	            //removing selectors
	            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
	            $.each(usedSelectors, function(index, value){
	                $('.' + value).removeClass(value);
	            });
	        }
	
	        /*
	        * Sets the state for a variable with multiple states (original, and temporal)
	        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
	        * This function is used to keep track of both states, the original and the temporal one.
	        * If type is not 'internal', then we assume the user is globally changing the variable.
	        */
	        function setVariableState(variable, value, type){
	            options[variable] = value;
	            if(type !== 'internal'){
	                originals[variable] = value;
	            }
	        }
	
	        /**
	        * Displays warnings
	        */
	        function displayWarnings(){
	            if($('html').hasClass(ENABLED)){
	                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
	                return;
	            }
	
	            // Disable mutually exclusive settings
	            if (options.continuousVertical &&
	                (options.loopTop || options.loopBottom)) {
	                options.continuousVertical = false;
	                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
	            }
	
	            if(options.scrollBar && options.scrollOverflow){
	                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
	            }
	
	            if(options.continuousVertical && options.scrollBar){
	                options.continuousVertical = false;
	                showError('warn', 'Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
	            }
	
	            //anchors can not have the same value as any element ID or NAME
	            $.each(options.anchors, function(index, name){
	
	                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
	                var nameAttr = $document.find('[name]').filter(function() {
	                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
	                });
	
	                var idAttr = $document.find('[id]').filter(function() {
	                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
	                });
	
	                if(idAttr.length || nameAttr.length ){
	                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
	                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
	                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
	                }
	            });
	        }
	
	        /**
	        * Shows a message in the console of the given type.
	        */
	        function showError(type, text){
	            console && console[type] && console[type]('fullPage: ' + text);
	        }
	    };
	
	    /**
	     * An object to handle overflow scrolling.
	     * This uses jquery.slimScroll to accomplish overflow scrolling.
	     * It is possible to pass in an alternate scrollOverflowHandler
	     * to the fullpage.js option that implements the same functions
	     * as this handler.
	     *
	     * @type {Object}
	     */
	    var slimScrollHandler = {
	        /**
	         * Optional function called after each render.
	         *
	         * Solves a bug with slimScroll vendor library #1037, #553
	         *
	         * @param  {object} section jQuery object containing rendered section
	         */
	        afterRender: function(section){
	            var slides = section.find(SLIDES_WRAPPER);
	            var scrollableWrap = section.find(SCROLLABLE_SEL);
	
	            if(slides.length){
	                scrollableWrap = slides.find(SLIDE_ACTIVE_SEL);
	            }
	
	            scrollableWrap.mouseover();
	        },
	
	        /**
	         * Called when overflow scrolling is needed for a section.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         * @param  {Number} scrollHeight Current window height in pixels
	         */
	        create: function(element, scrollHeight){
	            element.find(SCROLLABLE_SEL).slimScroll({
	                allowPageScroll: true,
	                height: scrollHeight + 'px',
	                size: '10px',
	                alwaysVisible: true
	            });
	        },
	
	        /**
	         * Return a boolean depending on whether the scrollable element is a
	         * the end or at the start of the scrolling depending on the given type.
	         *
	         * @param  {String}  type       Either 'top' or 'bottom'
	         * @param  {Object}  scrollable jQuery object for the scrollable element
	         * @return {Boolean}
	         */
	        isScrolled: function(type, scrollable){
	            if(type === 'top'){
	                return !scrollable.scrollTop();
	            }else if(type === 'bottom'){
	                return scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
	            }
	        },
	
	        /**
	         * Returns the scrollable element for the given section.
	         * If there are landscape slides, will only return a scrollable element
	         * if it is in the active slide.
	         *
	         * @param  {Object}  activeSection jQuery object containing current section
	         * @return {Boolean}
	         */
	        scrollable: function(activeSection){
	            // if there are landscape slides, we check if the scrolling bar is in the current one or not
	            if(activeSection.find(SLIDES_WRAPPER_SEL).length){
	                return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
	            }
	            return activeSection.find(SCROLLABLE_SEL);
	        },
	
	        /**
	         * Returns the scroll height of the wrapped content.
	         * If this is larger than the window height minus section padding,
	         * overflow scrolling is needed.
	         *
	         * @param  {Object} element jQuery object containing current section
	         * @return {Number}
	         */
	        scrollHeight: function(element){
	            return element.find(SCROLLABLE_SEL).get(0).scrollHeight;
	        },
	
	        /**
	         * Called when overflow scrolling is no longer needed for a section.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         */
	        remove: function(element){
	            element.find(SCROLLABLE_SEL).children().first().unwrap().unwrap();
	            element.find(SLIMSCROLL_BAR_SEL).remove();
	            element.find(SLIMSCROLL_RAIL_SEL).remove();
	        },
	
	        /**
	         * Called when overflow scrolling has already been setup but the
	         * window height has potentially changed.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         * @param  {Number} scrollHeight Current window height in pixels
	         */
	        update: function(element, scrollHeight){
	            element.find(SCROLLABLE_SEL).css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
	        },
	
	        /**
	         * Called to get any additional elements needed to wrap the section
	         * content in order to facilitate overflow scrolling.
	         *
	         * @return {String|Object} Can be a string containing HTML,
	         *                         a DOM element, or jQuery object.
	         */
	        wrapContent: function(){
	            return '<div class="' + SCROLLABLE + '"></div>';
	        }
	    };
	
	    defaultScrollHandler = slimScrollHandler;
	
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "div, p {\n  margin: 0;\n  padding: 0; }\n\n@-webkit-keyframes animate {\n  0% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg); }\n  5% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  10% {\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg); }\n  15% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  20% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg); }\n  25% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  30% {\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg); }\n  35% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@keyframes animate {\n  0% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg); }\n  5% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  10% {\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg); }\n  15% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  20% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg); }\n  25% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  30% {\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg); }\n  35% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n.page_title {\n  background: url(" + __webpack_require__(7) + ");\n  width: 100%; }\n\n.component_base_title {\n  width: 197;\n  height: 65;\n  background-size: 100%;\n  -webkit-animation-name: animate;\n          animation-name: animate;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.page_point {\n  background: url(" + __webpack_require__(8) + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  width: 100%; }\n\n.page_bar {\n  background: url(" + __webpack_require__(8) + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  width: 100%; }\n\n.page_polyline {\n  background: url(" + __webpack_require__(8) + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  width: 100%; }\n\n.page_pie {\n  background: url(" + __webpack_require__(8) + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  width: 100%; }\n", ""]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAARwCAIAAAD17XJXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFBQjhCNzYyNDE4NzExRTVBREYxQzExQUI0RUU4NDgxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFBQjhCNzYxNDE4NzExRTVBREYxQzExQUI0RUU4NDgxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2YmFjZjY4OC0wNWQxLTYxNGMtOWM5NC00ZTYyYmRmMGM5MTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OWEzMDFh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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAARwCAYAAAB6j+UAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxNDg5QzgzNDFCMTExRTVBREYxQzExQUI0RUU4NDgxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxNDg5QzgyNDFCMTExRTVBREYxQzExQUI0RUU4NDgxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3N2QwNDcwMy04ZThjLWMxNGEtODNiYS1iMjc5NThlYzMxZGMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZDhjNjc1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"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./Page.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./Page.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".page{\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tz-index: -100;\r\n}", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./ComponentBase.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./ComponentBase.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "*{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.component{\r\n\tbackground-image: 100%;\r\n\tbackground-repeat: no-repeat;\r\n\tposition: absolute;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./ComponentBasePoint.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./ComponentBasePoint.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".point{\r\n\tborder-radius: 50%;\r\n\tposition: absolute;\r\n \tfont-size:1.3em; \r\n}\r\n\r\n.point .title{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\ttop: 30%;\r\n}\r\n.point .value{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\ttop: 50%;\t\r\n}\r\n\r\n@-webkit-keyframes scale{\r\n\t0%{\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0);\r\n\t\topacity: 1;\r\n\t}\r\n\t100%{\r\n\t\t-webkit-transform: scale(1.6);\r\n\t\t        transform: scale(1.6);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes scale{\r\n\t0%{\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0);\r\n\t\topacity: 1;\r\n\t}\r\n\t100%{\r\n\t\t-webkit-transform: scale(1.6);\r\n\t\t        transform: scale(1.6);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n.point_animate{\r\n\tposition: absolute;\r\n\tz-index:-1;\r\n\tbackground:#ccc;\r\n\tborder-radius: 50%;\r\n\t-webkit-animation-name:scale;\r\n\t        animation-name:scale;\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n\t-webkit-animation-duration: 3s;\r\n\t        animation-duration: 3s;\r\n\t\r\n}\r\n\r\n.point_0{\r\n\tbox-shadow: 0 0 10px 3px #ccc;\r\n}", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./ComponentBaseBar.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./ComponentBaseBar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".component_bar .container{\r\n\toverflow: hidden;\r\n\tmargin-top:20px;\r\n}\r\n.component_bar .name{\r\n\tfloat:left;\r\n\tfont-size:1.3em;\r\n}\r\n.component_bar .bar{\r\n\tfloat:left;\r\n\tmargin-left:10px;\r\n\tmargin-right:10px;\r\n}\r\n.component_bar .content{\r\n\theight: 25px;\r\n}\r\n.component_bar .rate{\r\n\tfont-size:1em;\r\n\tmargin-left:20px;\r\n}\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./ComponentPolyline.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./ComponentPolyline.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ComponentBase, ComponentBasePoint, ComponentBaseBar, ComponentPolyline, ComponentPie) {
		var Page = function Page() {
			this.id = ("page_" + Math.random()).replace('.', '_');
			this.el = $('<div class="fullPage" id="' + this.id + '">');
			this.page = [];
			$('body').append(this.el);
	
			this.addPage = function (name, text) {
				var page = $('<div class="page section">');
				if (name != undefined) {
					page.addClass('page_' + name);
				}
				if (text != undefined) {
					page.text(text);
				}
				this.el.append(page);
	
				page.on('pageLoad', function () {
					page.find('.component').trigger('componentLoad');
				});
	
				page.on('pageLeave', function () {
					page.find('.component').trigger('componentLeave');
				});
				this.page.push(page);
				return this;
			};
	
			this.addComponent = function (name, config) {
				var config = config || {};
				config = $.extend({
					type: 'base'
				}, config);
	
				var component = null;
				switch (config.type) {
					case 'base':
						component = new ComponentBase(name, config);
						break;
					case 'point':
						component = new ComponentBasePoint(name, config);
						break;
					case 'bar':
						component = new ComponentBaseBar(name, config);
						break;
					case 'polyline':
						component = new ComponentPolyline(name, config);
						break;
					case 'pie':
						component = new ComponentPie(name, config);
						break;
					default:
						break;
				}
	
				var page = this.page.slice(-1)[0];
				page.append(component);
				return this;
			};
		};
		return Page;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		var ComponentBase = function ComponentBase(name, config) {
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
					'marginLeft': config.width / 2 * -1 + 'px'
				});
			}
	
			component.on('componentLoad', function () {
				setTimeout(function () {
					component.addClass('component_base_load').removeClass('component_base_leave');
					config.animateIn && component.animate(config.animateIn);
				}, config.delay || 0);
			});
	
			component.on('componentLeave', function () {
				setTimeout(function () {
					component.addClass('component_base_leave').removeClass('component_base_load');
					config.animateOut && component.animate(config.animateOut);
				}, config.delay || 0);
			});
	
			return component;
		};
		return ComponentBase;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ComponentBase) {
		var ComponentBasePoint = function ComponentBasePoint(name, config) {
			var component = new ComponentBase(name, config);
			var base = config.data[0][1];
			$.each(config.data, function (index, item) {
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
					});
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
	
			component.on('componentLoad', function () {
				var that = $(this);
				setTimeout(function () {
					component.addClass('component_base_load').removeClass('component_base_leave');
					config.animateIn && component.animate(config.animateIn);
					$.each(config.data, function (index, item) {
						setTimeout(function () {
							that.find('.point').eq(index).animate({
								left: item[3],
								top: item[4]
							});
						}, 500);
					});
				}, config.delay || 0);
			});
	
			component.on('componentLeave', function () {
				var that = $(this);
				setTimeout(function () {
					component.addClass('component_base_leave').removeClass('component_base_load');
					config.animateOut && component.animate(config.animateOut);
					that.find('.point').css({
						left: 0,
						top: 0
					});
				}, config.delay || 0);
			});
			return component;
		};
		return ComponentBasePoint;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ComponentBase) {
		var ComponentBaseBar = function ComponentBaseBar(name, config) {
			var component = new ComponentBase(name, config),
			    total = 0,
			    max = 0;
	
			component.addClass('component_bar');
			$.each(config.data, function (index, item) {
				total += item[1];
				if (item[1] > max) max = item[1];
			});
	
			$.each(config.data, function (index, item) {
				var container = $('<div class="container">');
				var name = $('<div class="name">');
				name.html(item[0]);
				var bar = $('<div class="bar">');
				bar.css({
					width: item[1] * config.width * 0.6 / max
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
	
				var num = item[1] / total * 100;
				rate.html(num.toFixed(0) + '%');
				container.append(name).append(bar).append(rate);
				component.append(container);
			});
	
			component.on('componentLoad', function () {
				var that = $(this);
				setTimeout(function () {
					component.addClass('component_base_load').removeClass('component_base_leave');
					config.animateIn && component.animate(config.animateIn);
					that.find('.content').animate({
						width: '100%'
					});
					setTimeout(function () {
						that.find('.rate').animate({
							opacity: 1
						});
					}, 500);
				}, config.delay || 0);
			});
	
			component.on('componentLeave', function () {
				var that = $(this);
				setTimeout(function () {
					component.addClass('component_base_leave').removeClass('component_base_load');
					config.animateOut && component.animate(config.animateOut);
					that.find('.content').css({
						width: 0
					});
					that.find('.rate').css({
						opacity: 0
					});
				}, config.delay || 0);
			});
			return component;
		};
		return ComponentBaseBar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ComponentBase) {
		var ComponentPolyline = function ComponentPolyline(name, config) {
	
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
					cxt.lineTo(widthUnit * (i + 1), h * (1 - item[i][1] * percent));
				}
				cxt.stroke();
	
				//填充
				cxt.lineTo(widthUnit * config.data.length, h);
				cxt.lineTo(widthUnit, h);
				cxt.moveTo(widthUnit * 1, h);
				cxt.fillStyle = "rgba(105,149,198,0.5)";
				cxt.fill();
			}
	
			//绘制数字
			component.on('componentLoad', function () {
				var step = 100,
				    j = 0;
	
				setTimeout(function () {
					for (j; j <= step; j++) {
						!function (num) {
							setTimeout(function () {
								var per = num * 0.01;
								drawPolyline(per);
							}, num * 2);
						}(j);
					}
	
					setTimeout(function () {
						cxt.fillStyle = "#000";
						for (i = 0; i < config.data.length; i++) {
							var item = config.data;
							cxt.font = "15px Arial";
							cxt.fillText(item[i][1] * 100 + '%', widthUnit * (i + 1) - 5, h * (1 - item[i][1]) - 10);
							cxt.fillText(item[i][0], widthUnit * (i + 1) - 10, h * (1 - item[i][1]) - 30);
						}
					}, 200);
				}, config.delay);
			});
	
			component.on('componentLeave', function () {
				setTimeout(function () {
					cxt.clearRect(-1, -1, w + 1, h + 1);
				}, 1000);
			});
	
			component.append(canvas);
			return component;
		};
	
		return ComponentPolyline;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ComponentBase) {
		var ComponentPie = function ComponentPie(name, config) {
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
	
			var draw = function draw(per, load) {
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
			};
			draw(0, true);
	
			//文字
			var text = function text() {
				var totalArc = 0;
				for (var i in config.data) {
					var item = config.data[i],
					    name = $('<div class="pie_name">');
					name.text(item[0] + ' ' + item[1] * 100 + '%');
					name.css('color', item[2]);
					totalArc += item[1];
					var left = w / 2 + radius * Math.cos(-totalArc * 2 * Math.PI);
					var top = w / 2 - radius * Math.sin(-totalArc * 2 * Math.PI);
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
			};
			text();
	
			component.on('componentLoad', function () {
				setTimeout(function () {
					component.addClass('component_base_load').removeClass('component_base_leave');
					// var s = 0;
					for (i = 0; i <= 100; i++) {
						!function (i) {
							setTimeout(function () {
								draw(i, true);
							}, i * 10);
						}(i);
					}
					//显示文字
					setTimeout(function () {
						$('.pie_name').each(function (index) {
							$(this).animate({
								'opacity': 1
							});
						});
					}, 1000);
				}, config.delay || 0);
			});
	
			component.on('componentLeave', function () {
				setTimeout(function () {
					component.addClass('component_base_leave').addClass('component_base_load');
					//绘制遮罩层
					draw(0, true);
					// cxt2.beginPath();
					// cxt2.arc(0, 0, radius, 0, 2 * Math.PI);
					// cxt2.fill();
					//文字隐藏
					$('.pie_name').each(function (index) {
						$(this).css({
							'opacity': 0
						});
					});
				}, config.delay || 0);
			});
	
			return component;
		};
		return ComponentPie;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map