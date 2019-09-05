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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/email/email.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email/email.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <form class = \"userForm\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n    <label>\n      <div class=\"field\">Email:</div>\n      <input matInput class=\"value\" type=\"email\" formControlName=\"email\">\n    </label>\n    <label>\n      <div class=\"field\">Comments:</div>\n      <input matInput class=\"value\" type=\"text\" formControlName=\"comments\">\n    </label>\n    <button mat-raised-button type=\"submit\" [disabled]=\"!userForm.valid\">Sign Up!</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/necklace/error_dialog.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/necklace/error_dialog.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>An Error occurred</h1>\n<div mat-dialog-content>\n  <p>{{data.message}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">OK</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/necklace/necklace.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/necklace/necklace.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"toolbar\">Nafaria</mat-toolbar>\n<div class=\"call\">\n  <img src=\"assets/woman.jpg\">\n  <div id=\"call-content\">\n    <h1>Wear Necklaces at home</h1>\n    <h2>Try before you buy</h2>\n  </div>\n</div>\n<mat-grid-list class=\"info\" cols=\"3\" rowHeight=\"15vw\">\n  <mat-grid-tile>\n    <div>\n      <a href=\"#necklace-options\"><h1>Choose</h1></a>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <div>\n      <a href=\"#necklace-options\"><h1>Wear</h1></a>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <div>\n      <a href=\"#necklace-options\"><h1>Buy</h1></a>\n    </div>\n  </mat-grid-tile>\n</mat-grid-list>\n<div class=\"pane\">\n  <mat-accordion>\n    <mat-vertical-stepper (selectionChange)=\"stepperChange($event)\" linear=true  #stepper >\n      <mat-step label=\"Select Necklace\">\n        <mat-radio-group id=\"necklace-options\" (change)=\"selectionChange($event)\">\n          <div class=\"necklace-pic\">\n            <img src=\"assets/necklace-collection/1.jpg\">\n            <mat-radio-button value=\"1\" [checked]=true></mat-radio-button>\n          </div>\n          <div class=\"necklace-pic\">\n            <img src=\"assets/necklace-collection/2.jpg\">\n            <mat-radio-button value=\"2\"></mat-radio-button>\n          </div>\n          <div class=\"necklace-pic\">\n            <img src=\"assets/necklace-collection/3.jpg\">\n            <mat-radio-button value=\"3\"></mat-radio-button>\n          </div>\n        </mat-radio-group>\n      </mat-step>\n      <mat-step label=\"Snap photo\">\n        <div *ngIf=\"record\">\n          <div id=\"instructions\">\n            <p>* We <b style=\"color:red;\">DO NOT</b>  store the video stream from your camera. It is solely used for clicking a picture.</p>\n            <p>* We <b style=\"color:red;\">DO NOT</b> store the captured picture.</p>\n            <h3>* For <b style=\"color:blue;\">BEST</b> results, look straight at the camera with your <b style=\"color:blue;\">NECK VISIBLE</b> and <b style=\"color:blue;\">WELL LIT</b> sorroundings. And make sure to smile. :)</h3>\n          </div>\n          <video #video id=\"video\" width=\"videoWidth\" height=\"videoHeight\" autoplay muted playsinline [style.margin-left.px]=\"innerWidth\"></video>\n          <button id=\"capture-btn\" mat-raised-button (click)=\"capture()\" matStepperNext>Capture</button>\n        </div>\n      </mat-step>\n      <mat-step label=\"Results!\">\n        <div class=\"progressBar\" *ngIf=\"loading\"><mat-progress-bar mode=\"indeterminate\"></mat-progress-bar></div>\n        <div id=\"results\"  *ngIf=\"downloadPic\">\n          <div id=\"result-canvas\">\n            <canvas #canvas width=\"480\" height=\"640\"></canvas>\n            <button mat-raised-button (click)=\"download()\">Download</button>\n          </div>\n        </div>\n      </mat-step>\n    </mat-vertical-stepper>\n  </mat-accordion>\n  <div id=\"final-msg\">\n    <div id=\"user-text\">\n      <h2>Interested in learning more?</h2>\n      <h2>Leave your email and any comments or feedback.</h2>\n      <h2>Stay tuned!</h2>\n    </div>\n    <user-details (formSubmit)=\"onSignUp($event)\"></user-details>\n  </div>\n</div>\n<mat-toolbar id=\"privacy-policy\">\n  <a href=\"https://app.termly.io/document/privacy-policy/67f50e31-f977-48f9-bc9c-cb93c19eb75f\" target=\"_blank\">Privacy Policy</a>\n  <p>Copyright &copy; 2019, Nafaria</p>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _necklace_necklace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./necklace/necklace.component */ "./src/app/necklace/necklace.component.ts");




