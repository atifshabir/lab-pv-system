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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_desktop_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/desktop/main/main.component */ "./src/app/components/desktop/main/main.component.ts");
/* harmony import */ var _components_mobile_mobile_main_mobile_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mobile/mobile-main/mobile-main.component */ "./src/app/components/mobile/mobile-main/mobile-main.component.ts");






const routes = [
    { path: '', redirectTo: 'pc-frontend', pathMatch: 'full' },
    { path: 'pc-frontend', component: _components_desktop_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'mobile-frontend', component: _components_mobile_mobile_main_mobile_main_component__WEBPACK_IMPORTED_MODULE_3__["MobileMainComponent"] },
    { path: 'pc-frontend/:lat/:lon/:zoom', component: _components_desktop_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'mobile-frontend/:lat/:lon/:zoom', component: _components_mobile_mobile_main_mobile_main_component__WEBPACK_IMPORTED_MODULE_3__["MobileMainComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'lab-pv-system';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_desktop_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/desktop/main/main.component */ "./src/app/components/desktop/main/main.component.ts");
/* harmony import */ var _components_desktop_main_map_panel_map_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/desktop/main/map-panel/map-panel.component */ "./src/app/components/desktop/main/map-panel/map-panel.component.ts");
/* harmony import */ var _components_desktop_main_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/desktop/main/information-panel/information-panel.component */ "./src/app/components/desktop/main/information-panel/information-panel.component.ts");
/* harmony import */ var _components_desktop_main_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/desktop/main/control-panel/control-panel.component */ "./src/app/components/desktop/main/control-panel/control-panel.component.ts");
/* harmony import */ var _components_mobile_mobile_main_mobile_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mobile/mobile-main/mobile-main.component */ "./src/app/components/mobile/mobile-main/mobile-main.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_mobile_mobile_main_my_id_my_id_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mobile/mobile-main/my-id/my-id.component */ "./src/app/components/mobile/mobile-main/my-id/my-id.component.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp({
                apiKey: "AIzaSyBPjGl2gNhiKKSYPHszXhKVorueDEwYyMg",
                authDomain: "lab-pv-system.firebaseapp.com",
                databaseURL: "https://lab-pv-system.firebaseio.com",
                projectId: "lab-pv-system",
                storageBucket: "lab-pv-system.appspot.com",
                messagingSenderId: "848306702179",
                appId: "1:848306702179:web:d4c90eea4ea8872190b556",
                measurementId: "G-2WLXSWS08K"
            }),
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_desktop_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _components_desktop_main_map_panel_map_panel_component__WEBPACK_IMPORTED_MODULE_7__["MapPanelComponent"],
        _components_desktop_main_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_8__["InformationPanelComponent"],
        _components_desktop_main_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_9__["ControlPanelComponent"],
        _components_mobile_mobile_main_mobile_main_component__WEBPACK_IMPORTED_MODULE_10__["MobileMainComponent"],
        _components_mobile_mobile_main_my_id_my_id_component__WEBPACK_IMPORTED_MODULE_16__["MyIdComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
        angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_desktop_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                    _components_desktop_main_map_panel_map_panel_component__WEBPACK_IMPORTED_MODULE_7__["MapPanelComponent"],
                    _components_desktop_main_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_8__["InformationPanelComponent"],
                    _components_desktop_main_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_9__["ControlPanelComponent"],
                    _components_mobile_mobile_main_mobile_main_component__WEBPACK_IMPORTED_MODULE_10__["MobileMainComponent"],
                    _components_mobile_mobile_main_my_id_my_id_component__WEBPACK_IMPORTED_MODULE_16__["MyIdComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp({
                        apiKey: "AIzaSyBPjGl2gNhiKKSYPHszXhKVorueDEwYyMg",
                        authDomain: "lab-pv-system.firebaseapp.com",
                        databaseURL: "https://lab-pv-system.firebaseio.com",
                        projectId: "lab-pv-system",
                        storageBucket: "lab-pv-system.appspot.com",
                        messagingSenderId: "848306702179",
                        appId: "1:848306702179:web:d4c90eea4ea8872190b556",
                        measurementId: "G-2WLXSWS08K"
                    }),
                    angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                    angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/desktop/main/control-panel/control-panel.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/desktop/main/control-panel/control-panel.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ControlPanelComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ControlPanelComponent.ɵfac = function ControlPanelComponent_Factory(t) { return new (t || ControlPanelComponent)(); };
ControlPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlPanelComponent, selectors: [["app-control-panel"]], decls: 5, vars: 0, consts: [[1, "card", "ml-1", "my-pattern", 2, "position", "absolute", "top", "0", "right", "0", "bottom", "0", "left", "0"], ["cpanel", ""], [1, "card-body"], [2, "background-color", "LightSteelBlue"]], template: function ControlPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Control Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".my-pattern[_ngcontent-%COMP%]{\r\n    background-color: LightSteelBlue;\r\n    background-position: 0 0, 6px 6px;\r\n    background-size: 12px 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL21haW4vY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVza3RvcC9tYWluL2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXBhdHRlcm57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBMaWdodFN0ZWVsQmx1ZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgNnB4IDZweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTJweCAxMnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-control-panel',
                templateUrl: './control-panel.component.html',
                styleUrls: ['./control-panel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/desktop/main/information-panel/information-panel.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/desktop/main/information-panel/information-panel.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InformationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPanelComponent", function() { return InformationPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/serrvices/data.service */ "./src/app/serrvices/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function InformationPanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select House or PV to view details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InformationPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Patrol-Vehicle Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InformationPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PV-ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LAB-ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LAB ORDER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.dataService.selectedPv.PV_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.dataService.selectedPv.LAB_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.dataService.selectedPv.LAB_order);
} }
function InformationPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "House Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InformationPanelComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "HSS-ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sub-Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Building");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Floor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PR1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PR2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "DR1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "DR2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.LAB_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.City);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.Area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.Phase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.St);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.S_ST);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.Building);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.Floor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.PR1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.PR2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.DR1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.DR2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.dataService.selectedLabMachine.SS);
} }
class InformationPanelComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
}
InformationPanelComponent.ɵfac = function InformationPanelComponent_Factory(t) { return new (t || InformationPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
InformationPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationPanelComponent, selectors: [["app-information-panel"]], decls: 8, vars: 5, consts: [[1, "card"], ["ipanel", ""], [1, "card-body", 2, "background-color", "DarkCyan"], ["style", "background-color:DarkCyan;", 4, "ngIf"], ["class", "row", 4, "ngIf"], [2, "background-color", "DarkCyan"], [2, "color", "FloralWhite"], [1, "row"], ["machineInfo", ""], [1, "col-12"], [1, "table-responsive"], [1, "table", "table-sm", "table-dark"], ["scope", "col"]], template: function InformationPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InformationPanelComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InformationPanelComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InformationPanelComponent_div_5_Template, 21, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InformationPanelComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InformationPanelComponent_div_7_Template, 60, 13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.infoPresent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.infoPresent && ctx.dataService.pvInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.infoPresent && ctx.dataService.pvInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.infoPresent && ctx.dataService.labMachineInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.infoPresent && ctx.dataService.labMachineInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVza3RvcC9tYWluL2luZm9ybWF0aW9uLXBhbmVsL2luZm9ybWF0aW9uLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-information-panel',
                templateUrl: './information-panel.component.html',
                styleUrls: ['./information-panel.component.css']
            }]
    }], function () { return [{ type: src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/desktop/main/main.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/desktop/main/main.component.ts ***!
  \***********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/serrvices/data.service */ "./src/app/serrvices/data.service.ts");
/* harmony import */ var _information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information-panel/information-panel.component */ "./src/app/components/desktop/main/information-panel/information-panel.component.ts");
/* harmony import */ var _map_panel_map_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-panel/map-panel.component */ "./src/app/components/desktop/main/map-panel/map-panel.component.ts");
/* harmony import */ var _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-panel/control-panel.component */ "./src/app/components/desktop/main/control-panel/control-panel.component.ts");






class MainComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 9, vars: 0, consts: [[2, "background-color", "black"], [1, "row", "no-gutters", "p-1"], [1, "col-12"], [1, "row", "no-gutters", "p-1", 2, "height", "560px"], [1, "col-lg-11", "col-md-7"], [1, "col-lg-1", "col-md-5"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-information-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-map-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-control-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_2__["InformationPanelComponent"], _map_panel_map_panel_component__WEBPACK_IMPORTED_MODULE_3__["MapPanelComponent"], _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_4__["ControlPanelComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n    height:100%;\r\n}\r\n\r\n.flex-fill[_ngcontent-%COMP%] {\r\n    -webkit-box-flex:1;\r\n            flex:1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQU07WUFBTixNQUFNO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rlc2t0b3AvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHl7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmZsZXgtZmlsbCB7XHJcbiAgICBmbGV4OjE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/desktop/main/map-panel/map-panel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/desktop/main/map-panel/map-panel.component.ts ***!
  \**************************************************************************/
/*! exports provided: MapPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPanelComponent", function() { return MapPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_lab_machine_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/lab-machine-info */ "./src/app/models/lab-machine-info.ts");
/* harmony import */ var src_app_models_model_pv_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/model.pv-info */ "./src/app/models/model.pv-info.ts");
/* harmony import */ var src_app_models_model_egcr_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/model.egcr-info */ "./src/app/models/model.egcr-info.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/serrvices/data.service */ "./src/app/serrvices/data.service.ts");
/* harmony import */ var src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/serrvices/messaging.service */ "./src/app/serrvices/messaging.service.ts");
/* harmony import */ var src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/serrvices/web.service */ "./src/app/serrvices/web.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../information-panel/information-panel.component */ "./src/app/components/desktop/main/information-panel/information-panel.component.ts");














