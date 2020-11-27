(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nataliia\Desktop\repos\tp-final-interfaces\spoiler-five\src\main.ts */"zUnb");


/***/ }),

/***/ "4PXQ":
/*!************************************************!*\
  !*** ./src/app/busqueda/busqueda.component.ts ***!
  \************************************************/
/*! exports provided: BusquedaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaComponent", function() { return BusquedaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../music-reproductor/music-reproductor.component */ "LdFH");







function BusquedaComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
} }
function BusquedaComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
const _c0 = function () { return ["/resultado"]; };
class BusquedaComponent {
    constructor() {
        this.genero = ["Rock", "Pop", "Indie", "Clasico"];
        this.decadas = ["70´s", "80´s", "90´s", "00´s"];
        this.seleccionadoGenero = [];
        this.seleccionadoDecada = [];
    }
    ngOnInit() {
    }
}
BusquedaComponent.ɵfac = function BusquedaComponent_Factory(t) { return new (t || BusquedaComponent)(); };
BusquedaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusquedaComponent, selectors: [["app-busqueda"]], decls: 38, vars: 6, consts: [[1, "busqueda"], [1, "input-group", "mb-3", "inpBusqueda"], ["type", "text", "placeholder", "Buscar", "aria-label", "Username", 1, "form-control"], [1, "input-group-append"], [1, "boton", 2, "margin-top", "25%", 3, "routerLink"], ["id", "titulo"], [1, "groupButtons"], ["for", "botones"], ["name", "botones"], [1, "boton"], [1, "inputGroups"], ["for", "miselect"], ["name", "miselect", 1, "custom-select", 3, "ngModel", "ngModelChange"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function BusquedaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quiero Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Artista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Album");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Genero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusquedaComponent_Template_select_ngModelChange_27_listener($event) { return ctx.seleccionadoGenero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BusquedaComponent_option_30_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Decada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusquedaComponent_Template_select_ngModelChange_33_listener($event) { return ctx.seleccionadoDecada = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BusquedaComponent_option_36_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-music-reproductor");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.seleccionadoGenero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.seleccionadoDecada);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.decadas);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_5__["MusicReproductorComponent"]], styles: [".busqueda[_ngcontent-%COMP%] {\r\n    background-color: var(--dark-grey);\r\n    margin-top: 5rem;\r\n    height: 80vh;\r\n    width: 100%;\r\n}\r\n\r\n.inpBusqueda[_ngcontent-%COMP%] {\r\n    width: 60vw;\r\n    height: 2rem;\r\n    left: 15%;\r\n    top: 10%;\r\n    z-index: 0;\r\n}\r\n\r\n.inpBusqueda[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 55vw;\r\n    background: white;\r\n    border-radius: 100px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: var(--primary-color);\r\n    margin-right: 2%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n#titulo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 38%;\r\n    left: 50%;\r\n    height: 30%;\r\n    width: 50%;\r\n    margin: -15% 0 0 -25%;\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.groupButtons[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 40%;\r\n    height: 30%;\r\n    width: 70%;\r\n    margin: -15% 0 0 -25%;\r\n}\r\n\r\n.boton[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin: 3%;\r\n    border-radius: 15px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    color: white;\r\n}\r\n\r\n.inputGroups[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 65%;\r\n    left: 40%;\r\n    height: 30%;\r\n    width: 70%;\r\n    margin: -15% 0 0 -25%;\r\n}\r\n\r\n.custom-select[_ngcontent-%COMP%] {\r\n    border-radius: 100px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: var(--primary-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c3F1ZWRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLDZFQUE2RTtJQUM3RSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNkVBQTZFO0lBQzdFLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQ0FBa0M7QUFDdEMiLCJmaWxlIjoiYnVzcXVlZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXNxdWVkYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5wQnVzcXVlZGEge1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5pbnBCdXNxdWVkYSBpbnB1dCB7XHJcbiAgICB3aWR0aDogNTV2dztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiN0aXR1bG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzOCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNSUgMCAwIC0yNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmdyb3VwQnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogLTE1JSAwIDAgLTI1JTtcclxufVxyXG5cclxuLmJvdG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnB1dEdyb3VwcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDY1JTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogLTE1JSAwIDAgLTI1JTtcclxufVxyXG5cclxuLmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusquedaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-busqueda',
                templateUrl: './busqueda.component.html',
                styleUrls: ['./busqueda.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function NavBarComponent_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
} }
function NavBarComponent_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/buscar"]; };
const _c2 = function () { return ["/resultado"]; };
class NavBarComponent {
    constructor(_eref, _location) {
        this._eref = _eref;
        this._location = _location;
        this.visible = false;
        this.genero = ["Rock", "Pop", "Indie", "Clasico"];
        this.decadas = ["70´s", "80´s", "90´s", "00´s"];
    }
    ngOnInit() {
        this.visible = false;
        this.pixeles = '-550px';
        this.visibleMenu = 'hidden';
        this.visiblePerfil = 'hidden';
    }
    clickAddTodo() {
        if (!this.visible) {
            let menu = document.querySelector("#menu");
            this.pixeles = '0px';
            this.visible = true;
        }
    }
    getPixeles() {
        return this.pixeles;
    }
    visibleFilter() {
        return this.visibleMenu;
    }
    visibleMenuPerfil() {
        return this.visiblePerfil;
    }
    clickFiltro() {
        if (this.visibleMenu == 'hidden') {
            this.visibleMenu = 'visible';
        }
        else {
            this.visibleMenu = 'hidden';
        }
    }
    clickPerfil() {
        if (this.visiblePerfil == 'hidden') {
            this.visiblePerfil = 'visible';
        }
        else {
            this.visiblePerfil = 'hidden';
        }
    }
    handleClick(event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            if (this.visible) {
                let menu = document.querySelector("#menu");
                this.pixeles = '-550px';
                this.visible = false;
            }
        }
    }
    backClicked() {
        this._location.back();
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], hostBindings: function NavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 108, vars: 18, consts: [["id", "mobile", 1, "fixed-top"], [1, "icono-left", 3, "click"], ["src", "./assets/iconos/arrow.svg", "width", "25", "height", "25", "alt", "", "loading", "lazy"], [1, "logoSpoiler", 3, "routerLink"], ["src", "./assets/iconos/logo.png", "width", "40", "height", "40", "alt", "", "loading", "lazy"], [1, "icono", 3, "click"], ["src", "./assets/iconos/burguer-menu.svg", "width", "25", "height", "25", "alt", "", "loading", "lazy", 1, "align-top", "logo"], ["href", "#", 1, "icono"], ["src", "./assets/iconos/Notificacion-bell.svg", "width", "25", "height", "25", "alt", "", "loading", "lazy", 1, "align-top", "logo"], [1, "icono", 3, "routerLink"], ["src", "./assets/iconos/Vector.svg", "width", "25", "height", "25", "alt", "", "loading", "lazy", 1, "align-top", "logo"], ["id", "menu"], ["id", "img-perfil", "src", "./assets/iconos/img-perfil.png", "alt", ""], [1, "lista"], [3, "routerLink"], ["href", "#"], [1, "fotter"], ["id", "desktop", 1, "fixed-top"], ["href", "#", 1, "icono-left"], ["src", "./assets/iconos/Search.svg", "width", "40", "height", "40", "alt", "", "loading", "lazy"], ["type", "text", "value", "Buscar", 1, "redondeadonorelieve"], [1, "boton", 3, "routerLink"], [1, "btnfilter", 3, "click"], ["src", "./assets/iconos/Filter.svg", "height", "40", "alt", "", "loading", "lazy"], ["id", "perfil", "src", "./assets/iconos/img-perfil.png", "alt", "", 3, "click"], ["src", "./assets/iconos/Vector-2.svg", "width", "40", "height", "40", "alt", "", "loading", "lazy", 1, "align-top", "logo"], ["id", "filterMenu"], [1, "form-check", "check"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label", 2, "margin-left", "10%"], ["type", "checkbox", "value", "", "id", "defaultCheck2", 1, "form-check-input"], ["for", "defaultCheck2", 1, "form-check-label", 2, "margin-left", "10%"], ["type", "checkbox", "value", "", "id", "defaultCheck3", 1, "form-check-input"], ["for", "defaultCheck3", 1, "form-check-label", 2, "margin-left", "10%"], ["type", "checkbox", "value", "", "id", "defaultCheck4", 1, "form-check-input"], ["for", "defaultCheck4", 1, "form-check-label", 2, "margin-left", "10%"], ["type", "checkbox", "value", "", "id", "defaultCheck5", 1, "form-check-input"], ["for", "defaultCheck5", 1, "form-check-label", 2, "margin-left", "10%"], [1, "comboFiltro"], ["for", "miselect"], ["name", "miselect", 1, "custom-select", 3, "ngModel"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "menuPerfil"], [3, "value"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_1_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Spoiler Five ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_6_listener() { return ctx.clickAddTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mi M\u00FAsica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mi Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cerrar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_48_listener() { return ctx.clickFiltro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_img_click_50_listener() { return ctx.clickPerfil(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Artista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Album ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Cancion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Podcast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Genero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, NavBarComponent_option_80_Template, 2, 2, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Decada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, NavBarComponent_option_86_Template, 2, 2, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Mi Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Mi Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", ctx.getPixeles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.visibleFilter());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.seleccionadoGenero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.seleccionadoDecada);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.decadas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.visibleMenuPerfil());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#mobile[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 5rem;\r\n    background-color: var(--dark-grey);\r\n    z-index: 1;\r\n}\r\n\r\n.logoSpoiler[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    position: absolute;\r\n    left: 35%;\r\n    margin-top: 1.5%;\r\n    font-family: 'Sansita', sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.boton[_ngcontent-%COMP%] {\r\n    margin-left: 1%;\r\n    background-color: var(--dark-grey);\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: var(--primary-color);\r\n    border-radius: 5px;\r\n}\r\n\r\n.icono[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    float: right;\r\n    margin-right: 3%;\r\n    margin-top: 3.5%;\r\n}\r\n\r\n.icono-left[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    float: left;\r\n    margin-left: 3%;\r\n    margin-top: 3.5%;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 70%;\r\n    height: 100vh;\r\n    background-color: var(--dark-grey);\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 1%;\r\n    transition: all 0.75s ease;\r\n    z-index: 20;\r\n    opacity: 95%;\r\n}\r\n\r\n#img-perfil[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 2rem;\r\n    margin-bottom: 0.5rem;\r\n    z-index: 1;\r\n}\r\n\r\n.lista[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    height: 2rem;\r\n    border-width: 1px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: var(--primary-color);\r\n    margin-top: 1.5%;\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.fotter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 2rem;\r\n    border-width: 1px;\r\n    border-top-style: solid;\r\n    border-top-color: var(--primary-color);\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    position: absolute;\r\n    bottom: 0%;\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n}\r\n\r\n#desktop[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 6rem;\r\n    background-color: #181B2C;\r\n    z-index: 1;\r\n    width: 80vw;\r\n    left: 18vw;\r\n}\r\n\r\n#perfil[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 1%;\r\n    width: 4.5rem;\r\n    height: 4.5rem;\r\n}\r\n\r\n.redondeadonorelieve[_ngcontent-%COMP%] {\r\n    top: 0.5%;\r\n    border-radius: 5px;\r\n    border: 1px solid var(--primary-color);\r\n    background-color: var(--dark-grey);\r\n    color: white;\r\n    height: 2rem;\r\n}\r\n\r\n.btnfilter[_ngcontent-%COMP%] {\r\n    margin-top: 2.5%;\r\n    margin-left: 1.5%;\r\n}\r\n\r\n#filterMenu[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    margin-left: 25vw;\r\n    width: 20vw;\r\n    height: 35vh;\r\n    background-color: var(--dark-grey);\r\n    border-radius: 5px;\r\n    border: 1px solid var(--primary-color);\r\n    padding: 1%;\r\n}\r\n\r\n#menuPerfil[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 1%;\r\n    margin-top: 6.5rem;\r\n    width: 20vw;\r\n    height: 26vh;\r\n    background-color: var(--dark-grey);\r\n    border-radius: 5px;\r\n    border: 1px solid var(--primary-color);\r\n    padding: 1%;\r\n    z-index: 1;\r\n}\r\n\r\n.check[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    text-align: left;\r\n    padding-left: 2%;\r\n}\r\n\r\n.comboFiltro[_ngcontent-%COMP%] {\r\n    margin-top: 7.5%;\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n@media only screen and (max-width: 899px) {\r\n    #desktop[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #menuPerfil[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #filterMenu[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 420px) {\r\n    .icono[_ngcontent-%COMP%] {\r\n        margin-top: 1.5%;\r\n    }\r\n    .icono-left[_ngcontent-%COMP%] {\r\n        margin-top: 1%;\r\n    }\r\n    .logoSpoiler[_ngcontent-%COMP%] {\r\n        left: 45%;\r\n    }\r\n    #desktop[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #menuPerfil[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #filterMenu[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #menu[_ngcontent-%COMP%] {\r\n        right: -550px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 899px) {\r\n    #mobile[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #menu[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #desktop[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        height: 6rem;\r\n    }\r\n    #menuPerfil[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n    }\r\n    #filterMenu[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n    }\r\n    .icono[_ngcontent-%COMP%] {\r\n        margin-top: 1%;\r\n        margin-right: 1%;\r\n    }\r\n    .icono-left[_ngcontent-%COMP%] {\r\n        margin-top: 1%;\r\n    }\r\n    .redondeadonorelieve[_ngcontent-%COMP%] {\r\n        margin-top: 1%;\r\n        margin-left: 0.5%;\r\n        height: 40px;\r\n        width: 20vw;\r\n    }\r\n    .lista[_ngcontent-%COMP%] {\r\n        height: 2rem;\r\n        text-align: center;\r\n        z-index: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtb2JpbGUge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sb2dvU3BvaWxlciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ib3RvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaWNvbm8ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMy41JTtcclxufVxyXG5cclxuLmljb25vLWxlZnQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDMuNSU7XHJcbn1cclxuXHJcbiNtZW51IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBvcGFjaXR5OiA5NSU7XHJcbn1cclxuXHJcbiNpbWctcGVyZmlsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmxpc3RhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvdHRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNGQzk0N0QgMCUsICNGQjcwNzkgNTMuNjUlLCAjRkE1MDc1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4jZGVza3RvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxQjJDO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgbGVmdDogMTh2dztcclxufVxyXG5cclxuI3BlcmZpbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgd2lkdGg6IDQuNXJlbTtcclxuICAgIGhlaWdodDogNC41cmVtO1xyXG59XHJcblxyXG4ucmVkb25kZWFkb25vcmVsaWV2ZSB7XHJcbiAgICB0b3A6IDAuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5idG5maWx0ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG59XHJcblxyXG4jZmlsdGVyTWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1dnc7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4jbWVudVBlcmZpbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgbWFyZ2luLXRvcDogNi41cmVtO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBoZWlnaHQ6IDI2dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4uY29tYm9GaWx0cm8ge1xyXG4gICAgbWFyZ2luLXRvcDogNy41JTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNGQzk0N0QgMCUsICNGQjcwNzkgNTMuNjUlLCAjRkE1MDc1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XHJcbiAgICAjZGVza3RvcCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNtZW51UGVyZmlsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgI2ZpbHRlck1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAgIC5pY29ubyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41JTtcclxuICAgIH1cclxuICAgIC5pY29uby1sZWZ0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIH1cclxuICAgIC5sb2dvU3BvaWxlciB7XHJcbiAgICAgICAgbGVmdDogNDUlO1xyXG4gICAgfVxyXG4gICAgI2Rlc2t0b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjbWVudVBlcmZpbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNmaWx0ZXJNZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgI21lbnUge1xyXG4gICAgICAgIHJpZ2h0OiAtNTUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODk5cHgpIHtcclxuICAgICNtb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNkZXNrdG9wIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgfVxyXG4gICAgI21lbnVQZXJmaWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgICNmaWx0ZXJNZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaWNvbm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICB9XHJcbiAgICAuaWNvbm8tbGVmdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICB9XHJcbiAgICAucmVkb25kZWFkb25vcmVsaWV2ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNSU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgfVxyXG4gICAgLmxpc3RhIHtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, { handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "7Ml0":
/*!**************************************************************!*\
  !*** ./src/app/detail-playlist/detail-playlist.component.ts ***!
  \**************************************************************/
/*! exports provided: DetailPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPlaylistComponent", function() { return DetailPlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../left-navigation-bar/left-navigation-bar.component */ "e690");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../music-reproductor/music-reproductor.component */ "LdFH");








function DetailPlaylistComponent_tr_70_fa_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.faHeart);
} }
function DetailPlaylistComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetailPlaylistComponent_tr_70_fa_icon_12_Template, 1, 1, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r4.artist, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r4.album, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r4.release, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", song_r4.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faDots);
} }
function DetailPlaylistComponent_div_78_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faStar);
} }
function DetailPlaylistComponent_div_78_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r6.comment, "");
} }
function DetailPlaylistComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " puntu\u00F3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailPlaylistComponent_div_78_fa_icon_7_Template, 1, 1, "fa-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailPlaylistComponent_div_78_p_8_Template, 2, 1, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r6.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r6.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r6.comment != "");
} }
function DetailPlaylistComponent_tr_128_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 24);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r12.faHeart);
} }
function DetailPlaylistComponent_tr_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailPlaylistComponent_tr_128_fa_icon_6_Template, 1, 1, "fa-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", song_r11.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faDots);
} }
function DetailPlaylistComponent_div_131_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r14.faStar);
} }
function DetailPlaylistComponent_div_131_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r13.comment, "");
} }
function DetailPlaylistComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " puntu\u00F3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailPlaylistComponent_div_131_fa_icon_7_Template, 1, 1, "fa-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailPlaylistComponent_div_131_p_8_Template, 2, 1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", comment_r13.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r13.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r13.comment != "");
} }
class DetailPlaylistComponent {
    constructor() {
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClock"];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShareAlt"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faList"];
        this.faDots = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisH"];
        this.comments = [
            {
                username: "thor",
                stars: [1, 2, 3, 4],
                comment: " "
            }, {
                username: "natalia_vytas",
                stars: [1, 2, 3, 4, 5],
                comment: "Esta playlist la uso para estudiar y 10/10"
            },
            {
                username: "hulk_123",
                stars: [1, 2],
                comment: ""
            },
            {
                username: "loki",
                stars: [1, 2, 3],
                comment: "Cool."
            },
        ];
        this.songs = [{
                name: "Valse",
                artist: "Ivan Susanin",
                album: "Glinka",
                release: "26-04-2017",
                favorite: true,
            }, {
                name: "Maskarade",
                artist: "Aram Khachaturian",
                album: "Khachaturian",
                release: "21-02-2016",
                favorite: true,
            }, {
                name: "Danse Macabre",
                artist: "Camille Saint-Saens",
                album: "The Carnival of the animals",
                release: "20-07-2020",
                favorite: true,
            }, {
                name: "The Fountain",
                artist: "Luncatic Soul",
                album: "Through Shaded Woods",
                release: "12-08-2018",
                favorite: false,
            }, {
                name: "Oblivion",
                artist: "Luncatic Soul",
                album: "Through Shaded Woods",
                release: "12-08-2018",
                favorite: true,
            }
        ];
    }
    ngOnInit() {
        this.color = "#585A66";
        this.color2 = "#585A66";
        this.color3 = "#585A66";
        this.color4 = "#585A66";
        this.color5 = "#585A66";
    }
    getcolor() {
        return this.color;
    }
    getcolor2() {
        return this.color2;
    }
    getcolor3() {
        return this.color3;
    }
    getcolor4() {
        return this.color4;
    }
    getcolor5() {
        return this.color5;
    }
    clickAddTodo(n) {
        this.color = "#585A66";
        this.color2 = "#585A66";
        this.color3 = "#585A66";
        this.color4 = "#585A66";
        this.color5 = "#585A66";
        for (let i = 1; i <= n; i++) {
            if (i == 1) {
                this.color = "gold";
            }
            else if (i == 2) {
                this.color2 = "gold";
            }
            else if (i == 3) {
                this.color3 = "gold";
            }
            else if (i == 4) {
                this.color4 = "gold";
            }
            else if (i == 5) {
                this.color5 = "gold";
            }
        }
    }
}
DetailPlaylistComponent.ɵfac = function DetailPlaylistComponent_Factory(t) { return new (t || DetailPlaylistComponent)(); };
DetailPlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailPlaylistComponent, selectors: [["app-detail-playlist"]], decls: 142, vars: 50, consts: [[1, "fixed-top"], [1, "row", "d-none", "d-md-flex", "desktop-display"], [1, "col-3"], [1, "col-9"], [1, "row", "mt-5"], [1, "col-10"], [1, "row"], [1, "col-3", "user-review", "text-center"], [1, "card"], [1, "card-content"], [1, "card-front"], ["src", "data:image/jpeg;base64,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", "height", "193", "alt", ""], [1, "card-back", "bg-dark"], [1, "card-body"], [1, "play-icon", 3, "icon"], [1, "star", 3, "click"], [3, "icon"], [1, "col-6", "playlist-details"], [1, "type", "pt-2"], [1, "pt-3", "playlist-rating"], [1, "pl-5"], [1, "col-3", "right-icons", "text-right"], [1, "ml-3", 3, "icon"], [1, "mt-4"], [1, "mx-5", 3, "icon"], [1, "row", "mt-4"], [1, "table", "mt-4"], [4, "ngFor", "ngForOf"], [1, "col-10", "bordered", "mt-5", "pb-5"], [1, "row", "m-5"], ["src", "../../assets/small-pic.png", "alt", "", 1, "rounded-circle", "mr-"], ["name", "", "id", "", "cols", "30", "rows", "10"], [1, "primary-button", "text-center", "float-right", "mr-5"], ["class", "row my-2 mt-5", 4, "ngFor", "ngForOf"], [1, "mobile-display", "d-block", "d-md-none", "mt-4"], [1, "row", "pt-5", "mt-5", "playlist-header"], [1, "col-6", "text-center", "pt-5"], ["src", "data:image/jpeg;base64,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", "height", "118", "alt", ""], [1, "col-6", "text-center", "playlist-details", "pt-5"], [1, "row", "container"], [1, "col-6", "user-review", "text-center"], [1, "col-6", "text-right", "pt-5", "right-icons"], [1, "nav", "nav-tabs", "mt-3"], [1, "active"], ["data-toggle", "tab", "href", "#canciones"], ["data-toggle", "tab", "href", "#actividad"], ["data-toggle", "tab", "href", "#comentar"], [1, "tab-content"], ["id", "canciones", 1, "pt-3", "tab-pane", "fade", "in", "active", "mx-3"], [1, "table"], ["id", "actividad", 1, "tab-pane", "fade", "mx-3", "py-5"], [1, "bordered", "container"], ["class", "row p-4", 4, "ngFor", "ngForOf"], ["id", "comentar", 1, "tab-pane", "fade"], [1, "container"], [1, "ml-5"], ["cols", "30 ", "rows", "10", 1, "mx-auto"], [1, "primary-button", "text-center", "float-right", "mt-3"], [1, "text-right"], [3, "icon", 4, "ngIf"], [1, "mx-4", 3, "icon"], [1, "row", "my-2", "mt-5"], [1, "mx-5", "px-4", "my-1", "comentario"], [1, "mr-3"], [1, "mx-2"], [3, "icon", 4, "ngFor", "ngForOf"], ["class", "ml-4", 4, "ngIf"], [1, "ml-4"], ["class", "mx-5", 3, "icon", 4, "ngIf"], [1, "row", "p-4"], [1, "py-2", "comentario"], [1, "mr-2"], [4, "ngIf"]], template: function DetailPlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-left-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Puntua este contenido! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_20_listener() { return ctx.clickAddTodo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_22_listener() { return ctx.clickAddTodo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_24_listener() { return ctx.clickAddTodo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_26_listener() { return ctx.clickAddTodo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_28_listener() { return ctx.clickAddTodo(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PLAYLIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dark theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " art_002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 3.75 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Ver detalle de la puntuacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 5 canciones, 14 minutos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " TITLE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " ARTIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "ALBUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " RELEASE DATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, DetailPlaylistComponent_tr_70_Template, 15, 8, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Opinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, DetailPlaylistComponent_div_78_Template, 9, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Dark theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " art_002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " 3.15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Tu valoracion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_100_listener() { return ctx.clickAddTodo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_102_listener() { return ctx.clickAddTodo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_104_listener() { return ctx.clickAddTodo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_106_listener() { return ctx.clickAddTodo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPlaylistComponent_Template_a_click_108_listener() { return ctx.clickAddTodo(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Canciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Actividad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Comentar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, DetailPlaylistComponent_tr_128_Template, 8, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, DetailPlaylistComponent_div_131_Template, 9, 3, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h2", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Comenta! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "textarea", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Opinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "app-music-reproductor");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor4());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor5());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faClock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor4());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor5());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["LeftNavigationBarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_6__["MusicReproductorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".primary-button[_ngcontent-%COMP%] {\r\n            width: 128px;\r\n            height: 30px;\r\n            border-radius: 100px;\r\n        }\r\n        \r\n        .desktop-display[_ngcontent-%COMP%] {\r\n            margin-bottom: 10%;\r\n            margin-top: 5%;\r\n            color: white;\r\n        }\r\n        \r\n        .mobile-display[_ngcontent-%COMP%] {\r\n            margin-bottom: 10%;\r\n            margin-top: 5%;\r\n            color: white;\r\n        }\r\n        \r\n        table[_ngcontent-%COMP%] {\r\n            color: white;\r\n        }\r\n        \r\n        table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n            color: #FC947D;\r\n            border-color: #FC947D !important;\r\n            border-top: none;\r\n        }\r\n        \r\n        table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n            border-color: #FC947D !important;\r\n            border-bottom: 1px solid;\r\n        }\r\n        \r\n        table[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n            color: #FC947D;\r\n            font-size: 20px;\r\n        }\r\n        \r\n        .star[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n            color: yellow;\r\n        }\r\n        \r\n        .fixed-top[_ngcontent-%COMP%] {\r\n            height: 100px;\r\n        }\r\n        \r\n        @media only screen and (max-width: 420px) {\r\n            table[_ngcontent-%COMP%] {\r\n                font-size: 16px;\r\n            }\r\n            table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n                border-top: none;\r\n            }\r\n            .playlist-details[_ngcontent-%COMP%] {\r\n                color: #FC947D;\r\n            }\r\n            .playlist-details[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n                color: #E1914B;\r\n            }\r\n            h4[_ngcontent-%COMP%] {\r\n                font-size: 20px;\r\n            }\r\n            .playlist-header[_ngcontent-%COMP%] {\r\n                width: 100%;\r\n            }\r\n            textarea[_ngcontent-%COMP%] {\r\n                height: 126px;\r\n                width: 90%;\r\n                background-color: #585A66;\r\n                border: 1px solid #FC947D;\r\n                border-radius: 5px;\r\n                resize: none;\r\n            }\r\n            .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n                color: #FC947D;\r\n                background-color: #383B49;\r\n                border: 2px solid #FC947D;\r\n                border-radius: 15px 15px 0px 0px;\r\n                border-bottom-color: transparent;\r\n            }\r\n            .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n                color: #FC947D;\r\n                background-color: #585A66;\r\n                border: 2px solid #FC947D;\r\n                border-radius: 15px 15px 0px 0px;\r\n                border-bottom-color: transparent;\r\n                padding: 8px 35px;\r\n            }\r\n            .tab-content[_ngcontent-%COMP%] {\r\n                min-height: 50vh;\r\n                background-color: #383B49;\r\n            }\r\n            .bordered[_ngcontent-%COMP%] {\r\n                border: 2px solid #FC947D;\r\n                border-radius: 30px;\r\n            }\r\n            .comentario[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n                color: #FC947D;\r\n                font-size: 18px;\r\n            }\r\n            .comentario[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n                color: #E1914B;\r\n            }\r\n            .comentario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n                font-size: 14px;\r\n                margin: 0.2rem;\r\n            }\r\n            #comentar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n                color: #FC947D;\r\n            }\r\n            .user-review[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n                font-size: 22px;\r\n            }\r\n            .user-review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n                color: #FC947D;\r\n                margin-bottom: 0;\r\n            }\r\n            .right-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n                font-size: 24px;\r\n                color: #FC947D;\r\n            }\r\n            #actividad[_ngcontent-%COMP%]   .bordered[_ngcontent-%COMP%] {\r\n                margin-bottom: 50px;\r\n            }\r\n        }\r\n        \r\n        @media only screen and (min-width: 420px) {\r\n            table[_ngcontent-%COMP%] {\r\n                font-size: 16px;\r\n            }\r\n            table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n                font-size: 12px;\r\n            }\r\n            .user-review[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n                font-size: 30px;\r\n            }\r\n            .user-review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n                margin: 0;\r\n            }\r\n            .playlist-details[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\r\n                font-size: 16px;\r\n                color: #FC947D;\r\n            }\r\n            .playlist-details[_ngcontent-%COMP%] {\r\n                font-style: bold;\r\n            }\r\n            .playlist-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n                color: #FC947D;\r\n            }\r\n            .playlist-rating[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n                font-size: 20px;\r\n                color: #E1914B;\r\n            }\r\n            .playlist-rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n                text-decoration: underline;\r\n            }\r\n            .right-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n                font-size: 22px;\r\n                color: #FC947D;\r\n            }\r\n            .right-icons[_ngcontent-%COMP%] {\r\n                font-size: 16px;\r\n                color: #FC947D;\r\n            }\r\n            textarea[_ngcontent-%COMP%] {\r\n                height: 77px;\r\n                width: 90%;\r\n                background-color: #383B49;\r\n                border: 1px solid #FC947D;\r\n                border-radius: 5px;\r\n                resize: none;\r\n            }\r\n            .bordered[_ngcontent-%COMP%] {\r\n                border-radius: 22px;\r\n                border: 2px #FC947D solid;\r\n            }\r\n            .bordered[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n                margin-bottom: 0px !important;\r\n            }\r\n            .comentario[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n                color: #FC947D;\r\n                font-size: 18px;\r\n            }\r\n            .comentario[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n                color: #E1914B;\r\n            }\r\n            .comentario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n                font-size: 14px;\r\n                margin: 0.2rem;\r\n            }\r\n        }\r\n        \r\n        \r\n        \r\n        .card[_ngcontent-%COMP%] {\r\n            background-color: var(--dark-grey);\r\n            position: relative;\r\n            width: 210px;\r\n            height: 210px;\r\n            cursor: pointer;\r\n            float: right;\r\n            border: none;\r\n        }\r\n        \r\n        .card[_ngcontent-%COMP%]:hover   .card-content[_ngcontent-%COMP%] {\r\n            transform: rotateY(.5turn);\r\n        }\r\n        \r\n        .card-content[_ngcontent-%COMP%] {\r\n            height: 150px;\r\n            text-align: center;\r\n            position: relative;\r\n            padding: 5rem;\r\n            transition: transform 1s;\r\n            transform-style: preserve-3d;\r\n        }\r\n        \r\n        .card-back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n            margin-top: 50px;\r\n        }\r\n        \r\n        .card-back[_ngcontent-%COMP%], .card-front[_ngcontent-%COMP%] {\r\n            position: absolute;\r\n            top: 0;\r\n            bottom: 0;\r\n            left: 0;\r\n            right: 0;\r\n            padding: 10px;\r\n            width: 193px;\r\n            height: 193px;\r\n            -webkit-backface-visibility: hidden;\r\n                    backface-visibility: hidden;\r\n            transform-style: preserve-3d;\r\n            align-content: center;\r\n            border-radius: 10px;\r\n        }\r\n        \r\n        .card-front[_ngcontent-%COMP%] {\r\n            background-size: cover;\r\n        }\r\n        \r\n        .card-front[_ngcontent-%COMP%]::before {\r\n            position: absolute;\r\n            top: 1em;\r\n            bottom: 1em;\r\n            left: 1em;\r\n            right: 1em;\r\n            transform: translateZ(3rem)\r\n        }\r\n        \r\n        .card-back[_ngcontent-%COMP%] {\r\n            transform: rotateY(.5turn);\r\n        }\r\n        \r\n        .card-body[_ngcontent-%COMP%] {\r\n            font-size: 1.3rem !important;\r\n            transform: translateZ(3rem);\r\n        }\r\n        \r\n        .card-body[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n            color: #FC947D;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1wbGF5bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJRQUFRO1lBQ0ksWUFBWTtZQUNaLFlBQVk7WUFDWixvQkFBb0I7UUFDeEI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSxZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksY0FBYztZQUNkLGdDQUFnQztZQUNoQyxnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxnQ0FBZ0M7WUFDaEMsd0JBQXdCO1FBQzVCOztRQUVBO1lBQ0ksY0FBYztZQUNkLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxhQUFhO1FBQ2pCOztRQUVBO1lBQ0ksYUFBYTtRQUNqQjs7UUFFQTtZQUNJO2dCQUNJLGVBQWU7WUFDbkI7WUFDQTtnQkFDSSxnQkFBZ0I7WUFDcEI7WUFDQTtnQkFDSSxjQUFjO1lBQ2xCO1lBQ0E7Z0JBQ0ksY0FBYztZQUNsQjtZQUNBO2dCQUNJLGVBQWU7WUFDbkI7WUFDQTtnQkFDSSxXQUFXO1lBQ2Y7WUFDQTtnQkFDSSxhQUFhO2dCQUNiLFVBQVU7Z0JBQ1YseUJBQXlCO2dCQUN6Qix5QkFBeUI7Z0JBQ3pCLGtCQUFrQjtnQkFDbEIsWUFBWTtZQUNoQjtZQUNBO2dCQUNJLGNBQWM7Z0JBQ2QseUJBQXlCO2dCQUN6Qix5QkFBeUI7Z0JBQ3pCLGdDQUFnQztnQkFDaEMsZ0NBQWdDO1lBQ3BDO1lBQ0E7Z0JBQ0ksY0FBYztnQkFDZCx5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDekIsZ0NBQWdDO2dCQUNoQyxnQ0FBZ0M7Z0JBQ2hDLGlCQUFpQjtZQUNyQjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIseUJBQXlCO1lBQzdCO1lBQ0E7Z0JBQ0kseUJBQXlCO2dCQUN6QixtQkFBbUI7WUFDdkI7WUFDQTtnQkFDSSxjQUFjO2dCQUNkLGVBQWU7WUFDbkI7WUFDQTtnQkFDSSxjQUFjO1lBQ2xCO1lBQ0E7Z0JBQ0ksZUFBZTtnQkFDZixjQUFjO1lBQ2xCO1lBQ0E7Z0JBQ0ksY0FBYztZQUNsQjtZQUNBO2dCQUNJLGVBQWU7WUFDbkI7WUFDQTtnQkFDSSxjQUFjO2dCQUNkLGdCQUFnQjtZQUNwQjtZQUNBO2dCQUNJLGVBQWU7Z0JBQ2YsY0FBYztZQUNsQjtZQUNBO2dCQUNJLG1CQUFtQjtZQUN2QjtRQUNKOztRQUVBO1lBQ0k7Z0JBQ0ksZUFBZTtZQUNuQjtZQUNBO2dCQUNJLGVBQWU7WUFDbkI7WUFDQTtnQkFDSSxlQUFlO1lBQ25CO1lBQ0E7Z0JBQ0ksU0FBUztZQUNiO1lBQ0E7Z0JBQ0ksZUFBZTtnQkFDZixjQUFjO1lBQ2xCO1lBQ0E7Z0JBQ0ksZ0JBQWdCO1lBQ3BCO1lBQ0E7Z0JBQ0ksY0FBYztZQUNsQjtZQUNBO2dCQUNJLGVBQWU7Z0JBQ2YsY0FBYztZQUNsQjtZQUNBO2dCQUNJLDBCQUEwQjtZQUM5QjtZQUNBO2dCQUNJLGVBQWU7Z0JBQ2YsY0FBYztZQUNsQjtZQUNBO2dCQUNJLGVBQWU7Z0JBQ2YsY0FBYztZQUNsQjtZQUNBO2dCQUNJLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVix5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDekIsa0JBQWtCO2dCQUNsQixZQUFZO1lBQ2hCO1lBQ0E7Z0JBQ0ksbUJBQW1CO2dCQUNuQix5QkFBeUI7WUFDN0I7WUFDQTtnQkFDSSw2QkFBNkI7WUFDakM7WUFDQTtnQkFDSSxjQUFjO2dCQUNkLGVBQWU7WUFDbkI7WUFDQTtnQkFDSSxjQUFjO1lBQ2xCO1lBQ0E7Z0JBQ0ksZUFBZTtnQkFDZixjQUFjO1lBQ2xCO1FBQ0o7O1FBQ0EsYUFBYTs7UUFFYjtZQUNJLGtDQUFrQztZQUNsQyxrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSwwQkFBMEI7UUFDOUI7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2Isd0JBQXdCO1lBQ3hCLDRCQUE0QjtRQUNoQzs7UUFFQTtZQUNJLGdCQUFnQjtRQUNwQjs7UUFFQTs7WUFFSSxrQkFBa0I7WUFDbEIsTUFBTTtZQUNOLFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtZQUNSLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLG1DQUEyQjtvQkFBM0IsMkJBQTJCO1lBQzNCLDRCQUE0QjtZQUM1QixxQkFBcUI7WUFDckIsbUJBQW1CO1FBQ3ZCOztRQUVBO1lBQ0ksc0JBQXNCO1FBQzFCOztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixXQUFXO1lBQ1gsU0FBUztZQUNULFVBQVU7WUFDVjtRQUNKOztRQUVBO1lBQ0ksMEJBQTBCO1FBQzlCOztRQUVBO1lBQ0ksNEJBQTRCO1lBQzVCLDJCQUEyQjtRQUMvQjs7UUFFQTtZQUNJLGNBQWM7UUFDbEIiLCJmaWxlIjoiZGV0YWlsLXBsYXlsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgICAgIC5wcmltYXJ5LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRlc2t0b3AtZGlzcGxheSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1vYmlsZS1kaXNwbGF5IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFibGUgdGgge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRkM5NDdEICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYmxlIHRkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRkM5NDdEICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFibGUgZmEtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGFyIDpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5maXhlZC10b3Age1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZSB0ZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGF5bGlzdC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGF5bGlzdC1kZXRhaWxzIGZhLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNFMTkxNEI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGF5bGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1QTY2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZDOTQ3RDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2LXRhYnM+bGkuYWN0aXZlPmEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzQjQ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZDOTQ3RDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdj5saT5hIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NUE2NjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGQzk0N0Q7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhYi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzQjQ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3JkZXJlZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkM5NDdEO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29tZW50YXJpbyBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb21lbnRhcmlvIGZhLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNFMTkxNEI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbWVudGFyaW8gcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjY29tZW50YXIgaDIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItcmV2aWV3IGZhLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLXJldmlldyBwIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHQtaWNvbnMgZmEtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjYWN0aXZpZGFkIC5ib3JkZXJlZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlIHRoIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1yZXZpZXcgZmEtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItcmV2aWV3IHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGF5bGlzdC1kZXRhaWxzIC50eXBlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGF5bGlzdC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBsYXlsaXN0LWRldGFpbHMgcCBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGF5bGlzdC1yYXRpbmcgZmEtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0UxOTE0QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGxheWxpc3QtcmF0aW5nIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0LWljb25zIGZhLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0LWljb25zIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzQjQ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZDOTQ3RDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm9yZGVyZWQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4ICNGQzk0N0Qgc29saWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvcmRlcmVkIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbWVudGFyaW8gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29tZW50YXJpbyBmYS1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRTE5MTRCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb21lbnRhcmlvIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLypmbGlwIGNhcmQgKi9cclxuICAgICAgICBcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2FyZDpob3ZlciAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC41dHVybik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2FyZC1iYWNrIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2FyZC1iYWNrLFxyXG4gICAgICAgIC5jYXJkLWZyb250IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOTNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOTNweDtcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jYXJkLWZyb250IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNhcmQtZnJvbnQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxZW07XHJcbiAgICAgICAgICAgIGJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAxZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigzcmVtKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2FyZC1iYWNrIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC41dHVybik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooM3JlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jYXJkLWJvZHkgZmEtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailPlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-playlist',
                templateUrl: './detail-playlist.component.html',
                styleUrls: ['./detail-playlist.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../left-navigation-bar/left-navigation-bar.component */ "e690");
/* harmony import */ var _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../playlist-item/playlist-item.component */ "B3SX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../music-reproductor/music-reproductor.component */ "LdFH");







const _c0 = function () { return ["/song/detail"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 64, vars: 54, consts: [[1, "row", "d-none", "d-md-flex"], [1, "col-3"], ["id", "body", 1, "col-9"], [1, "row", "my-5"], [1, "title-row"], [1, "row"], ["url", "https://cms-assets.tutsplus.com/uploads/users/114/posts/34296/final_image/Final-image.jpg", 3, "routerLink"], ["url", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440", 3, "routerLink"], ["url", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCRgXGCMaGh8lIyciJyclJSUlJyUfJyUnJyUlJSUlHyUlIB0lJR8lJR8lHyUdJR8eJR0lJR8lHx0fHx8dHR0BCAUGERIREhISEhITEhUVHRgTFhUVFRUXFRUWFxUXFxUXFRcXFxUXFx0WFRcWHxcXHR0dHR0VFSElIR0lFx0dHf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIEAwYFAQcCBAcAAAABAAIRAyEEEjFBBVFhBhNxgZHwIjKhscHRByNSYnLh8RVCFDOywhY1Q1OCkqL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QAMxEAAQMCBQIEAwgDAQAAAAAAAQACEQMEEiExQVEFcRMiYYEUsdEVMlKRocHh8AZC8XL/2gAMAwEAAhEDEQA/AOSFIKcISCE6UJtApcIlEKUlApSNEITaKEuFt+EYFlCl39QfFGYfyt2j+Z3PYERclUXdwGCdSTAHJWrp1kajoBgAS4nQDlZqjwLEPEimR/VDfuQfomcTwivTEuYY5i48yJ+sKxxPaKs8/Cco5AAnzJBv6Kx4R2geXhlUg5rB2hB2Bi0HTp4Kh9SsBiwtjiTP0WplC3Jwh7wdA4gYfy1hYxCFrO0XCgz96wQCYcNADzHIHcbHxVNxDhb6BAeWnNpBnTyHNXULprg0g66Dtqst5YPpucCPu6naDoVVwjIVm3hjzS774cvjfWNPP0U9/ZqsNTTHi8fomdcNGrhx7pWWbzo06T7HdZyEcK7pcArOc5oyywgOl0aiRHMJGJ4JVptzEsIkCQ4HWwnp1R8Q2YxCVBs3xOExz21VQjVljuEVaABeBBtIIN+Rj6c00zAvNM1RGUGDcTNttdwmbVaRIIjT3SOoOBgtIMTEbcqEQjhGhCdVpMI0EcIQgAgjhGgBCSiSklCESIhGiQhHCJO2QUwhSiE2WqQ4JuE5CWUzlRFqfhIIUQplNQlAJcIQohEpvKujcfZ+4eBtHoCPwuewt7w3FtxFLI7UNyuG5ERmHlryPiFzustIwP1DTmux/jlQHxaehe2G981zwBERF1cYvg9WmYylw2cASD6TB6FSOG8DqPcC9pawG5Igkcmg3JOnIalanXTMOLECO6w07Kpjw4XTMaFajjl8O8nkD5yD91R9qx8VPwP/AGp7tJxAEd03nLo25D89LJh/E6FdjRXDg5u7frHjFwRroVzbCk5oY+CRJMAZwQBp7LtdXuGONSniaDhaJJyJaZIlBn/lx/qP/U1WfG8PQe5nfVCy1oEyLTeLKqxPE6Bw5osa5o2mDuDJM6nflZPcQ4jha5BeKlpAiBY89U4pOxTDh5nHICYIEKrxmYC3ExxwNGZMSCe3KHZsCK17Wv0+O/oqHGYeg1o7qoXyTIIywLRZXWD4lhqZeA1wa4NAGpsHSSSdSXeFlAq/8IGnIKhdsXaC4k2iTGgKtpg43GHwYjL0GqorFvhsbLJGKTJkZzlzK1eKxjHVnYeoBDgIPMnYnnN2nY25KoxfDzQwlRhMg1AQeY+H0OxHPoqnjOLZWq52TEDWxtPU9FJr8V73Dlj/AJgW3/iHPxG/Ox1lJTtXNDCNCRiHBG/1T1r5jvEDtQCKbuQf9T+yzsIi1OwhC6i4iahHlTsIQhEpuEMqcRwhEprKkwnoREIhEpmEmE8QihRClIyoJ/KgpUSprmpstUkhILVoc1Z21ExlQLU9lSS1KWpg9Mwjyp3KhlUYFONMkJdN5aZaSCNCEvKhlQ6mpbU41VxS7RVm65T1gg/QgfRXXD+NtqWd8Luuh8Cd+h8isYWosqw3PSKbhkMJ5C6Vp1+q0iXYhuDuFpMZ2bkzTIA5Om3gYNvH1KjYLCYVhIqvDjyGYNH/AMoGY+gHVU2d0RJjlJj0TeVDLN+HC6oY2IEH80VeoUsWJtIA7hxkewVpj34cAtosknVxJMdGTz3PKw1TFJ0UKnwtJBaAS0EjNmmDrsPDZQsqGVXNtYbEk56nMrOb2XF0AZRAyC0dbDUc7w0XFSiIIAABPxBpkkg72CrOI4ea2RoiTA+FrNXECzSRH82pVfkQyJadqRvOSerfgiMIGc5e6vcRhaJFQs/3BxpjdvdkZ5/qj4eYKmDC0szwWt+cACBf91OVpkZSXXB523hZfIhkR8GfxH+x9FI6iPwAf0/VWlPBM7i5HeEGoBecrbRpEkZnQSDZtrqUMLNdrO7b3eYBpj5mwYJdvmHxG+uwiFRZUMqk2x/FP7dkovm5eWI/WOclZ0sLGHJcz4sxE5MxAyNNzIyi8zBVRlTuRDKrKNIiZzkyqbm5DogRAhNZEWVPZUMqfCqcSZLUWVPZURaoLUByahJDU7lR5UEJsSGUIkeVEhRi9VZ92m8inGmiNNdI0Vwm3pULIk5VM7tF3aU0E7b4qJlQyqT3aPu0CgmN8ouVDKpPdosiPAUi+UbKiyKTkQyJTQTi+UUtRZFKyIZEvgpxeKNlQyqRkQLEGgpF6FHyoZE/ZR674MexzVVQgbq+hicdI7pWVDKktDjpf3b3KkQim4FFcObqmciGVP5UITuYFSK54KYyoZU9ZGBKBTUGueCmMqPKn8qGRT4KT41RsqGVSciLKlNFML4KNkQyKVlRimo8FHxwUXu0FO7lBT4KT7RCsixIyKa5qQ5q6oYuEXqGWIsikwiLVPhqfEUbu0MilZEMoCV4A1yVtFjnaAlRe7Rd2pLy1tyVW1caP9vv+yzXF41u8rfZdKqO2gJ34ZiboywDWyhurZotpsL35k3keij1W1PLpy5Lnu6ofRdln+PtifN7Zq0Y0EwPT9EJGlrmExhMITcfoQplShlMi4OttD7uD5LHX6i5x7ey6Vl0RjActdznA9E2+kNCb8lBfRykibb/AJUhzwSTOkex90zi61iRFiR5e9Vc69Ltlnb0ljBkSRv359FFe4G2pufQW/vCqnkEkt187fj3ok1cQCR0Rd5r19+nVISpEDRLwtV2afOCrE4weJ2+3QnxJsqIghCq8kySoRiyVq/Gkax5JlmMJBk620UIVOYSC4QplQrRnEBYEX3I9++St6BJAIFjossyN1oMDWaBlO2myso1SCqbi3DgVaZEMiOnsPe89Y5J8tXUouxBebv6JYY22UbIhkUjKhlTmms3jKNkS2NTsI2hQ2modVRQgn8qCfCq/EVk9ibLVZOpJo01uaFWQVX5UYpqcKSh8RZDImPHcxoqOoXIY0nfbutvRunmq8DbfsP7CqG4x5cYsBMACSepsfHYBRzjXi5Oo52Frz9/tsqvEYhzdt9VAqYlxOvr9l5upUc4ySva0gxgwtbEK3xOLBGsbW97j1uozOv+VUZjMqypCbBI4KadSTor3Cupjb+30P2VsyD8rh5gGffgsVmewwBP6dVI4fizJAJ6D8D9Fmq285grdRvgIBEbLbOqtIu0Ajcb+F4PUTPQqDidi2L+YJ1ymbtO489dVU4nGAXBMHzg89v1g72g8Pj5BafHxi8+l7b35g1soEZq59205aFQMfSykPbodff3Cg1W5xIdfcaK2x5EWMA7H8dd+vNZphjXTmPcLXR0XNuzB7oGg4XhFVHSEt7o0TZfKtWYpGY6JLr6oigUJUSOLJbaZ080HNQpSQCpFOt0H2SA4gQkyhCusLi8xkmwi3pcjf8ACv6TSCNYI0ufXX7rE0njNK1fD3ufBlsXAGh9LTy1OyutKkFZ+oUcTTppnltCtcqLKltOyWGrt0yCJXj7lhaYKZLUprU5lSmhThVRek5UE9lQTYVC07qSadSVmaSaNNAqLqGh6Kix1YU2zubN9+7rIcXxcgHf1B8tvD0Wg7TiA2DfX8ehm48CufVAXarh9TrFzyJyGy9P0egGUhA8zsyUTPidf39k1WPTwT7aZiU82kSLrKStLaROyradIq9wwiNE5Rwku09wpFTAOZFrKmrWBylbbSxcM4UmrSluuuoHvT0VIMKWPDuqvsO86RPj+FMdh3m8R43P6rOLjDwt9WxxwY0WQqUnHRKw1M942+mvQTP2laKthnERfzhv0H3J8lHdSyggCSd49z9vFWi5WU9MIM5/3hU+Pf8AAAPen+FRiRpK0DsOXEgjwUPEUS0adCP7q+m4aLDd0Hfegwq+oJExEa7KPCXUCbViylCERKtMHwqpWHwCUxisC+lZ7SEoqCYkTwnNB0YsJjnZRA5LzSkoiEyRLDkbmXtJA6JI0lHTqkeaEJRiYHkrGk95AaIF9feniqmCnaL76lClpWxwrzmM3cNb8/eqvcqzvDIqCMpEGZkQPG035X8Vqsi6/RycJXnP8qpjGI1hRnBOspp0sUqlSstxK49KjJUTukFYd2goxq34Vaw0006mrPu026msYqrvmgub9sKWXI7nI9IWDpySAN7BdT7a4WcPnH+xw9Db7wuf9l6PeYps7AlcjqjsJc70ldzpXmwN9Y9v+LXcO7K5ru/RXFbsowm1h7+i2mDYIVsKQK4LXPdniXdq3QZkGiFgm9mgId5qTU4JnmRb3pyW9a0aI3NCsFqdcSp+13cBc7ZwNosBHipTeHdFr30QSgMOFX8ITurftUwsRW4SDsojeAWJjp+F0A0AirMACPhSJzUjqp4XNK/Asrg4DpCoOI9nXOMgG67BVpAm6lswjd01EPnI6cqa160thzZlefqXY2q8wr/Cfs5vLyuzMw7RsniBC0k1Dq6OwWHxKYPlpj3z/hYzBcDZQbDQsp2u4eHUSY+UErptcLEdpn/uy0RLrD8/RY2CHgznK30amMEHQjRcQbQB0357Jg4UixWxw3ZypmBBEchcx46eUq9rcLBytf6WEnYEx+V0337Qcs1ho9FcQZ8p2XLHNgxCaK3XaHhWVzarBqAYWOxDIdHJX0KwcAQsF9Zmm4g+x5TdKqRI5oOYRdNJRdZWLPKtsHj3NcMsX+aZgxOviLLqFH4mh3MA+olchwtDM9rScoJ15Dcrs/D6EUWDk1v2W/pL8yFzutUZAO6Z7pSqNNP92n6FFb31Fy6NDNRu7QVl3CJVeJ6q/wABafIiLFMFNEaaxCoungVHxPAd9RfT/iaQPHUfUBct7M0cuIjofvC7cKS5txegzA4rvj8rwSALQZEjw1PmsXV24mHsun0FwD4PstvhAr2m1Yfhvaig8xMFbTD4lrhIMrj2rYyK6PUWnWMlICOOiTnCqsZxylS1PkFpxALLTpOcchKsyEtsLN/+I6ZvMKTR4vSebOHhKVtYK59k8agq7LU1iKUhIbWBhNVcWGi5A8Uz3iFUyk6ctUMikNCrW8RadCCpNPEgqqmRKtqUnbhS0RRCq1NVa4AVryI1VTGGdFGrrPY/A96LQCNJvtEHoforHEcRpN+ZwHmo1HF03/K4HzWGrMyulbNIGiq+H8Je0kviTy0tz5nmU/iuG5pBAIOs3V9ReE9Vc2FDac5ynN46dFzrtNwp9RjBSIbl1BtaLaDaFyjimBLHSd16GxeGzhcq7W8Ly083IrT06uQQ06KrqFuHU3OzxDP8vRc4Jk3SjvGngks18EfenmusvPqbgK0G4JtYC9/059CV27g2AyYdtoBv63/wOULjmFrOcBTZOcuGQiGgGLknXcjUACSV6L7I4FzGHNnNm3qCCHGc7RYSAbhwgGY2lPRq4TIRWp4mwdJVO/DkK04Xgw+QVqsTgGv6Qk0KDaegV77uQslOzgzsoP8ApLUFb96ESz+KeVp8EcIhhQm34Y7KWHpWZAegtVWaaw3brAl7KT4kNcZ8/wDBXSnEKo4zTDqLgdoPoR+Ely84T2V9hk9p9fmuQ1Wd5Sc+nh2ANgCZzOvBIgiAPNWHB3V6TQ4tIExF9OYBkjXnzWmwWBDHS0e+is8QwZb72XGNQEZD5r0LqkOiZB1CsO6lk81mcTw//dlnqVqtGAJDaWayatQmO36rJbXRbJ2n9FyfiGAxDAC2mwtdP+0kg7Cduel9An8N2YqDK54hxEwCfh/Ta14XSWYJwNiQpf8Aw4aJkqzDLYiOSrDfw6Zmds1WcFoODYdqJCzvFeHvrFwuQNI5+S2eCd8xUGm4FzhzKqLcm58qKNwQ95gLjeP4ZiqQDqYdBkWJJB5GNJ1/K0GGOMoFoqHNImNT1B6jkuhuwJBkEhMuw2XUySprPMQW+6tpV24iZmf9dkrDgmnmWG4ma9Z+VhLQTEzE8/IfVdFdDaPkoeDpgtypMEFvMbqKFcQ8kZTHYLluF7K4nv8AIT8M3fYiOcmfSVf4bs/lfEBxGhAifSy3H+mQZn36qXh6AZdW1Wl2uXJS07wNmDi4BnVU2Bw79DsstxXiFdznU6QuJv8Aj8DmV0VjvjVY0BrnDrPqqm0wI37qadzJcSNso2XGaL8ecziXANuZn08fJVHGsVUNMFzj8WxXZ8fhXPGVsXtuuZdu8G2i2m0cz9AtNvWlwED2SXbIpOOIkxz6hc2SmhJKca0rpLgKbhsQ6m4ObLXgyCOv6i3UFeoezHFHVcMxzwQYiYiY3FzbadyCV5t4Rwt2IeABDRqRb/JXqPCYVrGNY0QGgADoAolWxl8lO79Aw5IbTCIkBBKSErI3mgmc4RoxKVPRFOoEKQlUchRcVRLmObzBH0VhlSS1BCljoKyWBdIlJxT5e0e7I2NyPezk4x4G4+8KPVrta9pduYC4jxBw+q9BSzOLkSPyV7iPlCYpYgSk43GsDblR+HvZVdLTIA1Gk8loeZcAFmZT8hLgQFfteCo2Nf8ACmy0tNtFFxziWGNU1WrkQRmqaFDzAzlKfwuh8FUSQ5U1PjFZoLMknnp6osJUrvfDm76jQfX8LK58hoGy6dOzILiSI7rdTZVGNcpr3QFScTLyyadyFbcPyhZLKlmrPFN/dBQsGb3VLiO0ZqUgymz95plOx3vy6qy4UyqL1QBbYzdJUHmEcQtDaRax2KBmYzzK0rqllCfWTRfKjYrNTAeBPMDXxT1ahKz0aAn1OimUZzKqq1IxBHQe/qpvD+JU37wRqDZMY2tTztgiT7n8Ktw8uu6upAh5BadIUqrUDWyvP/bbiRq4jLswfU6rr/GcaKdJxOwXnXEVS9xcdzK09MZJLuFm6s7CwN3cf0H8pLKTiCQLDXpKlYOhnkQ9xAkBon15DqkUazmXGh15EcjzC0+A4PXbUL2Uw/KGuy3I+O7flJmBe/K4my6JXLpsn910r9m1KiKOUEF9y9psW3EQCAY5kWkLqMrn/ZrAF7KdQ1S7IbAsYx7XCQ5jyGyRzEibSFuAUhcmqDNP50266TCepsSzKVM5UFPyjkiRgUSpSSSiQVkpURchKCJEoVBxBkVWu/jGXzFx6gn0WK4yW/JV+EbO2nx2810fiGE72mWix1aeThofDY9CVisSDVEEQ4WPRw1HX8hc7qNODi5Xb6DWByO3y2+ireHcPLoL6gcB1BELXsx2HotyhzQOQWRZgCP/AE2eVlbYei8Wytb4D+wVFGrHdb7+i12rsuJA+qtWcTD/AJQSOcH8wk18W1vzEDxsnqJyqJiA07CeolFR55WKnTbigDLuoYxlAujMJShxWi2fiHnZNOLojug7xj8hNinm1pNHoR9koMZz+i2eG06zH/ofJWAxwcyQZ8Lqvw/GaTpGa+4vIU1hA0AHlCq8ZhBOYNv4aqC9RRptJg5KbSFHNnGvgixPGaTBLjHiqYtaT/yjPp9Mw+ylYfhjXHM5o6W/spLoH0VrqLdSTlpopuC4iHDMJjnBVl/q9GILk5RtZM13gaiekSrKZhY3hrjofSD/AAsxxfDUDme14E6XgrOYBgYc2aToLytnXfRM/AAfAKiDmteXEANbfzSYtl0KY8ucyOYVB254gWjuxuuVMdCuOO8UNes52yp2ldS0pYWgLzHVLjG88DIJ+nEidJuu1dhK3eBxzAVC4FwiQWhvwxdsane9gRZcbYbfCRfVpjbe/wDlaHs5SxLX98wPDW/M5sxAj11Hw362VrgqqM6cr0XgeHmnmJMl7i91oEkAWv081ZimFW8J4k2vTDhOgN+u/n5RuFaFKQh8zmktYnD0SQCl3SpShfkiR3QUyolPoFKhCEyVIQSoQQplJhZvjeDLf37dvnA3H8UcxvzHgn+Mdp8Lgx++qAH+EfE7/wCov5mAuP8AaD9qFWuDSwze7DrZyZfHSLNnzPUKKlKRB0T29YtcCF1TDYprgFZU8Q3kvO+A45XpfC1xIHO6vqna/EEWyj1/VYhSc3grr+E1+YJC7HicQ0CeSzmG4nTqOOUixXMq/Ga1aznW5CyFB7mGWmD0VNdk6nNarW2AELtbawRVqzVzOn2iqAQ5oPqP1UPE9pKpENgddVDcWkBT8CJmVquJ8Zp0iATcn6c1pMNVa5oOq4i5hqGSSSrnAcZq4cQLt5HbwP4U+BHqd09WlIXZqThCZe8CVzM9ryRZpHmomI7V1i0hoA6m/wBP7piCcoVAs4zldKwlYEz1VpmbGy4fg+OVqR1zDW6vWdsp1afJSxpG0orW4J1hdAxIbyC4/wBsuLZf3TDc6+H909xXt3YtptM8yua4nEOqOLnGSVbaWpnE4Qsl9fBrSxrpJ1OwH1TEowUSC3LjpzMrrh3GX0vhJdkNnNBiRyPQ6GIJG6oglIUtdC9Cdne2ODJMvc0uIAa4R6RYCTAE2AC6UCvGGZbLgHbrFYMgZu8Zux5m38p1b9uiUtTOfK9Po2kLP9nO1OHx7JpmHD5mH5h+rf5h5xor8wlIQCnrIJmUFOJCXicXTpDNUe1o5uIaPrCyeL/aFw6nbvs39Ac76gR9V5jxWMq1TmqPc883EuP1lRSnhIu+4/8Aa5QbajSe883Qwf8Acfsud8V/aJjsRID+7adqfw//AKu76hYZEiUJbnEmSZJ1JuUgFBAhCFrKdMOaHN39wptChIWUwOOdSPMHUe91uuF12VbsPi3ceX6LJchw7Lv9LumOyyDtxyjo4Eqzp4Wys6WkEKQBGgWCpUJXXawLOVKBUJ9C6t8Q0yogaSU1N6lzUjDYVLxGFCtKdOyU6mHbpXPMqMIWTfh0ybarR1MOFT4pkawB1V9Kos9URmqypWnQKuxuKyDLv71R4vibRanc/wAW3lzVA5xNyttGn6QuL1C+GYaZPOw7JJcSiQQVy5aCEII0IQhAhGgAhCKESWghCdw+JfTeHscWuBsQYI8wu19lf2k54pYuJ0D9J/q2nruuHQiQQhevf9dw3/uN9QgvI3eHmUSjCFMpTt0kokExUJSJEgoQlO1QKJBShEpvDf8Amt8Qggq6uhV9j99vdds2Cbd+EEFxgvZFM43QeCh0NUEEN0QpbU09BBTv7pHqHW0KxHaHZBBaLP7ywdX+45ZZKRoLprzBSEYRoIQgiQQQhGjCCCEIkEEEIRoigghCNBBBCF//2Q==", 3, "routerLink"], ["url", "https://i.mdel.net/i/db/2019/12/1255378/1255378-800w.jpg", 3, "routerLink"], ["url", "https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg", 3, "routerLink"], ["url", "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/square/7aacc5-20130508-favorite-album-covers.jpg", 3, "routerLink"], ["url", "https://cdnb.artstation.com/p/assets/images/images/008/182/951/large/daanesh-bhathena-havana.jpg?1511017220", 3, "routerLink"], ["url", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/122479313/original/fb299ab659967e07941d3f226232c2b8bb603cd4/design-contemporary-and-inspirational-gospel-music-cd-cover.jpg", 3, "routerLink"], ["url", "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Janelle-Mona%CC%81e-Dirty-Computer-.jpg", 3, "routerLink"], ["url", "https://media2.fdncms.com/metrotimes/imager/u/original/12866616/30705662_10156360310319661_3257475992410652672_o.jpg", 3, "routerLink"], [1, "row", "mt-5", "last-row"], ["url", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LBoDI4mNDwcXwf1mMrHG5cIdxn8QRpLjOQ&usqp=CAU", 3, "routerLink"], ["url", "https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/master/pass/Artist-Designed%20Album%20Covers%202.jpg", 3, "routerLink"], ["url", "https://www.digitalmusicnews.com/wp-content/uploads/2020/04/DaBaby-Blame-It-On-Baby.jpg", 3, "routerLink"], ["url", "https://s29588.pcdn.co/wp-content/uploads/sites/2/2020/03/2Album-Covers-Censored-Audiences-Abroad-Featured-Image-1.jpg.optimal.jpg.optimal.jpg", 3, "routerLink"], ["url", "https://i.pinimg.com/originals/c7/5f/1e/c75f1ebd545adaa7e3622a010c388e35.jpg", 3, "routerLink"], ["id", "mobile"], [1, "mt-5", "pt-4"], [1, "last-row"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-left-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Novedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-playlist-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-playlist-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-playlist-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-playlist-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-playlist-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Recomendaciones para ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-playlist-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-playlist-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-playlist-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-playlist-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-playlist-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mas escuchados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-playlist-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-playlist-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-playlist-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-playlist-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-playlist-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Novedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-playlist-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-playlist-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-playlist-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-playlist-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Recomendaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-playlist-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-playlist-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-playlist-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-playlist-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Mas escuchados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-playlist-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-playlist-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-playlist-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-playlist-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-music-reproductor");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c0));
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["LeftNavigationBarComponent"], _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_5__["MusicReproductorComponent"]], styles: ["#body[_ngcontent-%COMP%] {\r\n    top: 6.5rem;\r\n    margin-left: 30%;\r\n}\r\n\r\n.first-carousel[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.last-row[_ngcontent-%COMP%] {\r\n    margin-bottom: 30%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n@media only screen and (min-width: 420px) {\r\n    .last-row[_ngcontent-%COMP%] {\r\n        margin-bottom: 15%;\r\n    }\r\n    #mobile[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .title-row[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n    }\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 35px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .last-row[_ngcontent-%COMP%] {\r\n        margin-bottom: 15%;\r\n    }\r\n    #mobile[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        margin-left: 8%;\r\n    }\r\n    #body[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNkVBQTZFO0lBQzdFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5IHtcclxuICAgIHRvcDogNi41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuLmZpcnN0LWNhcm91c2VsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGFzdC1yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzAlO1xyXG59XHJcblxyXG5oMSxcclxuaDIge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAgIC5sYXN0LXJvdyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gICAgfVxyXG4gICAgI21vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50aXRsZS1yb3cge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC5sYXN0LXJvdyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gICAgfVxyXG4gICAgI21vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIH1cclxuICAgICNib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "B3SX":
/*!**********************************************************!*\
  !*** ./src/app/playlist-item/playlist-item.component.ts ***!
  \**********************************************************/
/*! exports provided: PlaylistItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistItemComponent", function() { return PlaylistItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlaylistItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlaylistItemComponent.ɵfac = function PlaylistItemComponent_Factory(t) { return new (t || PlaylistItemComponent)(); };
PlaylistItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistItemComponent, selectors: [["app-playlist-item"]], inputs: { url: "url" }, decls: 8, vars: 1, consts: [[1, "item"], [1, "square", "d-flex", "justify-content-center"], ["height", "100%", "width", "100%", "alt", "", 3, "src"], [1, "text-center", "pt-1"], [1, "label-name"], [1, "label-artist"]], template: function PlaylistItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nombre de la cancion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nombre del artista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.square[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    border-image-source: linear-gradient(180deg, #FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n}\r\n\r\n.label-name[_ngcontent-%COMP%] {\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 12px;\r\n    text-align: center;\r\n    color: linear-gradient(180deg, #FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n}\r\n\r\n.label-artist[_ngcontent-%COMP%] {\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 12px;\r\n    text-align: center;\r\n    color: linear-gradient(180deg, #FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n}\r\n\r\n.square[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: 0.3s;\r\n    z-index: 0;\r\n}\r\n\r\n.square[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7));\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .item[_ngcontent-%COMP%] {\r\n        width: 90px;\r\n    }\r\n    .square[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        height: 88px;\r\n        width: 88px;\r\n    }\r\n    .label-name[_ngcontent-%COMP%] {\r\n        font-size: 10px;\r\n    }\r\n    .label-artist[_ngcontent-%COMP%] {\r\n        font-size: 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 420px) {\r\n    .item[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n    .square[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        height: 115px;\r\n        width: 120px;\r\n    }\r\n    .label-name[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n    }\r\n    .label-artist[_ngcontent-%COMP%] {\r\n        font-size: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlsaXN0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCw2RUFBNkU7SUFDN0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0ZBQXNGO0FBQzFGOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InBsYXlsaXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zcXVhcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbn1cclxuXHJcbi5sYWJlbC1uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbn1cclxuXHJcbi5sYWJlbC1hcnRpc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxufVxyXG5cclxuLnNxdWFyZSBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5zcXVhcmUgOmhvdmVyIHtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC43KSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC5pdGVtIHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgIH1cclxuICAgIC5zcXVhcmUgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLWFydGlzdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KSB7XHJcbiAgICAuaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnNxdWFyZSBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1hcnRpc3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist-item',
                templateUrl: './playlist-item.component.html',
                styleUrls: ['./playlist-item.component.css']
            }]
    }], function () { return []; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JhbL":
/*!************************************************************!*\
  !*** ./src/app/detail-podcast/detail-podcast.component.ts ***!
  \************************************************************/
/*! exports provided: DetailPodcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPodcastComponent", function() { return DetailPodcastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../left-navigation-bar/left-navigation-bar.component */ "e690");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../music-reproductor/music-reproductor.component */ "LdFH");








function DetailPodcastComponent_tr_67_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 26);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.faChecked);
} }
function DetailPodcastComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailPodcastComponent_tr_67_fa_icon_6_Template, 1, 1, "fa-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ep_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ep_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ep_r4.seen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faDots);
} }
function DetailPodcastComponent_div_75_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faStar);
} }
function DetailPodcastComponent_div_75_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r6.comment, "");
} }
function DetailPodcastComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " puntu\u00F3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailPodcastComponent_div_75_fa_icon_7_Template, 1, 1, "fa-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailPodcastComponent_div_75_p_8_Template, 2, 1, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r6.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r6.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r6.comment != "");
} }
function DetailPodcastComponent_tr_128_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 26);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r12.faChecked);
} }
function DetailPodcastComponent_tr_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailPodcastComponent_tr_128_fa_icon_6_Template, 1, 1, "fa-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ep_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ep_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ep_r11.seen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faDots);
} }
function DetailPodcastComponent_div_131_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r14.faStar);
} }
function DetailPodcastComponent_div_131_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r13.comment, "");
} }
function DetailPodcastComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " puntu\u00F3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailPodcastComponent_div_131_fa_icon_7_Template, 1, 1, "fa-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailPodcastComponent_div_131_p_8_Template, 2, 1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", comment_r13.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r13.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r13.comment != "");
} }
class DetailPodcastComponent {
    constructor() {
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClock"];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShareAlt"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faList"];
        this.faDots = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisH"];
        this.faChecked = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"];
        this.comments = [
            {
                username: "loki",
                stars: [1],
                comment: "No me gusto para nada, la chica que habla es super irritante. "
            },
            {
                username: "hulk_123",
                stars: [1, 2],
                comment: ""
            },
            {
                username: "natalia_vytas",
                stars: [1, 2, 3, 4],
                comment: "La verdad me gusto muchisimo. Muy buen podcast "
            },
            {
                username: "thor",
                stars: [1, 2, 3],
                comment: "No soy muy fan de los podcast pero este es bastante entretenido."
            },
        ];
        this.episodes = [{
                name: "Arte como forma de vida",
                seen: true
            }, {
                name: "Creatividad y mi yo creativo. ",
                seen: true
            }, {
                name: "Bloqueo de artista",
                seen: true
            }, {
                name: "El desarrollo del ser",
                seen: false
            }, {
                name: "Crear por crear",
                seen: false
            }
        ];
    }
    ngOnInit() {
        this.color = "#585A66";
        this.color2 = "#585A66";
        this.color3 = "#585A66";
        this.color4 = "#585A66";
        this.color5 = "#585A66";
    }
    getcolor() {
        return this.color;
    }
    getcolor2() {
        return this.color2;
    }
    getcolor3() {
        return this.color3;
    }
    getcolor4() {
        return this.color4;
    }
    getcolor5() {
        return this.color5;
    }
    clickAddTodo(n) {
        this.color = "#585A66";
        this.color2 = "#585A66";
        this.color3 = "#585A66";
        this.color4 = "#585A66";
        this.color5 = "#585A66";
        for (let i = 1; i <= n; i++) {
            if (i == 1) {
                this.color = "gold";
            }
            else if (i == 2) {
                this.color2 = "gold";
            }
            else if (i == 3) {
                this.color3 = "gold";
            }
            else if (i == 4) {
                this.color4 = "gold";
            }
            else if (i == 5) {
                this.color5 = "gold";
            }
        }
    }
}
DetailPodcastComponent.ɵfac = function DetailPodcastComponent_Factory(t) { return new (t || DetailPodcastComponent)(); };
DetailPodcastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailPodcastComponent, selectors: [["app-detail-podcast"]], decls: 142, vars: 50, consts: [[1, "fixed-top"], [1, "row", "d-none", "d-md-flex", "desktop-display"], [1, "col-3"], [1, "col-9"], [1, "row", "mt-5"], [1, "col-10"], [1, "row"], [1, "col-3", "user-review", "text-center"], [1, "card"], [1, "card-content"], [1, "card-front"], ["src", "https://images.squarespace-cdn.com/content/v1/5a7b4f21b07869771e2c1461/1573968639452-BZSMUKQRNR0ZVTEE9CH1/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Podcast_Cover.jpg", "height", "193", "alt", ""], [1, "card-back", "bg-dark"], [1, "card-body"], [1, "play-icon", 3, "icon"], [1, "star", 3, "click"], [3, "icon"], [1, "col-7", "podcast-details"], [1, "type", "pt-2"], [1, "pt-3", "podcast-rating"], [1, "pl-5"], [1, "label-podcast"], [1, "mx-4"], [1, "col-2", "right-icons", "text-right"], [1, "ml-3", 3, "icon"], [1, "mt-4"], [1, "mx-5", 3, "icon"], [1, "row", "mt-4"], [1, "table", "mt-4"], [4, "ngFor", "ngForOf"], [1, "col-10", "bordered", "mt-5", "pb-5"], [1, "row", "m-5"], ["src", "../../assets/small-pic.png", "alt", "", 1, "rounded-circle", "mr-"], ["name", "", "id", "", "cols", "30", "rows", "10"], [1, "primary-button", "text-center", "float-right", "mr-5"], ["class", "row my-2 mt-5", 4, "ngFor", "ngForOf"], [1, "mobile-display", "d-block", "d-md-none", "mt-4"], [1, "row", "pt-5", "mt-5", "podcast-header"], [1, "col-6", "text-center", "pt-5"], ["src", "https://images.squarespace-cdn.com/content/v1/5a7b4f21b07869771e2c1461/1573968639452-BZSMUKQRNR0ZVTEE9CH1/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Podcast_Cover.jpg", "height", "118", "alt", ""], [1, "col-6", "text-center", "podcast-details", "pt-5"], [1, "row", "container"], [1, "col-12", "text-center"], [1, "label"], [1, "col-6", "user-review", "text-center"], [1, "col-6", "text-right", "pt-5", "right-icons"], [1, "nav", "nav-tabs", "mt-3"], [1, "active"], ["data-toggle", "tab", "href", "#episodios"], ["data-toggle", "tab", "href", "#actividad"], ["data-toggle", "tab", "href", "#comentar"], [1, "tab-content"], ["id", "episodios", 1, "tab-pane", "fade", "in", "active", "mx-3"], [1, "table"], ["id", "actividad", 1, "tab-pane", "fade", "mx-3", "py-5"], [1, "bordered", "container"], ["class", "row p-4", 4, "ngFor", "ngForOf"], ["id", "comentar", 1, "tab-pane", "fade"], [1, "container"], [1, "ml-5"], ["cols", "30 ", "rows", "10", 1, "mx-auto"], [1, "primary-button", "text-center", "float-right", "mt-3"], [1, "text-right"], ["class", "mx-5", 3, "icon", 4, "ngIf"], [1, "row", "my-2", "mt-5"], [1, "mx-5", "px-4", "my-1", "comentario"], [1, "mr-3"], [1, "mx-2"], [3, "icon", 4, "ngFor", "ngForOf"], ["class", "ml-4", 4, "ngIf"], [1, "ml-4"], [1, "row", "p-4"], [1, "py-2", "comentario"], [1, "mr-2"], [4, "ngIf"]], template: function DetailPodcastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-left-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Puntua este contenido! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_20_listener() { return ctx.clickAddTodo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_22_listener() { return ctx.clickAddTodo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_24_listener() { return ctx.clickAddTodo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_26_listener() { return ctx.clickAddTodo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_28_listener() { return ctx.clickAddTodo(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PODCAST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "The Striving Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 2B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 3.75 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Ver detalle de la puntuacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "RELEASE DATE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 26-01-2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ABOUT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Podcast relacionado con el mundo del arte. Charlas, guias, trucos y mucho mas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 4 episodios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "fa-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, DetailPodcastComponent_tr_67_Template, 8, 4, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Opinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, DetailPodcastComponent_div_75_Template, 9, 3, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "The Striving Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "by 2B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " 3.15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "ABOUT:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Podcast relacionado con el mundo del desarrollo web y la programacion en general. Charlas, guias, trucos y mucho mas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Tu valoracion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_100_listener() { return ctx.clickAddTodo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_102_listener() { return ctx.clickAddTodo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_104_listener() { return ctx.clickAddTodo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_106_listener() { return ctx.clickAddTodo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailPodcastComponent_Template_a_click_108_listener() { return ctx.clickAddTodo(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "fa-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Episodios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Actividad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Comentar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "table", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, DetailPodcastComponent_tr_128_Template, 8, 4, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, DetailPodcastComponent_div_131_Template, 9, 3, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h2", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Comenta! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "textarea", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Opinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "app-music-reproductor");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor4());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor5());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faClock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.episodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor4());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor5());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.episodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["LeftNavigationBarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_6__["MusicReproductorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".primary-button[_ngcontent-%COMP%] {\r\n    width: 128px;\r\n    height: 30px;\r\n    border-radius: 100px;\r\n}\r\n\r\n.desktop-display[_ngcontent-%COMP%] {\r\n    margin-bottom: 10%;\r\n    margin-top: 5%;\r\n    color: white;\r\n}\r\n\r\n.mobile-display[_ngcontent-%COMP%] {\r\n    margin-bottom: 10%;\r\n    margin-top: 5%;\r\n    color: white;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: #FC947D;\r\n    border-color: #FC947D !important;\r\n    border-top: none;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-color: #FC947D !important;\r\n    border-bottom: 1px solid;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    color: #FC947D;\r\n    font-size: 20px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    color: yellow;\r\n}\r\n\r\n.fixed-top[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n\r\n@media only screen and (min-width: 420px) {\r\n    table[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n    }\r\n    .user-review[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 30px;\r\n    }\r\n    .user-review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n    .bordered[_ngcontent-%COMP%] {\r\n        border-radius: 22px;\r\n        border: 2px black solid;\r\n    }\r\n    .primary-button[_ngcontent-%COMP%] {\r\n        width: 128px;\r\n        height: 30px;\r\n        border-radius: 100px;\r\n    }\r\n    .podcast-details[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        color: #FC947D;\r\n    }\r\n    .podcast-details[_ngcontent-%COMP%] {\r\n        font-style: bold;\r\n    }\r\n    .podcast-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n    }\r\n    .podcast-rating[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        color: #E1914B;\r\n    }\r\n    .podcast-rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        text-decoration: underline;\r\n    }\r\n    .right-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n        color: #FC947D;\r\n    }\r\n    .right-icons[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        color: #FC947D;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        height: 77px;\r\n        width: 90%;\r\n        background-color: #383B49;\r\n        border: 1px solid #FC947D;\r\n        border-radius: 5px;\r\n        resize: none;\r\n    }\r\n    .bordered[_ngcontent-%COMP%] {\r\n        border-radius: 22px;\r\n        border: 2px #FC947D solid;\r\n    }\r\n    .bordered[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n        margin-bottom: 0px !important;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n        font-size: 18px;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        color: #E1914B;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        margin: 0.2rem;\r\n    }\r\n    .podcast-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n    }\r\n    .label-podcast[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        color: #FC947D;\r\n    }\r\n    .label-podcast[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: white !important;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    table[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        border-top: none;\r\n    }\r\n    .podcast-details[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n    }\r\n    .podcast-details[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        color: #E1914B;\r\n    }\r\n    h4[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n    }\r\n    .podcast-header[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        height: 126px;\r\n        width: 90%;\r\n        background-color: #585A66;\r\n        border: 1px solid #FC947D;\r\n        border-radius: 5px;\r\n        resize: none;\r\n    }\r\n    .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n        background-color: #383B49;\r\n        border: 2px solid #FC947D;\r\n        border-radius: 15px 15px 0px 0px;\r\n        border-bottom-color: transparent;\r\n    }\r\n    .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n        background-color: #585A66;\r\n        border: 2px solid #FC947D;\r\n        border-radius: 15px 15px 0px 0px;\r\n        border-bottom-color: transparent;\r\n        padding: 8px 35px;\r\n    }\r\n    .tab-content[_ngcontent-%COMP%] {\r\n        min-height: 50vh;\r\n        background-color: #383B49;\r\n    }\r\n    .bordered[_ngcontent-%COMP%] {\r\n        border: 2px solid #FC947D;\r\n        border-radius: 30px;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n        font-size: 18px;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        color: #E1914B;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        margin: 0.2rem;\r\n    }\r\n    #comentar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n    }\r\n    .user-review[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n    .user-review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n        margin-bottom: 0;\r\n    }\r\n    .right-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n        color: #FC947D;\r\n    }\r\n    .label[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        color: #FC947D;\r\n    }\r\n    #actividad[_ngcontent-%COMP%]   .bordered[_ngcontent-%COMP%] {\r\n        margin-bottom: 50px;\r\n    }\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: var(--dark-grey);\r\n    position: relative;\r\n    width: 210px;\r\n    height: 210px;\r\n    cursor: pointer;\r\n    float: right;\r\n    border: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .card-content[_ngcontent-%COMP%] {\r\n    transform: rotateY(.5turn);\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    text-align: center;\r\n    position: relative;\r\n    padding: 5rem;\r\n    transition: transform 1s;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%], .card-front[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 10px;\r\n    width: 193px;\r\n    height: 193px;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform-style: preserve-3d;\r\n    align-content: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.card-front[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n}\r\n\r\n.card-front[_ngcontent-%COMP%]::before {\r\n    position: absolute;\r\n    top: 1em;\r\n    bottom: 1em;\r\n    left: 1em;\r\n    right: 1em;\r\n    transform: translateZ(3rem)\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%] {\r\n    transform: rotateY(.5turn);\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem !important;\r\n    transform: translateZ(3rem);\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    color: #FC947D;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1wb2RjYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7UUFDYixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLGdDQUFnQztRQUNoQyxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFHQSxhQUFhOztBQUViO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImRldGFpbC1wb2RjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5kZXNrdG9wLWRpc3BsYXkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2JpbGUtZGlzcGxheSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50YWJsZSB0aCB7XHJcbiAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZDOTQ3RCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkM5NDdEICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbnRhYmxlIGZhLWljb24ge1xyXG4gICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zdGFyIDpob3ZlciB7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uZml4ZWQtdG9wIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItcmV2aWV3IGZhLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC51c2VyLXJldmlldyBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyZWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeS1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAucG9kY2FzdC1kZXRhaWxzIC50eXBlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICB9XHJcbiAgICAucG9kY2FzdC1kZXRhaWxzIHtcclxuICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnBvZGNhc3QtZGV0YWlscyBwIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgfVxyXG4gICAgLnBvZGNhc3QtcmF0aW5nIGZhLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogI0UxOTE0QjtcclxuICAgIH1cclxuICAgIC5wb2RjYXN0LXJhdGluZyBzcGFuIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIC5yaWdodC1pY29ucyBmYS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtaWNvbnMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzQjQ5O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGQzk0N0Q7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5ib3JkZXJlZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgICAgICBib3JkZXI6IDJweCAjRkM5NDdEIHNvbGlkO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlcmVkIC5yb3cge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbWVudGFyaW8gc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbWVudGFyaW8gZmEtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNFMTkxNEI7XHJcbiAgICB9XHJcbiAgICAuY29tZW50YXJpbyBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwLjJyZW07XHJcbiAgICB9XHJcbiAgICAucG9kY2FzdC1kZXRhaWxzIGgyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLXBvZGNhc3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1wb2RjYXN0IHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgdGFibGUgdGQge1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucG9kY2FzdC1kZXRhaWxzIHtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgIH1cclxuICAgIC5wb2RjYXN0LWRldGFpbHMgZmEtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNFMTkxNEI7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnBvZGNhc3QtaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBoZWlnaHQ6IDEyNnB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NUE2NjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkM5NDdEO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2LXRhYnM+bGkuYWN0aXZlPmEge1xyXG4gICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODNCNDk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZDOTQ3RDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC5uYXY+bGk+YSB7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NUE2NjtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkM5NDdEO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAzNXB4O1xyXG4gICAgfVxyXG4gICAgLnRhYi1jb250ZW50IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODNCNDk7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyZWQge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGQzk0N0Q7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIH1cclxuICAgIC5jb21lbnRhcmlvIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5jb21lbnRhcmlvIGZhLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjRTE5MTRCO1xyXG4gICAgfVxyXG4gICAgLmNvbWVudGFyaW8gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMC4ycmVtO1xyXG4gICAgfVxyXG4gICAgI2NvbWVudGFyIGgyIHtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgIH1cclxuICAgIC51c2VyLXJldmlldyBmYS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1yZXZpZXcgcCB7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5yaWdodC1pY29ucyBmYS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICB9XHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgIH1cclxuICAgICNhY3RpdmlkYWQgLmJvcmRlcmVkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypmbGlwIGNhcmQgKi9cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuY2FyZC1jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSguNXR1cm4pO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmNhcmQtYmFjayBwIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2ssXHJcbi5jYXJkLWZyb250IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTkzcHg7XHJcbiAgICBoZWlnaHQ6IDE5M3B4O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWZyb250IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWZyb250OjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxZW07XHJcbiAgICBib3R0b206IDFlbTtcclxuICAgIGxlZnQ6IDFlbTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooM3JlbSlcclxufVxyXG5cclxuLmNhcmQtYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLjV0dXJuKTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDNyZW0pO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IGZhLWljb24ge1xyXG4gICAgY29sb3I6ICNGQzk0N0Q7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailPodcastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-podcast',
                templateUrl: './detail-podcast.component.html',
                styleUrls: ['./detail-podcast.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LdFH":
/*!******************************************************************!*\
  !*** ./src/app/music-reproductor/music-reproductor.component.ts ***!
  \******************************************************************/
/*! exports provided: MusicReproductorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicReproductorComponent", function() { return MusicReproductorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class MusicReproductorComponent {
    constructor() {
        this.faVolume = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolumeUp"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronUp"];
        this.faDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronDown"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlayCircle"];
        this.faNext = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStepForward"];
        this.faPrevious = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStepBackward"];
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faList"];
    }
    ngOnInit() {
        this.color = "#585A66";
        this.color2 = "#585A66";
        this.color3 = "#585A66";
        this.color4 = "#585A66";
        this.color5 = "#585A66";
        this.corazon = "#585A66";
        this.expandido = "hidden";
        this.comun = "visible";
    }
    getCorazon() {
        return this.corazon;
    }
    getcolor() {
        return this.color;
    }
    getcolor2() {
        return this.color2;
    }
    getcolor3() {
        return this.color3;
    }
    getcolor4() {
        return this.color4;
    }
    getcolor5() {
        return this.color5;
    }
    getexpandido() {
        return this.expandido;
    }
    getcomun() {
        return this.comun;
    }
    clickCorazon() {
        if (this.corazon == "#585A66") {
            this.corazon = "#fa2727";
        }
        else {
            this.corazon = "#585A66";
        }
    }
    clickAddTodo(n) {
        this.color = "#585A66";
        this.color2 = "#585A66";
        this.color3 = "#585A66";
        this.color4 = "#585A66";
        this.color5 = "#585A66";
        for (let i = 1; i <= n; i++) {
            if (i == 1) {
                this.color = "gold";
            }
            else if (i == 2) {
                this.color2 = "gold";
            }
            else if (i == 3) {
                this.color3 = "gold";
            }
            else if (i == 4) {
                this.color4 = "gold";
            }
            else if (i == 5) {
                this.color5 = "gold";
            }
        }
    }
    bajar() {
        this.comun = "visible";
        this.expandido = "hidden";
    }
    subir() {
        this.comun = "hidden";
        this.expandido = "visible";
    }
}
MusicReproductorComponent.ɵfac = function MusicReproductorComponent_Factory(t) { return new (t || MusicReproductorComponent)(); };
MusicReproductorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicReproductorComponent, selectors: [["app-music-reproductor"]], decls: 102, vars: 45, consts: [["id", "expandido", 1, "fixed-bottom", "d-block", "d-md-none"], ["type", "button", 2, "float", "right", 3, "click"], [1, "arrow", 3, "icon"], [1, "row"], ["id", "fotoalbum", "src", "../../assets/small-pic.png", "height", "180", "alt", ""], [1, "col-12", "text-center", "mt-3", "reproductor", "pr-4"], [2, "float", "left", "margin-left", "10%"], ["src", "./assets/iconos/Actual-playlist.svg", "width", "30", "height", "30", "alt", "", "loading", "lazy", 1, "align-top", "logo"], [1, "corazon", 2, "float", "right", "margin-right", "10%", 3, "click"], [1, "mx-2", "icon", 3, "icon"], [1, "mx-3"], ["src", "./assets/iconos/Previous-song.svg", "width", "40", "height", "40", "alt", "", "loading", "lazy", 1, "align-top", "logo"], [1, "mx-1", "play"], ["src", "./assets/iconos/play-reproductor.svg", "width", "40", "height", "40", "alt", "", "loading", "lazy", 1, "align-top", "logo"], ["src", "./assets/iconos/Next-song.svg", "width", "40", "height", "40", "alt", "", "loading", "lazy", 1, "align-top", "logo"], ["src", "./assets/iconos/barra-tiempo.svg", "alt", "", "loading", "lazy", 1, "align-top", "logo"], [2, "float", "left", "margin-left", "3%"], [1, "star", 3, "click"], [3, "icon"], [2, "float", "right", "margin-right", "8%"], [1, "mx-3", "icon"], ["src", "./assets/iconos/Volume.svg", "width", "30", "height", "30", "alt", "", "loading", "lazy", 1, "align-top", "logo"], [1, "fixed-bottom", "d-block", "d-md-none"], [1, "col-8", "text-center", "mt-3", "reproductor", "pr-4"], [1, "col-4", "text-right", "pl-0"], ["type", "button", 3, "click"], [1, "my-2", "text-left"], [1, "corazon", 3, "click"], [1, "fixed-bottom", "d-none", "d-md-block"], [1, "col-3"], [1, "row", "m-3"], [1, "col-4", "text-right"], ["src", "../../assets/small-pic.png", "height", "80", "alt", ""], [1, "col-8", "review"], [1, "col-6"], [1, "row", "text-center", "my-4", "music-icons"], [1, "col-2"], [1, "mt-3", "text-right"], [1, "icono"], ["src", "./assets/iconos/Actual-playlist.svg", "width", "30", "height", "25", "alt", "", "loading", "lazy", 1, "align-top", "logo", "mt-2"], [1, "col-8", "music"], ["src", "./assets/iconos/Previous-song.svg", "width", "45", "height", "45", "alt", "", "loading", "lazy", 1, "align-top", "logo"], ["src", "./assets/iconos/play-reproductor.svg", "width", "45", "height", "45", "alt", "", "loading", "lazy", 1, "align-top", "mx-5", "logo"], ["src", "./assets/iconos/Next-song.svg", "width", "45", "height", "45", "alt", "", "loading", "lazy", 1, "align-top", "logo"], [1, "mt-3", "ml-2", "text-left"], [1, "text-center"], [1, "icono", "mt-0", 2, "margin-left", "5%"], ["src", "./assets/iconos/Group-9.png", "height", "30", "alt", "", "loading", "lazy", 1, "music-bar"], [1, "row", "my-4"], [1, "mt-3"]], template: function MusicReproductorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_button_click_1_listener() { return ctx.bajar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_9_listener() { return ctx.clickCorazon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " nombre de la cancion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_24_listener() { return ctx.clickAddTodo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_26_listener() { return ctx.clickAddTodo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_28_listener() { return ctx.clickAddTodo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_30_listener() { return ctx.clickAddTodo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_32_listener() { return ctx.clickAddTodo(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " nombre de la cancion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_button_click_49_listener() { return ctx.subir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_54_listener() { return ctx.clickCorazon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "footer", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Titulo de la cancion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Nombre del artista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_67_listener() { return ctx.clickAddTodo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_69_listener() { return ctx.clickAddTodo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_71_listener() { return ctx.clickAddTodo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_73_listener() { return ctx.clickAddTodo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_75_listener() { return ctx.clickAddTodo(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicReproductorComponent_Template_a_click_92_listener() { return ctx.clickCorazon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.getexpandido());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getCorazon());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor4());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor5());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.getcomun());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getCorazon());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor4());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor5());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getCorazon());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: ["footer[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100vw;\r\n    background-color: var(--dark-grey);\r\n    color: white;\r\n    border-width: 1px;\r\n    border-top-style: solid;\r\n    border-top-color: var(--primary-color);\r\n}\r\n\r\n#expandido[_ngcontent-%COMP%] {\r\n    height: 50rem;\r\n    width: 100vw;\r\n    background-color: var(--dark-grey);\r\n    color: white;\r\n    border-width: 1px;\r\n    border-top-style: solid;\r\n    border-top-color: var(--primary-color);\r\n    border-radius: 5px;\r\n    z-index: 30;\r\n}\r\n\r\n#fotoalbum[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n}\r\n\r\n.play[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n}\r\n\r\n.reproductor[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    border: none;\r\n    color: black;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    color: yellow;\r\n}\r\n\r\n.corazon[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    color: rgba(250, 39, 39, 0.822);\r\n}\r\n\r\n@media only screen and (min-width: 420px) {\r\n    footer[_ngcontent-%COMP%] {\r\n        height: 95px;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .review[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n    .music[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 38px;\r\n    }\r\n    fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 28px;\r\n    }\r\n    .music[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%] {\r\n        font-size: 50px;\r\n    }\r\n    .music-icons[_ngcontent-%COMP%] {\r\n        margin-bottom: 0;\r\n    }\r\n    .music-bar[_ngcontent-%COMP%] {\r\n        margin-top: -35px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLXJlcHJvZHVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6Im11c2ljLXJlcHJvZHVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbiNleHBhbmRpZG8ge1xyXG4gICAgaGVpZ2h0OiA1MHJlbTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB6LWluZGV4OiAzMDtcclxufVxyXG5cclxuI2ZvdG9hbGJ1bSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5wbGF5IHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLnJlcHJvZHVjdG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3RhciA6aG92ZXIge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmNvcmF6b24gOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1MCwgMzksIDM5LCAwLjgyMik7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA5NXB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAucmV2aWV3IGZhLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5tdXNpYyBmYS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICB9XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAubXVzaWMgLnBsYXkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuICAgIC5tdXNpYy1pY29ucyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5tdXNpYy1iYXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicReproductorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-music-reproductor',
                templateUrl: './music-reproductor.component.html',
                styleUrls: ['./music-reproductor.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OATn":
/*!******************************************************!*\
  !*** ./src/app/detail-song/detail-song.component.ts ***!
  \******************************************************/
/*! exports provided: DetailSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailSongComponent", function() { return DetailSongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../left-navigation-bar/left-navigation-bar.component */ "e690");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../music-reproductor/music-reproductor.component */ "LdFH");








function DetailSongComponent_div_62_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faStar);
} }
function DetailSongComponent_div_62_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r2.comment, "");
} }
function DetailSongComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " puntu\u00F3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailSongComponent_div_62_fa_icon_7_Template, 1, 1, "fa-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailSongComponent_div_62_p_8_Template, 2, 1, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r2.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r2.comment != "");
} }
function DetailSongComponent_div_99_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faStar);
} }
function DetailSongComponent_div_99_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r7.comment, "");
} }
function DetailSongComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " puntu\u00F3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailSongComponent_div_99_fa_icon_7_Template, 1, 1, "fa-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailSongComponent_div_99_p_8_Template, 2, 1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", comment_r7.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r7.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r7.comment != "");
} }
class DetailSongComponent {
    constructor() {
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClock"];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShareAlt"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faList"];
        this.faDots = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisH"];
        this.comments = [{
                username: "natalia_vytas",
                stars: [1, 2, 3, 4, 5],
                comment: "La verdad me gusto muchisimo. Muy buen tema. "
            },
            {
                username: "thor",
                stars: [1, 2, 3, 4],
                comment: "No soy muy fan de este artista, pero esta cancion en particular esta buena. "
            },
            {
                username: "loki",
                stars: [1],
                comment: "Horrible. "
            },
            {
                username: "hulk_123",
                stars: [1, 2],
                comment: ""
            }
        ];
    }
    ngOnInit() {
        this.color = "#585A66";
        this.color2 = "#585A66";
        this.color3 = "#585A66";
        this.color4 = "#585A66";
        this.color5 = "#585A66";
    }
    getcolor() {
        return this.color;
    }
    getcolor2() {
        return this.color2;
    }
    getcolor3() {
        return this.color3;
    }
    getcolor4() {
        return this.color4;
    }
    getcolor5() {
        return this.color5;
    }
    clickAddTodo(n) {
        this.color = "#585A66";
        this.color2 = "#585A66";
        this.color3 = "#585A66";
        this.color4 = "#585A66";
        this.color5 = "#585A66";
        for (let i = 1; i <= n; i++) {
            if (i == 1) {
                this.color = "gold";
            }
            else if (i == 2) {
                this.color2 = "gold";
            }
            else if (i == 3) {
                this.color3 = "gold";
            }
            else if (i == 4) {
                this.color4 = "gold";
            }
            else if (i == 5) {
                this.color5 = "gold";
            }
        }
    }
}
DetailSongComponent.ɵfac = function DetailSongComponent_Factory(t) { return new (t || DetailSongComponent)(); };
DetailSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailSongComponent, selectors: [["app-detail-song"]], decls: 109, vars: 48, consts: [[1, "fixed-top"], [1, "row", "d-none", "d-md-flex", "desktop-display"], [1, "col-3"], [1, "col-9"], [1, "row", "mt-5"], [1, "col-10"], [1, "row"], [1, "col-3", "user-review", "text-center"], [1, "card"], [1, "card-content"], [1, "card-front"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWl5QZqfR1vN1d5HGvy0-hBss98OoJCVPVX7FvuJZwgThzDsnRWeMcI4nVP-mg-p_5Ipdp3Mxn0G6HAznFp8mvS7oMD6ViAQ&usqp=CAU&ec=45732302", "height", "193", "alt", ""], [1, "card-back", "bg-dark"], [1, "card-body"], [1, "play-icon", 3, "icon"], [1, "star", 3, "click"], [3, "icon"], [1, "col-6", "song-details"], [1, "type", "pt-2"], [1, "pt-3", "song-rating"], [1, "pl-5"], [1, "col-3", "right-icons", "text-right"], [1, "ml-3", 3, "icon"], [1, "mt-4"], [1, "mx-5", 3, "icon"], [1, "col-10", "bordered", "mt-5", "pb-5"], [1, "row", "m-5"], ["src", "../../assets/small-pic.png", "alt", "", 1, "rounded-circle", "mr-"], ["name", "", "id", "", "cols", "30", "rows", "10"], [1, "primary-button", "text-center", "float-right", "mr-5"], ["class", "row my-2 mt-5", 4, "ngFor", "ngForOf"], [1, "mobile-display", "d-block", "d-md-none", "mt-4"], [1, "row", "pt-5", "mt-5", "song-header"], [1, "col-6", "text-center", "pt-5"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWl5QZqfR1vN1d5HGvy0-hBss98OoJCVPVX7FvuJZwgThzDsnRWeMcI4nVP-mg-p_5Ipdp3Mxn0G6HAznFp8mvS7oMD6ViAQ&usqp=CAU&ec=45732302", "height", "118", "alt", ""], [1, "col-6", "text-center", "song-details", "pt-5"], [1, "row", "container"], [1, "col-6", "user-review", "text-center"], [1, "col-6", "text-right", "pt-5", "right-icons"], [1, "mx-3", "py-5"], [1, "bordered", "container"], ["class", "row p-4", 4, "ngFor", "ngForOf"], [1, "container"], [1, "ml-5"], ["cols", "30 ", "rows", "10", 1, "mx-auto"], [1, "primary-button", "text-center", "float-right", "mt-3"], [1, "row", "my-2", "mt-5"], [1, "mx-5", "px-4", "my-1", "comentario"], [1, "mr-3"], [1, "mx-2"], [3, "icon", 4, "ngFor", "ngForOf"], ["class", "ml-4", 4, "ngIf"], [1, "ml-4"], [1, "row", "p-4"], [1, "py-2", "comentario"], [1, "mr-2"], [4, "ngIf"]], template: function DetailSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-left-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Puntua este contenido! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_20_listener() { return ctx.clickAddTodo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_22_listener() { return ctx.clickAddTodo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_24_listener() { return ctx.clickAddTodo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_26_listener() { return ctx.clickAddTodo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_28_listener() { return ctx.clickAddTodo(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CANCION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Black Mirror");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Sire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 3.75 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Ver detalle de la puntuacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 4:35 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Opinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, DetailSongComponent_div_62_Template, 9, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Black Mirror");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Sire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 3.15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Tu valoracion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_84_listener() { return ctx.clickAddTodo(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_86_listener() { return ctx.clickAddTodo(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_88_listener() { return ctx.clickAddTodo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_90_listener() { return ctx.clickAddTodo(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_a_click_92_listener() { return ctx.clickAddTodo(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, DetailSongComponent_div_99_Template, 9, 3, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Comenta! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Opinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "app-music-reproductor");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor4());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor5());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faClock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor4());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getcolor5());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["LeftNavigationBarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_6__["MusicReproductorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["textarea[_ngcontent-%COMP%] {\r\n    height: 77px;\r\n    width: 90%;\r\n    resize: none;\r\n}\r\n\r\n.bordered[_ngcontent-%COMP%] {\r\n    border-radius: 22px;\r\n    border: 2px black solid;\r\n}\r\n\r\n.primary-button[_ngcontent-%COMP%] {\r\n    width: 128px;\r\n    height: 30px;\r\n    border-radius: 100px;\r\n}\r\n\r\n.desktop-display[_ngcontent-%COMP%] {\r\n    margin-bottom: 10%;\r\n    margin-top: 5%;\r\n    color: white;\r\n}\r\n\r\n.mobile-display[_ngcontent-%COMP%] {\r\n    margin-bottom: 30%;\r\n    margin-top: 5%;\r\n    color: white;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    color: yellow;\r\n}\r\n\r\n.fixed-top[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n\r\n@media only screen and (min-width: 420px) {\r\n    .user-review[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 30px;\r\n    }\r\n    .user-review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n    .song-details[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        color: #FC947D;\r\n    }\r\n    .song-details[_ngcontent-%COMP%] {\r\n        font-style: bold;\r\n    }\r\n    .song-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n    }\r\n    .song-rating[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        color: #E1914B;\r\n    }\r\n    .song-rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        text-decoration: underline;\r\n    }\r\n    .right-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n        color: #FC947D;\r\n    }\r\n    .right-icons[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        color: #FC947D;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        height: 77px;\r\n        width: 90%;\r\n        background-color: #383B49;\r\n        border: 1px solid #FC947D;\r\n        border-radius: 5px;\r\n        resize: none;\r\n    }\r\n    .bordered[_ngcontent-%COMP%] {\r\n        border-radius: 22px;\r\n        border: 2px #FC947D solid;\r\n    }\r\n    .bordered[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n        margin-bottom: 0px !important;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n        font-size: 18px;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        color: #E1914B;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        margin: 0.2rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .song-details[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n    }\r\n    .song-details[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        color: #E1914B;\r\n    }\r\n    h4[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n    }\r\n    .song-header[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    textarea[_ngcontent-%COMP%] {\r\n        height: 126px;\r\n        width: 90%;\r\n        background-color: #585A66;\r\n        border: 1px solid #FC947D;\r\n        border-radius: 5px;\r\n        resize: none;\r\n    }\r\n    .bordered[_ngcontent-%COMP%] {\r\n        border: 2px solid #FC947D;\r\n        border-radius: 30px;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n        font-size: 18px;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        color: #E1914B;\r\n    }\r\n    .comentario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        margin: 0.2rem;\r\n    }\r\n    #comentar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n    }\r\n    .user-review[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n    .user-review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n        margin-bottom: 0;\r\n    }\r\n    .right-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n    }\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: var(--dark-grey);\r\n    position: relative;\r\n    width: 210px;\r\n    height: 210px;\r\n    cursor: pointer;\r\n    float: right;\r\n    border: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .card-content[_ngcontent-%COMP%] {\r\n    transform: rotateY(.5turn);\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    text-align: center;\r\n    position: relative;\r\n    padding: 5rem;\r\n    transition: transform 1s;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%], .card-front[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 10px;\r\n    width: 193px;\r\n    height: 193px;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform-style: preserve-3d;\r\n    align-content: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.card-front[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n}\r\n\r\n.card-front[_ngcontent-%COMP%]::before {\r\n    position: absolute;\r\n    top: 1em;\r\n    bottom: 1em;\r\n    left: 1em;\r\n    right: 1em;\r\n    transform: translateZ(3rem)\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%] {\r\n    transform: rotateY(.5turn);\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem !important;\r\n    transform: translateZ(3rem);\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    color: #FC947D;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1zb25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsVUFBVTtRQUNWLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUdBLGFBQWE7O0FBRWI7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiZGV0YWlsLXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIGhlaWdodDogNzdweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3JkZXJlZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmRlc2t0b3AtZGlzcGxheSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vYmlsZS1kaXNwbGF5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RhciA6aG92ZXIge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmZpeGVkLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KSB7XHJcbiAgICAudXNlci1yZXZpZXcgZmEtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItcmV2aWV3IHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5zb25nLWRldGFpbHMgLnR5cGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgIH1cclxuICAgIC5zb25nLWRldGFpbHMge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuc29uZy1kZXRhaWxzIHAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICB9XHJcbiAgICAuc29uZy1yYXRpbmcgZmEtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRTE5MTRCO1xyXG4gICAgfVxyXG4gICAgLnNvbmctcmF0aW5nIHNwYW4ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWljb25zIGZhLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgIH1cclxuICAgIC5yaWdodC1pY29ucyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODNCNDk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZDOTQ3RDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlcmVkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4ICNGQzk0N0Qgc29saWQ7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyZWQgLnJvdyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29tZW50YXJpbyBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuY29tZW50YXJpbyBmYS1pY29uIHtcclxuICAgICAgICBjb2xvcjogI0UxOTE0QjtcclxuICAgIH1cclxuICAgIC5jb21lbnRhcmlvIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDAuMnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLnNvbmctZGV0YWlscyB7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICB9XHJcbiAgICAuc29uZy1kZXRhaWxzIGZhLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjRTE5MTRCO1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5zb25nLWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjZweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODVBNjY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZDOTQ3RDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlcmVkIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkM5NDdEO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuY29tZW50YXJpbyBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI0ZDOTQ3RDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuY29tZW50YXJpbyBmYS1pY29uIHtcclxuICAgICAgICBjb2xvcjogI0UxOTE0QjtcclxuICAgIH1cclxuICAgIC5jb21lbnRhcmlvIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDAuMnJlbTtcclxuICAgIH1cclxuICAgICNjb21lbnRhciBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICB9XHJcbiAgICAudXNlci1yZXZpZXcgZmEtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItcmV2aWV3IHAge1xyXG4gICAgICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtaWNvbnMgZmEtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypmbGlwIGNhcmQgKi9cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuY2FyZC1jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSguNXR1cm4pO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmNhcmQtYmFjayBwIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2ssXHJcbi5jYXJkLWZyb250IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTkzcHg7XHJcbiAgICBoZWlnaHQ6IDE5M3B4O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWZyb250IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWZyb250OjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxZW07XHJcbiAgICBib3R0b206IDFlbTtcclxuICAgIGxlZnQ6IDFlbTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooM3JlbSlcclxufVxyXG5cclxuLmNhcmQtYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLjV0dXJuKTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDNyZW0pO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IGZhLWljb24ge1xyXG4gICAgY29sb3I6ICNGQzk0N0Q7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-song',
                templateUrl: './detail-song.component.html',
                styleUrls: ['./detail-song.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'spoiler-five';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: Roboto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TH/J":
/*!************************************************************!*\
  !*** ./src/app/landing-navbar/landing-navbar.component.ts ***!
  \************************************************************/
/*! exports provided: LandingNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingNavbarComponent", function() { return LandingNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
class LandingNavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingNavbarComponent.ɵfac = function LandingNavbarComponent_Factory(t) { return new (t || LandingNavbarComponent)(); };
LandingNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingNavbarComponent, selectors: [["app-landing-navbar"]], decls: 10, vars: 2, consts: [["href", "#", 1, "logoSpoiler"], ["src", "./assets/iconos/logo.png", "alt", "", "loading", "lazy"], [1, "icono", 3, "routerLink"], [1, "primary-button"], [1, "icono-left"]], template: function LandingNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Spoiler Five ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ingresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    background-color: #181B2C;\r\n    height: 5rem;\r\n    width: 100vw;\r\n}\r\n\r\n.logoSpoiler[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    position: absolute;\r\n    left: 5%;\r\n    margin-top: 1.5%;\r\n    font-family: 'Sansita', sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent; \r\n}\r\n\r\n.icono[_ngcontent-%COMP%]{\r\n    height: 3rem;\r\n    width: auto;\r\n    float: right;\r\n    margin-right: 3%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.icono-left[_ngcontent-%COMP%]{\r\n    height: 3rem;\r\n    width: auto;\r\n    float: right;\r\n    margin-right: 3%;\r\n    margin-top: 3.5%;\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    a[_ngcontent-%COMP%] {\r\n        text-decoration: none !important;\r\n        color: white;\r\n        font-size: 16px;\r\n    }\r\n    .primary-button[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        padding: 5px 5px 5px 5px;\r\n    }\r\n\r\n    .logoSpoiler[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 40px; \r\n        height: 40px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 899px) {\r\n\r\n    nav[_ngcontent-%COMP%]{\r\n        height: 8rem;\r\n    }\r\n\r\n    .primary-button[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        padding: 5px 13px 5px 13px;\r\n    }\r\n\r\n    .logoSpoiler[_ngcontent-%COMP%]{\r\n        left: 5%;\r\n        margin-top: 1%; \r\n        font-size: 22px;\r\n    }\r\n\r\n    .logoSpoiler[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 60px; \r\n        height: 60px;\r\n    }\r\n\r\n   .icono[_ngcontent-%COMP%]{\r\n       margin-top: 1.5%;\r\n       margin-right: 5%;\r\n   }\r\n\r\n   .icono-left[_ngcontent-%COMP%]{\r\n       margin-top: 2%;\r\n       margin-right: 5%;\r\n       font-size: 18px;\r\n       background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n       -webkit-background-clip: text;\r\n               background-clip: text;\r\n       -webkit-text-fill-color: transparent;\r\n   }\r\n\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2RUFBNkU7SUFDN0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztRQUNoQyxZQUFZO1FBQ1osZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLFFBQVE7UUFDUixjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztHQUVEO09BQ0ksZ0JBQWdCO09BQ2hCLGdCQUFnQjtHQUNwQjs7R0FFQTtPQUNJLGNBQWM7T0FDZCxnQkFBZ0I7T0FDaEIsZUFBZTtPQUNmLDZFQUE2RTtPQUM3RSw2QkFBcUI7ZUFBckIscUJBQXFCO09BQ3JCLG9DQUFvQztHQUN4Qzs7O0FBR0giLCJmaWxlIjoibGFuZGluZy1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxQjJDO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4ubG9nb1Nwb2lsZXJ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogMS41JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgXHJcbn1cclxuXHJcbi5pY29ub3tcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uaWNvbm8tbGVmdHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDMuNSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeS1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ29TcG9pbGVyIGltZ3tcclxuICAgICAgICB3aWR0aDogNDBweDsgXHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg5OXB4KSB7XHJcblxyXG4gICAgbmF2e1xyXG4gICAgICAgIGhlaWdodDogOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJpbWFyeS1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTNweCA1cHggMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb1Nwb2lsZXJ7XHJcbiAgICAgICAgbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb1Nwb2lsZXIgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA2MHB4OyBcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAuaWNvbm97XHJcbiAgICAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgfVxyXG5cclxuICAgLmljb25vLWxlZnR7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgfVxyXG5cclxuICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-navbar',
                templateUrl: './landing-navbar.component.html',
                styleUrls: ['./landing-navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _landing_navbar_landing_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-navbar/landing-navbar.component */ "TH/J");
/* harmony import */ var _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left-navigation-bar/left-navigation-bar.component */ "e690");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./music-reproductor/music-reproductor.component */ "LdFH");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-song/detail-song.component */ "OATn");
/* harmony import */ var _detail_playlist_detail_playlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail-playlist/detail-playlist.component */ "7Ml0");
/* harmony import */ var _detail_podcast_detail_podcast_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detail-podcast/detail-podcast.component */ "JhbL");
/* harmony import */ var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./busqueda/busqueda.component */ "4PXQ");
/* harmony import */ var _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./playlist-item/playlist-item.component */ "B3SX");
/* harmony import */ var _resultado_busqueda_resultado_busqueda_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resultado-busqueda/resultado-busqueda.component */ "vsVw");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_15__["BusquedaComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
        _landing_navbar_landing_navbar_component__WEBPACK_IMPORTED_MODULE_5__["LandingNavbarComponent"],
        _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_6__["LeftNavigationBarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_9__["MusicReproductorComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_12__["DetailSongComponent"],
        _detail_playlist_detail_playlist_component__WEBPACK_IMPORTED_MODULE_13__["DetailPlaylistComponent"],
        _detail_podcast_detail_podcast_component__WEBPACK_IMPORTED_MODULE_14__["DetailPodcastComponent"],
        _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_16__["PlaylistItemComponent"],
        _resultado_busqueda_resultado_busqueda_component__WEBPACK_IMPORTED_MODULE_17__["ResultadoBusquedaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_15__["BusquedaComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
                    _landing_navbar_landing_navbar_component__WEBPACK_IMPORTED_MODULE_5__["LandingNavbarComponent"],
                    _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_6__["LeftNavigationBarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_9__["MusicReproductorComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_12__["DetailSongComponent"],
                    _detail_playlist_detail_playlist_component__WEBPACK_IMPORTED_MODULE_13__["DetailPlaylistComponent"],
                    _detail_podcast_detail_podcast_component__WEBPACK_IMPORTED_MODULE_14__["DetailPodcastComponent"],
                    _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_16__["PlaylistItemComponent"],
                    _resultado_busqueda_resultado_busqueda_component__WEBPACK_IMPORTED_MODULE_17__["ResultadoBusquedaComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "e690":
/*!**********************************************************************!*\
  !*** ./src/app/left-navigation-bar/left-navigation-bar.component.ts ***!
  \**********************************************************************/
/*! exports provided: LeftNavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavigationBarComponent", function() { return LeftNavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





const _c0 = function () { return ["/home"]; };
class LeftNavigationBarComponent {
    constructor() {
        this.faMusic = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMusic"];
        this.faPodcast = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMicrophone"];
        this.faPlaylist = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeadphones"];
        this.faAlbum = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCompactDisc"];
        this.faArtist = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
    }
    ngOnInit() {
    }
}
LeftNavigationBarComponent.ɵfac = function LeftNavigationBarComponent_Factory(t) { return new (t || LeftNavigationBarComponent)(); };
LeftNavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftNavigationBarComponent, selectors: [["app-left-navigation-bar"]], decls: 37, vars: 10, consts: [["id", "left", 1, "px-0", "fixed-top", "bg-dark", "d-none", "d-lg-block"], [1, "bg-logo", "text-center", 3, "routerLink"], ["src", "../../assets/Logo (1).png", "alt", "", 1, "my-2", "bar-logo"], [1, "list-group", "w-100", "bg-dark"], [1, "mt-5"], [1, "list-group-item"], [1, "list-group-item", "icono"], [1, "mx-3", 3, "icon"], [1, "list-group-item", "text-center", "mt-4"], [1, "primary-button"]], template: function LeftNavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Canciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Podcast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Albumes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Artistas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Mi musica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mis favoritos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Mis podcast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Mis playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " + Nueva Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMusic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPodcast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlaylist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAlbum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArtist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMusic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPodcast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlaylist);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["aside[_ngcontent-%COMP%] {\r\n    width: 16%;\r\n    height: 100%;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%] {\r\n    background-color: #343a40;\r\n    color: white;\r\n    border: none;\r\n    line-height: normal;\r\n    padding: .15em 1em;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%] {\r\n    font-size: 21px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.primary-button[_ngcontent-%COMP%] {\r\n    height: 58px;\r\n    width: 12.639vw;\r\n    border-radius: 15px;\r\n}\r\n\r\n.bar-logo[_ngcontent-%COMP%] {\r\n    height: 15vh;\r\n}\r\n\r\n.bg-logo[_ngcontent-%COMP%] {\r\n    background-color: var(--background-color);\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(180deg, #D461E3 0%, #6174D7 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.icono[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\na.list-group-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #343a40;\r\n    color: white;\r\n    border: none;\r\n    -webkit-text-decoration: underline solid white;\r\n            text-decoration: underline solid white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7O0FBRTFEO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxxRUFBcUU7SUFDckUsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw2RUFBNkU7SUFDN0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDIiwiZmlsZSI6ImxlZnQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFjb21vZGFyIGxhIGFsdHVyYSBlbiBiYXNlIGEgbGEgYWx0dXJhIGRlIGxhIHBhbnRhbGxhICovXHJcblxyXG5hc2lkZSB7XHJcbiAgICB3aWR0aDogMTYlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogLjE1ZW0gMWVtO1xyXG59XHJcblxyXG5mYS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICB3aWR0aDogMTIuNjM5dnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYmFyLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4uYmctbG9nbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuaDMge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRDQ2MUUzIDAlLCAjNjE3NEQ3IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaWNvbm8ge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0ZDOTQ3RCAwJSwgI0ZCNzA3OSA1My42NSUsICNGQTUwNzUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmEubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBzb2xpZCB3aGl0ZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftNavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-navigation-bar',
                templateUrl: './left-navigation-bar.component.html',
                styleUrls: ['./left-navigation-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _landing_navbar_landing_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing-navbar/landing-navbar.component */ "TH/J");



class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 30, vars: 0, consts: [["id", "body"], [1, "row", "first-row", "d-flex"], [1, "col-md-6", "align-self-center"], [1, "text-center", "m-3", "center"], [1, "primary-color"], [1, "quartenary-color"], [1, "primary-button", "my-3"], [1, "col-md-6"], [1, "row", "second-row", "d-flex"], [1, "text-center", "background-color", "mt-5"], [1, "landing-component"], ["src", "../../assets/Group 9.png", "height", "317", "alt", "Responsive image", 1, "img-fluid", "center-block", "d-block", "mx-auto"], [1, "row", "third-row", "d-flex"], [1, "col-md-6", "align-self-center", "mt-5"], [1, "mt-5", "pb-5"], ["src", "../../assets/Group 10.png", "height", "271", "alt", "Responsive image", 1, "img-fluid", "center-block", "d-block", "mx-auto", "mt-4", "pb-4"], [1, "text-center", "landing-component", "background-color", "mt-5"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Obtiene tu prueba gratis por 30 dias! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No te pierdas de tu musica favorita en la mejor calidad y de forma gratuita! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Registrarme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lleva la musica a donde vayas! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " En tu trabajo, en el auto, haciedno deporte. Elegi tus canciones favoritas y compartilas con tus amigos. Lleva la musica con vos y lleva la musica a tus amigos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Puntua y opina sobre tus canciones favoritas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_landing_navbar_landing_navbar_component__WEBPACK_IMPORTED_MODULE_1__["LandingNavbarComponent"]], styles: [".primary-button[_ngcontent-%COMP%] {\r\n    height: 48px;\r\n    width: 268px;\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    #body[_ngcontent-%COMP%]{\r\n        width: 100vw;\r\n    }\r\n    .first-row[_ngcontent-%COMP%] {\r\n        height: 90vh;\r\n        background-color: black;\r\n        color: white;\r\n    }\r\n    .second-row[_ngcontent-%COMP%] {\r\n        background-color: var(--light-grey);\r\n    }\r\n    .third-row[_ngcontent-%COMP%] {\r\n        background: linear-gradient(180deg, #FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 420px) {\r\n    #body[_ngcontent-%COMP%]{\r\n        width: 100vw;\r\n    }\r\n    .first-row[_ngcontent-%COMP%] {\r\n        height: 90vh;\r\n        background-color: black;\r\n        color: white;\r\n    }\r\n    .second-row[_ngcontent-%COMP%] {\r\n        background-color: var(--light-grey);\r\n        height: 50vh;\r\n    }\r\n    .third-row[_ngcontent-%COMP%] {\r\n        background: linear-gradient(180deg, #FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n        height: 50vh;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksbUNBQW1DO0lBQ3ZDO0lBQ0E7UUFDSSw2RUFBNkU7SUFDakY7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxtQ0FBbUM7UUFDbkMsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksNkVBQTZFO1FBQzdFLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMjY4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICNib2R5e1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxuICAgIC5maXJzdC1yb3cge1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kLXJvdyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbiAgICB9XHJcbiAgICAudGhpcmQtcm93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjBweCkge1xyXG4gICAgI2JvZHl7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG4gICAgLmZpcnN0LXJvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5zZWNvbmQtcm93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcclxuICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICB9XHJcbiAgICAudGhpcmQtcm93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_playlist_detail_playlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-playlist/detail-playlist.component */ "7Ml0");
/* harmony import */ var _detail_podcast_detail_podcast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-podcast/detail-podcast.component */ "JhbL");
/* harmony import */ var _detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-song/detail-song.component */ "OATn");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./busqueda/busqueda.component */ "4PXQ");
/* harmony import */ var _resultado_busqueda_resultado_busqueda_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resultado-busqueda/resultado-busqueda.component */ "vsVw");











const routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]
    },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'song/detail', component: _detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_4__["DetailSongComponent"]
    },
    {
        path: 'playlist/detail', component: _detail_playlist_detail_playlist_component__WEBPACK_IMPORTED_MODULE_2__["DetailPlaylistComponent"]
    },
    {
        path: 'podcast/detail', component: _detail_podcast_detail_podcast_component__WEBPACK_IMPORTED_MODULE_3__["DetailPodcastComponent"]
    },
    {
        path: 'buscar', component: _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_7__["BusquedaComponent"]
    },
    {
        path: 'resultado', component: _resultado_busqueda_resultado_busqueda_component__WEBPACK_IMPORTED_MODULE_8__["ResultadoBusquedaComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vsVw":
/*!********************************************************************!*\
  !*** ./src/app/resultado-busqueda/resultado-busqueda.component.ts ***!
  \********************************************************************/
/*! exports provided: ResultadoBusquedaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoBusquedaComponent", function() { return ResultadoBusquedaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../left-navigation-bar/left-navigation-bar.component */ "e690");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../playlist-item/playlist-item.component */ "B3SX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../music-reproductor/music-reproductor.component */ "LdFH");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










const _c0 = function () { return ["/song/detail"]; };
function ResultadoBusquedaComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultadoBusquedaComponent_tr_24_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.clickCorazon(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r2.artist, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r2.album, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r2.release, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.getCorazon());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faHeart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faDots);
} }
function ResultadoBusquedaComponent_tr_59_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 31);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faHeart);
} }
function ResultadoBusquedaComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResultadoBusquedaComponent_tr_59_fa_icon_6_Template, 1, 1, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", song_r5.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faDots);
} }
const _c1 = function () { return ["/playlist/detail"]; };
const _c2 = function () { return ["/podcast/detail"]; };
class ResultadoBusquedaComponent {
    constructor() {
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClock"];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShareAlt"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faList"];
        this.faDots = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisH"];
        this.songs = [{
                name: "Phisical",
                artist: "Dua Lipa",
                album: "Future Nostalgia",
                release: "26-01-2020",
                favorite: true,
            }, {
                name: "Don't Star Now",
                artist: "Dua Lipa",
                album: "Future Nostalgia",
                release: "26-01-2020",
                favorite: false,
            },
            {
                name: "Levitating",
                artist: "Dua Lipa",
                album: "Future Nostalgia",
                release: "26-01-2020",
                favorite: false,
            },
            {
                name: "Hallucinate",
                artist: "Dua Lipa",
                album: "Future Nostalgia",
                release: "26-01-2020",
                favorite: true,
            }
        ];
    }
    ngOnInit() {
        this.corazon = "#585A66";
    }
    getCorazon() {
        return this.corazon;
    }
    clickCorazon() {
        if (this.corazon == "#585A66") {
            this.corazon = "#fa2727";
        }
        else {
            this.corazon = "#585A66";
        }
    }
}
ResultadoBusquedaComponent.ɵfac = function ResultadoBusquedaComponent_Factory(t) { return new (t || ResultadoBusquedaComponent)(); };
ResultadoBusquedaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultadoBusquedaComponent, selectors: [["app-resultado-busqueda"]], decls: 85, vars: 38, consts: [[1, "row", "d-none", "d-md-flex"], [1, "col-3"], ["id", "body", 1, "col-9"], [1, "row", "my-5"], [1, "table", "mt-4"], [4, "ngFor", "ngForOf"], [1, "icono-left"], [1, "title-row"], [1, "row"], ["url", "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930", 3, "routerLink"], ["url", "https://images-na.ssl-images-amazon.com/images/I/71hhWv46jSL._AC_SL1200_.jpg", 3, "routerLink"], ["url", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLm7PE1ANz0lGsf4jZz1BzvDTH6IzkWgB7TA&usqp=CAU", 3, "routerLink"], ["url", "https://upload.wikimedia.org/wikipedia/commons/7/72/Nirvana_album_cover.jpg", 3, "routerLink"], ["url", "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Bee-Gees-Odessa-album-cover-web-optimised-820.jpg", 3, "routerLink"], [1, "row", "mt-5", "last-row"], ["url", "https://cdn.cp.adobe.io/content/2/rendition/803402ad-b7bf-4d5f-8013-2b0b2c53e3b6/artwork/0687a1f2-5407-400d-b540-c7454f593fde/version/0/format/jpg/dimension/width/size/240", 3, "routerLink"], ["url", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoN9D3cgnT6Y_4L56oF-lUfUJqSIz5kyZk0g&usqp=CAU", 3, "routerLink"], ["url", "https://d3ui957tjb5bqd.cloudfront.net/uploads/2020/08/25132918/Podcast-Cover-Art-dribbble.jpg", 3, "routerLink"], ["url", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmi_wqCSMTpCMUZuIdgvUJbORttvrAyQsnA&usqp=CAU", 3, "routerLink"], ["url", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlEwg-Az1m_BLhWD9FbNkeurHZ28S0uSW-Q&usqp=CAU", 3, "routerLink"], ["id", "mobile"], [1, "mt-5", "pt-4"], [1, "table"], [1, "table-icon", 3, "icon"], [3, "routerLink"], [1, "text-right"], [1, "corazon", 3, "click"], [1, "mx-2", "icon", 3, "icon"], [1, "mx-4", "table-icon", 3, "icon"], [3, "icon"], ["class", "mx-5", 3, "icon", 4, "ngIf"], [1, "mx-5", 3, "icon"]], template: function ResultadoBusquedaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Resultados de la Busqueda para Dua Lipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Canciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " TITLE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ARTIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ALBUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " RELEASE DATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ResultadoBusquedaComponent_tr_24_Template, 16, 12, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+ Ver Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-playlist-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-playlist-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-playlist-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-playlist-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-playlist-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-playlist-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-playlist-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-playlist-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-playlist-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-playlist-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Resultados de la Busqueda para Dua Lipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Canciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ResultadoBusquedaComponent_tr_59_Template, 8, 6, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "+ Ver Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-playlist-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-playlist-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-playlist-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-playlist-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-playlist-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-playlist-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-playlist-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "app-playlist-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-music-reproductor");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c2));
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _left_navigation_bar_left_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["LeftNavigationBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _music_reproductor_music_reproductor_component__WEBPACK_IMPORTED_MODULE_7__["MusicReproductorComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#body[_ngcontent-%COMP%] {\r\n    top: 6rem;\r\n    bottom: 10rem;\r\n    margin-left: 30%;\r\n}\r\n\r\n#body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.first-carousel[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.last-row[_ngcontent-%COMP%] {\r\n    margin-bottom: 30%;\r\n}\r\n\r\n#mobile[_ngcontent-%COMP%] {\r\n    margin: 5%;\r\n}\r\n\r\n.corazon[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    color: rgba(250, 39, 39, 0.822);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    color: white;\r\n    z-index: 0;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: #FC947D;\r\n    border-color: #FC947D !important;\r\n    border-top: none;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-color: #FC947D !important;\r\n    border-bottom: 1px solid;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   .table-icon[_ngcontent-%COMP%] {\r\n    color: #FC947D;\r\n}\r\n\r\n.icono-left[_ngcontent-%COMP%] {\r\n    color: #FC947D;\r\n    font-size: 20px;\r\n}\r\n\r\n.title-row[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n}\r\n\r\n@media only screen and (min-width: 420px) {\r\n    .last-row[_ngcontent-%COMP%] {\r\n        margin-bottom: 15%;\r\n    }\r\n    #mobile[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    table[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n    }\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 35px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 419px) {\r\n    h2[_ngcontent-%COMP%] {\r\n        background: -webkit-linear-gradient(#FC947D 0%, #FB7079 53.65%, #FA5075 100%);\r\n        -webkit-background-clip: text;\r\n                background-clip: text;\r\n        -webkit-text-fill-color: transparent;\r\n    }\r\n    #mobile[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        margin-top: 6.3rem;\r\n    }\r\n    #mobile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        color: white;\r\n    }\r\n    table[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        border-top: none;\r\n    }\r\n    table[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        color: #FC947D;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdGFkby1idXNxdWVkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2RUFBNkU7UUFDN0UsNkJBQXFCO2dCQUFyQixxQkFBcUI7UUFDckIsb0NBQW9DO0lBQ3hDO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJyZXN1bHRhZG8tYnVzcXVlZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5IHtcclxuICAgIHRvcDogNnJlbTtcclxuICAgIGJvdHRvbTogMTByZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG4jYm9keSBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZpcnN0LWNhcm91c2VsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGFzdC1yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzAlO1xyXG59XHJcblxyXG4jbW9iaWxlIHtcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5jb3Jhem9uIDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTAsIDM5LCAzOSwgMC44MjIpO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICBib3JkZXItY29sb3I6ICNGQzk0N0QgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZDOTQ3RCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG59XHJcblxyXG50YWJsZSBmYS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxudGFibGUgLnRhYmxlLWljb24ge1xyXG4gICAgY29sb3I6ICNGQzk0N0Q7XHJcbn1cclxuXHJcbi5pY29uby1sZWZ0IHtcclxuICAgIGNvbG9yOiAjRkM5NDdEO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUtcm93IHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KSB7XHJcbiAgICAubGFzdC1yb3cge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIH1cclxuICAgICNtb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgdGFibGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE5cHgpIHtcclxuICAgIGgyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRkM5NDdEIDAlLCAjRkI3MDc5IDUzLjY1JSwgI0ZBNTA3NSAxMDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgI21vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYuM3JlbTtcclxuICAgIH1cclxuICAgICNtb2JpbGUgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIHRhYmxlIHRkIHtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgfVxyXG4gICAgdGFibGUgZmEtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNGQzk0N0Q7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultadoBusquedaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resultado-busqueda',
                templateUrl: './resultado-busqueda.component.html',
                styleUrls: ['./resultado-busqueda.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map