const routes = [
    { path: '', component: _necklace_necklace_component__WEBPACK_IMPORTED_MODULE_3__["NecklaceComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'addarsh-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _necklace_necklace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./necklace/necklace.component */ "./src/app/necklace/necklace.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _necklace_error_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./necklace/error_dialog */ "./src/app/necklace/error_dialog.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _necklace_necklace_component__WEBPACK_IMPORTED_MODULE_5__["NecklaceComponent"],
            _necklace_error_dialog__WEBPACK_IMPORTED_MODULE_12__["ErrorDialogComponent"],
            _email_email_component__WEBPACK_IMPORTED_MODULE_13__["EmailComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_necklace_error_dialog__WEBPACK_IMPORTED_MODULE_12__["ErrorDialogComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/email/email.component.css":
/*!*******************************************!*\
  !*** ./src/app/email/email.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.userForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: 2% 2% 0 2%;\n}\n\nlabel {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-bottom: 5%;\n}\n\n.field {\n  width: 30%;\n  line-height: 2vw;\n  font-size: 1.2vw;\n}\n\n.value {\n  height: 2vw;\n  width: 70%;\n  font-size: 1.2vw;\n}\n\nbutton {\n  color: #ffffff;\n  background-color: #1C1C1BFF;\n  font-size: 1.2vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwvZW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZW1haWwvZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi51c2VyRm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW46IDIlIDIlIDAgMiU7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmZpZWxkIHtcbiAgd2lkdGg6IDMwJTtcbiAgbGluZS1oZWlnaHQ6IDJ2dztcbiAgZm9udC1zaXplOiAxLjJ2dztcbn1cblxuLnZhbHVlIHtcbiAgaGVpZ2h0OiAydnc7XG4gIHdpZHRoOiA3MCU7XG4gIGZvbnQtc2l6ZTogMS4ydnc7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMxQzFCRkY7XG4gIGZvbnQtc2l6ZTogMS4ydnc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let EmailComponent = class EmailComponent {
    constructor() {
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    onSubmit() {
        this.formSubmit.emit({
            email: this.userForm.value.email,
            comments: this.userForm.value.comments,
        });
        this.userForm.reset();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EmailComponent.prototype, "formSubmit", void 0);
EmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-details',
        template: __webpack_require__(/*! raw-loader!./email.component.html */ "./node_modules/raw-loader/index.js!./src/app/email/email.component.html"),
        styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/email/email.component.css")]
    })
], EmailComponent);



/***/ }),

/***/ "./src/app/necklace/error_dialog.ts":
/*!******************************************!*\
  !*** ./src/app/necklace/error_dialog.ts ***!
  \******************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ErrorDialogComponent = class ErrorDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    close() {
        this.dialogRef.close();
    }
};
ErrorDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ErrorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error-dialog',
        template: __webpack_require__(/*! raw-loader!./error_dialog.html */ "./node_modules/raw-loader/index.js!./src/app/necklace/error_dialog.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ErrorDialogComponent);



/***/ }),

/***/ "./src/app/necklace/necklace.component.css":
/*!*************************************************!*\
  !*** ./src/app/necklace/necklace.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#toolbar{\n  background: #CE4A7EFF;\n  color: #1C1C1BFF;\n  font-family: cursive;\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.call {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background: #1C1C1BFF;\n}\n\n.call img {\n  width: 500px;\n  height: auto;\n}\n\n#call-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n#call-content h1 {\n  color: #CE4A7EFF;\n  text-align: center;\n  margin-top: 80px;\n}\n\n#call-content h2 {\n  color: #ffffff;\n  margin-top: 0;\n  font-family: cursive;\n}\n\n/* For mobile screen */\n\n@media (max-width: 500px) {\n  #call-content h1 {\n    font-size: 42px;\n  }\n\n  #call-content h2 {\n    font-size: 24px;\n  }\n\n  mat-grid-tile h1 {\n    font-size: 32px;\n  }\n\n  .pane {\n    width: 100vw;\n  }\n}\n\n/* For big screen */\n\n@media (min-width: 500px) {\n  #call-content h1 {\n    font-size: 52px;\n  }\n\n  #call-content h2 {\n    font-size: 30px;\n  }\n\n  mat-grid-tile h1 {\n    font-size: 42px;\n  }\n\n  .pane {\n    width: 80vw;\n    margin-left: 10vw;\n    margin-right: 10vw;\n  }\n}\n\nmat-grid-tile{\n  margin-top: 30px;\n}\n\nmat-grid-tile h1 {\n  font-family:cursive;\n  color: #CE4A7EFF;\n}\n\nmat-grid-tile a {\n  text-decoration: none;\n}\n\nmat-grid-tile div {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.pane {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin-top: 60px;\n}\n\nmat-radio-group {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.necklace-pic {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.necklace-pic img {\n  width: 320px;\n  height: auto;\n}\n\nmat-radio-button {\n  margin-top: 1.5vw;\n}\n\n#instructions {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 2vw;\n}\n\n#instructions p {\n  font-size: 1vw;\n  margin-top: 1vw;\n  margin-bottom: 0;\n}\n\n#capture-btn {\n  width: 100%;\n}\n\n#video {\n  background-color: #000000;\n}\n\nbutton {\n  background-color: #d97289;\n}\n\n#results {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#result-canvas {\n  display: flex;\n  flex-direction: column;\n}\n\nmat-accordion {\n  margin-bottom: 5vw;\n}\n\n/* For mobile screen */\n\n@media (max-width: 500px) {\n  #final-msg {\n    display: flex;\n    flex-direction: row;\n    width: 90vw;\n    margin-left: 5vw;\n    margin-right: 5vw;\n  }\n}\n\n/* For big screen */\n\n@media (min-width: 500px) {\n  #final-msg {\n    display: flex;\n    flex-direction: row;\n  }\n}\n\n.pane h2 {\n  color: #CE4A7EFF;\n  font-size: 1.7vw;\n}\n\nuser-details{\n  margin-left: 5vw;\n  flex: 1 1 auto;\n}\n\n#privacy-policy {\n  margin-top: 5vh;\n  height: 5vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#privacy-policy a {\n  text-decoration: none;\n  font-size: 1vw;\n  color: #1C1C1BFF;\n}\n\n#privacy-policy p {\n  text-decoration: none;\n  font-size: 1vw;\n  color: #1C1C1BFF;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVja2xhY2UvbmVja2xhY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVDO0VBQ0MscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uZWNrbGFjZS9uZWNrbGFjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Rvb2xiYXJ7XG4gIGJhY2tncm91bmQ6ICNDRTRBN0VGRjtcbiAgY29sb3I6ICMxQzFDMUJGRjtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5jYWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMUMxQzFCRkY7XG59XG5cbi5jYWxsIGltZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jY2FsbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY2FsbC1jb250ZW50IGgxIHtcbiAgY29sb3I6ICNDRTRBN0VGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4jY2FsbC1jb250ZW50IGgyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuXG4vKiBGb3IgbW9iaWxlIHNjcmVlbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICNjYWxsLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgfVxuXG4gICNjYWxsLWNvbnRlbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIG1hdC1ncmlkLXRpbGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuXG4gIC5wYW5lIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbn1cblxuLyogRm9yIGJpZyBzY3JlZW4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAjY2FsbC1jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDUycHg7XG4gIH1cblxuICAjY2FsbC1jb250ZW50IGgyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICBtYXQtZ3JpZC10aWxlIGgxIHtcbiAgICBmb250LXNpemU6IDQycHg7XG4gIH1cblxuICAucGFuZSB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xuICB9XG59XG5cbm1hdC1ncmlkLXRpbGV7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbm1hdC1ncmlkLXRpbGUgaDEge1xuICBmb250LWZhbWlseTpjdXJzaXZlO1xuICBjb2xvcjogI0NFNEE3RUZGO1xufVxuXG5tYXQtZ3JpZC10aWxlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbm1hdC1ncmlkLXRpbGUgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFuZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG5tYXQtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm5lY2tsYWNlLXBpYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5uZWNrbGFjZS1waWMgaW1nIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxLjV2dztcbn1cblxuI2luc3RydWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMnZ3O1xufVxuXG4jaW5zdHJ1Y3Rpb25zIHAge1xuICBmb250LXNpemU6IDF2dztcbiAgbWFyZ2luLXRvcDogMXZ3O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jY2FwdHVyZS1idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3ZpZGVvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NzI4OTtcbn1cblxuI3Jlc3VsdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcmVzdWx0LWNhbnZhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1hdC1hY2NvcmRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1dnc7XG59XG5cbi8qIEZvciBtb2JpbGUgc2NyZWVuICovXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2ZpbmFsLW1zZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gIH1cbn1cblxuLyogRm9yIGJpZyBzY3JlZW4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAjZmluYWwtbXNnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cblxuLnBhbmUgaDIge1xuICBjb2xvcjogI0NFNEE3RUZGO1xuICBmb250LXNpemU6IDEuN3Z3O1xufVxuXG51c2VyLWRldGFpbHN7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4jcHJpdmFjeS1wb2xpY3kge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGhlaWdodDogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNwcml2YWN5LXBvbGljeSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDF2dztcbiAgY29sb3I6ICMxQzFDMUJGRjtcbn1cblxuICNwcml2YWN5LXBvbGljeSBwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDF2dztcbiAgY29sb3I6ICMxQzFDMUJGRjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/necklace/necklace.component.ts":
/*!************************************************!*\
  !*** ./src/app/necklace/necklace.component.ts ***!
  \************************************************/
/*! exports provided: NecklaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NecklaceComponent", function() { return NecklaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _error_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error_dialog */ "./src/app/necklace/error_dialog.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");