const _c0 = ["optionTemplate"];
const _c1 = ["infoTemplate"];
const _c2 = ["gmap"];
function MapPanelComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Now click on the Lab to assign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapPanelComponent_div_0_div_7_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.dataService.pvAssignInProgress = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MapPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MapPanelComponent_div_0_div_7_Template, 5, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.dataService.pvAssignInProgress);
} }
function MapPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MapPanelComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapPanelComponent_ng_template_2_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapPanelComponent_ng_template_2_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onAssignButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Assign House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Move to");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MapPanelComponent_ng_template_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapPanelComponent_ng_template_4_div_8_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.assignLabToMe(ctx_r19.dataService.selectedLabMachine); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Assign this House to me");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Inspection started");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapPanelComponent_ng_template_4_div_8_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.validationEnded(ctx_r21.dataService.selectedLabMachine); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Inspection ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MapPanelComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapPanelComponent_ng_template_4_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-information-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MapPanelComponent_ng_template_4_div_8_Template, 7, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.dataService.labMachineInfo && (ctx_r9.dataService.selectedLabMachine.PR1 != 0 || ctx_r9.dataService.selectedLabMachine.PR2 != 0 || ctx_r9.dataService.selectedLabMachine.DR1 != 0 || ctx_r9.dataService.selectedLabMachine.DR2 != 0 || ctx_r9.dataService.selectedLabMachine.SS != 0));
} }
class MapPanelComponent {
    constructor(modalService, route, dataService, msgService, webService) {
        this.modalService = modalService;
        this.route = route;
        this.dataService = dataService;
        this.msgService = msgService;
        this.webService = webService;
        this.isMobile = false;
        // DEFAULT LAT LON OF CITY Los Angeles if no param is given
        this.Lat = 34.0482809;
        this.Lon = -118.2437;
        this.Zoom = 12;
        //
        this.pollTime = 3; // time in seconds to sync with db
        // Data Arrays
        this.labMachineInfo = [];
        this.pvInfo = [];
        this.egcrInfo = [];
        // markers on the map
        this.labMachineInfoMarkers = [];
        this.pvInfoMarkers = [];
        this.egcrInfoMarkers = [];
        // from pv to labs arrows --->
        this.arrowPolylines = [];
        this.invalidIDCount = 0;
        //getting lat, lon and zoom from parameters if present
        this.route.params.subscribe(params => {
            if (params['lat']) {
                if (params['lon']) {
                    this.Lat = Number(params['lat']);
                    this.Lon = Number(params['lon']);
                    //console.log(this.lat);
                }
                if (params['zoom']) {
                    this.Zoom = Number(params['zoom']);
                    //console.log("zoom: "+this.Zoom);
                }
            }
        });
    }
    ngOnInit() {
        this.msgService.getPermission();
        this.msgService.receiveMessage();
        this.message = this.msgService.currentMessage;
    }
    ngAfterViewInit() {
        //console.log(this.gmapElement);
        var mapProp = {
            center: new google.maps.LatLng(this.Lat, this.Lon),
            zoom: this.Zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.createMarkers();
        // getting data from webService
        this.getData();
        this.dataPoll();
    }
    dataPoll() {
        //console.log("pv assign: "+this.dataService.pvAssignInProgress);
        if (!this.dataService.pvAssignInProgress) {
            this.sendMyLocationUpdate();
            this.getData();
        }
        setTimeout(this.dataPoll.bind(this), this.pollTime * 1000);
    }
    getLocation() {
        var elementOpts = document.getElementById("dbgAtif1");
        if (navigator.geolocation) {
            console.log("Now getting loc");
            navigator.geolocation.getCurrentPosition(position => {
                console.log("loc gott");
                //elementOpts.innerHTML = "loc success";
                this.dataService.myLat = position.coords.latitude;
                this.dataService.myLon = position.coords.longitude;
            }, error => {
                console.log("loc error: ", error.message);
                //elementOpts.innerHTML = "locFail: " + error.code.toString();
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    sendMyLocationUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Get current location here and update these numbers
            //this.dataService.myLat = 34.0482809;
            //this.dataService.myLon = -118.2437;
            this.getLocation();
            //this.dataService.myLat = this.dataService.myLat + 0.001;
            var e = this.pvInfo.find(x => x.PV_ID === this.dataService.myPvID);
            if (e == null) {
                console.log("Atif_pvID. Couldnot find pvID ", this.invalidIDCount, "times");
                this.invalidIDCount++;
                if (this.invalidIDCount > 1) {
                    this.dataService.myPvID = 0;
                }
                return;
            }
            console.log("AtifLoc_02. ", this.dataService.myLat, ",", this.dataService.myLon);
            this.dataService.updatePvInfo({
                //pv_id: e.PV_ID,
                //lab_order: e.LAB_order,
                //lab_id: e.LAB_ID,
                //lat: this.dataService.myLat,
                //lon: this.dataService.myLon
                pv_id: e.PV_ID,
                lab_order: e.LAB_order,
                lab_id: e.LAB_ID,
                lat: this.dataService.myLat,
                lon: this.dataService.myLon
            }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //console.log(data);
                var notificationTitle = "New PV Assignment";
                var notificationBody = "Process Validation (PV) ID: " + data.data.pv_id + " has been assigned to LAB ID: " + data.data.lab_id;
                //this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
                this.getData();
            }));
        });
    }
    clearData() {
        this.labMachineInfo = [];
        this.pvInfo = [];
        this.egcrInfo = [];
        this.refreshMarkers();
    }
    getData() {
        this.clearData();
        //in this method we'll get data from webService from database but now I'm hard coding it for testing
        // adding to labMachineInfo Array
        /*
        this.labMachineInfo.push(new LabMachineInfo(6548265, 34.0507194, -118.2688471, "Los Angeles", "1331", "W", "7", "", "12", "1st", 0, 0, 0, 0, 0));
        this.labMachineInfo.push(new LabMachineInfo(6548266, 34.0575725, -118.2659292, "Los Angeles", "430", "S-Grand", "7", "", "142", "2nd", 1, 0, 0, 0, 0));
        this.labMachineInfo.push(new LabMachineInfo(6548267, 34.0485144, -118.2696499, "Los Angeles", "214", "Albany", "7", "", "10", "Ground", 1, 1, 1, 0, 0));
        this.labMachineInfo.push(new LabMachineInfo(6548268, 34.0444611, -118.2636114, "Los Angeles", "245", "Fifth Area", "7", "", "12", "4th", 1, 0, 1, 1, 0));*/
        this.dataService.getLabInfo().subscribe(data => {
            const tempLab = data.data;
            this.dataService.getMachineInfo().subscribe(d => {
                const tempMachine = d.data;
                tempLab.forEach(lab => {
                    tempMachine.forEach(machine => {
                        //console.log(machine);
                        if (lab.lab_id == machine.lab_id) {
                            this.labMachineInfo.push(new src_app_models_lab_machine_info__WEBPACK_IMPORTED_MODULE_2__["LabMachineInfo"](lab.lab_id, lab.lat, lab.lon, lab.city, lab.area, lab.phase, lab.st, lab.s_st, lab.building, lab.floor, machine.pr1, machine.pr2, machine.dr1, machine.dr2, machine.ss));
                            //console.log("found_labmachine");
                            this.refreshMarkers();
                        }
                    });
                });
            });
        }, err => {
            console.log(err);
        }, () => {
        });
        // adding to pvInfo array 
        /*
        this.pvInfo.push(new PVInfo(90, 34.0494611, -118.2636114, 0, "CCR"));
        this.pvInfo.push(new PVInfo(91, 34.0359263, -118.2479044, 0, "CCR"));
        this.pvInfo.push(new PVInfo(92, 33.9903218, -118.2764002, 6548266, "Self"));*/
        this.dataService.getPvInfo().subscribe(data => {
            const pvs = data.data;
            pvs.forEach(pv => {
                this.pvInfo.push(new src_app_models_model_pv_info__WEBPACK_IMPORTED_MODULE_3__["PVInfo"](pv.pv_id, pv.lat, pv.lon, pv.lab_id, pv.lab_order));
                this.refreshMarkers();
            });
        }, err => {
            console.log(err);
        });
        // adding to egcrInfo array
        /*
        this.egcrInfo.push(new EGCR_Info(50, 34.0367087, -118.163447));
        */
        this.dataService.getEgcrInfo().subscribe(data => {
            const egcrs = data.data;
            egcrs.forEach(egcr => {
                this.egcrInfo.push(new src_app_models_model_egcr_info__WEBPACK_IMPORTED_MODULE_4__["EGCR_Info"](egcr.egcr_id, egcr.lat, egcr.lon));
                this.refreshMarkers();
            });
        }, err => {
        });
        if (this.dataService.infoPresent) {
            this.labMachineInfo.forEach((lm) => {
                if (this.dataService.selectedLabMachine != null && lm.LAB_ID == this.dataService.selectedLabMachine.LAB_ID) {
                    this.dataService.selectedLabMachine = lm;
                }
            });
            this.pvInfo.forEach((pv) => {
                if (this.dataService.selectedPv != null && pv.PV_ID == this.dataService.selectedPv.PV_ID) {
                    this.dataService.selectedPv = pv;
                }
            });
        }
    }
    createArrowPolylines(originLat, originLon, desLat, desLon) {
        // line
        var lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            strokeColor: '#700',
            fillColor: '#700',
            scale: 2
        };
        var line = new google.maps.Polyline({
            path: [{ lat: originLat.valueOf(), lng: originLon.valueOf() }, { lat: desLat.valueOf(), lng: desLon.valueOf() }],
            strokeOpacity: 0,
            icons: [{
                    icon: lineSymbol,
                    offset: '0',
                    repeat: '8px',
                }, {
                    icon: {
                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        fillColor: "red",
                        anchor: new google.maps.Point(0, -5),
                        fillOpacity: 1,
                        strokeOpacity: 1,
                    }
                }],
            map: this.map
        });
        this.arrowPolylines.push(line);
    }
    createLabMachineInfoMarkers() {
        this.labMachineInfo.forEach((record) => {
            var assigned = false;
            if (record.PR1 == 1 || record.PR2 == 1 || record.DR1 == 1 || record.DR2 == 1 || record.SS == 1) {
                assigned = true;
            }
            var iconCfg;
            if (assigned) {
                // creating red star
                iconCfg = {
                    url: 'assets/icons/alarm_lab.gif',
                    anchor: new google.maps.Point(20, 20)
                };
            }
            else {
                // creating blue star
                iconCfg = {
                    url: 'assets/icons/blue_lab.gif',
                    anchor: new google.maps.Point(20, 20)
                };
            }
            var newCreatedMarker = new google.maps.Marker({
                position: { lat: record.Lat.valueOf(), lng: record.Lon.valueOf() },
                icon: iconCfg,
                cursor: 'help',
                map: this.map,
                title: record.LAB_ID.toString()
            });
            /*
            // adding right click if it's desktop
            if(!this.isMobile){
              newCreatedMarker.addListener('rightclick', (ev)=> {
                this.openModal(this.optionTemplate);
                ev.stop();
              });
            }
            */
            newCreatedMarker.addListener('click', (ev) => {
                if (this.dataService.pvAssignInProgress) {
                    this.assignPvToLab(this.dataService.pvAssignId, parseInt(newCreatedMarker.getTitle().toString()), "CCR");
                    return;
                }
                var labMachineId = parseInt(newCreatedMarker.getTitle().toString());
                this.labMachineInfo.forEach((checkRec) => {
                    if (checkRec.LAB_ID.valueOf() == labMachineId) {
                        this.dataService.infoPresent = true;
                        this.dataService.pvInfo = false;
                        this.dataService.labMachineInfo = true;
                        this.dataService.selectedLabMachine = checkRec;
                        //console.log("found record");
                    }
                });
                if (this.isMobile) {
                    // if it's mobile then showing info in model 
                    this.openModal(this.infoTemplate);
                }
                ev.stop();
            });
            this.labMachineInfoMarkers.push(newCreatedMarker);
        });
    }
    createPvInfoMarkers() {
        this.pvInfo.forEach((record) => {
            var assigned = true;
            if (record.LAB_ID.valueOf() == 0) {
                assigned = false;
                //console.log("assigned = false");
            }
            var iconCfg;
            if (assigned) {
                // creating red triangle marker
                iconCfg = {
                    url: 'assets/icons/alarm_pv.gif',
                    anchor: new google.maps.Point(20, 20)
                };
                // now creating arrow from pv to lab
                this.labMachineInfo.forEach((labMachine) => {
                    if (record.LAB_ID == labMachine.LAB_ID) {
                        this.createArrowPolylines(record.Lat, record.Lon, labMachine.Lat, labMachine.Lon);
                    }
                });
            }
            else {
                // creating blue triangle marker
                iconCfg = {
                    url: 'assets/icons/blue_pv.gif',
                    anchor: new google.maps.Point(20, 20)
                };
            }
            var newCreatedMarker = new google.maps.Marker({
                position: { lat: record.Lat.valueOf(), lng: record.Lon.valueOf() },
                icon: iconCfg,
                cursor: 'help',
                map: this.map,
                title: record.PV_ID.toString()
            });
            if (!this.isMobile) {
                // for right click if not mobile for options on PV
                newCreatedMarker.addListener('rightclick', (ev) => {
                    this.dataService.pvAssignId = parseInt(newCreatedMarker.getTitle().toString());
                    this.openModal(this.optionTemplate);
                    ev.stop();
                });
            }
            newCreatedMarker.addListener('click', (ev) => {
                if (this.dataService.pvAssignInProgress) {
                    alert("Unabled to select PV due to assignment in progress");
                    return;
                }
                var pvId = parseInt(newCreatedMarker.getTitle().toString());
                this.pvInfo.forEach((checkRec) => {
                    if (checkRec.PV_ID.valueOf() == pvId) {
                        this.dataService.infoPresent = true;
                        this.dataService.labMachineInfo = false;
                        this.dataService.pvInfo = true;
                        this.dataService.selectedPv = checkRec;
                        //console.log("found record");
                    }
                });
                if (this.isMobile) {
                    // if it's mobile then showing info in model 
                    this.openModal(this.infoTemplate);
                }
                ev.stop();
            });
            this.pvInfoMarkers.push(newCreatedMarker);
        });
    }
    createEgcrInfoMarkers() {
        this.egcrInfo.forEach((record) => {
            var rectangle_marker = new google.maps.Marker({
                position: { lat: record.Lat.valueOf(), lng: record.Lon.valueOf() },
                icon: 'assets/icons/egcr.gif',
                map: this.map,
                cursor: 'help',
                title: record.EGCR_ID.toString()
            });
            this.egcrInfoMarkers.push(rectangle_marker);
        });
    }
    createLocationCircle() {
        var locationCircle = new google.maps.Circle({
            strokeColor: "#003399",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#003399",
            fillOpacity: 0.35,
            map: this.map,
            center: {
                lat: this.Lat,
                lng: this.Lon
            },
            radius: 1000 * 0.7
        });
        this.map.fitBounds(locationCircle.getBounds());
        this.locationCircle = locationCircle;
    }
    createMarkers() {
        //this.createLabMachineInfoMarkers();
        //this.createPvInfoMarkers();
        this.createEgcrInfoMarkers();
        if (this.isMobile) {
            this.createLocationCircle();
        }
    }
    refreshMarkers() {
        //removing old markers
        this.labMachineInfoMarkers.forEach((e) => {
            e.setMap(null);
        });
        this.pvInfoMarkers.forEach((e) => {
            e.setMap(null);
        });
        this.egcrInfoMarkers.forEach((e) => {
            e.setMap(null);
        });
        this.arrowPolylines.forEach((e) => {
            e.setMap(null);
        });
        // creating updated ones
        this.createLabMachineInfoMarkers();
        this.createPvInfoMarkers();
        this.createEgcrInfoMarkers();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    onAssignButtonClick() {
        //console.log(this.dataService.pvAssignId);
        this.modalRef.hide();
        this.pvInfo.forEach((e) => {
            if (e.PV_ID == this.dataService.pvAssignId && e.LAB_ID != 0) {
                // already assigned
                //alert("This PV is already assigned");
                // return;
                this.dataService.pvAssignInProgress = true;
            }
            else if (e.PV_ID == this.dataService.pvAssignId) {
                this.dataService.pvAssignInProgress = true;
            }
        });
    }
    assignPvToLab(PV_ID, LAB_ID, Mode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log("assignToLabCalled: "+PV_ID+" "+LAB_ID);
            var e = this.pvInfo.find(x => x.PV_ID === PV_ID);
            //console.log(e);
            this.dataService.updatePvInfo({
                pv_id: e.PV_ID,
                lab_order: Mode,
                lab_id: LAB_ID,
                lat: e.Lat,
                lon: e.Lon
            }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //console.log(data);
                var notificationTitle = "New PV Assignment";
                var notificationBody = "Process Validation (PV) ID: " + data.data.pv_id + " has been assigned to LAB ID: " + data.data.lab_id;
                this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
                this.getData();
            }));
            //alert("Assigned");
            //await this.refreshMarkers();
            this.dataService.pvAssignInProgress = false;
        });
    }
    // method to calculate distance
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    assignLabToMe(lab) {
        // now need to get PV from location of the user
        this.pvInfo.forEach((e) => {
            //if(this.getDistanceFromLatLonInKm(e.Lat.valueOf(), e.Lon.valueOf(), this.Lat.valueOf(), this.Lon.valueOf()) < 0.5){
            console.log("Atif_AssignToMe ", e.PV_ID, ", ", this.dataService.myPvID);
            if (e.PV_ID == this.dataService.myPvID) {
                this.assignPvToLab(e.PV_ID, lab.LAB_ID, "Self");
                this.modalRef.hide();
                return;
            }
        });
    }
    validationEnded(lab) {
        // now need to get PV from location of the user
        this.pvInfo.forEach((e) => {
            //if(this.getDistanceFromLatLonInKm(e.Lat.valueOf(), e.Lon.valueOf(), this.Lat.valueOf(), this.Lon.valueOf()) < 0.5){
            console.log("Atif_InspectionEnded ", e.PV_ID, ", ", this.dataService.myPvID);
            if (e.PV_ID == this.dataService.myPvID) {
                this.assignPvToLab(e.PV_ID, 0, "Self");
                this.modalRef.hide();
                return;
            }
        });
    }
}
MapPanelComponent.ɵfac = function MapPanelComponent_Factory(t) { return new (t || MapPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_8__["MessagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_9__["WebService"])); };
MapPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapPanelComponent, selectors: [["app-map-panel"]], viewQuery: function MapPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gmapElement = _t.first);
    } }, inputs: { isMobile: "isMobile" }, decls: 6, vars: 2, consts: [["class", "card ml-1", "style", "position: absolute; top: 0; right: 0; bottom: 0; left: 0;", 4, "ngIf"], [4, "ngIf"], ["optionTemplate", ""], ["infoTemplate", ""], [1, "card", "ml-1", 2, "position", "absolute", "top", "0", "right", "0", "bottom", "0", "left", "0"], [1, "card-body"], ["id", "wrapper", 2, "position", "absolute", "top", "0", "right", "0", "bottom", "0", "left", "0"], ["id", "google_map"], [2, "position", "absolute", "top", "0", "right", "0", "bottom", "0", "left", "0"], ["gmap", ""], ["id", "over_map"], ["class", "row no-gutters", "style", "background-color: rgba(0,0,0,0.5);border-radius: 10px;", 4, "ngIf"], [1, "row", "no-gutters", 2, "background-color", "rgba(0,0,0,0.5)", "border-radius", "10px"], [1, "m-3", 2, "color", "white"], [1, "btn", "btn-sm", "btn-outline-warning", "ml-2", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "m-2"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "ml-2"], [1, "modal-header", 2, "background-color", "DarkCyan"], [1, "modal-title", "pull-left", 2, "color", "White"], [1, "modal-body", 2, "background-color", "DarkSlateGrey"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "m-1", "btn", "btn-primary", 3, "click"], ["id", "dbgAtif1", 1, "m-1", "btn", "btn-primary"]], template: function MapPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MapPanelComponent_div_0_Template, 8, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MapPanelComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MapPanelComponent_ng_template_2_Template, 12, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MapPanelComponent_ng_template_4_Template, 9, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_11__["InformationPanelComponent"]], styles: ["#wrapper[_ngcontent-%COMP%] { position: relative; }\r\n#over_map[_ngcontent-%COMP%] { position: absolute; top: 10px; left: 10px; z-index: 99; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL21haW4vbWFwLXBhbmVsL21hcC1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsa0JBQWtCLEVBQUU7QUFDL0IsWUFBWSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVza3RvcC9tYWluL21hcC1wYW5lbC9tYXAtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbiNvdmVyX21hcCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxMHB4OyBsZWZ0OiAxMHB4OyB6LWluZGV4OiA5OTsgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-map-panel',
                templateUrl: './map-panel.component.html',
                styleUrls: ['./map-panel.component.css']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_8__["MessagingService"] }, { type: src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_9__["WebService"] }]; }, { isMobile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['optionTemplate']
        }], infoTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['infoTemplate']
        }], gmapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['gmap']
        }] }); })();


/***/ }),

/***/ "./src/app/components/mobile/mobile-main/mobile-main.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mobile/mobile-main/mobile-main.component.ts ***!
  \************************************************************************/
/*! exports provided: MobileMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMainComponent", function() { return MobileMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serrvices/data.service */ "./src/app/serrvices/data.service.ts");
/* harmony import */ var src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/serrvices/messaging.service */ "./src/app/serrvices/messaging.service.ts");
/* harmony import */ var src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/serrvices/web.service */ "./src/app/serrvices/web.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _my_id_my_id_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-id/my-id.component */ "./src/app/components/mobile/mobile-main/my-id/my-id.component.ts");
/* harmony import */ var _desktop_main_map_panel_map_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../desktop/main/map-panel/map-panel.component */ "./src/app/components/desktop/main/map-panel/map-panel.component.ts");










function MobileMainComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-my-id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MobileMainComponent_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-map-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isMobile", true);
} }
function MobileMainComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileMainComponent_div_1_div_1_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dataService.myPvID != 0);
} }
function MobileMainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileMainComponent_div_1_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dataService.myPvID != 0);
} }
class MobileMainComponent {
    constructor(modalService, route, dataService, msgService, webService) {
        this.modalService = modalService;
        this.route = route;
        this.dataService = dataService;
        this.msgService = msgService;
        this.webService = webService;
    }
    ngOnInit() {
    }
}
MobileMainComponent.ɵfac = function MobileMainComponent_Factory(t) { return new (t || MobileMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_5__["WebService"])); };
MobileMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileMainComponent, selectors: [["app-mobile-main"]], decls: 2, vars: 2, consts: [["style", "height: 100vh;", 4, "ngIf"], [2, "height", "100vh"], [1, "row", "no-gutters", 2, "position", "absolute", "top", "0", "right", "0", "bottom", "0", "left", "0"], [1, "col-12", 2, "background-color", "aquamarine"], ["class", "row no-gutters", "style", "position: absolute; top: 0; right: 0; bottom: 0; left: 0;", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], [3, "isMobile"]], template: function MobileMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MobileMainComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileMainComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.myPvID == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.myPvID != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _my_id_my_id_component__WEBPACK_IMPORTED_MODULE_7__["MyIdComponent"], _desktop_main_map_panel_map_panel_component__WEBPACK_IMPORTED_MODULE_8__["MapPanelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9iaWxlL21vYmlsZS1tYWluL21vYmlsZS1tYWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-main',
                templateUrl: './mobile-main.component.html',
                styleUrls: ['./mobile-main.component.css']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"] }, { type: src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_5__["WebService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/mobile/mobile-main/my-id/my-id.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mobile/mobile-main/my-id/my-id.component.ts ***!
  \************************************************************************/
/*! exports provided: MyIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyIdComponent", function() { return MyIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serrvices/data.service */ "./src/app/serrvices/data.service.ts");
/* harmony import */ var src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/serrvices/messaging.service */ "./src/app/serrvices/messaging.service.ts");
/* harmony import */ var src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/serrvices/web.service */ "./src/app/serrvices/web.service.ts");







class MyIdComponent {
    constructor(modalService, route, dataService, msgService, webService) {
        this.modalService = modalService;
        this.route = route;
        this.dataService = dataService;
        this.msgService = msgService;
        this.webService = webService;
        this.usersPvID = 0;
        this.pvIDIsValid = false;
    }
    onClick_BtnStart() {
        var elementBtnMyPvID = document.getElementById("btnMyPvID");
        var elementMyPvID = document.getElementById("myPvID");
        console.log("Atif kya hai?");
        elementBtnMyPvID.innerHTML = "Started";
        this.usersPvID = Number(elementMyPvID.value);
        console.log("MyPV ID is", this.usersPvID);
        this.validateEnteredPvID();
    }
    ngOnInit() {
    }
    //A list of pv will be got from the server so that the entered ID could be verified
    validateEnteredPvID() {
        var elementInvalidNotif = document.getElementById("invalidIdNotif");
        this.dataService.getPvInfo().subscribe(data => {
            const pvs = data.data;
            pvs.forEach(pv => {
                //this.pvInfo.push(new PVInfo(pv.pv_id, pv.lat, pv.lon, pv.lab_id, pv.lab_order));
                console.log("AtifPvIDValidate: ", pv.pv_id, ",", this.usersPvID);
                if (pv.pv_id == this.usersPvID) {
                    this.pvIDIsValid = true;
                }
            });
            if (this.pvIDIsValid) {
                console.log("Valid pvID");
                this.dataService.myPvID = this.usersPvID;
            }
            else {
                console.log("Invalid pvID");
                elementInvalidNotif.innerText = "Invalid ID";
            }
        }, err => {
            console.log(err);
        });
    }
}
MyIdComponent.ɵfac = function MyIdComponent_Factory(t) { return new (t || MyIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_5__["WebService"])); };
MyIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyIdComponent, selectors: [["app-my-id"]], decls: 26, vars: 0, consts: [[2, "height", "100%", "text-align", "center", "background-color", "darkcyan"], [2, "background-color", "slateblue"], [2, "color", "powderblue"], [2, "color", "whitesmoke"], ["type", "number", "id", "myPvID", "placeholder", "Enter you PV-ID"], ["type", "button", "id", "btnMyPvID", 3, "click"], ["id", "invalidIdNotif", 2, "color", "red"]], template: function MyIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " SMART MUHAFIZ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Patrol Vehical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The saviour! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Enter your ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " and tap \"Start\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyIdComponent_Template_button_click_20_listener($event) { return ctx.onClick_BtnStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9iaWxlL21vYmlsZS1tYWluL215LWlkL215LWlkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-id',
                templateUrl: './my-id.component.html',
                styleUrls: ['./my-id.component.css']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_serrvices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_serrvices_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"] }, { type: src_app_serrvices_web_service__WEBPACK_IMPORTED_MODULE_5__["WebService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/lab-machine-info.ts":
/*!********************************************!*\
  !*** ./src/app/models/lab-machine-info.ts ***!
  \********************************************/
/*! exports provided: LabMachineInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabMachineInfo", function() { return LabMachineInfo; });
class LabMachineInfo {
    constructor(LAB_ID, Lat, Lon, City, Area, Phase, St, S_ST, Building, Floor, PR1, PR2, DR1, DR2, SS) {
        this.LAB_ID = LAB_ID;
        this.Lat = Lat;
        this.Lon = Lon;
        this.City = City;
        this.Area = Area;
        this.Phase = Phase;
        this.St = St;
        this.S_ST = S_ST;
        this.Building = Building;
        this.Floor = Floor;
        this.PR1 = PR1;
        this.PR2 = PR2;
        this.DR1 = DR1;
        this.DR2 = DR2;
        this.SS = SS;
    }
}


/***/ }),

/***/ "./src/app/models/model.egcr-info.ts":
/*!*******************************************!*\
  !*** ./src/app/models/model.egcr-info.ts ***!
  \*******************************************/
/*! exports provided: EGCR_Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGCR_Info", function() { return EGCR_Info; });
class EGCR_Info {
    constructor(EGCR_ID, Lat, Lon) {
        this.EGCR_ID = EGCR_ID;
        this.Lat = Lat;
        this.Lon = Lon;
    }
}


/***/ }),

/***/ "./src/app/models/model.pv-info.ts":
/*!*****************************************!*\
  !*** ./src/app/models/model.pv-info.ts ***!
  \*****************************************/
/*! exports provided: PVInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PVInfo", function() { return PVInfo; });
class PVInfo {
    constructor(PV_ID, Lat, Lon, LAB_ID, LAB_order) {
        this.PV_ID = PV_ID;
        this.Lat = Lat;
        this.Lon = Lon;
        this.LAB_ID = LAB_ID;
        this.LAB_order = LAB_order;
    }
}


/***/ }),

/***/ "./src/app/serrvices/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/serrvices/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web.service */ "./src/app/serrvices/web.service.ts");



class DataService {
    //
    constructor(webService) {
        this.webService = webService;
        //For initial pvIDs
        this.myPvID = 0; //PV-ID of this user
        //For liveUpdatation of myPVID
        this.myLat = 34.0482809;
        this.myLon = -118.2437;
        // for info panel
        this.infoPresent = false;
        this.selectedLabMachine = null;
        this.selectedPv = null;
        this.labMachineInfo = false;
        this.pvInfo = false;
        // for assigning pv to lab
        this.pvAssignInProgress = false;
    }
    getLabInfo() {
        return this.webService.getLabInfo();
    }
    getMachineInfo() {
        return this.webService.getMachineInfo();
    }
    getPvInfo() {
        return this.webService.getPvInfo();
    }
    getEgcrInfo() {
        return this.webService.getEgcrInfo();
    }
    updatePvInfo(pv) {
        return this.webService.updatePvInfo(pv);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/serrvices/messaging.service.ts":
/*!************************************************!*\
  !*** ./src/app/serrvices/messaging.service.ts ***!
  \************************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/messaging */ "./node_modules/@firebase/messaging/dist/index.esm.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);






class MessagingService {
    constructor(db, afAuth) {
        /*
        this.messaging = firebase.messaging();
        this.messaging.usePublicVapidKey("BKvOdeV5eFUIyT-GIciYteOXpHlM_G4NfIB5lyn5nMjByDClYYkem1Q7PI5hsBdK91MEkVhqAuqw6QQRaTDKHno");
        */
        this.db = db;
        this.afAuth = afAuth;
        this.currentMessage = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    updateToken(token) {
        /*
        this.afAuth.authState.subscribe(user => {
          if(!user) return;
    
          const data = { [user.uid]: token};
          this.db.object('fcmTokens/').update(data);
        });*/
    }
    getPermission() {
        /*
        this.messaging.requestPermission().then(()=>{
          console.log('Notification permission granted.');
          return this.messaging.getToken();
        })
        .then(token => {
          console.log(token);
          this.updateToken(token);
        })
        .catch((err)=>{
          console.log("Unable to get permission to notify.", err);
        });
        */
    }
    receiveMessage() {
        /*
        console.log("registering receive message");
    
        this.messaging.onMessage((payload)=>{
          console.log("Message received. ", payload);
          this.currentMessage.next(payload);
        });
        */
    }
}
MessagingService.ɵfac = function MessagingService_Factory(t) { return new (t || MessagingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
MessagingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessagingService, factory: MessagingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }, { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/serrvices/web.service.ts":
/*!******************************************!*\
  !*** ./src/app/serrvices/web.service.ts ***!
  \******************************************/
/*! exports provided: WebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebService", function() { return WebService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class WebService {
    constructor(http) {
        this.http = http;
        //base_url: string = "http://192.168.0.108:3000/"
        //base_url: string = "http://192.168.100.13:3000/"
        this.base_url = "http://localhost:3000/";
    }
    getLabInfo() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.get(this.base_url + 'api/lab/', {
            headers: headers
        });
    }
    getMachineInfo() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.get(this.base_url + 'api/machine-info/', {
            headers: headers
        });
    }
    getPvInfo() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.get(this.base_url + 'api/pv-info/', {
            headers: headers
        });
    }
    getEgcrInfo() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.get(this.base_url + 'api/egcr-info/', {
            headers: headers
        });
    }
    sendNotification(title, body_) {
        //console.log("notification send called");
        //console.log(body_);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        let body = JSON.stringify({ "title": title, "body": body_ });
        return this.http.post(this.base_url + 'api/send-notification', body, {
            headers: headers
        });
    }
    updatePvInfo(pv) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        let body = JSON.stringify(pv);
        return this.http.post(this.base_url + 'api/pv-info/update', body, {
            headers: headers
        });
    }
}
WebService.ɵfac = function WebService_Factory(t) { return new (t || WebService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebService, factory: WebService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Nemud\PostOutsource\PV_CCR\lab-pv-system\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map