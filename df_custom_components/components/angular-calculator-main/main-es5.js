(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-calculator></app-calculator>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/calculator/calculator.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calculator/calculator.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calculator\">\n\n  <input type=\"text\" class=\"calculator-screen\" [value]=\"currentNumber\" disabled />\n  \n  <div class=\"calculator-keys\">\n    \n    <button type=\"button\" (click) = \"getOperation('+')\" class=\"operator\" value=\"+\">+</button>\n    <button type=\"button\" (click) = \"getOperation('-')\" class=\"operator\" value=\"-\">-</button>\n    <button type=\"button\" (click) = \"getOperation('*')\" class=\"operator\" value=\"*\">&times;</button>\n    <button type=\"button\" (click) = \"getOperation('/')\" class=\"operator\" value=\"/\">&divide;</button>\n\n    <button type=\"button\" (click) = \"getNumber('7')\" value=\"7\">7</button>\n    <button type=\"button\" (click) = \"getNumber('8')\" value=\"8\">8</button>\n    <button type=\"button\" (click) = \"getNumber('9')\" value=\"9\">9</button>\n\n\n    <button type=\"button\" (click) = \"getNumber('4')\" value=\"4\">4</button>\n    <button type=\"button\" (click) = \"getNumber('5')\" value=\"5\">5</button>\n    <button type=\"button\" (click) = \"getNumber('6')\" value=\"6\">6</button>\n\n\n    <button type=\"button\" (click) = \"getNumber('1')\" value=\"1\">1</button>\n    <button type=\"button\" (click) = \"getNumber('2')\" value=\"2\">2</button>\n    <button type=\"button\" (click) = \"getNumber('3')\" value=\"3\">3</button>\n\n\n    <button type=\"button\" (click) = \"getNumber('0')\" value=\"0\">0</button>\n    <button type=\"button\" (click) = \"getDecimal()\" class=\"decimal\" value=\".\">.</button>\n    <button type=\"button\" (click) = \"clear()\"  class=\"all-clear\" value=\"all-clear\">AC</button>\n\n    <button type=\"button\" (click) = \"getOperation('=')\" class=\"equal-sign\" value=\"=\">=</button>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngcalculator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calculator {\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 400px;\n  }\n  \n  .calculator-screen {\n    width: 100%;\n    font-size: 5rem;\n    height: 80px;\n    border: none;\n    background-color: #252525;\n    color: #fff;\n    text-align: right;\n    padding-right: 20px;\n    padding-left: 10px;\n  }\n  \n  button {\n    height: 60px;\n    background-color: #fff;\n    border-radius: 3px;\n    border: 1px solid #c4c4c4;\n    background-color: transparent;\n    font-size: 2rem;\n    color: #333;\n    background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));\n    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);\n    text-shadow: 0 1px rgba(255,255,255,.4);\n  }\n  \n  button:hover {\n    background-color: #eaeaea;\n  }\n  \n  .operator {\n    color: #337cac;\n  }\n  \n  .all-clear {\n    background-color: #f0595f;\n    border-color: #b0353a;\n    color: #fff;\n  }\n  \n  .all-clear:hover {\n    background-color: #f17377;\n  }\n  \n  .equal-sign {\n    background-color: #2e86c0;\n    border-color: #337cac;\n    color: #fff;\n    height: 100%;\n    grid-area: 2 / 4 / 6 / 5;\n  }\n  \n  .equal-sign:hover {\n    background-color: #4e9ed4;\n  }\n  \n  .calculator-keys {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 20px;\n    padding: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixXQUFXO0lBQ1gsd0ZBQXdGO0lBQ3hGLGlLQUFpSztJQUNqSyx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsY3VsYXRvciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC5jYWxjdWxhdG9yLXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCA1MCUscmdiYSgwLDAsMCwuMDQpKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMDUpLCBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwuNDUpLCBpbnNldCAwIC0xcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgMCAxcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsLjE1KTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNCk7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgfVxuICBcbiAgLm9wZXJhdG9yIHtcbiAgICBjb2xvcjogIzMzN2NhYztcbiAgfVxuICBcbiAgLmFsbC1jbGVhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNTk1ZjtcbiAgICBib3JkZXItY29sb3I6ICNiMDM1M2E7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5hbGwtY2xlYXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTczNzc7XG4gIH1cbiAgXG4gIC5lcXVhbC1zaWduIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU4NmMwO1xuICAgIGJvcmRlci1jb2xvcjogIzMzN2NhYztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC1hcmVhOiAyIC8gNCAvIDYgLyA1O1xuICB9XG4gIFxuICAuZXF1YWwtc2lnbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlOWVkNDtcbiAgfVxuICBcbiAgLmNhbGN1bGF0b3Ita2V5cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent.prototype.getNumber = function (v) {
        console.log(v);
        if (this.waitForSecondNumber) {
            this.currentNumber = v;
            this.waitForSecondNumber = false;
        }
        else {
            this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
        }
    };
    CalculatorComponent.prototype.getDecimal = function () {
        if (!this.currentNumber.includes('.')) {
            this.currentNumber += '.';
        }
    };
    CalculatorComponent.prototype.doCalculation = function (op, secondOp) {
        switch (op) {
            case '+':
                return this.firstOperand += secondOp;
            case '-':
                return this.firstOperand -= secondOp;
            case '*':
                return this.firstOperand *= secondOp;
            case '/':
                return this.firstOperand /= secondOp;
            case '=':
                return secondOp;
        }
    };
    CalculatorComponent.prototype.getOperation = function (op) {
        console.log(op);
        if (this.firstOperand === null) {
            this.firstOperand = Number(this.currentNumber);
        }
        else if (this.operator) {
            var result = this.doCalculation(this.operator, Number(this.currentNumber));
            this.currentNumber = String(result);
            this.firstOperand = result;
        }
        this.operator = op;
        this.waitForSecondNumber = true;
        console.log(this.firstOperand);
    };
    CalculatorComponent.prototype.clear = function () {
        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
    };
    CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/index.js!./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/youssef.cherradou/Desktop/angular-components-main/components/angular-calculator-main/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map