const ERR_STR = "Sorry! Couldn't fit the necklace. Things you can try: " +
    "1. Improve lighting conditions " +
    "2. Make the neck more visible " +
    "3. Try to be in the middle of the picture.";
const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
};
const quadratic = (x) => {
    return -1.2939465 * Math.pow(10, -4) * x * x + 0.70246836 * x - 799.33031;
};
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
const parseURL = (url) => {
    return url.split("/").slice(0, 3).join("/");
};
let NecklaceComponent = class NecklaceComponent {
    constructor(changeDetectorRef, http, dialog, _snackBar) {
        this.changeDetectorRef = changeDetectorRef;
        this.http = http;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.record = false;
        this.loading = false;
        this.downloadPic = false;
        this.innerWidth = 0;
        this.selectedNecklace = "";
        this.imageURL = "";
        this.signUpURL = "";
        this.videoWidth = 0;
        this.videoHeight = 0;
        this.mobileScreen = false;
        this.record = false;
        this.loading = false;
        this.downloadPic = false;
        this.selectedNecklace = "1";
        this.imageURL = parseURL(window.location.href) + "/demo/upload/";
        this.signUpURL = parseURL(window.location.href) + "/demo/signup/";
    }
    ngOnInit() {
        if (!isMobile()) {
            this.videoWidth = 1280;
            this.videoHeight = 720;
            this.innerWidth = quadratic(window.innerWidth);
            this.mobileScreen = true;
        }
        else {
            this.videoWidth = 640;
            this.videoHeight = 640;
            this.innerWidth = -(window.innerWidth - 180);
        }
    }
    onResize(event) {
        if (!this.mobileScreen) {
            this.innerWidth = quadratic(window.innerWidth);
        }
    }
    enableDemo() {
        this.downloadPic = false;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "user",
                    width: { ideal: this.videoWidth },
                    height: { ideal: this.videoHeight },
                },
            }).then(stream => {
                this.record = true;
                this.changeDetectorRef.detectChanges();
                this.video.nativeElement.srcObject = stream;
            }).catch((err) => { this.showError("Error in access to camera: " + err.toString()); });
        }
    }
    disableDemo() {
        if (this.video) {
            this.video.nativeElement.srcObject.getVideoTracks().forEach(track => track.stop());
        }
        this.record = false;
    }
    getCSRFToken(resp) {
        const parser = new DOMParser();
        const xmldoc = parser.parseFromString(resp, "text/xml");
        const csrfToken = xmldoc.getElementsByTagName("input")[0].getAttribute("value");
        return csrfToken;
    }
    capture() {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 480;
        tempCanvas.height = 640;
        tempCanvas.getContext("2d").drawImage(this.video.nativeElement, (this.videoWidth - 480) / 2, 0, 480, 640, 0, 0, 480, 640);
        this.disableDemo();
        this.loading = true;
        this.http.get(this.imageURL, { responseType: 'text' }).subscribe(resp => {
            const HTTP_OPTIONS = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-CSRFToken': this.getCSRFToken(resp),
                }),
            };
            this.http.post(this.imageURL, {
                "necklace": this.selectedNecklace,
                "data": tempCanvas.toDataURL("image/png"),
            }, HTTP_OPTIONS)
                .subscribe(resp => {
                this.loading = false;
                if (resp["data"] === "") {
                    this.showError(ERR_STR);
                    return;
                }
                this.downloadPic = true;
                const checkCanvas = setInterval(() => {
                    var ctx = this.canvas.nativeElement.getContext("2d");
                    var img = new Image();
                    img.onload = function () {
                        ctx.drawImage(img, 0, 0);
                    };
                    const blob = b64toBlob(resp["data"], "image/png");
                    img.src = URL.createObjectURL(blob);
                    clearInterval(checkCanvas);
                }, 100);
            }, err => {
                this.loading = false;
                this.showError(ERR_STR);
            });
        }, err => {
            this.loading = false;
            this.showError(ERR_STR);
        });
    }
    download() {
        const link = document.createElement('a');
        link.download = "virtual_necklace.png";
        link.href = this.canvas.nativeElement.toDataURL('image/png').replace("image/png", "image/octet-stream");
        link.click();
    }
    showError(err) {
        const dialogRef = this.dialog.open(_error_dialog__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogComponent"], {
            width: '600vw',
            data: { message: err },
        });
    }
    stepperChange(event) {
        if (event.selectedIndex == 1) {
            this.enableDemo();
        }
        else {
            this.disableDemo();
        }
    }
    selectionChange(event) {
        this.selectedNecklace = event.value;
    }
    onSignUp(event) {
        this.http.get(this.signUpURL, { responseType: 'text' }).subscribe(resp => {
            const HTTP_OPTIONS = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/x-www-form-urlencode',
                    'X-CSRFToken': this.getCSRFToken(resp),
                }),
            };
            this.http.post(this.signUpURL, event, HTTP_OPTIONS)
                .subscribe(resp => {
                this._snackBar.open("Successfully signed up!", "", {
                    duration: 7000,
                });
            }, err => {
                this.showError(err.error);
            });
        });
    }
};
NecklaceComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("video", { static: false })
], NecklaceComponent.prototype, "video", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvas", { static: false })
], NecklaceComponent.prototype, "canvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], NecklaceComponent.prototype, "onResize", null);
NecklaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'necklace-demo',
        template: __webpack_require__(/*! raw-loader!./necklace.component.html */ "./node_modules/raw-loader/index.js!./src/app/necklace/necklace.component.html"),
        styles: [__webpack_require__(/*! ./necklace.component.css */ "./src/app/necklace/necklace.component.css")]
    })
], NecklaceComponent);



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
const environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/addarsh/virtualenvs/eb-necklace/necklace/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map