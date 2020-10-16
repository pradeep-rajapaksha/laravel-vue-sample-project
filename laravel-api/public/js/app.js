/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /var/www/html/laravel-vue-sample-project/resources/js/app.js: Cannot find module '@babel/parser'\nRequire stack:\n- /var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/index.js\n- /var/www/html/laravel-vue-sample-project/node_modules/laravel-mix/src/FileCollection.js\n- /var/www/html/laravel-vue-sample-project/node_modules/laravel-mix/src/tasks/ConcatenateFilesTask.js\n- /var/www/html/laravel-vue-sample-project/node_modules/laravel-mix/src/components/Combine.js\n- /var/www/html/laravel-vue-sample-project/node_modules/laravel-mix/src/components/ComponentFactory.js\n- /var/www/html/laravel-vue-sample-project/node_modules/laravel-mix/setup/webpack.config.js\n- /var/www/html/laravel-vue-sample-project/node_modules/webpack-cli/bin/utils/convert-argv.js\n- /var/www/html/laravel-vue-sample-project/node_modules/webpack-cli/bin/cli.js\n- /var/www/html/laravel-vue-sample-project/node_modules/webpack/bin/webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:1085:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:928:27)\n    at Module.require (internal/modules/cjs/loader.js:1145:19)\n    at require (/var/www/html/laravel-vue-sample-project/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at _parser (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/index.js:205:16)\n    at Object.get [as tokTypes] (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/index.js:46:12)\n    at Function.assign (<anonymous>)\n    at /var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/config/full.js:196:24\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/gensync-utils/async.js:26:3)\n    at Generator.next (<anonymous>)\n    at step (/var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:254:32)\n    at evaluateAsync (/var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:284:5)\n    at Function.errback (/var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:108:7)\n    at errback (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/gensync-utils/async.js:70:18)\n    at async (/var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:183:31)\n    at onFirstPause (/var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:209:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/config/caching.js:68:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPluginDescriptor (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/config/full.js:235:42)\n    at loadPluginDescriptor.next (<anonymous>)\n    at recurseDescriptors (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/config/full.js:88:33)\n    at recurseDescriptors.next (<anonymous>)\n    at loadFullConfig (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/config/full.js:142:6)\n    at loadFullConfig.next (<anonymous>)\n    at Function.transform (/var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/transform.js:25:45)\n    at transform.next (<anonymous>)\n    at step (/var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:262:25)\n    at /var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:216:11)\n    at /var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:184:28\n    at /var/www/html/laravel-vue-sample-project/node_modules/@babel/core/lib/gensync-utils/async.js:72:7\n    at /var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:108:33\n    at step (/var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:280:14)\n    at /var/www/html/laravel-vue-sample-project/node_modules/gensync/index.js:266:13");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n8 │ @import '~bootstrap/scss/bootstrap';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  /var/www/html/laravel-vue-sample-project/resources/sass/app.scss 8:9  root stylesheet\n    at /var/www/html/laravel-vue-sample-project/node_modules/webpack/lib/NormalModule.js:316:20\n    at /var/www/html/laravel-vue-sample-project/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /var/www/html/laravel-vue-sample-project/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/var/www/html/laravel-vue-sample-project/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at /var/www/html/laravel-vue-sample-project/node_modules/sass-loader/dist/index.js:73:7\n    at Function.call$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:89281:16)\n    at _render_closure1.call$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:78489:12)\n    at _RootZone.runBinary$3$3 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:26472:18)\n    at _FutureListener.handleError$1 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25000:19)\n    at _Future__propagateToListeners_handleError.call$0 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25297:49)\n    at Object._Future__propagateToListeners (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:4489:77)\n    at _Future._completeError$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25130:9)\n    at _AsyncAwaitCompleter.completeError$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:24473:12)\n    at Object._asyncRethrow (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:4238:17)\n    at /var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:13081:20\n    at _wrapJsFunctionForAsync_closure.$protected (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:4263:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:24494:12)\n    at _awaitOnObject_closure0.call$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:24486:25)\n    at _RootZone.runBinary$3$3 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:26472:18)\n    at _FutureListener.handleError$1 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25000:19)\n    at _Future__propagateToListeners_handleError.call$0 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25297:49)\n    at Object._Future__propagateToListeners (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:4489:77)\n    at _Future._completeError$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25130:9)\n    at _AsyncAwaitCompleter.completeError$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:24473:12)\n    at Object._asyncRethrow (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:4238:17)\n    at /var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:15723:20\n    at _wrapJsFunctionForAsync_closure.$protected (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:4263:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:24494:12)\n    at _awaitOnObject_closure0.call$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:24486:25)\n    at _RootZone.runBinary$3$3 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:26472:18)\n    at _FutureListener.handleError$1 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25000:19)\n    at _Future__propagateToListeners_handleError.call$0 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25297:49)\n    at Object._Future__propagateToListeners (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:4489:77)\n    at _Future._completeError$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:25130:9)\n    at _AsyncAwaitCompleter.completeError$2 (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:24473:12)\n    at Object._asyncRethrow (/var/www/html/laravel-vue-sample-project/node_modules/sass/sass.dart.js:4238:17)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/laravel-vue-sample-project/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /var/www/html/laravel-vue-sample-project/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });