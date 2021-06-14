(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Documents\000_ANGULAR\vaporbox\client\src\main.ts */"zUnb");


/***/ }),

/***/ "24cc":
/*!*************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/upload.service */ "jT/F");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function UserEditComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Los cambios se han guardado correctamente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserEditComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No se han podido guardar los cambios, intentalo nuevamente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserEditComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserEditComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El apellido es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserEditComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El nombre de usuario es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserEditComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La direcci\u00F3n de correo electr\u00F3nico es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserEditComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r13.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
class UserEditComponent {
    constructor(_router, _route, _userService, _uploadService) {
        this._router = _router;
        this._route = _route;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.user = this._userService.getIdentity();
        this.identity = this.user;
        this.token = this._userService.getToken();
    }
    ngOnInit() {
    }
    onSubmit() {
        this._userService.updateUser(this.user).subscribe(response => {
            if (!response.user) {
                this.status = 'error';
            }
            else {
                this.status = 'success';
                localStorage.setItem('identity', JSON.stringify(this.user));
                this.identity = this.user;
                //Subir archivo de imagen usuario
                this._uploadService.makeFileRequest('api/upload-image-user/' + this.user._id, [], this.filesToUpload, this.token, 'image')
                    .then((result) => {
                    this.user.image = result.user.image;
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    window.location.reload();
                });
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = 'error';
            }
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    deleteUser(id) {
        this._userService.deleteUser(id).subscribe(response => {
            if (response) {
                localStorage.clear();
                this.identity = null;
                this._router.navigate(['/register']);
            }
        }, error => {
            console.log(error);
        });
    }
}
UserEditComponent.ɵfac = function UserEditComponent_Factory(t) { return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"])); };
UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserEditComponent, selectors: [["app-user-edit"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"]])], decls: 76, vars: 17, consts: [[1, "row", "user-edit-container"], [1, "mb-5", "mt-5", "form-container"], [1, "mb-3", "text-center", "section-title"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-xl-10", "col-lg-10", 3, "ngSubmit"], ["editUserForm", "ngForm"], [1, "row"], [1, "col-lg-6"], [1, "col-lg-12", "mt-3"], ["for", "name"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["for", "surname"], ["type", "text", "name", "surname", "maxlength", "50", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surname", "ngModel"], ["for", "nick"], ["type", "text", "name", "nick", "maxlength", "50", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nick", "ngModel"], ["for", "email"], ["type", "text", "name", "email", "required", "", "pattern", "[a-z0-9-_%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "bio"], ["type", "text", "name", "bio", "maxlength", "100", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bio", "ngModel"], ["for", "photo"], ["type", "file", "placeholder", "Subir im\u00E1gen", 1, "form-control", 3, "change"], ["fileInput", ""], ["class", "text-center mt-3", 4, "ngIf"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-default", "mt-3", 3, "disabled"], ["type", "button", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#deleteModal", 1, "btn", "btn-sm", "btn-light", "mt-3"], [1, "fa", "fa-trash"], ["id", "deleteModal", "tabindex", "-1", "aria-labelledby", "deleteModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "deleteModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close-modal"], [1, "fa", "fa-close"], [1, "modal-body"], [1, "user-delete-modal", "text-center"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-trash", "mx-2"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "text-center", "mt-3"], ["alt", "Imagen de usuario cargada", 1, "loaded-img", 3, "src"]], template: function UserEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Editar perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UserEditComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UserEditComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UserEditComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_13_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, UserEditComponent_span_15_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_19_listener($event) { return ctx.user.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, UserEditComponent_span_21_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_25_listener($event) { return ctx.user.nick = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, UserEditComponent_span_27_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_32_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, UserEditComponent_span_34_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_38_listener($event) { return ctx.user.bio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Foto de perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UserEditComponent_Template_input_change_43_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, UserEditComponent_div_45_Template, 3, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Guardar cambios");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Eliminar cuenta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\u00BFDeseas borrar tu cuenta en Vaporbox?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Una vez que elimines tu cuenta no podr\u00E1s recuperarla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserEditComponent_Template_button_click_73_listener() { return ctx.deleteUser(ctx.user._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Eliminar cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.status == "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.status == "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r3.value && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r5.value && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.nick);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r7.value && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r9.value && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r2.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.identity.name + " " + ctx.identity.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "@" + ctx.identity.nick, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.identity.bio, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"]], styles: [".user-edit-container[_ngcontent-%COMP%] {\n  margin-top: 7vh;\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto 0 auto;\n}\n@media (max-width: 768px) {\n  .user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 0 10vw;\n  }\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-size: 1rem;\n  margin-left: 15px;\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  color: #556DC8;\n  background: transparent;\n  border: rgba(235, 235, 235, 0.2) 1px groove;\n  background: rgba(245, 245, 245, 0.2);\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #556DC8;\n  font-size: smaller;\n  margin-left: 15px;\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .loaded-img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #6e2e81;\n  color: whitesmoke;\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #DD517F;\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  margin-left: 5%;\n  color: #DD517F;\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover {\n  background-color: #c8c8c8;\n  border-color: #c8c8c8;\n}\n.user-edit-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  background-color: #dfdede;\n  border-radius: 70px;\n  border: 5px solid #DD517F;\n  overflow: hidden;\n}\n.user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\n.user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:focus, .user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  box-shadow: none;\n}\n.user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .user-delete-modal[_ngcontent-%COMP%] {\n  color: grey;\n  font-weight: 200;\n  padding: 1.5rem;\n  padding-bottom: 0;\n  font-size: 1rem;\n}\n.user-edit-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .user-delete-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #556DC8;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxlQUFBO0FBTEo7QUFNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUpSO0FBS1E7RUFOSjtJQU9RLGVBQUE7RUFGVjtBQUNGO0FBR1E7RUFDSSxjQWxCSDtFQW1CRyxlQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUdRO0VBQ0ksbUJBQUE7RUFDQSxjQXJCTDtFQXNCSyx1QkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7QUFEWjtBQUdRO0VBQ0ksY0EzQkw7RUE0Qkssa0JBQUE7RUFDQSxpQkFBQTtBQURaO0FBSVE7RUFDSSxZQUFBO0FBRlo7QUFJUTtFQUNJLHlCQXZDSDtFQXdDRyxpQkFBQTtBQUZaO0FBR1k7RUFDSSx5QkF6Q1Q7QUF3Q1A7QUFJUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBL0NMO0FBNkNQO0FBR1k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBRGhCO0FBR1k7RUFDSSxpQkFBQTtBQURoQjtBQU9RO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFMWjtBQU1ZO0VBQ0ksYUFBQTtBQUpoQjtBQU1vQjtFQUNJLGlCQUFBO0FBSnhCO0FBTW9CO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBSnhCO0FBS3dCO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQUg1QjtBQVFvQjtFQUNJLGdCQUFBO0FBTnhCO0FBUW9CO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU54QjtBQU93QjtFQUNJLGNBeEZyQjtFQXlGcUIsZ0JBQUE7QUFMNUIiLCJmaWxlIjoidXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHZpb2xldDogIzZlMmU4MTtcclxuJHBpbms6ICNERDUxN0Y7XHJcbiRsaWdodGJsdWU6ICM3OTk4RUU7XHJcbiRibHVlOiAjNTU2REM4O1xyXG4kb3JhbmdlOiAjRTY4RTM2O1xyXG5cclxuLnVzZXItZWRpdC1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjIpIDFweCBncm9vdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiB3aGl0ZXNtb2tlLCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubG9hZGVkLWltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWRlZmF1bHR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1saWdodHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFse1xyXG4gICAgICAgIC5tb2RhbC1kaWFsb2d7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMiwgMjIyKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNzBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJHBpbms7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgIC5tb2RhbC1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWNsb3NlLW1vZGFse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMsJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLWRlbGV0ZS1tb2RhbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)
                ])
            ])
        ] } });


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(_id, name, surname, nick, email, password, role, image, bio) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.nick = nick;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
        this.bio = bio;
    }
}


/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/message */ "qZOq");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/follow.service */ "MnDo");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "tZre");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ "h/Hl");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_12__);
















const _c0 = ["chatScreen"];
function ChatComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
} }
function ChatComponent_div_1_div_5_div_4_ul_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const follower_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", follower_r10.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_div_1_div_5_div_4_ul_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 27);
} }
function ChatComponent_div_1_div_5_div_4_ul_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 28);
} }
function ChatComponent_div_1_div_5_div_4_ul_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 29);
} }
function ChatComponent_div_1_div_5_div_4_ul_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [30, "..."]; };
function ChatComponent_div_1_div_5_div_4_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatComponent_div_1_div_5_div_4_ul_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const follower_r10 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r17.setReceiver(follower_r10.user._id, follower_r10.user.name + " " + follower_r10.user.surname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChatComponent_div_1_div_5_div_4_ul_1_img_3_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ChatComponent_div_1_div_5_div_4_ul_1_img_4_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ChatComponent_div_1_div_5_div_4_ul_1_i_5_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ChatComponent_div_1_div_5_div_4_ul_1_i_6_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ChatComponent_div_1_div_5_div_4_ul_1_span_12_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follower_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", follower_r10.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !follower_r10.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r9.onlineUsers.includes(follower_r10.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.onlineUsers.includes(follower_r10.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 7, follower_r10.user.name + " " + follower_r10.user.surname, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", "@" + follower_r10.user.nick, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.unviewedMessages && ctx_r9.unviewedMessages.includes(follower_r10.user._id));
} }
function ChatComponent_div_1_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChatComponent_div_1_div_5_div_4_ul_1_Template, 13, 11, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.followers);
} }
function ChatComponent_div_1_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Consegu\u00ED seguidores para poder chatear!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatComponent_div_1_div_5_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Conversaci\u00F3n con ", ctx_r6.chatname, "");
} }
function ChatComponent_div_1_div_5_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Elige alguien para chatear!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatComponent_div_1_div_5_li_13_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const follower_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", follower_r19.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_div_1_div_5_li_13_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 27);
} }
function ChatComponent_div_1_div_5_li_13_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 28);
} }
function ChatComponent_div_1_div_5_li_13_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 29);
} }
function ChatComponent_div_1_div_5_li_13_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatComponent_div_1_div_5_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatComponent_div_1_div_5_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const follower_r19 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r26.setReceiver(follower_r19.user._id, follower_r19.user.name + " " + follower_r19.user.surname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChatComponent_div_1_div_5_li_13_img_2_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChatComponent_div_1_div_5_li_13_img_3_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ChatComponent_div_1_div_5_li_13_i_4_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ChatComponent_div_1_div_5_li_13_i_5_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ChatComponent_div_1_div_5_li_13_span_7_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follower_r19 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", follower_r19.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !follower_r19.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.onlineUsers.includes(follower_r19.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.onlineUsers.includes(follower_r19.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", follower_r19.user.name + " " + follower_r19.user.surname + " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.unviewedMessages && ctx_r8.unviewedMessages.includes(follower_r19.user._id));
} }
function ChatComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Contactos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ChatComponent_div_1_div_5_div_4_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ChatComponent_div_1_div_5_div_5_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ChatComponent_div_1_div_5_p_10_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ChatComponent_div_1_div_5_p_11_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ChatComponent_div_1_div_5_li_13_Template, 8, 6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.followers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.followers.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.message.receiver != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.message.receiver == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.followers);
} }
function ChatComponent_div_1_div_6_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Conversaci\u00F3n con ", ctx_r28.chatname, " ");
} }
function ChatComponent_div_1_div_6_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Elige alguien para chatear!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatComponent_div_1_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatComponent_div_1_div_6_div_8_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const msg_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", msg_r35.emitter.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_div_1_div_6_div_8_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 27);
} }
function ChatComponent_div_1_div_6_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChatComponent_div_1_div_6_div_8_div_1_img_2_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChatComponent_div_1_div_6_div_8_div_1_img_3_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "amLocale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", msg_r35.emitter.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !msg_r35.emitter.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](msg_r35.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 9, msg_r35.created_at), "es")));
} }
function ChatComponent_div_1_div_6_div_8_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const msg_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", msg_r35.emitter.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_div_1_div_6_div_8_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 27);
} }
function ChatComponent_div_1_div_6_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChatComponent_div_1_div_6_div_8_div_2_img_2_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChatComponent_div_1_div_6_div_8_div_2_img_3_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "amLocale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", msg_r35.emitter.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !msg_r35.emitter.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](msg_r35.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 9, msg_r35.created_at), "es")));
} }
function ChatComponent_div_1_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChatComponent_div_1_div_6_div_8_div_1_Template, 11, 11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChatComponent_div_1_div_6_div_8_div_2_Template, 11, 11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r35 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", msg_r35.emitter._id != ctx_r32.identity._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", msg_r35.emitter._id === ctx_r32.identity._id);
} }
function ChatComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChatComponent_div_1_div_6_h5_2_Template, 2, 1, "h5", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChatComponent_div_1_div_6_h5_3_Template, 2, 0, "h5", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ChatComponent_div_1_div_6_div_7_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ChatComponent_div_1_div_6_div_8_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ChatComponent_div_1_div_6_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r46.onSubmit(_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "textarea", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ChatComponent_div_1_div_6_Template_textarea_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r48.message.text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.message.receiver != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.message.receiver == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.message.receiver == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.message.text);
} }
function ChatComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ChatComponent_div_1_div_5_Template, 14, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ChatComponent_div_1_div_6_Template, 17, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.followers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.followers);
} }
class ChatComponent {
    constructor(_route, _router, _userService, _followService, _messageService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this._messageService = _messageService;
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__["io"])("ws://vaporbox.herokuapp.com:3000");
        this.loading = true;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.getFollows(this.token);
        this.message = new _models_message__WEBPACK_IMPORTED_MODULE_0__["Message"]('', '', '', '', this.identity._id, '');
        this.onlineUsers = [];
    }
    ngOnInit() {
        this.checkUnviewedMessages();
        this.sockets();
        this.scrollToBottom();
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    sockets() {
        this.socket.emit("addUser", this.identity._id);
        this.socket.on("getUsers", users => {
            this.onlineUsers = users.map(user => user.userId);
        });
        this.socket.on("getMessage", msg => {
            console.log(msg);
            this.getMessages();
            this.checkUnviewedMessages();
        });
    }
    onSubmit(form) {
        this._messageService.addMessage(this.token, this.message).subscribe(response => {
            this.socket.emit("sendMessage", response.message);
            this.getMessages();
        }, error => {
            console.log(error);
        });
        form.reset();
    }
    getFollows(token) {
        this._followService.getFollowers(token).subscribe(response => {
            if (response.follows) {
                this.followers = response.follows;
            }
        }, error => {
            console.log(error);
        });
    }
    setReceiver(id, name) {
        this.message.receiver = id;
        this.chatname = name;
        //Mensajes del chat entre usuario y 'receiver'
        this.getMessages();
        this.setViewedMessages();
        this.checkUnviewedMessages();
    }
    getMessages() {
        this._messageService.getMessages(this.token, this.message.receiver).subscribe(response => {
            this.messages = response.messages;
            this.loading = false;
        }, error => {
            console.log(error);
        });
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    checkUnviewedMessages() {
        this._messageService.getUnviewedMessages(this.token).subscribe(response => {
            this.unviewedMessages = response.unviewed.map(msg => msg.emitter).sort();
            this.loading = false;
        }, error => {
            console.log(error);
        });
    }
    setViewedMessages() {
        this._messageService.setViewedMessages(this.token, this.message).subscribe(response => {
        }, error => {
            console.log(error);
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"], _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "chat-container col-xl-12 col-lg-12", 4, "ngIf"], [1, "chat-container", "col-xl-12", "col-lg-12"], [1, "mt-5"], [1, "mb-3", "text-center", "section-title"], [1, "row"], ["class", "col-xl-5 col-lg-5", 4, "ngIf"], ["id", "chat", "class", "col-xl-7 col-lg-7", 4, "ngIf"], [1, "col-xl-5", "col-lg-5"], [1, "subtitle", "text-center"], ["id", "followers-list", 4, "ngIf"], ["class", "followers-default text-center", 4, "ngIf"], ["id", "followers-mobile"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "href", "#"], [1, "d-flex", "selector"], [1, "dropdown-menu"], ["value", "follower.user._id", 4, "ngFor", "ngForOf"], ["id", "followers-list"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "src", 4, "ngIf"], ["src", "assets/img/default-user.jpg", 4, "ngIf"], ["class", "fa fa-globe", 4, "ngIf"], ["class", "fa fa-globe online", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [3, "src"], ["src", "assets/img/default-user.jpg"], [1, "fa", "fa-globe"], [1, "fa", "fa-globe", "online"], [1, "pull-right"], [1, "fa", "fa-envelope"], [1, "followers-default", "text-center"], ["value", "follower.user._id"], ["id", "chat", 1, "col-xl-7", "col-lg-7"], [1, "text-center", "chat-title"], ["id", "chat-screen"], ["chatScreen", ""], [1, "d-flex", "flex-column"], ["id", "illustration-chat", 4, "ngIf"], [3, "ngSubmit"], ["formAdd", "ngForm"], ["id", "chat-input", 1, "text-center", "d-flex"], ["name", "text", "placeholder", "Escribe aqu\u00ED tu mensaje", "cols", "30", "rows", "5", "required", "", 3, "ngModel", "ngModelChange"], ["text", "ngModel"], ["type", "submit", "value", "Enviar", 1, "btn", "btn-default"], ["id", "illustration-chat"], ["src", "assets/img/chat.svg"], ["class", "received-messages pull-left", 4, "ngIf"], ["class", "sent-messages pull-right", 4, "ngIf"], [1, "received-messages", "pull-left"], [1, "d-flex"], [1, "sent-messages", "pull-right"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ChatComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChatComponent_div_1_Template, 7, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], pipes: [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_11__["TruncatePipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_12__["TimeAgoPipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_12__["LocalePipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_12__["FromUnixPipe"]], styles: [".chat-container[_ngcontent-%COMP%] {\n  margin-top: 14vh;\n}\n@media (max-width: 992px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%] {\n  margin: 0 5%;\n  border-radius: 25px;\n  width: 100%;\n  height: 65vh;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n@media (max-width: 992px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  border-radius: 50px;\n  background-color: rgba(202, 202, 202, 0.1);\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  height: 10vh;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #DD517F;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 3px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 3px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  -moz-box-shadow: 3px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  margin: 3% 4% 3% 1%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 5px 15px 9px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 5px 15px 9px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 5px 15px 9px 0px rgba(0, 0, 0, 0.1);\n  position: relative;\n  bottom: 1%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2% 0;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 5px;\n  color: #6e2e81;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #DD517F;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%]:hover {\n  color: #DD517F;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  margin-right: 3%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: #556DC8;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #556DC8;\n  margin-right: 1rem;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .followers-default[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #556DC8;\n  font-size: 1.5rem;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n  border-radius: 50px;\n}\n@media (min-width: 993px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  border: none;\n  background-color: #6e2e81;\n  box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  -moz-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  width: 90%;\n  padding: 1%;\n  margin-left: 5%;\n  list-style: none;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  padding: 0;\n  margin: 0 5%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:active, .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background-color: #d4d4d4;\n  width: 95%;\n  padding: 1%;\n  border: none;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1%;\n  border-bottom: 0.5px solid #7998EE;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  margin-right: 2%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #followers-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%] {\n  background: rgba(245, 245, 245, 0.2);\n  border-radius: 50px;\n  border: none;\n  width: 95%;\n  height: 10vh;\n  margin: 2vh 0;\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%] {\n    margin-bottom: 5vh;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: rgba(245, 245, 245, 0.2);\n  border-radius: 50px;\n  border: rgba(235, 235, 235, 0.2) 0.5px groove;\n  margin: 2vh;\n  padding: 0.5% 0 0 2%;\n  width: 90%;\n  height: 6vh;\n  color: #6e2e81;\n  overflow: hidden;\n}\n@media (max-width: 450px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 2% 0 0 4%;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:active, .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  text-shadow: none;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #556DC8;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 6vh;\n  margin: 2vh;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #DD517F;\n  color: whitesmoke;\n}\n@media (max-width: 992px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  background: rgba(245, 245, 245, 0.2);\n  border-radius: 10px;\n  border: none;\n  width: 90%;\n  height: 57vh;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]::-webkit-scrollbar {\n  border-radius: 50px;\n  background-color: rgba(202, 202, 202, 0.1);\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  height: 30vh;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #6e2e81;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   #illustration-chat[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   #illustration-chat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 5%;\n  width: 45%;\n}\n@media (max-width: 768px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   #illustration-chat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 75%;\n    padding: 7.5%;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .received-messages[_ngcontent-%COMP%] {\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  -moz-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  width: 35vw;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.5vw;\n  margin: 0.5vw 2vw;\n  border-radius: 25px;\n}\n@media (max-width: 992px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .received-messages[_ngcontent-%COMP%] {\n    width: 70vw;\n    padding: 2vw;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .received-messages[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .received-messages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  padding: 0.2vw;\n  margin-left: 3%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .received-messages[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  padding: 0.5vw;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .sent-messages[_ngcontent-%COMP%] {\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  -moz-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.12);\n  width: 35vw;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 1%;\n  margin: 0.5vw 2vw;\n  border-radius: 25px;\n}\n@media (max-width: 992px) {\n  .chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .sent-messages[_ngcontent-%COMP%] {\n    width: 70vw;\n    padding: 2vw;\n  }\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .sent-messages[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .sent-messages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  padding: 1%;\n  margin-left: 3%;\n}\n.chat-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   #chat[_ngcontent-%COMP%]   #chat-screen[_ngcontent-%COMP%]   .sent-messages[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  padding: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksZ0JBQUE7QUFMSjtBQVFZO0VBREo7SUFFUSxhQUFBO0VBTGQ7QUFDRjtBQVFRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTlo7QUFPWTtFQVBKO0lBUVEsYUFBQTtFQUpkO0FBQ0Y7QUFLWTtFQUNJLG1CQUFBO0VBQ0EsMENBQUE7QUFIaEI7QUFLWTtFQUNJLFlBQUE7QUFIaEI7QUFLWTtFQUNJLHlCQWhDVDtBQTZCUDtBQUtZO0VBQ0ksZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdEQUFBO0VBQ0Esd0RBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFIaEI7QUFJZ0I7RUFDSSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSx1REFBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRnBCO0FBSWdCO0VBQ0ksYUFBQTtBQUZwQjtBQUdvQjtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBeERmO0FBdURUO0FBRXdCO0VBQ0ksY0F6RHJCO0FBeURQO0FBRXdCO0VBQ0ksY0E1RHJCO0FBNERQO0FBQzRCO0VBQ0ksY0E5RHpCO0FBK0RQO0FBRXdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQTVCO0FBR3dCO0VBQ0ksa0JBQUE7QUFENUI7QUFHd0I7RUFDSSxnQkFBQTtFQUNBLGNBM0VyQjtBQTBFUDtBQUk0QjtFQUNJLGNBL0V6QjtFQWdGeUIsa0JBQUE7QUFGaEM7QUFVWTtFQUNJLGNBekZUO0VBMEZTLGlCQUFBO0FBUmhCO0FBV1E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBVFo7QUFVWTtFQUhKO0lBSVEsYUFBQTtFQVBkO0FBQ0Y7QUFRWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQXpHUDtFQTBHTyxnREFBQTtFQUNBLHdEQUFBO0VBQ0EscURBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5oQjtBQU9nQjtFQUNJLHFCQUFBO0FBTHBCO0FBT3dCO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUw1QjtBQVNnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBUHBCO0FBU2dCO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQcEI7QUFRb0I7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7QUFOeEI7QUFPd0I7RUFDSSxxQkFBQTtBQUw1QjtBQU00QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUpoQztBQU00QjtFQUNJLFVBQUE7QUFKaEM7QUFXUTtFQUNJLGVBQUE7QUFUWjtBQVVZO0VBQ0ksb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFSaEI7QUFTZ0I7RUFUSjtJQVVRLGtCQUFBO0VBTmxCO0FBQ0Y7QUFPZ0I7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBN0tYO0VBOEtXLGdCQUFBO0FBTHBCO0FBTW9CO0VBVko7SUFXUSxrQkFBQTtFQUh0QjtBQUNGO0FBSW9CO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBRnhCO0FBSW9CO0VBQ0ksY0FwTGpCO0FBa0xQO0FBS2dCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSHBCO0FBSW9CO0VBQ0kseUJBOUxqQjtFQStMaUIsaUJBQUE7QUFGeEI7QUFXb0I7RUFESjtJQUVRLGFBQUE7RUFSdEI7QUFDRjtBQVdZO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVGhCO0FBVWdCO0VBQ0ksbUJBQUE7RUFDQSwwQ0FBQTtBQVJwQjtBQVVnQjtFQUNJLFlBQUE7QUFScEI7QUFVZ0I7RUFDSSx5QkEvTlg7QUF1TlQ7QUFVZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFScEI7QUFTb0I7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQVB4QjtBQVF3QjtFQUhKO0lBSVEsVUFBQTtJQUNBLGFBQUE7RUFMMUI7QUFDRjtBQVFnQjtFQUNJLDBDQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3REFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTnBCO0FBT29CO0VBVko7SUFXUSxXQUFBO0lBQ0EsWUFBQTtFQUp0QjtBQUNGO0FBS29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUh4QjtBQUtvQjtFQUNJLGNBalFmO0VBa1FlLGNBQUE7RUFDQSxlQUFBO0FBSHhCO0FBS29CO0VBQ0ksY0F0UWY7RUF1UWUsY0FBQTtBQUh4QjtBQU1nQjtFQUNJLDBDQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3REFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSnBCO0FBS29CO0VBVko7SUFXUSxXQUFBO0lBQ0EsWUFBQTtFQUZ0QjtBQUNGO0FBR29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUR4QjtBQUdvQjtFQUNJLGNBOVJmO0VBK1JlLFdBQUE7RUFDQSxlQUFBO0FBRHhCO0FBR29CO0VBQ0ksY0FuU2Y7RUFvU2UsV0FBQTtBQUR4QiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHZpb2xldDogIzZlMmU4MTtcclxuJHBpbms6ICNERDUxN0Y7XHJcbiRsaWdodGJsdWU6ICM3OTk4RUU7XHJcbiRibHVlOiAjNTU2REM4O1xyXG4kb3JhbmdlOiAjRTY4RTM2O1xyXG5cclxuLmNoYXQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTR2aDtcclxuICAgIC5yb3d7XHJcbiAgICAgICAgLnN1YnRpdGxle1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjZm9sbG93ZXJzLWxpc3R7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1JTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjV2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMiwgMjAyLCAyMDIsIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCwgMC41KTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDEwcHggOXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAzcHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzJSA0JSAzJSAxJTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxNXB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjEwKTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAxNXB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjEwKTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCAxNXB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjEwKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9ubGluZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb2xsb3dlcnMtZGVmYXVsdHtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNmb2xsb3dlcnMtbW9iaWxle1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3due1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDEwcHggOXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWN0aXZlLCAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxJVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgI2NoYXQtaW5wdXR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogd2hpdGVzbW9rZSwgJGFscGhhOiAwLjIpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJ2aCAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogd2hpdGVzbW9rZSwgJGFscGhhOiAwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMikgMC41cHggZ3Jvb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNSUgMCAwIDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJSAwIDAgNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6YWN0aXZlLCAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNjaGF0e1xyXG4gICAgICAgICAgICAuY2hhdC10aXRsZXtcclxuICAgICAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNjaGF0LXNjcmVlbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiB3aGl0ZXNtb2tlLCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTd2aDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAyLCAyMDIsIDIwMiwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaWxsdXN0cmF0aW9uLWNoYXR7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDcuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmVjZWl2ZWQtbWVzc2FnZXN7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggOXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDEwcHggOXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDEwcHggOXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjV2dyAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzbWFsbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZW50LW1lc3NhZ2Vze1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzV2dztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC41dncgMnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJ2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHZpb2xldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc21hbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(500)
                ])
            ])
        ] } });


/***/ }),

/***/ "62Yg":
/*!*******************************************************************************!*\
  !*** ./src/app/components/saved-publications/saved-publications.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SavedPublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedPublicationsComponent", function() { return SavedPublicationsComponent; });
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/upload.service */ "jT/F");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_9__);













function SavedPublicationsComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loading");
} }
function SavedPublicationsComponent_div_1_div_1_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const publication_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", publication_r5.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function SavedPublicationsComponent_div_1_div_1_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 28);
} }
function SavedPublicationsComponent_div_1_div_1_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", publication_r5.file, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function SavedPublicationsComponent_div_1_div_1_div_1_i_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 31);
} }
function SavedPublicationsComponent_div_1_div_1_div_1_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 32);
} }
function SavedPublicationsComponent_div_1_div_1_div_1_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Da el primer like!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SavedPublicationsComponent_div_1_div_1_div_1_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Le gusta a ", publication_r5.likes.length, " persona");
} }
function SavedPublicationsComponent_div_1_div_1_div_1_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Le gusta a ", publication_r5.likes.length, " personas");
} }
function SavedPublicationsComponent_div_1_div_1_div_1_i_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 34);
} }
function SavedPublicationsComponent_div_1_div_1_div_1_i_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 35);
} }
function SavedPublicationsComponent_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SavedPublicationsComponent_div_1_div_1_div_1_img_4_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SavedPublicationsComponent_div_1_div_1_div_1_img_5_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "amLocale");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, SavedPublicationsComponent_div_1_div_1_div_1_div_22_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SavedPublicationsComponent_div_1_div_1_div_1_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const publication_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r21.likePublication(publication_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, SavedPublicationsComponent_div_1_div_1_div_1_i_25_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, SavedPublicationsComponent_div_1_div_1_div_1_i_26_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, SavedPublicationsComponent_div_1_div_1_div_1_span_27_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SavedPublicationsComponent_div_1_div_1_div_1_span_28_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, SavedPublicationsComponent_div_1_div_1_div_1_span_29_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SavedPublicationsComponent_div_1_div_1_div_1_Template_div_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const publication_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r24.savePublication(publication_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, SavedPublicationsComponent_div_1_div_1_div_1_i_31_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, SavedPublicationsComponent_div_1_div_1_div_1_i_32_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", publication_r5.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !publication_r5.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", publication_r5.user.name + " " + publication_r5.user.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 19, publication_r5.created_at), "es")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "@" + publication_r5.user.nick, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", publication_r5.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", publication_r5.file != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", publication_r5.likes.includes(ctx_r6.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !publication_r5.likes.includes(ctx_r6.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", publication_r5.likes.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", publication_r5.likes.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", publication_r5.likes.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", publication_r5.saves.includes(ctx_r6.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !publication_r5.saves.includes(ctx_r6.identity._id));
} }
function SavedPublicationsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SavedPublicationsComponent_div_1_div_1_div_1_Template, 34, 21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.savedPublications);
} }
function SavedPublicationsComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SavedPublicationsComponent_div_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.viewMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ver m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SavedPublicationsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No hay publicaciones para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SavedPublicationsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SavedPublicationsComponent_div_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SavedPublicationsComponent_div_1_button_3_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SavedPublicationsComponent_div_1_div_4_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.savedPublications);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.noMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.savedPublications && ctx_r1.savedPublications.length < 1);
} }
class SavedPublicationsComponent {
    constructor(_route, _router, _userService, _publicationService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._publicationService = _publicationService;
        this._notificationService = _notificationService;
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__["io"])("ws://localhost:3000");
        this.noMore = false;
        this.loading = true;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.page = 1;
        this.getSavedPublications(this.identity._id, this.page);
    }
    ngOnInit() {
    }
    getSavedPublications(userId, page, adding = false) {
        this._publicationService.getSavedPublications(userId, page).subscribe(response => {
            if (response.saved_publications) {
                this.total = response.total_items;
                this.pages = response.pages;
                this.itemsPerPage = response.items_per_page;
                this.savedPublications = response.saved_publications;
                this.loading = false;
                if (!adding) {
                    this.savedPublications = response.saved_publications;
                }
                else {
                    let arrayA = this.savedPublications;
                    let arrayB = response.saved_publications;
                    this.savedPublications = arrayA.concat(arrayB);
                }
            }
            else {
                this.status = 'error';
                this.loading = false;
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    viewMore() {
        this.page += 1;
        if (this.page == this.pages) {
            this.noMore = true;
        }
        this.getSavedPublications(this.identity._id, this.page, true);
    }
    savePublication(publication) {
        if (!publication.saves.includes(this.identity._id)) {
            this.showMessageSaved = true;
            setTimeout(() => { this.showMessageSaved = false; }, 3000);
        }
        this._publicationService.savePublication(publication).subscribe(response => {
            if (response && response.message === "Saved") {
                this.statusSaved = true;
                this.isDisabled = true;
                this.getSavedPublications(this.user, this.page);
            }
            else if (response && response.message === "Unsaved") {
                this.statusSaved = false;
                this.isDisabled = true;
                this.getSavedPublications(this.user, this.page);
            }
        }, error => {
            console.log(error);
        });
    }
    likePublication(publication) {
        this._publicationService.likePublication(publication).subscribe(response => {
            if (response && response.message === "Like") {
                this.statusLiked = true;
                this.isDisabled = true;
                this.getSavedPublications(this.user, this.page);
                this.saveNotification(publication);
            }
            else if (response && response.message === "Dislike") {
                this.statusLiked = false;
                this.isDisabled = true;
                this.getSavedPublications(this.user, this.page);
            }
        }, error => {
            console.log(error);
        });
    }
    saveNotification(publication) {
        this._notificationService.saveNotification(this.token, publication, 'like-publication').subscribe(response => {
            this.socket.emit("notificationPublication", response);
        }, error => {
            console.log(error);
        });
    }
}
SavedPublicationsComponent.ɵfac = function SavedPublicationsComponent_Factory(t) { return new (t || SavedPublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_publication_service__WEBPACK_IMPORTED_MODULE_2__["PublicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
SavedPublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SavedPublicationsComponent, selectors: [["app-saved-publications"]], inputs: { user: "user" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_0__["UploadService"], _services_publication_service__WEBPACK_IMPORTED_MODULE_2__["PublicationService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "publications", 4, "ngIf"], [1, "publications"], ["class", "item-publication", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-5"], ["class", "btn btn-sm btn-default ", 3, "click", 4, "ngIf"], ["class", "text-center mt-3", 4, "ngIf"], [1, "item-publication"], ["class", "card card-default", 4, "ngIf"], [1, "card", "card-default"], [1, "card-body"], [1, "image-user", "pull-left"], ["href", "#"], ["alt", "Imagen de usuario", 3, "src", 4, "ngIf"], ["class", "default-user-image", "src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 4, "ngIf"], [1, "name-surname"], [1, "date"], [1, "publication-text", "pull-left"], [1, "d-flex", "flex-column", "justify-content-center"], ["class", "publication-img d-flex justify-content-center", 4, "ngIf"], [1, "likes-save", "d-flex", "justify-content-around"], [3, "click"], ["class", "fa fa-thumbs-up like", 4, "ngIf"], ["class", "fa fa-thumbs-up dislike", 4, "ngIf"], ["class", "likes-number", 4, "ngIf"], ["class", "fa fa-bookmark saved", 4, "ngIf"], ["class", "fa fa-bookmark unsaved", 4, "ngIf"], ["alt", "Imagen de usuario", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 1, "default-user-image"], [1, "publication-img", "d-flex", "justify-content-center"], ["alt", "Imagen de publicaci\u00F3n", 3, "src"], [1, "fa", "fa-thumbs-up", "like"], [1, "fa", "fa-thumbs-up", "dislike"], [1, "likes-number"], [1, "fa", "fa-bookmark", "saved"], [1, "fa", "fa-bookmark", "unsaved"], [1, "btn", "btn-sm", "btn-default", 3, "click"], [1, "text-center", "mt-3"]], template: function SavedPublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SavedPublicationsComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SavedPublicationsComponent_div_1_Template, 5, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [angular2_moment__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_9__["LocalePipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_9__["FromUnixPipe"]], styles: [".publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%] {\n  margin: 2vh 5vw;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  border: none;\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin-right: 20px;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   .default-user-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .name-surname[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-weight: bold;\n  font-family: \"Raleway\";\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7998EE;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-text[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: auto;\n  padding: 5px 80px;\n}\n@media (max-width: 576px) {\n  .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-right: 15px;\n  }\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%] {\n  padding: 15px 80px;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .dislike[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .dislike[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .likes-number[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  margin-left: 7px;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .saved[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .saved[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .unsaved[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .unsaved[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.publications[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #6e2e81;\n  color: whitesmoke;\n  border-radius: 50px;\n}\n.publications[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background-color: #DD517F;\n  color: whitesmoke;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.publications[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #556DC8;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzYXZlZC1wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0k7RUFDSSxlQUFBO0FBTlI7QUFPUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3REFBQTtFQUNBLHFEQUFBO0FBTFo7QUFNWTtFQUNJLGFBQUE7QUFKaEI7QUFLZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhwQjtBQUlvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRnhCO0FBSW9CO0VBQ0ksV0FBQTtBQUZ4QjtBQUtnQjtFQUNJLGNBakNYO0VBa0NXLGlCQUFBO0VBQ0Esc0JBQUE7QUFIcEI7QUFLZ0I7RUFDSSxrQkFBQTtFQUNBLGNBckNSO0FBa0NaO0FBS2dCO0VBQ0ksa0JBQUE7QUFIcEI7QUFLZ0I7RUFDSSxXQUFBO0FBSHBCO0FBSW9CO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZ4QjtBQUd3QjtFQUpKO0lBS1EsbUJBQUE7RUFBMUI7QUFDRjtBQUlnQjtFQUNJLGtCQUFBO0FBRnBCO0FBR29CO0VBQ0ksY0ExRGpCO0FBeURQO0FBRXdCO0VBQ0ksZUFBQTtFQUNBLGNBM0RyQjtBQTJEUDtBQUdvQjtFQUNJLGNBbEVmO0FBaUVUO0FBRXdCO0VBQ0ksZUFBQTtFQUNBLGNBbEVyQjtBQWtFUDtBQUdvQjtFQUNJLGNBekVmO0VBMEVlLGdCQUFBO0FBRHhCO0FBR29CO0VBQ0ksY0E1RWpCO0FBMkVQO0FBRXdCO0VBQ0EsZUFBQTtFQUNBLGNBN0VqQjtBQTZFUDtBQUdvQjtFQUNJLGNBcEZmO0FBbUZUO0FBRXdCO0VBQ0ksZUFBQTtFQUNBLGNBcEZyQjtBQW9GUDtBQVFJO0VBQ0kseUJBaEdDO0VBaUdELGlCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFJO0VBQ0kseUJBcEdEO0VBcUdDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQU5SO0FBUUk7RUFDSSxjQXhHRDtFQXlHQyxpQkFBQTtBQU5SIiwiZmlsZSI6InNhdmVkLXB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR2aW9sZXQ6ICM2ZTJlODE7XHJcbiRwaW5rOiAjREQ1MTdGO1xyXG4kbGlnaHRibHVlOiAjNzk5OEVFO1xyXG4kYmx1ZTogIzU1NkRDODtcclxuJG9yYW5nZTogI0U2OEUzNjtcclxuXHJcbi5wdWJsaWNhdGlvbnN7XHJcbiAgICAuaXRlbS1wdWJsaWNhdGlvbntcclxuICAgICAgICBtYXJnaW46IDJ2aCA1dnc7XHJcbiAgICAgICAgLmNhcmQtZGVmYXVsdHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCwgMC41KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggOXB4IDBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiA1cHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgICAgICAgICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgLmltYWdlLXVzZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGVmYXVsdC11c2VyLWltYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmFtZS1zdXJuYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHVibGljYXRpb24tdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHVibGljYXRpb24taW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubGlrZXMtc2F2ZXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpa2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGlzbGlrZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpa2VzLW51bWJlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zYXZlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudW5zYXZlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1kZWZhdWx0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIH1cclxuICAgIC5idG4tZGFuZ2Vye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59Il19 */"] });


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

/***/ "BBdW":
/*!*******************************************************************!*\
  !*** ./src/app/components/publications/publications.component.ts ***!
  \*******************************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/upload.service */ "jT/F");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_10__);














function PublicationsComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
} }
function PublicationsComponent_div_1_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", publication_r6.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function PublicationsComponent_div_1_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 42);
} }
function PublicationsComponent_div_1_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", publication_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-bs-target", "#deleteModal" + publication_r6._id);
} }
function PublicationsComponent_div_1_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", publication_r6.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function PublicationsComponent_div_1_div_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", publication_r6.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function PublicationsComponent_div_1_div_1_i_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 48);
} }
function PublicationsComponent_div_1_div_1_i_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 49);
} }
function PublicationsComponent_div_1_div_1_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Da el primer like!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PublicationsComponent_div_1_div_1_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Le gusta a ", publication_r6.likes.length, " persona");
} }
function PublicationsComponent_div_1_div_1_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Le gusta a ", publication_r6.likes.length, " personas");
} }
function PublicationsComponent_div_1_div_1_i_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 51);
} }
function PublicationsComponent_div_1_div_1_i_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 52);
} }
const _c0 = function (a1) { return ["/profile", a1]; };
function PublicationsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PublicationsComponent_div_1_div_1_img_5_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PublicationsComponent_div_1_div_1_img_6_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PublicationsComponent_div_1_div_1_div_8_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u00BFDeseas borrar esta publicaci\u00F3n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Una vez que borres esta publicaci\u00F3n no podr\u00E1s recuperarla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, PublicationsComponent_div_1_div_1_div_23_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PublicationsComponent_div_1_div_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const publication_r6 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r25.deletePublication(publication_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Borrar publicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "amLocale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, PublicationsComponent_div_1_div_1_div_45_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PublicationsComponent_div_1_div_1_Template_div_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const publication_r6 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r27.likePublication(publication_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, PublicationsComponent_div_1_div_1_i_48_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, PublicationsComponent_div_1_div_1_i_49_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, PublicationsComponent_div_1_div_1_span_50_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, PublicationsComponent_div_1_div_1_span_51_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, PublicationsComponent_div_1_div_1_span_52_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PublicationsComponent_div_1_div_1_Template_div_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const publication_r6 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r28.savePublication(publication_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, PublicationsComponent_div_1_div_1_i_54_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, PublicationsComponent_div_1_div_1_i_55_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !publication_r6.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.user._id == ctx_r2.identity._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "deleteModal" + publication_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", publication_r6.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.file != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c0, publication_r6.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", publication_r6.user.name + " " + publication_r6.user.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](34, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](35, 21, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 24, publication_r6.created_at), "es")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "@" + publication_r6.user.nick, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", publication_r6.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.file != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.likes.includes(ctx_r2.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !publication_r6.likes.includes(ctx_r2.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.likes.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.likes.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.likes.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.saves.includes(ctx_r2.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !publication_r6.saves.includes(ctx_r2.identity._id));
} }
function PublicationsComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Pod\u00E9s encontrar las publicaciones guardadas en tu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r3.identity._id));
} }
function PublicationsComponent_div_1_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PublicationsComponent_div_1_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r30.viewMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ver m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PublicationsComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PublicationsComponent_div_1_div_3_button_1_Template, 2, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.noMore);
} }
function PublicationsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No hay publicaciones para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PublicationsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PublicationsComponent_div_1_div_1_Template, 57, 28, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PublicationsComponent_div_1_div_2_Template, 5, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PublicationsComponent_div_1_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PublicationsComponent_div_1_div_4_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.publications);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showMessageSaved);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.publications && ctx_r1.publications.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.publications && ctx_r1.publications.length < 1);
} }
class PublicationsComponent {
    constructor(_route, _router, _userService, _publicationService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._publicationService = _publicationService;
        this._notificationService = _notificationService;
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_5__["io"])("ws://localhost:3000");
        this.noMore = false;
        this.loading = true;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.page = 1;
    }
    ngOnInit() {
        this.getPublications(this.user, this.page);
    }
    getPublications(user, page, adding = false) {
        this._publicationService.getPublicationsUser(this.token, user, page).subscribe(response => {
            if (response.publications) {
                this.total = response.total_items;
                this.pages = response.pages;
                this.itemsPerPage = response.items_per_page;
                this.loading = false;
                if (!adding) {
                    this.publications = response.publications;
                }
                else {
                    let arrayA = this.publications;
                    let arrayB = response.publications;
                    this.publications = arrayA.concat(arrayB);
                }
            }
            else {
                this.status = 'error';
                this.loading = false;
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
                this.loading = false;
            }
        });
    }
    viewMore() {
        this.page += 1;
        if (this.page == this.pages) {
            this.noMore = true;
        }
        this.getPublications(this.user, this.page, true);
    }
    refresh(event = null) {
        this.page = 1;
        this.isDisabled = false;
        this.getPublications(this.user, this.page);
    }
    deletePublication(id) {
        this._publicationService.deletePublication(this.token, id).subscribe(response => {
            this.isDisabled = false;
            this.refresh();
        }, error => {
            console.log(error);
        });
    }
    savePublication(publication) {
        if (!publication.saves.includes(this.identity._id)) {
            this.showMessageSaved = true;
            setTimeout(() => { this.showMessageSaved = false; }, 3000);
        }
        this._publicationService.savePublication(publication).subscribe(response => {
            if (response && response.message === "Saved") {
                this.statusSaved = true;
                this.isDisabled = true;
                this.getPublications(this.user, this.page);
            }
            else if (response && response.message === "Unsaved") {
                this.statusSaved = false;
                this.isDisabled = true;
                this.getPublications(this.user, this.page);
            }
        }, error => {
            console.log(error);
        });
    }
    likePublication(publication) {
        this._publicationService.likePublication(publication).subscribe(response => {
            if (response && response.message === "Like") {
                this.statusLiked = true;
                this.isDisabled = true;
                this.getPublications(this.user, this.page);
                this.saveNotification(publication);
            }
            else if (response && response.message === "Dislike") {
                this.statusLiked = false;
                this.isDisabled = true;
                this.getPublications(this.user, this.page);
            }
        }, error => {
            console.log(error);
        });
    }
    saveNotification(publication) {
        this._notificationService.saveNotification(this.token, publication, 'like-publication').subscribe(response => {
            this.socket.emit("notificationPublication", response);
        }, error => {
            console.log(error);
        });
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_publication_service__WEBPACK_IMPORTED_MODULE_2__["PublicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], inputs: { user: "user" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_0__["UploadService"], _services_publication_service__WEBPACK_IMPORTED_MODULE_2__["PublicationService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "publications", 4, "ngIf"], [1, "publications"], ["class", "item-publication", 4, "ngFor", "ngForOf"], ["class", "message-saved text-center", 4, "ngIf"], ["class", "text-center mb-5", 4, "ngIf"], ["class", "text-center mt-3", 4, "ngIf"], [1, "item-publication"], [1, "card", "card-default"], [1, "card-body"], [1, "image-user", "pull-left"], ["href", "#"], ["alt", "Imagen de usuario", 3, "src", 4, "ngIf"], ["class", "default-user-image", "src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], ["tabindex", "-1", "aria-labelledby", "deleteModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "deleteModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close-modal"], [1, "fa", "fa-close"], [1, "modal-body"], [1, "publication-modal"], ["class", "publication-img-modal", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-trash", "mx-2"], [1, "name-surname", 3, "routerLink"], [1, "date"], [1, "publication-text", "pull-left"], [1, "d-flex", "flex-column", "justify-content-center"], ["class", "publication-img d-flex justify-content-center", 4, "ngIf"], [1, "likes-save", "d-flex", "justify-content-around"], [3, "click"], ["class", "fa fa-thumbs-up like", 4, "ngIf"], ["class", "fa fa-thumbs-up dislike", 4, "ngIf"], ["class", "likes-number", 4, "ngIf"], ["class", "fa fa-bookmark saved", 4, "ngIf"], ["class", "fa fa-bookmark unsaved", 4, "ngIf"], ["alt", "Imagen de usuario", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 1, "default-user-image"], [1, "pull-right"], ["type", "button", "data-bs-toggle", "modal", 1, "btn", 3, "id"], [1, "publication-img-modal"], ["alt", "Imagen de publicaci\u00F3n", 3, "src"], [1, "publication-img", "d-flex", "justify-content-center"], [1, "fa", "fa-thumbs-up", "like"], [1, "fa", "fa-thumbs-up", "dislike"], [1, "likes-number"], [1, "fa", "fa-bookmark", "saved"], [1, "fa", "fa-bookmark", "unsaved"], [1, "message-saved", "text-center"], [3, "routerLink"], [1, "text-center", "mb-5"], ["class", "btn btn-sm btn-default ", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-default", 3, "click"], [1, "text-center", "mt-3"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PublicationsComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PublicationsComponent_div_1_Template, 5, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [angular2_moment__WEBPACK_IMPORTED_MODULE_10__["TimeAgoPipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_10__["LocalePipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_10__["FromUnixPipe"]], styles: [".publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%] {\n  margin: 2vh 5vw;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  border: none;\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin-right: 20px;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   .default-user-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .name-surname[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-weight: bold;\n  font-family: \"Raleway\";\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7998EE;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-text[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: auto;\n  padding: 5px 80px;\n}\n@media (max-width: 576px) {\n  .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-right: 15px;\n  }\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%] {\n  padding: 15px 80px;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .dislike[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .dislike[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .likes-number[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  margin-left: 7px;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .saved[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .saved[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .unsaved[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .unsaved[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%] {\n  background-color: #DD517F;\n  position: fixed;\n  bottom: 5%;\n  left: 35%;\n  width: 35%;\n  padding: 30px;\n  border-radius: 50px;\n}\n@media (max-width: 992px) {\n  .publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%] {\n    bottom: 10%;\n    left: 25%;\n    width: 50%;\n  }\n}\n@media (max-width: 576px) {\n  .publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%] {\n    left: 12.5%;\n    width: 75%;\n  }\n}\n.publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: whitesmoke;\n  font-weight: 600;\n}\n.publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #6e2e81;\n}\n.publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7998EE;\n}\n.publications[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #6e2e81;\n  color: whitesmoke;\n  border-radius: 50px;\n}\n.publications[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #DD517F;\n}\n.publications[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  border-radius: 50px;\n}\n.publications[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover {\n  background-color: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.publications[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background-color: #DD517F;\n  color: whitesmoke;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.publications[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #556DC8;\n  font-size: 1.5rem;\n}\n.publications[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  text-decoration: none;\n}\n.publications[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #DD517F;\n}\n.publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  background-color: #dfdede;\n  border-radius: 70px;\n  border: 5px solid #DD517F;\n  overflow: hidden;\n}\n.publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\n.publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:focus, .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  box-shadow: none;\n}\n.publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .publication-modal[_ngcontent-%COMP%] {\n  color: grey;\n  font-weight: 200;\n  padding: 1.5rem;\n  padding-bottom: 0;\n  font-size: 1rem;\n}\n.publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .publication-img-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: auto;\n  padding: 0 0 1rem 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0k7RUFDSSxlQUFBO0FBTlI7QUFPUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3REFBQTtFQUNBLHFEQUFBO0FBTFo7QUFNWTtFQUNJLGFBQUE7QUFKaEI7QUFLZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhwQjtBQUlvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRnhCO0FBSW9CO0VBQ0ksV0FBQTtBQUZ4QjtBQUtnQjtFQUNJLGNBakNYO0VBa0NXLGlCQUFBO0VBQ0Esc0JBQUE7QUFIcEI7QUFLZ0I7RUFDSSxrQkFBQTtFQUNBLGNBckNSO0FBa0NaO0FBS2dCO0VBQ0ksa0JBQUE7QUFIcEI7QUFLZ0I7RUFDSSxXQUFBO0FBSHBCO0FBSW9CO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZ4QjtBQUd3QjtFQUpKO0lBS1EsbUJBQUE7RUFBMUI7QUFDRjtBQUlnQjtFQUNJLGtCQUFBO0FBRnBCO0FBR29CO0VBQ0ksY0ExRGpCO0FBeURQO0FBRXdCO0VBQ0ksZUFBQTtFQUNBLGNBM0RyQjtBQTJEUDtBQUdvQjtFQUNJLGNBbEVmO0FBaUVUO0FBRXdCO0VBQ0ksZUFBQTtFQUNBLGNBbEVyQjtBQWtFUDtBQUdvQjtFQUNJLGNBekVmO0VBMEVlLGdCQUFBO0FBRHhCO0FBR29CO0VBQ0ksY0E1RWpCO0FBMkVQO0FBRXdCO0VBQ0EsZUFBQTtFQUNBLGNBN0VqQjtBQTZFUDtBQUdvQjtFQUNJLGNBcEZmO0FBbUZUO0FBRXdCO0VBQ0ksZUFBQTtFQUNBLGNBcEZyQjtBQW9GUDtBQVNJO0VBQ0kseUJBaEdEO0VBaUdDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVFRO0VBUko7SUFTUSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUFMVjtBQUNGO0FBTVE7RUFiSjtJQWNRLFdBQUE7SUFDQSxVQUFBO0VBSFY7QUFDRjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRlo7QUFHWTtFQUNJLGdCQUFBO0VBQ0EsY0F2SFA7QUFzSFQ7QUFFZ0I7RUFDSSxjQXZIUjtBQXVIWjtBQU1JO0VBQ0kseUJBaElDO0VBaUlELGlCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQUtRO0VBQ0kseUJBbklMO0FBZ0lQO0FBT0k7RUFDSSxjQXpJQztFQTBJRCxtQkFBQTtBQUxSO0FBTVE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBSlo7QUFRSTtFQUNJLHlCQWpKRDtFQWtKQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFJO0VBQ0ksY0FySkQ7RUFzSkMsaUJBQUE7QUFOUjtBQVFJO0VBQ0ksY0E1SkM7RUE2SkQscUJBQUE7QUFOUjtBQU9RO0VBQ0ksY0E5Skw7QUF5SlA7QUFTUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBUFo7QUFRWTtFQUNJLGFBQUE7QUFOaEI7QUFRb0I7RUFDSSxpQkFBQTtBQU54QjtBQVFvQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQU54QjtBQU93QjtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7QUFMNUI7QUFVb0I7RUFDSSxnQkFBQTtBQVJ4QjtBQVVvQjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFSeEI7QUFXd0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBVDVCIiwiZmlsZSI6InB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR2aW9sZXQ6ICM2ZTJlODE7XHJcbiRwaW5rOiAjREQ1MTdGO1xyXG4kbGlnaHRibHVlOiAjNzk5OEVFO1xyXG4kYmx1ZTogIzU1NkRDODtcclxuJG9yYW5nZTogI0U2OEUzNjtcclxuXHJcbi5wdWJsaWNhdGlvbnN7XHJcbiAgICAuaXRlbS1wdWJsaWNhdGlvbntcclxuICAgICAgICBtYXJnaW46IDJ2aCA1dnc7XHJcbiAgICAgICAgLmNhcmQtZGVmYXVsdHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCwgMC41KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggOXB4IDBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiA1cHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgICAgICAgICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgLmltYWdlLXVzZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGVmYXVsdC11c2VyLWltYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmFtZS1zdXJuYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHVibGljYXRpb24tdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHVibGljYXRpb24taW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubGlrZXMtc2F2ZXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpa2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGlzbGlrZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpa2VzLW51bWJlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zYXZlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudW5zYXZlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLXNhdmVke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDUlO1xyXG4gICAgICAgIGxlZnQ6IDM1JTtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICAgICAgbGVmdDogMjUlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgICAgICAgICBsZWZ0OiAxMi41JTtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWRlZmF1bHR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZpb2xldDtcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1saWdodHtcclxuICAgICAgICBjb2xvcjogJHZpb2xldDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAgcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWRhbmdlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubW9kYWx7XHJcbiAgICAgICAgLm1vZGFsLWRpYWxvZ3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIyLCAyMjIpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkcGluaztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgLm1vZGFsLWhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idG4tY2xvc2UtbW9kYWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cywmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1vZGFsLWJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnB1YmxpY2F0aW9uLW1vZGFse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHVibGljYXRpb24taW1nLW1vZGFse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(500)
                ])
            ])
        ] } });


/***/ }),

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(users, input) {
        if (!input)
            return users;
        return users.filter(val => this.filterBy(val, input));
    }
    filterBy(user, search) {
        const reduced = Object.keys(user)
            .reduce((prev, current) => this.reduceKeys(prev, current, user), "")
            .toLocaleLowerCase();
        return reduced.indexOf(search.toLocaleLowerCase()) > -1;
    }
    reduceKeys(prev, current, user) {
        if (this.isProp(current)) {
            prev = `${prev}\$${user[current]}`;
        }
        return prev;
    }
    isProp(key) {
        return key.includes("name") || key.includes("surname") || key.includes("nick");
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _models_follow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/follow */ "nAqH");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/follow.service */ "MnDo");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../publications/publications.component */ "BBdW");
/* harmony import */ var _saved_publications_saved_publications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../saved-publications/saved-publications.component */ "62Yg");














function ProfileComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loading");
} }
function ProfileComponent_div_1_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 19);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r4.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_1_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 20);
} }
function ProfileComponent_div_1_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.user.bio);
} }
function ProfileComponent_div_1_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Te sigue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_div_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileComponent_div_1_div_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r12.followUser(ctx_r12.user._id, ctx_r12.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_div_1_button_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Dejar de seguir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_div_1_button_15_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Siguiendo ");
} }
function ProfileComponent_div_1_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileComponent_div_1_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r17.unfollowUser(ctx_r17.user._id); })("mouseenter", function ProfileComponent_div_1_div_1_button_15_Template_button_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r19.mouseEnter(ctx_r19.user._id); })("mouseleave", function ProfileComponent_div_1_div_1_button_15_Template_button_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r20.mouseLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_div_1_div_1_button_15_span_1_Template, 3, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_div_1_div_1_button_15_ng_template_2_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.user._id == ctx_r9.followUserOver && !ctx_r9.mobile)("ngIfElse", _r15);
} }
const _c0 = function () { return ["/user-edit"]; };
function ProfileComponent_div_1_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Editar perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
} }
function ProfileComponent_div_1_div_1_div_17_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r21.stats.publications, " ");
} }
function ProfileComponent_div_1_div_1_div_17_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/following", a1, 1]; };
const _c2 = function (a1) { return ["/followers", a1, 1]; };
function ProfileComponent_div_1_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Siguiendo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Seguidores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Publicaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ProfileComponent_div_1_div_1_div_17_span_20_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ProfileComponent_div_1_div_1_div_17_span_21_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c1, ctx_r11.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r11.stats.following, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c2, ctx_r11.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r11.stats.followed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.stats.publications);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r11.stats.publications);
} }
function ProfileComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_div_1_div_1_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileComponent_div_1_div_1_img_3_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProfileComponent_div_1_div_1_p_10_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProfileComponent_div_1_div_1_div_12_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ProfileComponent_div_1_div_1_button_14_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ProfileComponent_div_1_div_1_button_15_Template, 4, 2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ProfileComponent_div_1_div_1_button_16_Template, 2, 2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ProfileComponent_div_1_div_1_div_17_Template, 22, 10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.user.name + " " + ctx_r2.user.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("@" + ctx_r2.user.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.user.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.followed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.following && ctx_r2.user._id != ctx_r2.identity._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.following);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.identity._id == ctx_r2.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.stats);
} }
function ProfileComponent_div_1_div_2_div_2_strong_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Guardadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_div_2_div_2_strong_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Mis publicaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProfileComponent_div_1_div_2_div_2_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r29.showSavedPublications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileComponent_div_1_div_2_div_2_strong_3_Template, 2, 0, "strong", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileComponent_div_1_div_2_div_2_strong_4_Template, 2, 0, "strong", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r23.savedPublications);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r23.savedPublications);
} }
function ProfileComponent_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Publicaciones de ", ctx_r24.user.name, "");
} }
function ProfileComponent_div_1_div_2_app_publications_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-publications", 43);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("user", ctx_r25.user._id);
} }
function ProfileComponent_div_1_div_2_app_saved_publications_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-saved-publications", 43);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("user", ctx_r26.user._id);
} }
function ProfileComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_div_1_div_2_div_2_Template, 5, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileComponent_div_1_div_2_div_3_Template, 4, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileComponent_div_1_div_2_app_publications_4_Template, 1, 1, "app-publications", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileComponent_div_1_div_2_app_saved_publications_5_Template, 1, 1, "app-saved-publications", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.user._id === ctx_r3.identity._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.user._id !== ctx_r3.identity._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.savedPublications);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.savedPublications);
} }
function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_div_1_div_1_Template, 18, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_div_1_div_2_Template, 6, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.user);
} }
class ProfileComponent {
    constructor(_route, _router, _userService, _followService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this._notificationService = _notificationService;
        this.loading = true;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.followed = false;
        this.following = false;
        this.savedPublications = false;
    }
    ngOnInit() {
        this.loadPage();
        if (window.screen.width <= 992) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    }
    loadPage() {
        this._route.params.subscribe(params => {
            let id = params['id'];
            this.getUser(id);
            this.getCounters(id);
        });
    }
    getUser(id) {
        this._userService.getUser(id).subscribe(response => {
            if (response.user) {
                this.user = response.user;
                if (response && response.following && response.following._id) {
                    this.following = true;
                }
                else {
                    this.following = false;
                }
                if (response && response.followed && response.followed._id) {
                    this.followed = true;
                }
                else {
                    this.followed = false;
                }
                this.loading = false;
            }
            else {
                this.status = 'error';
                this.loading = false;
            }
        }, error => {
            console.log(error);
            this._router.navigate(['/profile', this.identity._id]);
        });
    }
    getCounters(id) {
        this._userService.getCounters(id).subscribe(response => {
            this.stats = response;
        }, error => {
            console.log(error);
        });
    }
    followUser(followed, user) {
        let follow = new _models_follow__WEBPACK_IMPORTED_MODULE_0__["Follow"]('', this.identity._id, followed);
        this._followService.addFollow(this.token, follow).subscribe(response => {
            this.following = true;
            this.saveNotification(user);
        }, error => {
            console.log(error);
        });
    }
    unfollowUser(followed) {
        this._followService.deleteFollow(this.token, followed).subscribe(response => {
            this.following = false;
        }, error => {
            console.log(error);
        });
    }
    mouseEnter(user_id) {
        this.followUserOver = user_id;
    }
    mouseLeave() {
        this.followUserOver = 0;
    }
    showSavedPublications() {
        if (!this.savedPublications) {
            this.savedPublications = true;
        }
        else {
            this.savedPublications = false;
        }
    }
    saveNotification(follower) {
        this._notificationService.saveNotification(this.token, follower, 'new-follow').subscribe(response => {
        }, error => {
            console.log(error);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "row profile-container", 4, "ngIf"], [1, "row", "profile-container"], ["class", "mb-2 mt-5 profile-info", 4, "ngIf"], ["class", "col-xl-10 col-lg-10 offset-xl-1 offset-lg-1", 4, "ngIf"], [1, "mb-2", "mt-5", "profile-info"], [1, "user-image"], ["alt", "Foto de perfil", 3, "src", 4, "ngIf"], ["class", "default-image-user", "src", "assets/img/default-user.jpg", "alt", "Foto de perfil", 4, "ngIf"], [1, "mb-2", "mt-3", "text-center"], [1, "text-center", "section-title"], [1, "d-flex", "flex-column", "text-center"], [1, "follow", "d-flex", "justify-content-center"], ["class", "label label-default", 4, "ngIf"], [1, "mt-3", "text-center"], ["class", "btn btn-default", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "btn btn-sm btn-light", 3, "routerLink", 4, "ngIf"], ["class", "stats d-flex justify-content-around text-center", 4, "ngIf"], ["alt", "Foto de perfil", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Foto de perfil", 1, "default-image-user"], [1, "label", "label-default"], [1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-user-plus"], [1, "btn", "btn-primary", 3, "click", "mouseenter", "mouseleave"], ["class", "unfollow", 4, "ngIf", "ngIfElse"], ["following", ""], [1, "unfollow"], [1, "fa", "fa-user-times"], [1, "fa", "fa-check"], [1, "btn", "btn-sm", "btn-light", 3, "routerLink"], [1, "stats", "d-flex", "justify-content-around", "text-center"], [1, "following-data"], [3, "routerLink"], [1, "label-stats"], [1, "number-stats"], [1, "following-data", "following-data-publications"], ["href", "#"], ["class", "number-stats", 4, "ngIf"], [1, "col-xl-10", "col-lg-10", "offset-xl-1", "offset-lg-1"], [1, "col-lg-6", "offset-lg-3", "form-check", "form-switch", "d-flex", "justify-content-center", "mb-3"], [3, "user", 4, "ngIf"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", "mx-3", 3, "change"], [3, "user"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProfileComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 3, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _publications_publications_component__WEBPACK_IMPORTED_MODULE_9__["PublicationsComponent"], _saved_publications_saved_publications_component__WEBPACK_IMPORTED_MODULE_10__["SavedPublicationsComponent"]], styles: [".profile-container[_ngcontent-%COMP%] {\n  margin-top: 12vh;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 170px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 105%;\n  height: auto;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]   .default-image-user[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]   .label-default[_ngcontent-%COMP%] {\n  border: 0.5px solid rgba(110, 46, 129, 0.4);\n  background-color: rgba(110, 46, 129, 0.2);\n  border-radius: 50px;\n  padding: 0 7px;\n  margin-left: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]   .label-default[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #DD517F;\n  color: whitesmoke;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]   .fa-user-plus[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #c9124f;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #556DC8;\n  color: whitesmoke;\n  border-radius: 50px;\n  margin-right: 10px;\n  height: 40px;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .unfollow[_ngcontent-%COMP%]   .fa-user-times[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #1f3fb4;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  border-radius: 50px;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover {\n  background-color: #d4d4d4;\n  border-color: #d4d4d4;\n}\n@media (max-width: 400px) {\n  .profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .following-data[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: small;\n    font-weight: 600;\n  }\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .following-data[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 5px;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .following-data[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6e2e81;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .following-data[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #6e2e81;\n}\n.profile-container[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.profile-container[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #DD517F;\n  border-color: #6e2e81;\n}\n.profile-container[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked:focus, .profile-container[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked:active {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksZ0JBQUE7QUFMSjtBQU1JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQUtRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSFo7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRmhCO0FBSVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUZoQjtBQUtRO0VBQ0ksa0JBQUE7QUFIWjtBQUtRO0VBQ0ksY0E5Qkg7QUEyQlQ7QUFNWTtFQUNJLDJDQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUpoQjtBQUtnQjtFQUNJLGNBekNYO0FBc0NUO0FBT1E7RUFDSSx5QkE3Q0w7RUE4Q0ssaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTFo7QUFNWTtFQUNJLGlCQUFBO0FBSmhCO0FBTVk7RUFDSSx5QkFBQTtBQUpoQjtBQU9RO0VBQ0kseUJBdkRMO0VBd0RLLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMWjtBQU9nQjtFQUNJLGlCQUFBO0FBTHBCO0FBUVk7RUFDSSxpQkFBQTtBQU5oQjtBQVFZO0VBQ0kseUJBQUE7QUFOaEI7QUFTUTtFQUNJLG1CQUFBO0FBUFo7QUFRWTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFOaEI7QUFVWTtFQUVRO0lBQ0csZ0JBQUE7SUFDQyxnQkFBQTtFQVR0QjtBQUNGO0FBWVk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQVZoQjtBQVdnQjtFQUNJLHFCQUFBO0VBQ0EsY0FoR1g7QUF1RlQ7QUFVb0I7RUFDSSxjQWxHZjtBQTBGVDtBQWVJO0VBQ0ksZUFBQTtBQWJSO0FBY1E7RUFDSSx5QkEzR0w7RUE0R0sscUJBN0dIO0FBaUdUO0FBYVk7RUFDSSxhQUFBO0FBWGhCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdmlvbGV0OiAjNmUyZTgxO1xyXG4kcGluazogI0RENTE3RjtcclxuJGxpZ2h0Ymx1ZTogIzc5OThFRTtcclxuJGJsdWU6ICM1NTZEQzg7XHJcbiRvcmFuZ2U6ICNFNjhFMzY7XHJcblxyXG4ucHJvZmlsZS1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnZoO1xyXG4gICAgLnByb2ZpbGUtaW5mb3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAudXNlci1pbWFnZXtcclxuICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTA1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVmYXVsdC1pbWFnZS11c2Vye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9sbG93e1xyXG4gICAgICAgICAgICAubGFiZWwtZGVmYXVsdHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgkY29sb3I6ICR2aW9sZXQsICRhbHBoYTogMC40KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkdmlvbGV0LCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIHNtYWxse1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tZGVmYXVsdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC5mYS11c2VyLXBsdXN7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5MTI0ZjsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tcHJpbWFyeXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgLnVuZm9sbG93e1xyXG4gICAgICAgICAgICAgICAgLmZhLXVzZXItdGltZXN7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZhLWNoZWNre1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjNmYjQ7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tbGlnaHR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGF0c3tcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgICAgICAgICAgICAgIC5mb2xsb3dpbmctZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb2xsb3dpbmctZGF0YXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jaGVjay1pbnB1dHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpjaGVja2VkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHZpb2xldDtcclxuICAgICAgICAgICAgJjpmb2N1cywgJjphY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1000)
                ])
            ])
        ] } });


/***/ }),

/***/ "EPRI":
/*!****************************************!*\
  !*** ./src/app/services/user.guard.ts ***!
  \****************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "qfBg");



class UserGuard {
    constructor(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    canActivate() {
        let identity = this._userService.getIdentity();
        if (identity && (identity.role == 'ROLE_USER' || identity.role == 'ROLE_ADMIN')) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac });


/***/ }),

/***/ "Hkgh":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _models_follow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/follow */ "nAqH");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/follow.service */ "MnDo");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "BhhM");














function UsersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UsersComponent_div_2_div_8_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", user_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function UsersComponent_div_2_div_8_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 26);
} }
function UsersComponent_div_2_div_8_div_1_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r6.bio);
} }
function UsersComponent_div_2_div_8_div_1_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_div_2_div_8_div_1_div_14_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.followUser(user_r6._id, user_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UsersComponent_div_2_div_8_div_1_div_14_button_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Dejar de seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UsersComponent_div_2_div_8_div_1_div_14_button_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Siguiendo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UsersComponent_div_2_div_8_div_1_div_14_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function UsersComponent_div_2_div_8_div_1_div_14_button_2_Template_button_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r22.mouseEnter(user_r6._id); })("mouseleave", function UsersComponent_div_2_div_8_div_1_div_14_button_2_Template_button_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r25.mouseLeave(user_r6._id); })("click", function UsersComponent_div_2_div_8_div_1_div_14_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.unfollowUser(user_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UsersComponent_div_2_div_8_div_1_div_14_button_2_span_1_Template, 4, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UsersComponent_div_2_div_8_div_1_div_14_button_2_ng_template_2_Template, 3, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r6._id == ctx_r15.followMouseOver && !ctx_r15.mobile)("ngIfElse", _r20);
} }
function UsersComponent_div_2_div_8_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UsersComponent_div_2_div_8_div_1_div_14_button_1_Template, 4, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UsersComponent_div_2_div_8_div_1_div_14_button_2_Template, 4, 2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.follows.indexOf(user_r6._id) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.follows.indexOf(user_r6._id) >= 0);
} }
const _c0 = function (a1) { return ["/profile/", a1]; };
function UsersComponent_div_2_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UsersComponent_div_2_div_8_div_1_img_4_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_2_div_8_div_1_img_5_Template, 1, 0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, UsersComponent_div_2_div_8_div_1_p_13_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, UsersComponent_div_2_div_8_div_1_div_14_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, user_r6._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !user_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, user_r6._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r6.name + " " + user_r6.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("@" + user_r6.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r6.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r6._id != ctx_r7.identity._id);
} }
function UsersComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UsersComponent_div_2_div_8_div_1_Template, 15, 12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r6);
} }
const _c1 = function (a1) { return ["/users", a1]; };
function UsersComponent_div_2_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c1, ctx_r4.prev_page));
} }
function UsersComponent_div_2_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Siguiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c1, ctx_r5.next_page));
} }
function UsersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Gente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_2_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r32.searchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UsersComponent_div_2_div_8_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, UsersComponent_div_2_li_12_Template, 3, 3, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, UsersComponent_div_2_li_13_Template, 3, 3, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 4, ctx_r1.users, ctx_r1.searchText));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.page > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.pages != ctx_r1.page && ctx_r1.pages > 1);
} }
class UsersComponent {
    constructor(_route, _router, _userService, _followService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this._notificationService = _notificationService;
        this.searchText = '';
        this.loading = true;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    ngOnInit() {
        this.actualPage();
        if (window.screen.width <= 992) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    }
    actualPage() {
        this._route.params.subscribe(params => {
            let page = params['page'];
            this.page = page;
            if (!params['page'] || page == undefined) {
                page = 1;
            }
            if (!page) {
                page = 1;
            }
            else {
                this.next_page = parseInt(page) + 1;
                this.prev_page = parseInt(page) - 1;
                if (this.prev_page <= 0) {
                    this.prev_page = 1;
                }
            }
            //Devolver listado de usuarios
            this.getUsers(page);
        });
    }
    getUsers(page) {
        this._userService.getUsers(page).subscribe(response => {
            if (!response.users) {
                this.status = "error";
            }
            else {
                this.loading = false;
                this.total = response.total;
                this.users = response.users;
                this.pages = response.pages;
                this.follows = response.users_following;
                if (page > this.pages) {
                    this._router.navigate(['/users/', 1]);
                }
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    mouseEnter(user_id) {
        this.followMouseOver = user_id;
    }
    mouseLeave(user_id) {
        this.followMouseOver = 0;
    }
    followUser(followed, user) {
        let follow = new _models_follow__WEBPACK_IMPORTED_MODULE_0__["Follow"]('', this.identity._id, followed);
        this._followService.addFollow(this.token, follow).subscribe(response => {
            if (response.followStored) {
                this.status = 'error';
            }
            else {
                this.status = 'success';
                this.follows.push(followed);
            }
            localStorage.removeItem('stats');
            this.getCounters();
            this._userService.getStats();
            this.saveNotification(user);
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    unfollowUser(followed) {
        this._followService.deleteFollow(this.token, followed).subscribe(response => {
            let search = this.follows.indexOf(followed);
            if (search != -1) {
                this.follows.splice(search, 1);
            }
            localStorage.removeItem('stats');
            this.getCounters();
            this._userService.getStats();
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    getCounters() {
        this._userService.getCounters().subscribe(response => {
            localStorage.setItem('stats', JSON.stringify(response));
            this.status = 'success';
        }, error => {
            console.log(error);
        });
    }
    saveNotification(follower) {
        this._notificationService.saveNotification(this.token, follower, 'new-follow').subscribe(response => { }, error => {
            console.log(error);
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], decls: 3, vars: 3, consts: [[1, "users-container", "col-xl-12", "col-lg-12"], ["class", "mt-5 d-flex flex-column justify-content-center", 4, "ngIf"], [1, "mt-5", "d-flex", "flex-column", "justify-content-center"], [1, "mb-3", "text-center", "section-title"], [1, "searchInput"], ["placeholder", "Buscar...", "type", "text", 3, "ngModel", "ngModelChange"], ["searchInput", ""], [1, "fa", "fa-search"], [1, "people", "mt-3"], ["class", "item-user d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], [1, "pagination"], [4, "ngIf"], [1, "item-user", "d-flex", "justify-content-center"], ["class", "card card-default mb-3", 4, "ngIf"], [1, "card", "card-default", "mb-3"], [1, "card-body"], [1, "image-user", "pull-left"], [3, "routerLink"], ["alt", "Imagen de usuario", 3, "src", 4, "ngIf"], ["class", "default-user-image", "src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 4, "ngIf"], [1, "user-name"], [1, "username"], ["class", "bio", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], ["alt", "Imagen de usuario", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 1, "default-user-image"], [1, "bio"], [1, "pull-right"], ["class", "btn btn-default", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"], [1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-user-plus"], [1, "button-text"], [1, "btn", "btn-primary", 3, "mouseenter", "mouseleave", "click"], [4, "ngIf", "ngIfElse"], ["following", ""], [1, "fa", "fa-user-times"], [1, "fa", "fa-check"], [1, "btn", "btn-sm", "btn-default", 3, "routerLink"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UsersComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UsersComponent_div_2_Template, 14, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"]], styles: [".users-container[_ngcontent-%COMP%] {\n  margin-top: 14vh;\n}\n.users-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  align-self: center;\n}\n.users-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  width: 70vw;\n  max-width: 400px;\n  border-radius: 50px;\n  background: rgba(245, 245, 245, 0.2);\n  border: rgba(235, 235, 235, 0.2) 1px groove;\n  padding: 5px 10px;\n  align-self: center;\n}\n.users-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active, .users-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.users-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #556DC8;\n}\n.users-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  right: 25px;\n  color: #556DC8;\n  opacity: 0.9;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n  width: 60vw;\n  min-width: 290px;\n  border-radius: 50px;\n  border: 1px solid #DD517F;\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n}\n@media (max-width: 992px) {\n  .users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n  width: 7em;\n  height: 7em;\n  border-radius: 100%;\n  overflow: hidden;\n  margin-right: 20px;\n}\n@media (max-width: 992px) {\n  .users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n    width: 4em;\n    height: 4em;\n  }\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   .default-user-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6e2e81;\n  font-family: \"Raleway\";\n  font-weight: bolder;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  color: #DD517F;\n  font-family: \"Raleway\";\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  font-size: small;\n}\n@media (max-width: 576px) {\n  .users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n  .users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #DD517F;\n  color: whitesmoke;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]   .fa-user-plus[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #c9124f;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #7998EE;\n  color: whitesmoke;\n  border: #7998EE;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa-user-times[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.users-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #556DC8;\n}\n.users-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  border-radius: 50px;\n}\n.users-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #DD517F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLGdCQUFBO0FBTEo7QUFNSTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFLUTtFQUNJLGNBWkg7RUFhRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSFo7QUFJWTtFQUNJLGFBQUE7QUFGaEI7QUFJWTtFQUNJLGNBckJUO0FBbUJQO0FBS1E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0E3Qkw7RUE4QkssWUFBQTtBQUhaO0FBUVk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxpREFBQTtFQUNBLHlEQUFBO0VBQ0Esc0RBQUE7QUFOaEI7QUFPZ0I7RUFUSjtJQVVRLFdBQUE7RUFKbEI7QUFDRjtBQU1vQjtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSnhCO0FBS3dCO0VBTko7SUFPUSxVQUFBO0lBQ0EsV0FBQTtFQUYxQjtBQUNGO0FBR3dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFENUI7QUFHd0I7RUFDSSxXQUFBO0FBRDVCO0FBS3dCO0VBQ0kscUJBQUE7RUFDQSxjQXhFbkI7RUF5RW1CLHNCQUFBO0VBQ0EsbUJBQUE7QUFINUI7QUFLd0I7RUFDSSxjQTVFckI7RUE2RXFCLHNCQUFBO0FBSDVCO0FBS3dCO0VBQ0ksZ0JBQUE7QUFINUI7QUFRd0I7RUFDSTtJQUNJLGdCQUFBO0VBTjlCO0VBUTBCO0lBQ0ksYUFBQTtFQU45QjtBQUNGO0FBVW9CO0VBQ0kseUJBaEdqQjtFQWlHaUIsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUnhCO0FBU3dCO0VBQ0ksaUJBQUE7QUFQNUI7QUFTd0I7RUFDSSx5QkFBQTtBQVA1QjtBQVVvQjtFQUNJLHlCQTNHWjtFQTRHWSxpQkFBQTtFQUNBLGVBN0daO0VBOEdZLG1CQUFBO0VBQ0Esa0JBQUE7QUFSeEI7QUFTd0I7RUFDSSxpQkFBQTtBQVA1QjtBQVN3QjtFQUNJLGlCQUFBO0FBUDVCO0FBU3dCO0VBQ0kseUJBdEhyQjtBQStHUDtBQWdCUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFkWjtBQWVZO0VBQ0kseUJBcklUO0FBd0hQIiwiZmlsZSI6InVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHZpb2xldDogIzZlMmU4MTtcclxuJHBpbms6ICNERDUxN0Y7XHJcbiRsaWdodGJsdWU6ICM3OTk4RUU7XHJcbiRibHVlOiAjNTU2REM4O1xyXG4kb3JhbmdlOiAjRTY4RTM2O1xyXG5cclxuLnVzZXJzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcbiAgICAuc2VhcmNoSW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogd2hpdGVzbW9rZSwgJGFscGhhOiAwLjIpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMC4yKSAxcHggZ3Jvb3ZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wZW9wbGV7XHJcbiAgICAgICAgLml0ZW0tdXNlcntcclxuICAgICAgICAgICAgLmNhcmQtZGVmYXVsdHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcGluaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS11c2Vye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogN2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWZhdWx0LXVzZXItaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudXNlci1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudXNlcm5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1kZWZhdWx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXVzZXItcGx1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkxMjRmOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAkbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS11c2VyLXRpbWVze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLWNoZWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhZ2luYXRpb257XHJcbiAgICAgICAgLmJ0bi1kZWZhdWx0e1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1000)
                ])
            ])
        ] } });


/***/ }),

/***/ "Kk4b":
/*!***************************************!*\
  !*** ./src/app/models/publication.ts ***!
  \***************************************/
/*! exports provided: Publication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publication", function() { return Publication; });
class Publication {
    constructor(_id, text, file, created_at, user, saves, likes) {
        this._id = _id;
        this.text = text;
        this.file = file;
        this.created_at = created_at;
        this.user = user;
        this.saves = saves;
        this.likes = likes;
    }
}


/***/ }),

/***/ "LsEZ":
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/upload.service */ "jT/F");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_11__);















function TimelineComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/users"]; };
function TimelineComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No hay publicaciones para mostrar,");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " sigue algunos usuarios para ver sus publicaciones! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Pod\u00E9s encontrar otros usuarios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
} }
function TimelineComponent_div_2_div_9_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 51);
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", publication_r6.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function TimelineComponent_div_2_div_9_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 52);
} }
function TimelineComponent_div_2_div_9_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", publication_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-bs-target", "#deleteModal" + publication_r6._id);
} }
function TimelineComponent_div_2_div_9_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", publication_r6.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function TimelineComponent_div_2_div_9_div_1_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", publication_r6.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function TimelineComponent_div_2_div_9_div_1_i_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 58);
} }
function TimelineComponent_div_2_div_9_div_1_i_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 59);
} }
function TimelineComponent_div_2_div_9_div_1_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Da el primer like!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TimelineComponent_div_2_div_9_div_1_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Le gusta a ", publication_r6.likes.length, " persona");
} }
function TimelineComponent_div_2_div_9_div_1_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Le gusta a ", publication_r6.likes.length, " personas");
} }
function TimelineComponent_div_2_div_9_div_1_i_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 61);
} }
function TimelineComponent_div_2_div_9_div_1_i_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 62);
} }
const _c1 = function (a1) { return ["/profile", a1]; };
function TimelineComponent_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TimelineComponent_div_2_div_9_div_1_img_4_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TimelineComponent_div_2_div_9_div_1_img_5_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TimelineComponent_div_2_div_9_div_1_div_7_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u00BFDeseas borrar esta publicaci\u00F3n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Una vez que borres esta publicaci\u00F3n no podr\u00E1s recuperarla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, TimelineComponent_div_2_div_9_div_1_div_22_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimelineComponent_div_2_div_9_div_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r26.deletePublication(publication_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Borrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "amLocale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, TimelineComponent_div_2_div_9_div_1_div_43_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimelineComponent_div_2_div_9_div_1_Template_div_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r29.likePublication(publication_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, TimelineComponent_div_2_div_9_div_1_i_46_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, TimelineComponent_div_2_div_9_div_1_i_47_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, TimelineComponent_div_2_div_9_div_1_span_48_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, TimelineComponent_div_2_div_9_div_1_span_49_Template, 2, 1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, TimelineComponent_div_2_div_9_div_1_span_50_Template, 2, 1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimelineComponent_div_2_div_9_div_1_Template_div_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r31.savePublication(publication_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, TimelineComponent_div_2_div_9_div_1_i_52_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, TimelineComponent_div_2_div_9_div_1_i_53_Template, 1, 0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@.disabled", ctx_r7.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !publication_r6.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.user._id == ctx_r7.identity._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "deleteModal" + publication_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", publication_r6.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.file != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](28, _c1, publication_r6.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", publication_r6.user.name + " " + publication_r6.user.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "@" + publication_r6.user.nick, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 21, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](37, 23, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](38, 26, publication_r6.created_at), "es")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", publication_r6.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.file != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.likes.includes(ctx_r7.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !publication_r6.likes.includes(ctx_r7.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.likes.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.likes.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.likes.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", publication_r6.saves.includes(ctx_r7.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !publication_r6.saves.includes(ctx_r7.identity._id));
} }
function TimelineComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimelineComponent_div_2_div_9_div_1_Template, 55, 30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.publications);
} }
function TimelineComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Pod\u00E9s encontrar las publicaciones guardadas en tu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r4.identity._id));
} }
function TimelineComponent_div_2_div_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimelineComponent_div_2_div_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r35.viewMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ver m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TimelineComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimelineComponent_div_2_div_11_button_1_Template, 2, 0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.noMore);
} }
function TimelineComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimelineComponent_div_2_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r37.refresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Mostrar nuevas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TimelineComponent_div_2_div_8_Template, 10, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TimelineComponent_div_2_div_9_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TimelineComponent_div_2_div_10_Template, 5, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, TimelineComponent_div_2_div_11_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.publications && ctx_r1.publications.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.publications);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showMessageSaved);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.publications && ctx_r1.publications.length);
} }
class TimelineComponent {
    constructor(_route, _router, _userService, _publicationService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._publicationService = _publicationService;
        this._notificationService = _notificationService;
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__["io"])("ws://localhost:3000");
        this.noMore = false;
        this.loading = true;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.page = 1;
        this.isDisabled = false;
        this.showMessageSaved = false;
    }
    ngOnInit() {
        this.getPublications(this.page);
    }
    getPublications(page, adding = false) {
        this._publicationService.getPublications(this.token, page).subscribe(response => {
            if (response.publications) {
                this.total = response.total_items;
                this.pages = response.pages;
                this.itemsPerPage = response.items_per_page;
                this.loading = false;
                if (!adding) {
                    this.publications = response.publications;
                }
                else {
                    let arrayA = this.publications;
                    let arrayB = response.publications;
                    this.publications = arrayA.concat(arrayB);
                }
            }
            else {
                this.status = 'error';
                this.loading = false;
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    viewMore() {
        this.page += 1;
        if (this.page == this.pages) {
            this.noMore = true;
        }
        this.getPublications(this.page, true);
    }
    refresh(event = null) {
        this.page = 1;
        this.isDisabled = false;
        this.getPublications(this.page);
    }
    deletePublication(id) {
        this._publicationService.deletePublication(this.token, id).subscribe(response => {
            this.isDisabled = false;
            this.getCounters();
            this.refresh();
            this.deleteNotification(id);
        }, error => {
            console.log(error);
        });
    }
    savePublication(publication) {
        if (!publication.saves.includes(this.identity._id)) {
            this.showMessageSaved = true;
            setTimeout(() => { this.showMessageSaved = false; }, 3000);
        }
        this._publicationService.savePublication(publication).subscribe(response => {
            if (response && response.message === "Saved") {
                this.statusSaved = true;
                this.isDisabled = true;
                this.getPublications(this.page);
            }
            else if (response && response.message === "Unsaved") {
                this.statusSaved = false;
                this.isDisabled = true;
                this.getPublications(this.page);
            }
        }, error => {
            console.log(error);
        });
    }
    likePublication(publication) {
        this._publicationService.likePublication(publication).subscribe(response => {
            if (response && response.message === "Like") {
                this.statusLiked = true;
                this.isDisabled = true;
                this.getPublications(publication);
                this.saveNotification(publication);
            }
            else if (response && response.message === "Dislike") {
                this.statusLiked = false;
                this.isDisabled = true;
                this.getPublications(publication);
            }
        }, error => {
            console.log(error);
        });
    }
    getCounters() {
        this._userService.getCounters().subscribe(response => {
            localStorage.setItem('stats', JSON.stringify(response));
            this.status = 'success';
            this._router.navigate(['/timeline']);
            this.stats = this._userService.getStats();
        }, error => {
            console.log(error);
        });
    }
    saveNotification(publication) {
        this._notificationService.saveNotification(this.token, publication, 'like-publication').subscribe(response => {
            this.socket.emit("notificationPublication", response);
        }, error => {
            console.log(error);
        });
    }
    deleteNotification(id) {
        this._notificationService.deleteNotification(this.token, id).subscribe(response => { }, error => {
            console.log(error);
        });
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_publication_service__WEBPACK_IMPORTED_MODULE_2__["PublicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_0__["UploadService"], _services_publication_service__WEBPACK_IMPORTED_MODULE_2__["PublicationService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], decls: 5, vars: 2, consts: [[1, "timeline-container", "row"], ["class", "mt-5 col-xl-8 col-lg-8 col-md-8 offset-lg-0 offset-md-2 d-flex justify-content-center", 4, "ngIf"], ["class", "mt-5 col-xl-8 col-lg-8 col-md-8 offset-lg-0 offset-md-2", 4, "ngIf"], [1, "mt-5", "col-xl-4", "col-lg-4", "col-sm-8"], [3, "sent"], [1, "mt-5", "col-xl-8", "col-lg-8", "col-md-8", "offset-lg-0", "offset-md-2", "d-flex", "justify-content-center"], [1, "mt-5", "col-xl-8", "col-lg-8", "col-md-8", "offset-lg-0", "offset-md-2"], [1, "text-center", "section-title"], [1, "text-center"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "publications"], ["class", "text-center mt-5", 4, "ngIf"], ["class", "item-publication", 4, "ngFor", "ngForOf"], ["class", "message-saved text-center", 4, "ngIf"], ["class", "text-center mb-5", 4, "ngIf"], [1, "text-center", "mt-5"], [3, "routerLink"], [1, "item-publication"], ["class", "card card-default", 4, "ngIf"], [1, "card", "card-default"], [1, "card-body"], [1, "image-user", "pull-left"], ["href", "#"], ["alt", "Imagen de usuario", 3, "src", 4, "ngIf"], ["class", "default-user-image", "src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], ["tabindex", "-1", "aria-labelledby", "deleteModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "deleteModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close-modal"], [1, "fa", "fa-close"], [1, "modal-body"], [1, "publication-modal"], ["class", "publication-img-modal", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-trash", "mx-2"], [1, "name-surname", 3, "routerLink"], [1, "date"], [1, "publication-text", "pull-left"], ["class", "publication-img d-flex justify-content-center", 4, "ngIf"], [1, "likes-save", "d-flex", "justify-content-around"], [3, "click"], ["class", "fa fa-thumbs-up like", 4, "ngIf"], ["class", "fa fa-thumbs-up dislike", 4, "ngIf"], ["class", "likes-number", 4, "ngIf"], ["class", "fa fa-bookmark saved", 4, "ngIf"], ["class", "fa fa-bookmark unsaved", 4, "ngIf"], ["alt", "Imagen de usuario", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 1, "default-user-image"], [1, "pull-right"], ["type", "button", "data-bs-toggle", "modal", 1, "btn", 3, "id"], [1, "publication-img-modal"], ["alt", "Imagen de publicaci\u00F3n", 3, "src"], [1, "publication-img", "d-flex", "justify-content-center"], [1, "fa", "fa-thumbs-up", "like"], [1, "fa", "fa-thumbs-up", "dislike"], [1, "likes-number"], [1, "fa", "fa-bookmark", "saved"], [1, "fa", "fa-bookmark", "unsaved"], [1, "message-saved", "text-center"], [1, "text-center", "mb-5"], ["class", "btn btn-sm btn-default", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-default", 3, "click"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimelineComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TimelineComponent_div_2_Template, 12, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-sidebar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sent", function TimelineComponent_Template_app_sidebar_sent_4_listener($event) { return ctx.refresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [angular2_moment__WEBPACK_IMPORTED_MODULE_11__["TimeAgoPipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_11__["LocalePipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_11__["FromUnixPipe"]], styles: [".timeline-container[_ngcontent-%COMP%] {\n  margin-top: 7vh;\n}\n.timeline-container[_ngcontent-%COMP%]   .btn-info[_ngcontent-%COMP%] {\n  background-color: rgba(248, 248, 248, 0.5);\n  border: none;\n  border-radius: 50px;\n  color: grey;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%] {\n  margin: 2vh 5vw;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  border: none;\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 5px 10px 9px 0px rgba(0, 0, 0, 0.22);\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .fa-close[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .fa-close[_ngcontent-%COMP%]:hover {\n  color: #DD517F;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin-right: 20px;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   .default-user-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .name-surname[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-weight: bold;\n  font-family: \"Raleway\";\n  text-decoration: none;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7998EE;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-text[_ngcontent-%COMP%] {\n  padding-left: 70px;\n  padding-right: 5vw;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 5px 70px;\n}\n@media (max-width: 576px) {\n  .timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .publication-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-right: 5vw;\n  }\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%] {\n  padding: 15px 80px;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .dislike[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .dislike[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .likes-number[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  margin-left: 5px;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .saved[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .saved[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .unsaved[_ngcontent-%COMP%] {\n  color: #6e2e81;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .item-publication[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .likes-save[_ngcontent-%COMP%]   .unsaved[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #556DC8;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #DD517F 0%, #6e2e81 100%);\n  position: fixed;\n  bottom: 5%;\n  left: 35%;\n  width: 35%;\n  padding: 30px;\n  border-radius: 50px;\n}\n@media (max-width: 992px) {\n  .timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%] {\n    bottom: 10%;\n    left: 25%;\n    width: 50%;\n  }\n}\n@media (max-width: 576px) {\n  .timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%] {\n    left: 12.5%;\n    width: 75%;\n  }\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: whitesmoke;\n  font-weight: 600;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #6e2e81;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .message-saved[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7998EE;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #6e2e81;\n  color: whitesmoke;\n  border-radius: 50px;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #DD517F;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  border-radius: 50px;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover {\n  background-color: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  background-color: #dfdede;\n  border-radius: 70px;\n  border: 5px solid #DD517F;\n  overflow: hidden;\n  margin-top: 15vh;\n}\n@media (max-width: 600px) {\n  .timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    margin: 10vw;\n  }\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:focus, .timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  box-shadow: none;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .publication-modal[_ngcontent-%COMP%] {\n  color: grey;\n  font-weight: 200;\n  padding: 1.5rem;\n  padding-bottom: 0;\n  font-size: 1rem;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .publication-img-modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: auto;\n  padding: 0 0 1rem 1.5rem;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #556DC8;\n  font-size: 1.5rem;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  text-decoration: none;\n}\n.timeline-container[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #DD517F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLGVBQUE7QUFMSjtBQU1JO0VBQ0ksMENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSlI7QUFPUTtFQUNJLGVBQUE7QUFMWjtBQU1ZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxnREFBQTtFQUNBLHdEQUFBO0VBQ0EscURBQUE7QUFKaEI7QUFLZ0I7RUFDSSxhQUFBO0FBSHBCO0FBSW9CO0VBQ0ksY0EzQmY7QUF5QlQ7QUFHd0I7RUFDSSxjQTVCckI7QUEyQlA7QUFJb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZ4QjtBQUd3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRDVCO0FBR3dCO0VBQ0ksV0FBQTtBQUQ1QjtBQUlvQjtFQUNJLGNBL0NmO0VBZ0RlLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUZ4QjtBQUlvQjtFQUNJLGtCQUFBO0VBQ0EsY0FwRFo7QUFrRFo7QUFJb0I7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBRnhCO0FBSW9CO0VBQ0ksV0FBQTtBQUZ4QjtBQUd3QjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUQ1QjtBQUU0QjtFQUhKO0lBSVEsa0JBQUE7RUFDOUI7QUFDRjtBQUVvQjtFQUNJLGtCQUFBO0FBQXhCO0FBQ3dCO0VBQ0ksY0F4RXJCO0FBeUVQO0FBQTRCO0VBQ0ksZUFBQTtFQUNBLGNBekV6QjtBQTJFUDtBQUN3QjtFQUNJLGNBaEZuQjtBQWlGVDtBQUE0QjtFQUNJLGVBQUE7RUFDQSxjQWhGekI7QUFrRlA7QUFDd0I7RUFDSSxjQXZGbkI7RUF3Rm1CLGdCQUFBO0FBQzVCO0FBQ3dCO0VBQ0ksY0ExRnJCO0FBMkZQO0FBQTRCO0VBQ0EsZUFBQTtFQUNBLGNBM0ZyQjtBQTZGUDtBQUN3QjtFQUNJLGNBbEduQjtBQW1HVDtBQUE0QjtFQUNJLGVBQUE7RUFDQSxjQWxHekI7QUFvR1A7QUFPUTtFQUdJLDhEQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxaO0FBTVk7RUFWSjtJQVdRLFdBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQUhkO0FBQ0Y7QUFJWTtFQWZKO0lBZ0JRLFdBQUE7SUFDQSxVQUFBO0VBRGQ7QUFDRjtBQUVZO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksZ0JBQUE7RUFDQSxjQXZJWDtBQXdJVDtBQUFvQjtFQUNJLGNBdklaO0FBeUlaO0FBSVE7RUFDSSx5QkFoSkg7RUFpSkcsaUJBQUE7RUFDQSxtQkFBQTtBQUZaO0FBR1k7RUFDSSx5QkFuSlQ7QUFrSlA7QUFLUTtFQUNJLGNBekpIO0VBMEpHLG1CQUFBO0FBSFo7QUFJWTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFGaEI7QUFPWTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFNZ0I7RUFOSjtJQU9RLFlBQUE7RUFIbEI7QUFDRjtBQUlnQjtFQUNJLGFBQUE7QUFGcEI7QUFJd0I7RUFDSSxpQkFBQTtBQUY1QjtBQUl3QjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUY1QjtBQUc0QjtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7QUFEaEM7QUFNd0I7RUFDSSxnQkFBQTtBQUo1QjtBQU13QjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFKNUI7QUFPNEI7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBTGhDO0FBWVE7RUFDSSxjQTlNTDtFQStNSyxpQkFBQTtBQVZaO0FBWVE7RUFDSSxjQXJOSDtFQXNORyxxQkFBQTtBQVZaO0FBV1k7RUFDSSxjQXZOVDtBQThNUCIsImZpbGUiOiJ0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR2aW9sZXQ6ICM2ZTJlODE7XHJcbiRwaW5rOiAjREQ1MTdGO1xyXG4kbGlnaHRibHVlOiAjNzk5OEVFO1xyXG4kYmx1ZTogIzU1NkRDODtcclxuJG9yYW5nZTogI0U2OEUzNjtcclxuXHJcbi50aW1lbGluZS1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgICAuYnRuLWluZm97XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcbiAgICAucHVibGljYXRpb25ze1xyXG4gICAgICAgIC5pdGVtLXB1YmxpY2F0aW9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDJ2aCA1dnc7XHJcbiAgICAgICAgICAgIC5jYXJkLWRlZmF1bHR7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDEwcHggOXB4IDBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gICAgICAgICAgICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC5mYS1jbG9zZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXVzZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlZmF1bHQtdXNlci1pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lLXN1cm5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnB1YmxpY2F0aW9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHVibGljYXRpb24taW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5saWtlcy1zYXZle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saWtle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNsaWtle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpa2VzLW51bWJlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2F2ZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bnNhdmVke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVzc2FnZS1zYXZlZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgJHBpbmsgMCUsICR2aW9sZXQgMTAwJSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICRwaW5rIDAlLCAkdmlvbGV0IDEwMCUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgJHBpbmsgMCUsICR2aW9sZXQgMTAwJSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgbGVmdDogMzUlO1xyXG4gICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMi41JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTptZWRpdW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLWRlZmF1bHR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJ0bi1saWdodHtcclxuICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubW9kYWx7XHJcbiAgICAgICAgICAgIC5tb2RhbC1kaWFsb2d7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjIsIDIyMik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJHBpbms7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG4tY2xvc2UtbW9kYWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cywmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wdWJsaWNhdGlvbi1tb2RhbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wdWJsaWNhdGlvbi1pbWctbW9kYWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(1000)
                ])
            ])
        ] } });


/***/ }),

/***/ "MnDo":
/*!********************************************!*\
  !*** ./src/app/services/follow.service.ts ***!
  \********************************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class FollowService {
    constructor(_http) {
        this._http = _http;
    }
    addFollow(token, follow) {
        let params = JSON.stringify(follow);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post('api/follow', params, { headers: headers });
    }
    deleteFollow(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.delete('api/follow/' + id, { headers: headers });
    }
    getFollowing(token, userId = null, page = 1) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        let url = 'api/following';
        if (userId != null) {
            url = 'api/following/' + userId + '/' + page;
        }
        return this._http.get(url, { headers: headers });
    }
    getFollowers(token, userId = null, page = 1) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        let url = 'api/followed';
        if (userId != null) {
            url = 'api/followed/' + userId + '/' + page;
        }
        return this._http.get(url, { headers: headers });
    }
    getMyFollows(token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get('api/get-my-follows/true', { headers: headers });
    }
}
FollowService.ɵfac = function FollowService_Factory(t) { return new (t || FollowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
FollowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FollowService, factory: FollowService.ɵfac });


/***/ }),

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NotificationService {
    constructor(_http) {
        this._http = _http;
    }
    getToken() {
        let token = JSON.parse(localStorage.getItem('token'));
        if (token != undefined) {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }
    saveNotification(token, data, type) {
        let params = JSON.stringify(data);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post('api/save-notification/' + type, params, { headers: headers });
    }
    getNotifications(token, page = 1) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get('api/get-notifications/' + page, { headers: headers });
    }
    setViewedNotifications(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post('api/set-viewed-notifications/' + id, { headers: headers });
    }
    deleteNotification(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.delete('api/delete-notification/' + id, { headers: headers });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac });


/***/ }),

/***/ "Rdf6":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_8__);












function NotificationsComponent_div_5_div_1_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", notification_r1.follower.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function NotificationsComponent_div_5_div_1_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 13);
} }
function NotificationsComponent_div_5_div_1_div_2_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", "api/get-image-pub/" + notification_r1.publication.file, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function NotificationsComponent_div_5_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NotificationsComponent_div_5_div_1_div_2_img_3_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, NotificationsComponent_div_5_div_1_div_2_img_4_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " le gust\u00F3 tu publicaci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, NotificationsComponent_div_5_div_1_div_2_img_11_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "amLocale");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notification_r1.follower.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !notification_r1.follower.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r1.follower.name + " " + notification_r1.follower.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", notification_r1.publication.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notification_r1 && notification_r1.publication.file != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 11, notification_r1.created_at), "es")));
} }
function NotificationsComponent_div_5_div_1_div_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", notification_r1.follower.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function NotificationsComponent_div_5_div_1_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 13);
} }
function NotificationsComponent_div_5_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NotificationsComponent_div_5_div_1_div_3_img_2_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NotificationsComponent_div_5_div_1_div_3_img_3_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " a comenzado a seguirte. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "amLocale");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notification_r1.follower.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !notification_r1.follower.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r1.follower.name + " " + notification_r1.follower.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 9, notification_r1.created_at), "es")));
} }
function NotificationsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NotificationsComponent_div_5_div_1_div_2_Template, 17, 13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NotificationsComponent_div_5_div_1_div_3_Template, 12, 11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notification_r1.type === "like-publication");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notification_r1.type === "new-follow");
} }
function NotificationsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NotificationsComponent_div_5_div_1_Template, 4, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notification_r1.follower.sub != ctx_r0.identity._id);
} }
class NotificationsComponent {
    constructor(_route, _router, _userService, _publicationService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._publicationService = _publicationService;
        this._notificationService = _notificationService;
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__["io"])("ws://localhost:3000");
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.page = 1;
    }
    ngOnInit() {
        this.getNotifications(this.token, this.page);
        this.socket.on("newNotification", newNotification => {
            this.getNotifications(this.token, this.page);
        });
    }
    getNotifications(token, page) {
        this._notificationService.getNotifications(token, page).subscribe(response => {
            this.notifications = response.notifications;
        }, error => {
            console.log(error);
        });
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_publication_service__WEBPACK_IMPORTED_MODULE_1__["PublicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], _services_publication_service__WEBPACK_IMPORTED_MODULE_1__["PublicationService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])], decls: 6, vars: 2, consts: [[1, "notifications-container", "col-xl-12", "col-lg-12"], [1, "mt-5"], [1, "text-center", "section-title"], [1, "notifications", "mt-5"], ["class", "item-notifications d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "item-notifications", "d-flex", "justify-content-center"], ["class", "card card-default", 4, "ngIf"], [1, "card", "card-default"], [1, "card-body", "d-flex"], [4, "ngIf"], [3, "src", 4, "ngIf"], ["class", "default-image-user", "src", "assets/img/default-user.jpg", "alt", "Foto de perfil", 4, "ngIf"], [3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Foto de perfil", 1, "default-image-user"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Notificaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NotificationsComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [angular2_moment__WEBPACK_IMPORTED_MODULE_8__["TimeAgoPipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_8__["LocalePipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_8__["FromUnixPipe"]], styles: [".notifications-container[_ngcontent-%COMP%] {\n  margin-top: 14vh;\n}\n.notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%] {\n  margin: 0 5vw;\n}\n.notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n  width: 50vw;\n  border: none;\n  background: transparent;\n  border-bottom: 1px solid #DD517F;\n}\n.notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n}\n@media (max-width: 992px) {\n  .notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n  }\n}\n.notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  border-radius: 100%;\n  margin: 10px;\n}\n.notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #556DC8;\n}\n.notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 0;\n  width: 60px;\n}\n.notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #DD517F;\n  opacity: 0.8;\n}\n@media (max-width: 768px) {\n  .notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n  .notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n    width: 85vw;\n    margin: 0;\n  }\n  .notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25px;\n  }\n  .notifications-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .item-notifications[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksZ0JBQUE7QUFMSjtBQU9RO0VBQ0ksYUFBQTtBQUxaO0FBTVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFKaEI7QUFLZ0I7RUFDSSxrQkFBQTtBQUhwQjtBQUlvQjtFQUZKO0lBR1Esa0JBQUE7RUFEdEI7QUFDRjtBQUVvQjtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBQXhCO0FBQ3dCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUM1QjtBQUN3QjtFQUNJLGNBM0JyQjtBQTRCUDtBQUE0QjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUVoQztBQUVvQjtFQUNJLGNBckNqQjtFQXNDaUIsWUFBQTtBQUF4QjtBQUlZO0VBbENKO0lBbUNRLFNBQUE7SUFDQSxVQUFBO0VBRGQ7RUFFYztJQUNJLFdBQUE7SUFDQSxTQUFBO0VBQWxCO0VBRzBCO0lBQ0ksV0FBQTtFQUQ5QjtFQUk4QjtJQUNJLFdBQUE7RUFGbEM7QUFDRiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHZpb2xldDogIzZlMmU4MTtcclxuJHBpbms6ICNERDUxN0Y7XHJcbiRsaWdodGJsdWU6ICM3OTk4RUU7XHJcbiRibHVlOiAjNTU2REM4O1xyXG4kb3JhbmdlOiAjRTY4RTM2O1xyXG5cclxuLm5vdGlmaWNhdGlvbnMtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTR2aDtcclxuICAgIC5ub3RpZmljYXRpb25ze1xyXG4gICAgICAgIC5pdGVtLW5vdGlmaWNhdGlvbnN7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1dnc7XHJcbiAgICAgICAgICAgIC5jYXJkLWRlZmF1bHR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzbWFsbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgLmNhcmQtZGVmYXVsdHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODV2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(1000)
                ])
            ])
        ] } });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");






function AppComponent_app_navbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
} }
class AppComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.title = 'Vaporbox';
        this.router = _router.url;
    }
    ngOnInit() {
        this.identity = this._userService.getIdentity();
    }
    ngDoCheck() {
        this.identity = this._userService.getIdentity();
        this._router.events.subscribe(e => {
            this.router = this._router.url;
        });
    }
    onActivate(event) {
        window.scroll(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])], decls: 2, vars: 1, consts: [[4, "ngIf"], [3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_app_navbar_0_Template, 1, 0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.router === "/register" || ctx.router === "/login" || ctx.router === "/"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ "2hxB");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "video", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "source", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No has podido iniciar sesi\u00F3n, intentalo nuevamente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Debe ingresar una direcci\u00F3n de email v\u00E1lida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ingres\u00E1 tu contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/register"]; };
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vaporbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Ingres\u00E1 a tu cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LoginComponent_div_2_div_6_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_2_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Direcci\u00F3n de email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_2_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LoginComponent_div_2_span_14_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_2_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, LoginComponent_div_2_span_20_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u00BFNo ten\u00E9s una cuenta en Vaporbox? Registrate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Registrate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.status == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r5.valid && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r4.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
} }
class LoginComponent {
    constructor(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.loading = true;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]("", "", "", "", "", "", "ROLE_USER", "", "");
    }
    ngOnInit() {
        if (localStorage['firstTimeLoad'] === 'TRUE') {
            this.loading = false;
        }
        else {
            setTimeout(() => {
                this.loading = false;
                localStorage['firstTimeLoad'] = 'TRUE';
            }, 3000);
        }
    }
    onSubmit() {
        //Loguear al usuario y conseguir sus datos
        this._userService.signup(this.user).subscribe(response => {
            this.identity = response.user;
            if (!this.identity || !this.identity._id) {
                this.status = 'error';
            }
            else {
                //Persistir sesión en la navegación
                localStorage.setItem('identity', JSON.stringify(this.identity));
                //Conseguir el token
                this.getToken();
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = 'error';
            }
        });
    }
    getToken() {
        this._userService.signup(this.user, 'true').subscribe(response => {
            this.token = JSON.stringify(response.token);
            if (this.token.length <= 0) {
                this.status = 'error';
            }
            else {
                //Persistir el token de usuario
                localStorage.setItem('token', this.token);
                //Conseguir los contadores o estadisticas de usuario
                this.getCounters();
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = 'error';
            }
        });
    }
    getCounters() {
        this._userService.getCounters().subscribe(response => {
            localStorage.setItem('stats', JSON.stringify(response));
            this.status = 'success';
            this._router.navigate(['/timeline']);
        }, error => {
            console.log(error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])], decls: 3, vars: 3, consts: [["class", "loading-container", 4, "ngIf"], ["id", "bgVideo", "preload", "true", "autoplay", "", "loop", "", "muted", "", "oncanplay", "this.play()", "onloadedmetadata", "this.muted = true", 4, "ngIf"], ["class", "row login-container", 4, "ngIf"], [1, "loading-container"], ["id", "bgVideo", "preload", "true", "autoplay", "", "loop", "", "muted", "", "oncanplay", "this.play()", "onloadedmetadata", "this.muted = true"], ["src", "assets/video/video1.mp4", "type", "video/mp4"], [1, "row", "login-container"], [1, "text-center", "brand", "mt-3"], [1, "mb-5", "mt-5", "form-container"], [1, "mb-3", "mt-5", "section-title"], ["class", "alert", 4, "ngIf"], [1, "col-xl-4", "col-lg-4", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "col-lg-12", "mt-3"], ["for", "email"], ["type", "email", "name", "email", "required", "", "pattern", "[a-z0-9-_%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-center"], [3, "routerLink"], ["type", "submit", 1, "btn", "btn-default", "mt-3", 3, "disabled"], ["type", "button", 1, "btn", "btn-light", "mt-3", 3, "routerLink"], [1, "alert"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_video_1_Template, 2, 0, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 31, 11, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["#bgVideo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: -100;\n  width: 100vw;\n  height: 100vh;\n  filter: saturate(70%);\n  -webkit-filter: saturate(70%);\n  -moz-filter: saturate(70%);\n  opacity: 0.3;\n  object-fit: cover;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 0;\n}\n\n.login-container[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  letter-spacing: 10px;\n  color: #DD517F;\n  font-weight: bolder;\n  font-size: 4rem;\n  background: #DD517F;\n  background: linear-gradient(to left, #DD517F 33%, #6E2E81 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n@media (max-width: 1300px) {\n  .login-container[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    font-size: 3rem;\n  }\n}\n\n.login-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n\n.login-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, #DD517F 0%, #6E2E81 100%);\n  color: whitesmoke;\n  border: none;\n  border-radius: 50px;\n}\n\n.login-container[_ngcontent-%COMP%]   #illustration-register[_ngcontent-%COMP%] {\n  height: 50%;\n  margin: 0;\n  padding: 0;\n}\n\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\n@media (max-width: 380px) {\n  .login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 0 10vw;\n  }\n}\n\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-size: 1rem;\n  margin-left: 15px;\n}\n\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  height: 30px;\n  background-color: whitesmoke;\n  font-size: small;\n}\n\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #DD517F;\n  font-size: smaller;\n  margin-left: 15px;\n}\n\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n  border: lightgray;\n}\n\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n  background-color: #DD517F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFPQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUpKOztBQUtJO0VBQ0ksb0JBQUE7RUFDQSxjQXZCRDtFQXdCQyxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUdBLCtEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQUhSOztBQUlRO0VBWEo7SUFZUSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxlQUFBO0VBRFY7QUFDRjs7QUFLSTtFQUNJLGNBeENEO0FBcUNQOztBQU1JO0VBQ0ksOERBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUpSOztBQU9JO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTFI7O0FBUUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQU5SOztBQVFRO0VBUEo7SUFRUSxlQUFBO0VBTFY7QUFDRjs7QUFPUTtFQUNJLGNBckVIO0VBc0VHLGVBQUE7RUFDQSxpQkFBQTtBQUxaOztBQU9RO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUxaOztBQU1ZO0VBQ1EsWUFBQTtFQUNBLGFBQUE7QUFKcEI7O0FBT1E7RUFDUSxjQW5GVDtFQW9GUyxrQkFBQTtFQUNBLGlCQUFBO0FBTGhCOztBQVVZO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtBQVJoQjs7QUFZUTtFQUNJLGtCQUFBO0FBVlo7O0FBV1k7RUFDSSxpQkFBQTtFQUNBLHlCQXBHVDtBQTJGUCIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR2aW9sZXQ6ICM2ZTJlODE7XHJcbiRwaW5rOiAjREQ1MTdGO1xyXG4kbGlnaHRibHVlOiAjNzk5OEVFO1xyXG4kYmx1ZTogIzU1NkRDODtcclxuJG9yYW5nZTogI0U2OEUzNjtcclxuXHJcbiNiZ1ZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZpbHRlcjogc2F0dXJhdGUoNzAlKTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBzYXR1cmF0ZSg3MCUpO1xyXG4gICAgLW1vei1maWx0ZXI6IHNhdHVyYXRlKDcwJSk7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBvYmplY3QtZml0OmNvdmVyO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5icmFuZHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjREQ1MTdGO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNERDUxN0YgMzMlLCAjNkUyRTgxIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNERDUxN0YgMzMlLCAjNkUyRTgxIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREQ1MTdGIDMzJSwgIzZFMkU4MSAxMDAlKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XHJcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAuc2VjdGlvbi10aXRsZXtcclxuICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICB9XHJcblxyXG4gICAgLmFsZXJ0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREQ1MTdGIDAlLCAjNkUyRTgxIDEwMCUpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjaWxsdXN0cmF0aW9uLXJlZ2lzdGVye1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDozODBweCl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTB2dztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgJjphY3RpdmUsICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLWxpZ2h0e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHJnYigyMTEsIDIxMSwgMjExKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnRuLWRlZmF1bHR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000)
                ])
            ])
        ] } });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ "2hxB");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function RegisterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "video", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "source", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
function RegisterComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Registro completado con \u00E9xito, ya pod\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " aqu\u00ED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
function RegisterComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El registro no ha podido completarse, quiz\u00E1s tu nombre de usuario o email ya est\u00E1 en uso, intentalo de nuevo! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_2_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_2_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El apellido es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_2_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El nombre de usuario es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_2_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El email es obligatorio y debe ser v\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_2_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La contrase\u00F1a es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Vaporbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "S\u00E9 qui\u00E9n quieras ser");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Crea tu cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RegisterComponent_div_2_div_9_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RegisterComponent_div_2_div_10_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_div_2_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.onSubmit(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_2_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.user.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, RegisterComponent_div_2_span_18_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_2_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.user.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, RegisterComponent_div_2_span_24_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Nombre de Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_2_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.user.nick = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, RegisterComponent_div_2_span_30_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_2_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, RegisterComponent_div_2_span_36_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_2_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, RegisterComponent_div_2_span_42_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\u00BFYa ten\u00E9s una cuenta en Vaporbox? Inici\u00E1 sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](35);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.status == "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.status == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r8.valid && _r8.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r10.valid && _r10.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r12.valid && _r12.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r14.valid && _r14.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r5.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c0));
} }
class RegisterComponent {
    constructor(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.loading = true;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]("", "", "", "", "", "", "ROLE_USER", "", "");
    }
    ngOnInit() {
        if (localStorage['firstTimeLoad'] === 'TRUE') {
            this.loading = false;
        }
        else {
            setTimeout(() => {
                this.loading = false;
                localStorage['firstTimeLoad'] = 'TRUE';
            }, 3000);
        }
    }
    onSubmit(form) {
        this._userService.register(this.user).subscribe(response => {
            if (response.user && response.user._id) {
                this.status = 'success';
                form.reset();
                this._router.navigate(['/login']);
            }
            else {
                this.status = 'error';
            }
        }, error => {
            console.log(error);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])], decls: 3, vars: 3, consts: [["class", "loading-container", 4, "ngIf"], ["id", "bgVideo", "preload", "true", "autoplay", "", "loop", "", "muted", "", "oncanplay", "this.play()", "onloadedmetadata", "this.muted = true", 4, "ngIf"], ["class", "row register-container", 4, "ngIf"], [1, "loading-container"], ["id", "bgVideo", "preload", "true", "autoplay", "", "loop", "", "muted", "", "oncanplay", "this.play()", "onloadedmetadata", "this.muted = true"], ["src", "assets/video/video1.mp4", "type", "video/mp4"], [1, "row", "register-container"], ["id", "illustration-slogan", 1, "col-lg-4", "d-flex", "flex-column", "justify-content-center", "text-center"], [1, "text-center", "brand"], ["data-text", "S\u00E9 qui\u00E9n quieras ser", 1, "mt-lg-5", "glitch"], [1, "col-lg-4", "mb-3", "mt-lg-3", "form-container"], [1, "section-title"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-lg-12", 3, "ngSubmit"], ["registerForm", "ngForm"], ["for", "name"], [1, "col-lg-12"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], [1, "col-lg-12", "mt-3"], ["for", "surname"], ["type", "text", "name", "surname", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surname", "ngModel"], ["for", "nick"], ["type", "text", "name", "nick", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nick", "ngModel"], ["for", "email"], ["type", "email", "name", "email", "required", "", "pattern", "[a-z0-9-_%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-center"], [3, "routerLink"], ["type", "submit", 1, "btn", "btn-default", "mt-3", 3, "disabled"], ["type", "button", 1, "btn", "btn-light", "mt-3", 3, "routerLink"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RegisterComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterComponent_video_1_Template, 2, 0, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_div_2_Template, 53, 18, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["#bgVideo[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  min-height: 100%;\n  z-index: -100;\n  object-fit: cover;\n  filter: saturate(70%);\n  -webkit-filter: saturate(70%);\n  -moz-filter: saturate(70%);\n  opacity: 0.3;\n}\n\n.register-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  letter-spacing: 10px;\n  color: #DD517F;\n  font-weight: bolder;\n  font-size: 4rem;\n  background: #DD517F;\n  background: linear-gradient(to left, #DD517F 33%, #6E2E81 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n@media (max-width: 1300px) {\n  .register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    font-size: 3rem;\n  }\n}\n\n.register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   #illustration-register[_ngcontent-%COMP%] {\n  width: 50vw;\n  margin: 0 auto;\n  padding: 0 0;\n  opacity: 0.7;\n  filter: drop-shadow(5px 0 5px #6e2e81);\n}\n\n@media (max-width: 991.9px) {\n  .register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   #illustration-register[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   .glitch[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-weight: bold;\n  font-style: italic;\n  font-size: large;\n  position: fixed;\n  left: 30%;\n  bottom: 50%;\n  opacity: 0.8;\n  animation: glitch-skew 2s infinite linear alternate-reverse;\n}\n\n@media (max-width: 991.9px) {\n  .register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   .glitch[_ngcontent-%COMP%] {\n    position: inherit;\n    margin: 0;\n    padding: 0;\n    font-size: x-large;\n  }\n}\n\n.register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   .glitch[_ngcontent-%COMP%]::before {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  left: 2px;\n  text-shadow: -1px 0 #DD517F;\n  clip: rect(44px, 450px, 56px, 0);\n  animation: glitch-anim 7s infinite linear alternate-reverse;\n}\n\n.register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   .glitch[_ngcontent-%COMP%]::after {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  left: -2px;\n  text-shadow: -2px 0 #7998EE, -2px -2px #E68E36;\n  opacity: 0.7;\n  animation: glitch-anim2 2s infinite linear alternate-reverse;\n}\n\n@keyframes glitch-anim {\n  0% {\n    clip: rect(94px, 9999px, 86px, 0);\n    transform: skew(0.29deg);\n  }\n  10% {\n    clip: rect(78px, 9999px, 77px, 0);\n    transform: skew(0.41deg);\n  }\n  20% {\n    clip: rect(2px, 9999px, 47px, 0);\n    transform: skew(0.38deg);\n  }\n  30% {\n    clip: rect(53px, 9999px, 35px, 0);\n    transform: skew(0.96deg);\n  }\n  40% {\n    clip: rect(41px, 9999px, 22px, 0);\n    transform: skew(0.04deg);\n  }\n  50% {\n    clip: rect(30px, 9999px, 30px, 0);\n    transform: skew(0.65deg);\n  }\n  60% {\n    clip: rect(100px, 9999px, 10px, 0);\n    transform: skew(0.67deg);\n  }\n  70% {\n    clip: rect(72px, 9999px, 88px, 0);\n    transform: skew(0.04deg);\n  }\n  80% {\n    clip: rect(67px, 9999px, 61px, 0);\n    transform: skew(0.67deg);\n  }\n  90% {\n    clip: rect(24px, 9999px, 82px, 0);\n    transform: skew(0.54deg);\n  }\n  100% {\n    clip: rect(1px, 9999px, 63px, 0);\n    transform: skew(0.31deg);\n  }\n}\n\n@keyframes glitch-anim2 {\n  0% {\n    clip: rect(16px, 9999px, 79px, 0);\n    transform: skew(0.03deg);\n  }\n  10% {\n    clip: rect(37px, 9999px, 100px, 0);\n    transform: skew(0.95deg);\n  }\n  20% {\n    clip: rect(51px, 9999px, 48px, 0);\n    transform: skew(0.68deg);\n  }\n  30% {\n    clip: rect(69px, 9999px, 54px, 0);\n    transform: skew(0.22deg);\n  }\n  40% {\n    clip: rect(75px, 9999px, 3px, 0);\n    transform: skew(0.46deg);\n  }\n  50% {\n    clip: rect(85px, 9999px, 18px, 0);\n    transform: skew(0.6deg);\n  }\n  60% {\n    clip: rect(72px, 9999px, 2px, 0);\n    transform: skew(0.44deg);\n  }\n  70% {\n    clip: rect(87px, 9999px, 88px, 0);\n    transform: skew(0.79deg);\n  }\n  80% {\n    clip: rect(90px, 9999px, 14px, 0);\n    transform: skew(0.14deg);\n  }\n  90% {\n    clip: rect(76px, 9999px, 58px, 0);\n    transform: skew(0.8deg);\n  }\n  100% {\n    clip: rect(8px, 9999px, 67px, 0);\n    transform: skew(0.07deg);\n  }\n}\n\n@keyframes glitch-skew {\n  0% {\n    transform: skew(-2deg);\n  }\n  20% {\n    transform: skew(-3deg);\n  }\n  40% {\n    transform: skew(-3deg);\n  }\n  60% {\n    transform: skew(-2deg);\n  }\n  80% {\n    transform: skew(-1deg);\n  }\n  100% {\n    transform: skew(-1deg);\n  }\n}\n\n@media (max-width: 991.9px) {\n  .register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%] {\n    margin-bottom: 10%;\n  }\n}\n\n@media (min-width: 992px) {\n  .register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%] {\n    max-height: 800px;\n    padding-bottom: 20vh;\n    margin-left: 10vw;\n  }\n  .register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   #illustration-register[_ngcontent-%COMP%] {\n    width: 30vw;\n    margin-left: 10vw;\n  }\n  .register-container[_ngcontent-%COMP%]   #illustration-slogan[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto 0 auto;\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-size: 1rem;\n  margin: 0;\n  margin-left: 15px;\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  height: 30px;\n  background-color: whitesmoke;\n  font-size: small;\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active, .register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #DD517F;\n  font-size: smaller;\n  margin: 0;\n  padding: 0;\n  margin-left: 15px;\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n  border: lightgray;\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n  background-color: #DD517F;\n}\n\n@media (max-width: 380px) {\n  .register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 0 10vw;\n  }\n}\n\n@media (min-width: 992px) {\n  .register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    max-height: 800px;\n    padding-bottom: 5vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQWRKOztBQWlCQTtFQUNJLGFBQUE7QUFkSjs7QUFnQkk7RUFDSSxVQUFBO0FBZFI7O0FBZVE7RUFDSSxvQkFBQTtFQUNBLGNBckNMO0VBc0NLLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBR0EsK0RBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBYlo7O0FBY1k7RUFYSjtJQVlZLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtJQUNBLGVBQUE7RUFYbEI7QUFDRjs7QUFjUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQVpaOztBQWFZO0VBTko7SUFPUSxhQUFBO0VBVmQ7QUFDRjs7QUFhUTtFQUNJLGNBakVIO0VBa0VHLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyREFBQTtBQVhaOztBQWFZO0VBWEo7SUFZUSxpQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUFWZDtBQUNGOztBQVlZO0VBM0VSLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBd0VZLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkRBQUE7QUFMaEI7O0FBUVk7RUFuRlIsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFnRlksVUFBQTtFQUNBLDhDQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0FBRGhCOztBQUtZO0VBR007SUFDRSxpQ0FBQTtJQUNNLHdCQUFBO0VBTHhCO0VBR2dCO0lBQ0UsaUNBQUE7SUFDTSx3QkFBQTtFQUR4QjtFQURnQjtJQUNFLGdDQUFBO0lBQ00sd0JBQUE7RUFHeEI7RUFMZ0I7SUFDRSxpQ0FBQTtJQUNNLHdCQUFBO0VBT3hCO0VBVGdCO0lBQ0UsaUNBQUE7SUFDTSx3QkFBQTtFQVd4QjtFQWJnQjtJQUNFLGlDQUFBO0lBQ00sd0JBQUE7RUFleEI7RUFqQmdCO0lBQ0Usa0NBQUE7SUFDTSx3QkFBQTtFQW1CeEI7RUFyQmdCO0lBQ0UsaUNBQUE7SUFDTSx3QkFBQTtFQXVCeEI7RUF6QmdCO0lBQ0UsaUNBQUE7SUFDTSx3QkFBQTtFQTJCeEI7RUE3QmdCO0lBQ0UsaUNBQUE7SUFDTSx3QkFBQTtFQStCeEI7RUFqQ2dCO0lBQ0UsZ0NBQUE7SUFDTSx3QkFBQTtFQW1DeEI7QUFDRjs7QUEvQmM7RUFHSTtJQUNFLGlDQUFBO0lBQ00sd0JBQUE7RUErQnhCO0VBakNnQjtJQUNFLGtDQUFBO0lBQ00sd0JBQUE7RUFtQ3hCO0VBckNnQjtJQUNFLGlDQUFBO0lBQ00sd0JBQUE7RUF1Q3hCO0VBekNnQjtJQUNFLGlDQUFBO0lBQ00sd0JBQUE7RUEyQ3hCO0VBN0NnQjtJQUNFLGdDQUFBO0lBQ00sd0JBQUE7RUErQ3hCO0VBakRnQjtJQUNFLGlDQUFBO0lBQ00sdUJBQUE7RUFtRHhCO0VBckRnQjtJQUNFLGdDQUFBO0lBQ00sd0JBQUE7RUF1RHhCO0VBekRnQjtJQUNFLGlDQUFBO0lBQ00sd0JBQUE7RUEyRHhCO0VBN0RnQjtJQUNFLGlDQUFBO0lBQ00sd0JBQUE7RUErRHhCO0VBakVnQjtJQUNFLGlDQUFBO0lBQ00sdUJBQUE7RUFtRXhCO0VBckVnQjtJQUNFLGdDQUFBO0lBQ00sd0JBQUE7RUF1RXhCO0FBQ0Y7O0FBbkVjO0VBR0k7SUFDRSxzQkFBQTtFQW1FbEI7RUFwRWdCO0lBQ0Usc0JBQUE7RUFzRWxCO0VBdkVnQjtJQUNFLHNCQUFBO0VBeUVsQjtFQTFFZ0I7SUFDRSxzQkFBQTtFQTRFbEI7RUE3RWdCO0lBQ0Usc0JBQUE7RUErRWxCO0VBaEZnQjtJQUNFLHNCQUFBO0VBa0ZsQjtBQUNGOztBQTVFUTtFQWhHSjtJQWlHUSxrQkFBQTtFQStFVjtBQUNGOztBQTdFUTtFQXBHSjtJQXFHUSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsaUJBQUE7RUFnRlY7RUEvRVU7SUFDSSxXQUFBO0lBQ0EsaUJBQUE7RUFpRmQ7RUE5RVU7SUFDSSxlQUFBO0VBZ0ZkO0FBQ0Y7O0FBM0VJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBNkVSOztBQTNFUTtFQUNJLGNBN0pMO0FBME9QOztBQTNFUTtFQUNJLGNBaktIO0VBa0tHLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUE2RVo7O0FBM0VRO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQTZFWjs7QUE1RVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQThFaEI7O0FBM0VRO0VBQ1EsY0FoTFQ7RUFpTFMsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBNkVoQjs7QUF4RVk7RUFDRywyQkFBQTtFQUNBLGlCQUFBO0FBMEVmOztBQXRFUTtFQUNJLGtCQUFBO0FBd0VaOztBQXZFWTtFQUNJLGlCQUFBO0VBQ0EseUJBbk1UO0FBNFFQOztBQXJFUTtFQWxESjtJQW1EUSxlQUFBO0VBd0VWO0FBQ0Y7O0FBdEVRO0VBdERKO0lBdURRLGlCQUFBO0lBQ0EsbUJBQUE7RUF5RVY7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR2aW9sZXQ6ICM2ZTJlODE7XHJcbiRwaW5rOiAjREQ1MTdGO1xyXG4kbGlnaHRibHVlOiAjNzk5OEVFO1xyXG4kYmx1ZTogIzU1NkRDODtcclxuJG9yYW5nZTogI0U2OEUzNjtcclxuXHJcbkBtaXhpbiBnbGl0Y2hDb3B5IHsgXHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNiZ1ZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xMDA7ICAgIFxyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDcwJSk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoNzAlKTtcclxuICAgIC1tb3otZmlsdGVyOiBzYXR1cmF0ZSg3MCUpO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIFxyXG4gICAgI2lsbHVzdHJhdGlvbi1zbG9nYW57XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAuYnJhbmR7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREQ1MTdGO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREQ1MTdGIDMzJSwgIzZFMkU4MSAxMDAlKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0RENTE3RiAzMyUsICM2RTJFODEgMTAwJSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREQ1MTdGIDMzJSwgIzZFMkU4MSAxMDAlKTtcclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICNpbGx1c3RyYXRpb24tcmVnaXN0ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDAgNXB4ICR2aW9sZXQpO1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjlweCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2xpdGNoe1xyXG4gICAgICAgICAgICBjb2xvcjogJHZpb2xldDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ2xpdGNoLXNrZXcgMnMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45cHgpe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBnbGl0Y2hDb3B5O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggMCAkcGluaztcclxuICAgICAgICAgICAgICAgIGNsaXA6IHJlY3QoNDRweCwgNDUwcHgsIDU2cHgsIDApO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBnbGl0Y2gtYW5pbSA3cyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGdsaXRjaENvcHk7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IC0ycHggMCAkbGlnaHRibHVlLCAtMnB4IC0ycHggJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZ2xpdGNoLWFuaW0yIDJzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGUtcmV2ZXJzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZ2xpdGNoLWFuaW0ge1xyXG4gICAgICAgICAgICAgICAgJHN0ZXBzOiAxMDtcclxuICAgICAgICAgICAgICAgIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJHN0ZXBzIHtcclxuICAgICAgICAgICAgICAgICAgI3twZXJjZW50YWdlKCRpKigxLyRzdGVwcykpfSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcDogcmVjdChyYW5kb20oMTAwKStweCwgOTk5OXB4LCByYW5kb20oMTAwKStweCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KChyYW5kb20oMTAwKSAvIDEwMCkgKyBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgZ2xpdGNoLWFuaW0yIHtcclxuICAgICAgICAgICAgICAgICRzdGVwczogMTA7XHJcbiAgICAgICAgICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRzdGVwcyB7XHJcbiAgICAgICAgICAgICAgICAgICN7cGVyY2VudGFnZSgkaSooMS8kc3RlcHMpKX0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXA6IHJlY3QocmFuZG9tKDEwMCkrcHgsIDk5OTlweCwgcmFuZG9tKDEwMCkrcHgsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygocmFuZG9tKDEwMCkgLyAxMDApICsgZGVnKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGdsaXRjaC1za2V3IHtcclxuICAgICAgICAgICAgICAgICRzdGVwczogNTtcclxuICAgICAgICAgICAgICAgIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJHN0ZXBzIHtcclxuICAgICAgICAgICAgICAgICAgI3twZXJjZW50YWdlKCRpKigxLyRzdGVwcykpfSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KChyYW5kb20oMTApIC0gNSkgKyBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOXB4KXtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjB2aDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICAgICAgICAgICNpbGx1c3RyYXRpb24tcmVnaXN0ZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAuc2VjdGlvbi10aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYnRuLWxpZ2h0e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjExLCAyMTEpOyBcclxuICAgICAgICAgICAgICAgYm9yZGVyOiByZ2IoMjExLCAyMTEsIDIxMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYnRuLWRlZmF1bHR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjM4MHB4KXtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000)
                ])
            ])
        ] } });


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components//register/register.component */ "XC3f");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-edit/user-edit.component */ "24cc");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users/users.component */ "Hkgh");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "LsEZ");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/publications/publications.component */ "BBdW");
/* harmony import */ var _components_following_following_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/following/following.component */ "wUtL");
/* harmony import */ var _components_followers_followers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/followers/followers.component */ "kBIF");
/* harmony import */ var _components_saved_publications_saved_publications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/saved-publications/saved-publications.component */ "62Yg");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _services_user_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.guard */ "EPRI");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/notification.service */ "OC8m");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "Rdf6");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/filter.pipe */ "BhhM");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/loading/loading.component */ "qQYQ");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/truncate.pipe */ "h/Hl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [_services_notification_service__WEBPACK_IMPORTED_MODULE_22__["NotificationService"], _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_user_guard__WEBPACK_IMPORTED_MODULE_20__["UserGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            angular2_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_10__["UserEditComponent"],
        _components_users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
        _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
        _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_15__["PublicationsComponent"],
        _components_following_following_component__WEBPACK_IMPORTED_MODULE_16__["FollowingComponent"],
        _components_followers_followers_component__WEBPACK_IMPORTED_MODULE_17__["FollowersComponent"],
        _components_saved_publications_saved_publications_component__WEBPACK_IMPORTED_MODULE_18__["SavedPublicationsComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_19__["ChatComponent"],
        _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__["NotificationsComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterPipe"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"],
        _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_26__["TruncatePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        angular2_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "h/Hl":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TruncatePipe {
    transform(value, args) {
        const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        const trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/message.service */ "tZre");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function NavbarComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.identity.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 29);
} }
function NavbarComponent_a_27_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 32);
} }
function NavbarComponent_a_27_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.unviewedMessages.length);
} }
const _c0 = function () { return ["/chat"]; };
function NavbarComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavbarComponent_a_27_i_1_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NavbarComponent_a_27_i_2_Template, 3, 1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.unviewedMessages.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.unviewedMessages.length >= 1);
} }
function NavbarComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 34);
} }
function NavbarComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.myNotifications);
} }
function NavbarComponent_ul_37_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r8.identity.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_ul_37_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 29);
} }
function NavbarComponent_ul_37_i_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 34);
} }
function NavbarComponent_ul_37_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.myNotifications);
} }
const _c1 = function (a1) { return ["/profile", a1]; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function () { return ["/user-edit"]; };
const _c4 = function () { return ["/notifications"]; };
function NavbarComponent_ul_37_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NavbarComponent_ul_37_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NavbarComponent_ul_37_img_4_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Configuraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_ul_37_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Cerrar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_ul_37_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.seeNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, NavbarComponent_ul_37_i_25_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, NavbarComponent_ul_37_i_26_Template, 3, 1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c1, ctx_r5.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.identity && ctx_r5.identity.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.identity.image || ctx_r5.identity.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.identity.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c2, "/profile/" + ctx_r5.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.newNotifications$);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.newNotifications$);
} }
const _c5 = function () { return ["/timeline"]; };
const _c6 = function () { return ["/users/"]; };
class NavbarComponent {
    constructor(user, _notificationService, _messageService, _route, _router) {
        this.user = user;
        this._notificationService = _notificationService;
        this._messageService = _messageService;
        this._route = _route;
        this._router = _router;
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])("ws://vaporbox.herokuapp.com:3000");
        this.identity = this.user.getIdentity();
        this.unviewedMessages = [];
        this.token = user.getToken();
        this.checkIfNewNotifications();
        this.checkUnviewedMessages();
    }
    ngOnInit() {
        this.sockets();
    }
    sockets() {
        this.socket.emit("addUser", this.identity._id);
        this.socket.on("newNotification", newNotification => {
            this.checkIfNewNotifications();
        });
        this.socket.on("getMessage", msg => {
            console.log(msg);
            this.checkUnviewedMessages();
        });
    }
    logout() {
        localStorage.clear();
        localStorage['firstTimeLoad'] = 'FALSE';
        this.identity = null;
        this._router.navigate(['/login']);
    }
    toTop(event) {
        window.scroll(0, 0);
    }
    seeNotifications() {
        new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => observer.next(false));
        this.setViewedNotifications(this.token, this.identity._id);
    }
    checkIfNewNotifications() {
        this._notificationService.getNotifications(this.token).subscribe(response => {
            this.myNotifications = response.notifications.filter(notification => notification.viewed == false).length;
            if (this.myNotifications > 0) {
                this.newNotifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => observer.next(true));
            }
        }, error => {
            console.log(error);
        });
    }
    setViewedNotifications(token, id) {
        this._notificationService.setViewedNotifications(token, id).subscribe(response => {
        }, error => {
            console.log(error);
        });
    }
    checkUnviewedMessages() {
        this._messageService.getUnviewedMessages(this.token).subscribe(response => {
            this.unviewedMessages = response.unviewed;
        }, error => {
            console.log(error);
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_message_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])], decls: 38, vars: 21, consts: [[1, "navigation", "col-lg-12"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], [1, "navbar-header", "mx-xl-5", "mx-lg-3"], [1, "navbar-brand", 3, "routerLink", "click"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "d-flex"], [1, "nav-item", "mx-xl-3", "mx-lg-3", "mobile-avatar"], [3, "routerLink"], ["alt", "Avatar de usuario logueado", 3, "src", 4, "ngIf"], ["src", "assets/img/default-user.jpg", "class", "default-img", "alt", "Imagen de usuario", 4, "ngIf"], [1, "mobile-name", 3, "routerLink"], [1, "nav-item", "mx-xl-3", "mx-lg-3"], [1, "nav-link", 3, "routerLink", "click"], [1, "fa", "fa-home", "fa-lg", "mx-lg-2"], [1, "nav-link", 3, "routerLink"], [1, "fa", "fa-users", "fa-lg", "mx-lg-2"], ["class", "nav-link", 3, "routerLink", 4, "ngIf"], ["id", "mobile-notifications", 1, "nav-item"], ["class", "fa fa-bell fa-lg", 4, "ngIf"], ["class", "fa fa-bell fa-lg new-unviewed", 4, "ngIf"], ["id", "log-out", 1, "nav-item", "mx-xl-3", "mx-lg-3"], ["href", "#", 1, "nav-link", 3, "click"], [1, "fa", "fa-times", "fa-lg"], ["class", "nav navbar navbar-right mx-xl-5", 4, "ngIf"], ["alt", "Avatar de usuario logueado", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 1, "default-img"], ["class", "fa fa-comments fa-lg mx-lg-2", 4, "ngIf"], ["class", "fa fa-comments fa-lg mx-lg-2 new-unviewed", 4, "ngIf"], [1, "fa", "fa-comments", "fa-lg", "mx-lg-2"], [1, "fa", "fa-comments", "fa-lg", "mx-lg-2", "new-unviewed"], [1, "fa", "fa-bell", "fa-lg"], [1, "fa", "fa-bell", "fa-lg", "new-unviewed"], [1, "nav", "navbar", "navbar-right", "mx-xl-5"], [1, "avatar"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "href", "#", 1, "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], [1, "fa", "fa-user", "mx-2"], [1, "fa", "fa-cog", "mx-2"], [3, "click"], [1, "fa", "fa-times", "mx-2"], [1, "nav-item", "notifications"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_4_listener($event) { return ctx.toTop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Vaporbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NavbarComponent_img_13_Template, 1, 1, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, NavbarComponent_img_14_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_19_listener($event) { return ctx.toTop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Gente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, NavbarComponent_a_27_Template, 4, 4, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_29_listener() { return ctx.seeNotifications(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, NavbarComponent_i_30_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, NavbarComponent_i_31_Template, 3, 1, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Notificaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_34_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Cerrar Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, NavbarComponent_ul_37_Template, 27, 15, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c1, ctx.identity._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.identity && ctx.identity.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.identity.image || ctx.identity.image == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c1, ctx.identity._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.identity.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.unviewedMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.newNotifications$);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.newNotifications$);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.identity);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #DD517F;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  background-color: rgba(248, 248, 248, 0.9) !important;\n}\nnav[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  margin-left: 2vw;\n  letter-spacing: 10px;\n  color: #DD517F;\n  font-weight: bolder;\n  background: #DD517F;\n  background: linear-gradient(to left, #DD517F 33%, #6E2E81 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\nnav[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #E68E36 !important;\n}\nnav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n}\nnav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:active, nav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\nnav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n@media (max-width: 992px) {\n  nav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n  }\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6e2e81 !important;\n  text-shadow: 4px 4px 3px -1px #DD517F;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #E68E36 !important;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .new-unviewed[_ngcontent-%COMP%] {\n  color: #DD517F;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .new-unviewed[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  bottom: 10px;\n  font-size: x-small;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .mobile-avatar[_ngcontent-%COMP%] {\n  width: 5vh;\n  height: 5vh;\n  border-radius: 100%;\n  overflow: hidden;\n}\n@media (min-width: 992px) {\n  nav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .mobile-avatar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .mobile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .mobile-avatar[_ngcontent-%COMP%]   .default-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .mobile-name[_ngcontent-%COMP%] {\n  margin-left: 1vh;\n  margin-top: 2.5vh;\n  letter-spacing: 5px;\n}\n@media (min-width: 993px) {\n  nav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .mobile-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 993px) {\n  nav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   #mobile-notifications[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 993px) {\n  nav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   #log-out[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6e2e81 !important;\n  letter-spacing: 3px;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #E68E36 !important;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 6vh;\n  height: 6vh;\n  border-radius: 100%;\n  overflow: hidden;\n  margin-right: 10px;\n}\n@media (max-width: 992px) {\n  nav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .default-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  margin-right: 2vw;\n}\n@media (max-width: 992px) {\n  nav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background-color: rgba(248, 248, 248, 0.9);\n  border: none;\n  border-radius: 5px;\n  margin-top: 12px;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #DD517F;\n  margin-top: 10px;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: white !important;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  letter-spacing: normal;\n}\n@media (max-width: 992px) {\n  nav[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtBQUxKO0FBT1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQWpCTDtFQWtCSyxtQkFBQTtFQUNBLG1CQUFBO0VBR0EsK0RBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBTFo7QUFNWTtFQUNJLHlCQUFBO0FBSmhCO0FBU0k7RUFDSSxZQUFBO0FBUFI7QUFRUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQU5aO0FBUVE7RUFDSSxjQXRDTDtBQWdDUDtBQVdRO0VBQ0ksZ0JBQUE7QUFUWjtBQVVZO0VBRko7SUFHUSxlQUFBO0VBUGQ7QUFDRjtBQVFZO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0FBTmhCO0FBT2dCO0VBQ1EseUJBQUE7QUFMeEI7QUFPZ0I7RUFDSSxjQXhEYjtBQW1EUDtBQU1vQjtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUp4QjtBQVVRO0VBQ1EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUmhCO0FBU2dCO0VBTFI7SUFNWSxhQUFBO0VBTmxCO0FBQ0Y7QUFPZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUxwQjtBQU9nQjtFQUNJLFdBQUE7QUFMcEI7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVBaO0FBU2dCO0VBREo7SUFFUSxhQUFBO0VBTmxCO0FBQ0Y7QUFXWTtFQURKO0lBRVEsYUFBQTtFQVJkO0FBQ0Y7QUFZWTtFQURKO0lBRVEsYUFBQTtFQVRkO0FBQ0Y7QUFXUTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVRaO0FBVVk7RUFDSSx5QkFBQTtBQVJoQjtBQVdRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFUWjtBQVVZO0VBTko7SUFPUSxhQUFBO0VBUGQ7QUFDRjtBQVFZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFOaEI7QUFRWTtFQUNJLFdBQUE7QUFOaEI7QUFTUTtFQUNJLGlCQUFBO0FBUFo7QUFTWTtFQUhKO0lBSVEsYUFBQTtFQU5kO0FBQ0Y7QUFPWTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFNZ0I7RUFDSSxnQkFBQTtBQUpwQjtBQUtvQjtFQUNJLHlCQWpKakI7RUFrSmlCLGdCQUFBO0FBSHhCO0FBSXdCO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBRjVCO0FBS29CO0VBQ0ksc0JBQUE7QUFIeEI7QUFVWTtFQURKO0lBRVEsYUFBQTtFQVBkO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHZpb2xldDogIzZlMmU4MTtcclxuJHBpbms6ICNERDUxN0Y7XHJcbiRsaWdodGJsdWU6ICM3OTk4RUU7XHJcbiRibHVlOiAjNTU2REM4O1xyXG4kb3JhbmdlOiAjRTY4RTM2O1xyXG5cclxubmF2e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwaW5rO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4LCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICAubmF2YmFyLWhlYWRlcntcclxuICAgICAgICAubmF2YmFyLWJyYW5ke1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREQ1MTdGO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREQ1MTdGIDMzJSwgIzZFMkU4MSAxMDAlKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0RENTE3RiAzMyUsICM2RTJFODEgMTAwJSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREQ1MTdGIDMzJSwgIzZFMkU4MSAxMDAlKTtcclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci10b2dnbGVye1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci10b2dnbGVyLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnR7XHJcbiAgICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCAzcHggLTFweCAkcGluaztcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmV3LXVudmlld2Vke1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubW9iaWxlLWF2YXRhcnsgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNXZoO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1dmg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGVmYXVsdC1pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9iaWxlLW5hbWV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxdmg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNXZoO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgICBzdHJvbmd7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbW9iaWxlLW5vdGlmaWNhdGlvbnN7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTNweCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbG9nLW91dHtcclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJHZpb2xldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXZhdGFyeyAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiA2dmg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNnZoO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlZmF1bHQtaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3due1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCwgMC45KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbnN7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "jT/F":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UploadService {
    constructor() {
        this.url = 'api/';
    }
    makeFileRequest(url, params, files, token, name) {
        return new Promise(function (resolve, reject) {
            let formData = new FormData();
            let xhr = new XMLHttpRequest();
            for (let i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac });


/***/ }),

/***/ "kBIF":
/*!*************************************************************!*\
  !*** ./src/app/components/followers/followers.component.ts ***!
  \*************************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _models_follow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/follow */ "nAqH");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/follow.service */ "MnDo");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function FollowersComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Seguidores de ", ctx_r0.user.name, "");
} }
function FollowersComponent_div_3_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", follow_r5.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function FollowersComponent_div_3_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 22);
} }
function FollowersComponent_div_3_div_1_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](follow_r5.user.bio);
} }
function FollowersComponent_div_3_div_1_div_15_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FollowersComponent_div_3_div_1_div_15_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r14.followUser(follow_r5.user._id, follow_r5.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FollowersComponent_div_3_div_1_div_15_button_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Dejar de seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FollowersComponent_div_3_div_1_div_15_button_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Siguiendo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FollowersComponent_div_3_div_1_div_15_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function FollowersComponent_div_3_div_1_div_15_button_2_Template_button_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r20.mouseEnter(follow_r5.user._id); })("mouseleave", function FollowersComponent_div_3_div_1_div_15_button_2_Template_button_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r23.mouseLeave(follow_r5.user._id); })("click", function FollowersComponent_div_3_div_1_div_15_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r25.unfollowUser(follow_r5.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FollowersComponent_div_3_div_1_div_15_button_2_span_1_Template, 4, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FollowersComponent_div_3_div_1_div_15_button_2_ng_template_2_Template, 3, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", follow_r5.user._id == ctx_r13.followMouseOver && !ctx_r13.mobile)("ngIfElse", _r18);
} }
function FollowersComponent_div_3_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FollowersComponent_div_3_div_1_div_15_button_1_Template, 4, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FollowersComponent_div_3_div_1_div_15_button_2_Template, 4, 2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.follows.indexOf(follow_r5.user._id) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.follows.indexOf(follow_r5.user._id) >= 0);
} }
const _c0 = function (a1) { return ["/profile/", a1]; };
function FollowersComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FollowersComponent_div_3_div_1_img_5_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FollowersComponent_div_3_div_1_img_6_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, FollowersComponent_div_3_div_1_p_14_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FollowersComponent_div_3_div_1_div_15_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follow_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, follow_r5.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", follow_r5.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !follow_r5.user.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, follow_r5.user._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](follow_r5.user.name + " " + follow_r5.user.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("@" + follow_r5.user.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.user.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", follow_r5.user._id != ctx_r4.identity._id);
} }
function FollowersComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FollowersComponent_div_3_div_1_Template, 16, 12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.followers);
} }
const _c1 = function (a1, a2) { return ["/followers", a1, a2]; };
function FollowersComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c1, ctx_r2.userPageId, ctx_r2.prev_page));
} }
function FollowersComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Siguiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c1, ctx_r3.userPageId, ctx_r3.next_page));
} }
class FollowersComponent {
    constructor(_route, _router, _userService, _followService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this._notificationService = _notificationService;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    ngOnInit() {
        this.actualPage();
        if (window.screen.width <= 992) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    }
    actualPage() {
        this._route.params.subscribe(params => {
            let user_id = params['id'];
            this.userPageId = user_id;
            let page = params['page'];
            this.page = page;
            if (!params['page'] || page == undefined) {
                page = 1;
            }
            if (!page) {
                page = 1;
            }
            else {
                this.next_page = parseInt(page) + 1;
                this.prev_page = parseInt(page) - 1;
                if (this.prev_page <= 0) {
                    this.prev_page = 1;
                }
            }
            this.getUser(user_id, page);
        });
    }
    getFollows(user_id, page) {
        this._followService.getFollowers(this.token, user_id, page).subscribe(response => {
            if (!response.follows) {
                this.status = "error";
            }
            else {
                this.total = response.total;
                this.followers = response.follows;
                this.pages = response.pages;
                this.follows = response.users_following;
                if (page > this.pages) {
                    this._router.navigate(['/users/', 1]);
                }
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    getUser(user_id, page) {
        this._userService.getUser(user_id).subscribe(response => {
            if (response.user) {
                this.user = response.user;
                //Devolver listado de usuarios
                this.getFollows(user_id, page);
            }
            else {
                this._router.navigate(['/home']);
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    mouseEnter(user_id) {
        this.followMouseOver = user_id;
    }
    mouseLeave(user_id) {
        this.followMouseOver = 0;
    }
    followUser(followed, user) {
        let follow = new _models_follow__WEBPACK_IMPORTED_MODULE_0__["Follow"]('', this.identity._id, followed);
        this._followService.addFollow(this.token, follow).subscribe(response => {
            if (response.followStored) {
                this.status = 'error';
            }
            else {
                this.status = 'success';
                this.follows.push(followed);
            }
            localStorage.removeItem('stats');
            this.getCounters();
            this._userService.getStats();
            this.saveNotification(user);
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    unfollowUser(followed) {
        this._followService.deleteFollow(this.token, followed).subscribe(response => {
            let search = this.follows.indexOf(followed);
            if (search != -1) {
                this.follows.splice(search, 1);
            }
            localStorage.removeItem('stats');
            this.getCounters();
            this._userService.getStats();
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    getCounters() {
        this._userService.getCounters().subscribe(response => {
            //Guardamos en stats la respuesta JSON
            localStorage.setItem('stats', JSON.stringify(response));
            this.status = 'success';
        }, error => {
            console.log(error);
        });
    }
    saveNotification(follower) {
        this._notificationService.saveNotification(this.token, follower, 'new-follow').subscribe(response => {
        }, error => {
            console.log(error);
        });
    }
}
FollowersComponent.ɵfac = function FollowersComponent_Factory(t) { return new (t || FollowersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
FollowersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FollowersComponent, selectors: [["app-followers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], decls: 8, vars: 5, consts: [[1, "followers-container", "col-xl-12", "col-lg-12"], [1, "d-flex", "flex-column", "justify-content-center"], ["class", "mb-3 text-center section-title", 4, "ngIf"], ["class", "people mt-3", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [1, "pagination"], [4, "ngIf"], [1, "mb-3", "text-center", "section-title"], [1, "people", "mt-3"], ["class", "item-user d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "item-user", "d-flex", "justify-content-center"], [1, "card", "card-default", "mb-3"], [1, "card-body"], [1, "image-user", "pull-left"], [3, "routerLink"], ["alt", "Imagen de usuario", 3, "src", 4, "ngIf"], ["class", "default-user-image", "src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 4, "ngIf"], [1, "user-name"], [1, "username"], ["class", "bio", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], ["alt", "Imagen de usuario", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 1, "default-user-image"], [1, "bio"], [1, "pull-right"], ["class", "btn btn-default", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"], [1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-user-plus"], [1, "button-text"], [1, "btn", "btn-primary", 3, "mouseenter", "mouseleave", "click"], [4, "ngIf", "ngIfElse"], ["following", ""], [1, "fa", "fa-user-times"], [1, "fa", "fa-check"], [1, "btn", "btn-sm", "btn-default", 3, "routerLink"]], template: function FollowersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FollowersComponent_h3_2_Template, 2, 1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FollowersComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FollowersComponent_li_6_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FollowersComponent_li_7_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.followers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.page > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages != ctx.page);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".followers-container[_ngcontent-%COMP%] {\n  margin-top: 14vh;\n}\n.followers-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  align-self: center;\n}\n.followers-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70vw;\n  max-width: 400px;\n  border-radius: 50px;\n  border: none;\n  opacity: 0.3;\n  padding: 5px 10px;\n  align-self: center;\n}\n.followers-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active, .followers-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n.followers-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  right: 25px;\n  color: #DD517F;\n  opacity: 0.9;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n  width: 60vw;\n  min-width: 290px;\n  border-radius: 50px;\n  border: 1px solid #DD517F;\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n}\n@media (max-width: 992px) {\n  .followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n  width: 7em;\n  height: 7em;\n  border-radius: 100%;\n  overflow: hidden;\n  margin-right: 20px;\n}\n@media (max-width: 992px) {\n  .followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n    width: 4em;\n    height: 4em;\n  }\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   .default-user-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6e2e81;\n  font-family: \"Raleway\";\n  font-weight: bolder;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  color: #DD517F;\n  font-family: \"Raleway\";\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  font-size: small;\n}\n@media (max-width: 576px) {\n  .followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n  .followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #DD517F;\n  color: whitesmoke;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]   .fa-user-plus[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #c9124f;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #556DC8;\n  color: whitesmoke;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa-user-times[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.followers-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #1f3fb4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb2xsb3dlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxnQkFBQTtBQUxKO0FBTUk7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQUpSO0FBS1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhaO0FBSVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUZoQjtBQUtRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBNUJMO0VBNkJLLFlBQUE7QUFIWjtBQVFZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsaURBQUE7RUFDQSx5REFBQTtFQUNBLHNEQUFBO0FBTmhCO0FBT2dCO0VBVEo7SUFVUSxXQUFBO0VBSmxCO0FBQ0Y7QUFNb0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUp4QjtBQUt3QjtFQU5KO0lBT1EsVUFBQTtJQUNBLFdBQUE7RUFGMUI7QUFDRjtBQUd3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRDVCO0FBR3dCO0VBQ0ksV0FBQTtBQUQ1QjtBQUt3QjtFQUNJLHFCQUFBO0VBQ0EsY0FyRW5CO0VBc0VtQixzQkFBQTtFQUNBLG1CQUFBO0FBSDVCO0FBS3dCO0VBQ0ksY0F6RXJCO0VBMEVxQixzQkFBQTtBQUg1QjtBQUt3QjtFQUNJLGdCQUFBO0FBSDVCO0FBT3dCO0VBQ0k7SUFDSSxnQkFBQTtFQUw5QjtFQU8wQjtJQUNJLGFBQUE7RUFMOUI7QUFDRjtBQVNvQjtFQUNJLHlCQTVGakI7RUE2RmlCLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVB4QjtBQVF3QjtFQUNJLGlCQUFBO0FBTjVCO0FBUXdCO0VBQ0kseUJBQUE7QUFONUI7QUFTb0I7RUFDSSx5QkF0R2pCO0VBdUdpQixpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQeEI7QUFRd0I7RUFDSSxpQkFBQTtBQU41QjtBQVF3QjtFQUNJLGlCQUFBO0FBTjVCO0FBUXdCO0VBQ0kseUJBQUE7QUFONUIiLCJmaWxlIjoiZm9sbG93ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHZpb2xldDogIzZlMmU4MTtcclxuJHBpbms6ICNERDUxN0Y7XHJcbiRsaWdodGJsdWU6ICM3OTk4RUU7XHJcbiRibHVlOiAjNTU2REM4O1xyXG4kb3JhbmdlOiAjRTY4RTM2O1xyXG5cclxuLmZvbGxvd2Vycy1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG4gICAgLnNlYXJjaElucHV0e1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGVvcGxle1xyXG4gICAgICAgIC5pdGVtLXVzZXJ7XHJcbiAgICAgICAgICAgIC5jYXJkLWRlZmF1bHR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjkwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHBpbms7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCwgMC41KTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtdXNlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVmYXVsdC11c2VyLWltYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXItbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVzZXJuYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmlve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24tdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWRlZmF1bHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdXNlci1wbHVze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOTEyNGY7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLXByaW1hcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdXNlci10aW1lc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS1jaGVja3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzZmI0OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1000)
                ])
            ])
        ] } });


/***/ }),

/***/ "nAqH":
/*!**********************************!*\
  !*** ./src/app/models/follow.ts ***!
  \**********************************/
/*! exports provided: Follow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Follow", function() { return Follow; });
class Follow {
    constructor(_id, user, followed) {
        this._id = _id;
        this.user = user;
        this.followed = followed;
    }
}


/***/ }),

/***/ "qQYQ":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoadingComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Vaporbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined);
} }
class LoadingComponent {
    constructor(_router) {
        this._router = _router;
        this.router = _router.url;
        if (this.router === '/register' || this.router === '/login' || this.router === '/') {
            this.splash = true;
        }
        else {
            this.splash = false;
        }
    }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 3, vars: 1, consts: [[1, "loading-container", "d-flex", "flex-column", "justify-content-center"], ["class", "brand", "data-text", "Vaporbox", 4, "ngIf"], ["src", "assets/img/loading.svg", "alt", "Logo de cargando", 1, "loading-logo"], ["data-text", "Vaporbox", 1, "brand"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoadingComponent_h1_1_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.splash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".loading-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  align-items: center;\n  overflow: hidden;\n}\n.loading-container[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  letter-spacing: 10px;\n  color: #DD517F;\n  font-weight: bolder;\n  font-size: 5rem;\n  margin: 0 auto 10vh auto;\n  background: #DD517F;\n  background: linear-gradient(to left, #DD517F 33%, #6E2E81 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: glitch-skew 2s infinite linear;\n}\n@media (max-width: 1300px) {\n  .loading-container[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-top: 10vh;\n    font-size: 3rem;\n  }\n}\n.loading-container[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]::before {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  left: 1px;\n  text-shadow: -1px 0 #DD517F;\n  opacity: 0.3;\n  clip: rect(44px, 450px, 56px, 0);\n  animation: glitch-anim 7s infinite linear;\n}\n.loading-container[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]::after {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  left: -1px;\n  text-shadow: -1px 0 #6e2e81, -1px -1px #E68E36;\n  opacity: 0.3;\n  animation: glitch-anim2 2s infinite linear alternate-reverse;\n}\n@keyframes glitch-anim {\n  0% {\n    clip: rect(52px, 9999px, 30px, 0);\n    transform: skew(0.5deg);\n  }\n  10% {\n    clip: rect(50px, 9999px, 11px, 0);\n    transform: skew(0.8deg);\n  }\n  20% {\n    clip: rect(30px, 9999px, 81px, 0);\n    transform: skew(0.9deg);\n  }\n  30% {\n    clip: rect(67px, 9999px, 49px, 0);\n    transform: skew(0.5deg);\n  }\n  40% {\n    clip: rect(35px, 9999px, 20px, 0);\n    transform: skew(0.6deg);\n  }\n  50% {\n    clip: rect(7px, 9999px, 78px, 0);\n    transform: skew(0.8deg);\n  }\n  60% {\n    clip: rect(77px, 9999px, 8px, 0);\n    transform: skew(0.3deg);\n  }\n  70% {\n    clip: rect(35px, 9999px, 84px, 0);\n    transform: skew(0.7deg);\n  }\n  80% {\n    clip: rect(73px, 9999px, 56px, 0);\n    transform: skew(0.8deg);\n  }\n  90% {\n    clip: rect(98px, 9999px, 76px, 0);\n    transform: skew(0.5deg);\n  }\n  100% {\n    clip: rect(68px, 9999px, 76px, 0);\n    transform: skew(0.4deg);\n  }\n}\n@keyframes glitch-anim2 {\n  0% {\n    clip: rect(91px, 9999px, 57px, 0);\n    transform: skew(0.4deg);\n  }\n  10% {\n    clip: rect(87px, 9999px, 78px, 0);\n    transform: skew(0.8deg);\n  }\n  20% {\n    clip: rect(92px, 9999px, 10px, 0);\n    transform: skew(0.3deg);\n  }\n  30% {\n    clip: rect(78px, 9999px, 53px, 0);\n    transform: skew(1deg);\n  }\n  40% {\n    clip: rect(91px, 9999px, 33px, 0);\n    transform: skew(0.1deg);\n  }\n  50% {\n    clip: rect(56px, 9999px, 76px, 0);\n    transform: skew(0.2deg);\n  }\n  60% {\n    clip: rect(60px, 9999px, 61px, 0);\n    transform: skew(0.8deg);\n  }\n  70% {\n    clip: rect(22px, 9999px, 40px, 0);\n    transform: skew(0.1deg);\n  }\n  80% {\n    clip: rect(76px, 9999px, 98px, 0);\n    transform: skew(0.5deg);\n  }\n  90% {\n    clip: rect(85px, 9999px, 79px, 0);\n    transform: skew(0.2deg);\n  }\n  100% {\n    clip: rect(28px, 9999px, 92px, 0);\n    transform: skew(0.5deg);\n  }\n}\n@keyframes glitch-skew {\n  0% {\n    transform: skew(0deg);\n  }\n  20% {\n    transform: skew(-2deg);\n  }\n  40% {\n    transform: skew(-3deg);\n  }\n  60% {\n    transform: skew(-4deg);\n  }\n  80% {\n    transform: skew(0deg);\n  }\n  100% {\n    transform: skew(0deg);\n  }\n}\n.loading-container[_ngcontent-%COMP%]   .loading-logo[_ngcontent-%COMP%] {\n  filter: invert(48%) sepia(79%) saturate(500%) hue-rotate(250deg) brightness(40%) contrast(119%);\n  opacity: 0.8;\n  width: 4vw;\n  animation: rotating 2s linear infinite;\n  display: inline-block;\n}\n@media (max-width: 768px) {\n  .loading-container[_ngcontent-%COMP%]   .loading-logo[_ngcontent-%COMP%] {\n    width: 10vw;\n    margin-top: 5vh;\n  }\n}\n@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-container[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-size: x-large;\n  text-align: center;\n  margin-top: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFkSjtBQWVNO0VBQ0Usb0JBQUE7RUFDQSxjQXBCRDtFQXFCQyxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBR0EsK0RBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBTUEseUNBQUE7QUFsQlI7QUFhUTtFQVpGO0lBYVUsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBVmQ7QUFDRjtBQWFRO0VBL0JOLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBNEJRLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHlDQUFBO0FBTlY7QUFTTTtFQXhDSix3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQXFDUSxVQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EsNERBQUE7QUFGVjtBQU1NO0VBR007SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBTmxCO0VBSVU7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBRmxCO0VBQVU7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBRWxCO0VBSlU7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBTWxCO0VBUlU7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBVWxCO0VBWlU7SUFDRSxnQ0FBQTtJQUNNLHVCQUFBO0VBY2xCO0VBaEJVO0lBQ0UsZ0NBQUE7SUFDTSx1QkFBQTtFQWtCbEI7RUFwQlU7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBc0JsQjtFQXhCVTtJQUNFLGlDQUFBO0lBQ00sdUJBQUE7RUEwQmxCO0VBNUJVO0lBQ0UsaUNBQUE7SUFDTSx1QkFBQTtFQThCbEI7RUFoQ1U7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBa0NsQjtBQUNGO0FBOUJRO0VBR0k7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBOEJsQjtFQWhDVTtJQUNFLGlDQUFBO0lBQ00sdUJBQUE7RUFrQ2xCO0VBcENVO0lBQ0UsaUNBQUE7SUFDTSx1QkFBQTtFQXNDbEI7RUF4Q1U7SUFDRSxpQ0FBQTtJQUNNLHFCQUFBO0VBMENsQjtFQTVDVTtJQUNFLGlDQUFBO0lBQ00sdUJBQUE7RUE4Q2xCO0VBaERVO0lBQ0UsaUNBQUE7SUFDTSx1QkFBQTtFQWtEbEI7RUFwRFU7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBc0RsQjtFQXhEVTtJQUNFLGlDQUFBO0lBQ00sdUJBQUE7RUEwRGxCO0VBNURVO0lBQ0UsaUNBQUE7SUFDTSx1QkFBQTtFQThEbEI7RUFoRVU7SUFDRSxpQ0FBQTtJQUNNLHVCQUFBO0VBa0VsQjtFQXBFVTtJQUNFLGlDQUFBO0lBQ00sdUJBQUE7RUFzRWxCO0FBQ0Y7QUFsRVE7RUFHSTtJQUNFLHFCQUFBO0VBa0VaO0VBbkVVO0lBQ0Usc0JBQUE7RUFxRVo7RUF0RVU7SUFDRSxzQkFBQTtFQXdFWjtFQXpFVTtJQUNFLHNCQUFBO0VBMkVaO0VBNUVVO0lBQ0UscUJBQUE7RUE4RVo7RUEvRVU7SUFDRSxxQkFBQTtFQWlGWjtBQUNGO0FBN0VNO0VBQ0UsK0ZBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQVNBLHNDQUFBO0VBQ0EscUJBQUE7QUEyRVI7QUFwRlE7RUFKRjtJQUtJLFdBQUE7SUFDQSxlQUFBO0VBdUZSO0FBQ0Y7QUFwRVE7RUFDRTtJQUtFLHVCQUFBO0VBa0ZWO0VBaEZRO0lBS0UseUJBQUE7RUFrRlY7QUFDRjtBQS9FTTtFQUNJLGNBaklEO0VBa0lDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaUZWIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdmlvbGV0OiAjNmUyZTgxO1xyXG4kcGluazogI0RENTE3RjtcclxuJGxpZ2h0Ymx1ZTogIzc5OThFRTtcclxuJGJsdWU6ICM1NTZEQzg7XHJcbiRvcmFuZ2U6ICNFNjhFMzY7XHJcblxyXG5AbWl4aW4gZ2xpdGNoQ29weSB7IFxyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmJyYW5ke1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEwdmggYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjREQ1MTdGO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNERDUxN0YgMzMlLCAjNkUyRTgxIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNERDUxN0YgMzMlLCAjNkUyRTgxIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREQ1MTdGIDMzJSwgIzZFMkU4MSAxMDAlKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYW5pbWF0aW9uOiBnbGl0Y2gtc2tldyAycyBpbmZpbml0ZSBsaW5lYXI7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgIEBpbmNsdWRlIGdsaXRjaENvcHk7XHJcbiAgICAgICAgICBsZWZ0OiAxcHg7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAwICRwaW5rO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgY2xpcDogcmVjdCg0NHB4LCA0NTBweCwgNTZweCwgMCk7XHJcbiAgICAgICAgICBhbmltYXRpb246IGdsaXRjaC1hbmltIDdzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZ2xpdGNoQ29weTtcclxuICAgICAgICAgIGxlZnQ6IC0xcHg7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAwICR2aW9sZXQsIC0xcHggLTFweCAkb3JhbmdlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBnbGl0Y2gtYW5pbTIgMnMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgQGtleWZyYW1lcyBnbGl0Y2gtYW5pbSB7XHJcbiAgICAgICAgICAkc3RlcHM6IDEwO1xyXG4gICAgICAgICAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkc3RlcHMge1xyXG4gICAgICAgICAgICAje3BlcmNlbnRhZ2UoJGkqKDEvJHN0ZXBzKSl9IHtcclxuICAgICAgICAgICAgICBjbGlwOiByZWN0KHJhbmRvbSgxMDApK3B4LCA5OTk5cHgsIHJhbmRvbSgxMDApK3B4LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoKHJhbmRvbSgxMCkgLyAxMCkgKyBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBrZXlmcmFtZXMgZ2xpdGNoLWFuaW0yIHtcclxuICAgICAgICAgICRzdGVwczogMTA7XHJcbiAgICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRzdGVwcyB7XHJcbiAgICAgICAgICAgICN7cGVyY2VudGFnZSgkaSooMS8kc3RlcHMpKX0ge1xyXG4gICAgICAgICAgICAgIGNsaXA6IHJlY3QocmFuZG9tKDEwMCkrcHgsIDk5OTlweCwgcmFuZG9tKDEwMCkrcHgsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygocmFuZG9tKDEwKSAvIDEwKSArIGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQGtleWZyYW1lcyBnbGl0Y2gtc2tldyB7XHJcbiAgICAgICAgICAkc3RlcHM6IDU7XHJcbiAgICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRzdGVwcyB7XHJcbiAgICAgICAgICAgICN7cGVyY2VudGFnZSgkaSooMS8kc3RlcHMpKX0ge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygocmFuZG9tKDUpIC0gNSkgKyBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICAgIFxyXG4gICAgICAubG9hZGluZy1sb2dvIHtcclxuICAgICAgICBmaWx0ZXI6IGludmVydCg0OCUpIHNlcGlhKDc5JSkgc2F0dXJhdGUoNTAwJSkgaHVlLXJvdGF0ZSgyNTBkZWcpIGJyaWdodG5lc3MoNDAlKSBjb250cmFzdCgxMTklKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgd2lkdGg6IDR2dztcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHJvdGF0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAtbXMtYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW8tYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyByb3RhdGluZyAvKiBTYWZhcmkgYW5kIENocm9tZSAqLyB7XHJcbiAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcm90YXRpbmcge1xyXG4gICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sb2FkaW5nLXRleHR7XHJcbiAgICAgICAgICBjb2xvcjogJHZpb2xldDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgICAgfVxyXG59ICAgXHJcblxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)
                ])
            ])
        ] } });


/***/ }),

/***/ "qZOq":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
    constructor(_id, text, viewed, created_at, emitter, receiver) {
        this._id = _id;
        this.text = text;
        this.viewed = viewed;
        this.created_at = created_at;
        this.emitter = emitter;
        this.receiver = receiver;
    }
}


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class UserService {
    constructor(_http) {
        this._http = _http;
    }
    register(user) {
        let params = JSON.stringify(user);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post('api/register', params, { headers: headers });
    }
    signup(user, gettoken = null) {
        if (gettoken != null) {
            user.gettoken = gettoken;
        }
        let params = JSON.stringify(user);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post('api/login', params, { headers: headers });
    }
    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != undefined) {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }
    getToken() {
        let token = JSON.parse(localStorage.getItem('token'));
        if (token != undefined) {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }
    getStats() {
        let stats = JSON.parse(localStorage.getItem('stats'));
        if (stats != "undefined") {
            this.stats = stats;
        }
        else {
            this.stats = null;
        }
        return this.stats;
    }
    getCounters(userId = null) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        if (userId != null) {
            return this._http.get('api/counters/' + userId, { headers: headers });
        }
        else {
            return this._http.get('api/counters/', { headers: headers });
        }
    }
    updateUser(user) {
        let params = JSON.stringify(user);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.put('api/update-user/' + user._id, params, { headers: headers });
    }
    getUsers(page = null) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.get('api/users/' + page, { headers: headers });
    }
    getUser(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.get('api/user/' + id, { headers: headers });
    }
    deleteUser(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.delete('api/user/' + id, { headers: headers });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MessageService {
    constructor(_http) {
        this._http = _http;
    }
    addMessage(token, message) {
        let params = JSON.stringify(message);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post('api/message/', params, { headers: headers });
    }
    getMessages(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get('api/messages/' + id, { headers: headers });
    }
    getUnviewedMessages(token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get('api/unviewed-messages/', { headers: headers });
    }
    setViewedMessages(token, message) {
        let params = JSON.stringify(message);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post('api/set-viewed-messages/', params, { headers: headers });
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-edit/user-edit.component */ "24cc");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/users.component */ "Hkgh");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "LsEZ");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_following_following_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/following/following.component */ "wUtL");
/* harmony import */ var _components_followers_followers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/followers/followers.component */ "kBIF");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "Rdf6");
/* harmony import */ var _services_user_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.guard */ "EPRI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    {
        path: '',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'profile/:id',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    },
    {
        path: 'user-edit',
        component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserEditComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    },
    {
        path: 'users',
        component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    },
    {
        path: 'users/:page',
        component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    },
    {
        path: 'timeline',
        component: _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    },
    {
        path: 'following/:id/:page',
        component: _components_following_following_component__WEBPACK_IMPORTED_MODULE_8__["FollowingComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    },
    {
        path: 'followers/:id/:page',
        component: _components_followers_followers_component__WEBPACK_IMPORTED_MODULE_9__["FollowersComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    },
    {
        path: 'chat',
        component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    },
    {
        path: 'notifications',
        component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "wUtL":
/*!*************************************************************!*\
  !*** ./src/app/components/following/following.component.ts ***!
  \*************************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var _models_follow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/follow */ "nAqH");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/follow.service */ "MnDo");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function FollowingComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Usuarios seguidos por ", ctx_r0.user.name, "");
} }
function FollowingComponent_div_3_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", follow_r5.followed.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function FollowingComponent_div_3_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 22);
} }
function FollowingComponent_div_3_div_1_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](follow_r5.followed.bio);
} }
function FollowingComponent_div_3_div_1_div_15_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FollowingComponent_div_3_div_1_div_15_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r14.followUser(follow_r5.followed._id, follow_r5.followed); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FollowingComponent_div_3_div_1_div_15_button_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Dejar de seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FollowingComponent_div_3_div_1_div_15_button_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Siguiendo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FollowingComponent_div_3_div_1_div_15_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function FollowingComponent_div_3_div_1_div_15_button_2_Template_button_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r20.mouseEnter(follow_r5.followed._id); })("mouseleave", function FollowingComponent_div_3_div_1_div_15_button_2_Template_button_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r23.mouseLeave(follow_r5.followed._id); })("click", function FollowingComponent_div_3_div_1_div_15_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r25.unfollowUser(follow_r5.followed._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FollowingComponent_div_3_div_1_div_15_button_2_span_1_Template, 4, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FollowingComponent_div_3_div_1_div_15_button_2_ng_template_2_Template, 3, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", follow_r5.followed._id == ctx_r13.followMouseOver && !ctx_r13.mobile)("ngIfElse", _r18);
} }
function FollowingComponent_div_3_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FollowingComponent_div_3_div_1_div_15_button_1_Template, 4, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FollowingComponent_div_3_div_1_div_15_button_2_Template, 4, 2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.follows.indexOf(follow_r5.followed._id) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.follows.indexOf(follow_r5.followed._id) >= 0);
} }
const _c0 = function (a1) { return ["/profile/", a1]; };
function FollowingComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FollowingComponent_div_3_div_1_img_5_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FollowingComponent_div_3_div_1_img_6_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, FollowingComponent_div_3_div_1_p_14_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FollowingComponent_div_3_div_1_div_15_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const follow_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, follow_r5.followed._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", follow_r5.followed.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !follow_r5.followed.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, follow_r5.followed._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](follow_r5.followed.name + " " + follow_r5.followed.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("@" + follow_r5.followed.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.user.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", follow_r5.followed._id != ctx_r4.identity._id);
} }
function FollowingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FollowingComponent_div_3_div_1_Template, 16, 12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.following);
} }
const _c1 = function (a1, a2) { return ["/following", a1, a2]; };
function FollowingComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c1, ctx_r2.userPageId, ctx_r2.prev_page));
} }
function FollowingComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Siguiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c1, ctx_r3.userPageId, ctx_r3.next_page));
} }
class FollowingComponent {
    constructor(_route, _router, _userService, _followService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this._notificationService = _notificationService;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    ngOnInit() {
        this.actualPage();
        if (window.screen.width <= 992) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    }
    actualPage() {
        this._route.params.subscribe(params => {
            let user_id = params['id'];
            this.userPageId = user_id;
            let page = params['page'];
            this.page = page;
            if (!params['page'] || page == undefined) {
                page = 1;
            }
            if (!page) {
                page = 1;
            }
            else {
                this.next_page = parseInt(page) + 1;
                this.prev_page = parseInt(page) - 1;
                if (this.prev_page <= 0) {
                    this.prev_page = 1;
                }
            }
            this.getUser(user_id, page);
        });
    }
    getFollows(user_id, page) {
        this._followService.getFollowing(this.token, user_id, page).subscribe(response => {
            if (!response.follows) {
                this.status = "error";
            }
            else {
                this.total = response.total;
                this.following = response.follows;
                this.pages = response.pages;
                this.follows = response.users_following;
                if (page > this.pages) {
                    this._router.navigate(['/users/', 1]);
                }
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    getUser(user_id, page) {
        this._userService.getUser(user_id).subscribe(response => {
            if (response.user) {
                this.user = response.user;
                //Devolver listado de usuarios
                this.getFollows(user_id, page);
            }
            else {
                this._router.navigate(['/home']);
            }
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    mouseEnter(user_id) {
        this.followMouseOver = user_id;
    }
    mouseLeave(user_id) {
        this.followMouseOver = 0;
    }
    followUser(followed, user) {
        let follow = new _models_follow__WEBPACK_IMPORTED_MODULE_0__["Follow"]('', this.identity._id, followed);
        this._followService.addFollow(this.token, follow).subscribe(response => {
            if (response.followStored) {
                this.status = 'error';
            }
            else {
                this.status = 'success';
                this.follows.push(followed);
            }
            localStorage.removeItem('stats');
            this.getCounters();
            this._userService.getStats();
            this.saveNotification(user);
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    unfollowUser(followed) {
        this._followService.deleteFollow(this.token, followed).subscribe(response => {
            let search = this.follows.indexOf(followed);
            if (search != -1) {
                this.follows.splice(search, 1);
            }
            localStorage.removeItem('stats');
            this.getCounters();
            this._userService.getStats();
        }, error => {
            let errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                this.status = "error";
            }
        });
    }
    getCounters() {
        this._userService.getCounters().subscribe(response => {
            //Guardamos en stats la respuesta JSON
            localStorage.setItem('stats', JSON.stringify(response));
            this.status = 'success';
        }, error => {
            console.log(error);
        });
    }
    saveNotification(follower) {
        this._notificationService.saveNotification(this.token, follower, 'new-follow').subscribe(response => {
        }, error => {
            console.log(error);
        });
    }
}
FollowingComponent.ɵfac = function FollowingComponent_Factory(t) { return new (t || FollowingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
FollowingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FollowingComponent, selectors: [["app-following"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], decls: 8, vars: 5, consts: [[1, "following-container", "col-xl-12", "col-lg-12"], [1, "mt-5", "d-flex", "flex-column", "justify-content-center"], ["class", "mb-3 text-center section-title", 4, "ngIf"], ["class", "people mt-3", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [1, "pagination"], [4, "ngIf"], [1, "mb-3", "text-center", "section-title"], [1, "people", "mt-3"], ["class", "item-user d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "item-user", "d-flex", "justify-content-center"], [1, "card", "card-default", "mb-3"], [1, "card-body"], [1, "image-user", "pull-left"], [3, "routerLink"], ["alt", "Imagen de usuario", 3, "src", 4, "ngIf"], ["class", "default-user-image", "src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 4, "ngIf"], [1, "user-name"], [1, "username"], ["class", "bio", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], ["alt", "Imagen de usuario", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 1, "default-user-image"], [1, "bio"], [1, "pull-right"], ["class", "btn btn-default", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"], [1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-user-plus"], [1, "button-text"], [1, "btn", "btn-primary", 3, "mouseenter", "mouseleave", "click"], [4, "ngIf", "ngIfElse"], ["following", ""], [1, "fa", "fa-user-times"], [1, "fa", "fa-check"], [1, "btn", "btn-sm", "btn-default", 3, "routerLink"]], template: function FollowingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FollowingComponent_h3_2_Template, 2, 1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FollowingComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FollowingComponent_li_6_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FollowingComponent_li_7_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.following);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.page > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages != ctx.page);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".following-container[_ngcontent-%COMP%] {\n  margin-top: 14vh;\n}\n.following-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  align-self: center;\n}\n.following-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70vw;\n  max-width: 400px;\n  border-radius: 50px;\n  border: none;\n  opacity: 0.3;\n  padding: 5px 10px;\n  align-self: center;\n}\n.following-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active, .following-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n.following-container[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  right: 25px;\n  color: #DD517F;\n  opacity: 0.9;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n  width: 60vw;\n  min-width: 290px;\n  border-radius: 50px;\n  border: 1px solid #DD517F;\n  background-color: rgba(248, 248, 248, 0.5);\n  box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 10px 10px 9px 0px rgba(0, 0, 0, 0.22);\n}\n@media (max-width: 992px) {\n  .following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n  width: 7em;\n  height: 7em;\n  border-radius: 100%;\n  overflow: hidden;\n  margin-right: 20px;\n}\n@media (max-width: 992px) {\n  .following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%] {\n    width: 4em;\n    height: 4em;\n  }\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .image-user[_ngcontent-%COMP%]   .default-user-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6e2e81;\n  font-family: \"Raleway\";\n  font-weight: bolder;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  color: #DD517F;\n  font-family: \"Raleway\";\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  font-size: small;\n}\n@media (max-width: 576px) {\n  .following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n  .following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #DD517F;\n  color: whitesmoke;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]   .fa-user-plus[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #c9124f;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #7998EE;\n  color: whitesmoke;\n  border: #7998EE;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa-user-times[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.following-container[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   .item-user[_ngcontent-%COMP%]   .card-default[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #556DC8;\n}\n.following-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  border-radius: 50px;\n}\n.following-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #DD517F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb2xsb3dpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxnQkFBQTtBQUxKO0FBTUk7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQUpSO0FBS1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhaO0FBSVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUZoQjtBQUtRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBNUJMO0VBNkJLLFlBQUE7QUFIWjtBQVFZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsaURBQUE7RUFDQSx5REFBQTtFQUNBLHNEQUFBO0FBTmhCO0FBT2dCO0VBVEo7SUFVUSxXQUFBO0VBSmxCO0FBQ0Y7QUFNb0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUp4QjtBQUt3QjtFQU5KO0lBT1EsVUFBQTtJQUNBLFdBQUE7RUFGMUI7QUFDRjtBQUd3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRDVCO0FBR3dCO0VBQ0ksV0FBQTtBQUQ1QjtBQUt3QjtFQUNJLHFCQUFBO0VBQ0EsY0FyRW5CO0VBc0VtQixzQkFBQTtFQUNBLG1CQUFBO0FBSDVCO0FBS3dCO0VBQ0ksY0F6RXJCO0VBMEVxQixzQkFBQTtBQUg1QjtBQUt3QjtFQUNJLGdCQUFBO0FBSDVCO0FBUXdCO0VBQ0k7SUFDSSxnQkFBQTtFQU45QjtFQVEwQjtJQUNJLGFBQUE7RUFOOUI7QUFDRjtBQVVvQjtFQUNJLHlCQTdGakI7RUE4RmlCLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJ4QjtBQVN3QjtFQUNJLGlCQUFBO0FBUDVCO0FBU3dCO0VBQ0kseUJBQUE7QUFQNUI7QUFVb0I7RUFDSSx5QkF4R1o7RUF5R1ksaUJBQUE7RUFDQSxlQTFHWjtFQTJHWSxtQkFBQTtFQUNBLGtCQUFBO0FBUnhCO0FBU3dCO0VBQ0ksaUJBQUE7QUFQNUI7QUFTd0I7RUFDSSxpQkFBQTtBQVA1QjtBQVN3QjtFQUNJLHlCQW5IckI7QUE0R1A7QUFnQlE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBZFo7QUFlWTtFQUNJLHlCQWxJVDtBQXFIUCIsImZpbGUiOiJmb2xsb3dpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdmlvbGV0OiAjNmUyZTgxO1xyXG4kcGluazogI0RENTE3RjtcclxuJGxpZ2h0Ymx1ZTogIzc5OThFRTtcclxuJGJsdWU6ICM1NTZEQzg7XHJcbiRvcmFuZ2U6ICNFNjhFMzY7XHJcblxyXG4uZm9sbG93aW5nLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcbiAgICAuc2VhcmNoSW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wZW9wbGV7XHJcbiAgICAgICAgLml0ZW0tdXNlcntcclxuICAgICAgICAgICAgLmNhcmQtZGVmYXVsdHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcGluaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS11c2Vye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogN2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWZhdWx0LXVzZXItaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudXNlci1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudXNlcm5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1kZWZhdWx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXVzZXItcGx1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkxMjRmOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAkbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS11c2VyLXRpbWVze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLWNoZWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbntcclxuICAgICAgICAuYnRuLWRlZmF1bHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1000)
                ])
            ])
        ] } });


/***/ }),

/***/ "wzbf":
/*!*************************************************!*\
  !*** ./src/app/services/publication.service.ts ***!
  \*************************************************/
/*! exports provided: PublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationService", function() { return PublicationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PublicationService {
    constructor(_http) {
        this._http = _http;
    }
    getToken() {
        let token = JSON.parse(localStorage.getItem('token'));
        if (token != undefined) {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }
    addPublication(token, publication) {
        let params = JSON.stringify(publication);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post('api/publication', params, { headers: headers });
    }
    getPublications(token, page = 1) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get('api/publications/' + page, { headers: headers });
    }
    getPublication(publication) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.get('api/publication/' + publication._id, { headers: headers });
    }
    getPublicationsUser(token, user_id, page = 1) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get('api/publications-user/' + user_id + '/' + page, { headers: headers });
    }
    deletePublication(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.delete('api/publication/' + id, { headers: headers });
    }
    savePublication(publication) {
        let params = JSON.stringify(publication);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.put('api/saved-publication/' + publication._id, params, { headers: headers });
    }
    getSavedPublications(id, page = 1) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.get('api/get-saved-publications/' + id + '/' + page, { headers: headers });
    }
    likePublication(publication) {
        let params = JSON.stringify(publication);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.put('api/like-publication/' + publication._id, params, { headers: headers });
    }
}
PublicationService.ɵfac = function PublicationService_Factory(t) { return new (t || PublicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PublicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PublicationService, factory: PublicationService.ɵfac });


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/upload.service */ "jT/F");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var _models_publication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/publication */ "Kk4b");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













const _c0 = ["fileInput"];
function SidebarComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function SidebarComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nueva publicaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La publicaci\u00F3n no puede estar vac\u00EDa! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Crear publicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_4_div_5_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SidebarComponent_div_4_Template_form_ngSubmit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmit(_r7, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_div_4_Template_textarea_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.publication.text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_div_4_Template_input_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Publicar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.status == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.publication.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r7.form.valid);
} }
function SidebarComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.identity.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SidebarComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} }
function SidebarComponent_div_17_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.stats.publications, " ");
} }
function SidebarComponent_div_17_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/following", a1, 1]; };
const _c2 = function (a1) { return ["/followers", a1, 1]; };
const _c3 = function (a1) { return ["/profile", a1]; };
function SidebarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Siguiendo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Seguidores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Publicaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidebarComponent_div_17_span_20_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SidebarComponent_div_17_span_21_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r5.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.stats.following, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r5.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.stats.followed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c3, ctx_r5.identity._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stats.publications);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.stats.publications);
} }
class SidebarComponent {
    constructor(_userService, _publicationService, _uploadService, _route, _router) {
        this._userService = _userService;
        this._publicationService = _publicationService;
        this._uploadService = _uploadService;
        this._route = _route;
        this._router = _router;
        this.sent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.stats = this._userService.getStats();
        this.publication = new _models_publication__WEBPACK_IMPORTED_MODULE_4__["Publication"]('', null, '', '', this.identity._id, [], []);
        this.showNewPublication = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (window.addEventListener) {
            window.addEventListener("storage", this._listener, false);
            this._listener = () => {
                this.getCounters();
            };
        }
    }
    onSubmit(form, event) {
        if ((this.publication.text != null) || this.fileInputVariable.nativeElement.value != '') {
            this._publicationService.addPublication(this.token, this.publication).subscribe(response => {
                if (response.publication) {
                    if (this.filesToUpload && this.filesToUpload.length) {
                        //subir imagen
                        this._uploadService.makeFileRequest('api/upload-image-pub/' + response.publication._id, [], this.filesToUpload, this.token, 'image')
                            .then((result) => {
                            this.status = 'success';
                            this.stats = this._userService.getStats();
                            form.reset();
                            this.resetFileInput();
                            this._router.navigate(['/timeline']);
                            this.sent.emit({ sent: 'true' });
                        });
                    }
                    else {
                        this.status = 'success';
                        form.reset();
                        this.resetFileInput();
                        this.getCounters();
                        this._router.navigate(['/timeline']);
                        this.sent.emit({ sent: 'true' });
                    }
                }
                else {
                    this.status = 'error';
                }
            }, error => {
                let errorMessage = error;
                console.log(errorMessage);
                if (errorMessage != null) {
                    this.status = 'error';
                }
            });
        }
        else {
            this.status = 'error';
        }
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    showForm(event) {
        if (this.showNewPublication === true) {
            this.showNewPublication = false;
        }
        else {
            this.showNewPublication = true;
        }
    }
    getCounters() {
        this._userService.getCounters().subscribe(response => {
            localStorage.setItem('stats', JSON.stringify(response));
            this.status = 'success';
            this._router.navigate(['/timeline']);
            this.stats = this._userService.getStats();
        }, error => {
            console.log(error);
        });
    }
    resetFileInput() {
        this.fileInputVariable.nativeElement.value = '';
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_publication_service__WEBPACK_IMPORTED_MODULE_3__["PublicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInputVariable = _t.first);
    } }, outputs: { sent: "sent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"], _services_publication_service__WEBPACK_IMPORTED_MODULE_3__["PublicationService"]])], decls: 18, vars: 15, consts: [[1, "sidebar-container"], [1, "btn", "btn-default", "mt-lg-3", 3, "click"], ["class", "fa fa-minus", 4, "ngIf"], [4, "ngIf"], ["id", "new-publication", 4, "ngIf"], ["id", "user-card", 1, "card", "card-default", "text-center", "mt-5"], [1, "avatar", "pull-left"], [3, "routerLink"], ["alt", "Imagen de usuario", 3, "src", 4, "ngIf"], ["src", "assets/img/default-user.jpg", "class", "default-img", "alt", "Imagen de usuario", 4, "ngIf"], [1, "name-surname", "pull-right"], ["class", "stats d-flex justify-content-around", 4, "ngIf"], [1, "fa", "fa-minus"], [1, "fa", "fa-plus"], ["id", "new-publication"], [1, "col-xl-10", "col-lg-10", "col-md-10"], [1, "text-center"], [1, "mb-3", "section-title"], ["class", "alert alert-danger text-center", 4, "ngIf"], [1, "form-container", "mb-3"], [1, "col-xl-10", "col-lg-10", "col-md-10", "text-center", 3, "ngSubmit"], ["newPubForm", "ngForm"], ["name", "text", "placeholder", "\u00BFQu\u00E9 est\u00E1s pensando hoy?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["text", "ngModel"], ["type", "file", 1, "form-control", 3, "change"], ["fileInput", ""], ["type", "submit", 1, "btn", "btn-default", 3, "disabled"], [1, "alert", "alert-danger", "text-center"], ["alt", "Imagen de usuario", 3, "src"], ["src", "assets/img/default-user.jpg", "alt", "Imagen de usuario", 1, "default-img"], [1, "stats", "d-flex", "justify-content-around"], [1, "following-data"], [1, "label-stats"], [1, "number-stats"], [1, "following-data", "following-data-publications"], ["class", "number-stats", 4, "ngIf"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_1_listener($event) { return ctx.showForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_i_2_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_span_3_Template, 3, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_4_Template, 16, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_img_8_Template, 1, 1, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidebarComponent_img_9_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SidebarComponent_div_17_Template, 22, 13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNewPublication);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showNewPublication);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNewPublication);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c3, ctx.identity._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity.image || ctx.identity.image == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.identity._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.identity.name + " " + ctx.identity.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("@" + ctx.identity.nick);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.identity.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".sidebar-container[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.sidebar-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #6e2e81;\n  color: whitesmoke;\n}\n.sidebar-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #dd517f;\n  color: whitesmoke;\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  margin: 5px;\n  padding: 0 10px;\n  color: #dd517f;\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .alert-danger[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0;\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #6e2e81;\n  font-size: 1rem;\n  margin-left: 15px;\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-radius: 50px;\n  border: rgba(235, 235, 235, 0.2) 0.5px groove;\n  background-color: rgba(245, 245, 245, 0.2);\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #556dc8;\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: smaller;\n  margin-left: 15px;\n  margin-top: 0;\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background-color: #6e2e81;\n  color: whitesmoke;\n}\n.sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #dd517f;\n  color: whitesmoke;\n}\n.sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 40%;\n  border: none;\n  border-radius: 50px;\n  background-color: transparent;\n}\n.sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin: 20px auto;\n}\n.sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110%;\n  height: auto;\n}\n.sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .default-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%]   .name-surname[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #dd517f;\n  font-family: \"Raleway\";\n  font-weight: bolder;\n  font-size: 1.5rem;\n}\n@media (max-width: 1350px) {\n  .sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .following-data[_ngcontent-%COMP%] {\n  margin: 10px 20px;\n  padding: 5px;\n}\n.sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .following-data[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6e2e81;\n  font-weight: 600;\n}\n.sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .following-data[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #dd517f;\n}\n@media (max-width: 992px) {\n  .sidebar-container[_ngcontent-%COMP%] {\n    background: #dd517f;\n    background: linear-gradient(to left, #dd517f 0%, #6e2e81 100%);\n    overflow: hidden;\n    bottom: 0;\n    width: 100%;\n    padding: 0 5vw;\n    display: flex;\n    justify-content: center;\n  }\n  .sidebar-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n    background-color: transparent;\n    padding: 2% 0;\n  }\n  .sidebar-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover, .sidebar-container[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:active {\n    background-color: transparent;\n    margin-left: 0;\n  }\n  .sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%] {\n    background-color: transparent;\n    margin: 0;\n  }\n  .sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: 90%;\n    margin-top: 3vh;\n    align-self: center;\n  }\n  .sidebar-container[_ngcontent-%COMP%]   #new-publication[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n    width: 20vw;\n    align-self: center;\n  }\n  .sidebar-container[_ngcontent-%COMP%]   #user-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsZUFBQTtBQUxGO0FBTUU7RUFDRSx5QkFUSztFQVVMLGlCQUFBO0FBSko7QUFLSTtFQUNFLHlCQVhDO0VBWUQsaUJBQUE7QUFITjtBQVFJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBckJDO0FBZVA7QUFRSTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQU5OO0FBUUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQU5OO0FBT007RUFDRSxjQW5DQztFQW9DRCxlQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQU9NO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsMENBQUE7QUFMUjtBQU1RO0VBQ0UsY0ExQ0g7QUFzQ1A7QUFPTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFMUjtBQU9NO0VBQ0UseUJBdkRDO0VBd0RELGlCQUFBO0FBTFI7QUFNUTtFQUNFLHlCQXpESDtFQTBERyxpQkFBQTtBQUpWO0FBVUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBUko7QUFTSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUE47QUFRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTlI7QUFRTTtFQUNFLFdBQUE7QUFOUjtBQVVNO0VBQ0UscUJBQUE7RUFDQSxjQXZGRDtFQXdGQyxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFSUjtBQVlNO0VBREY7SUFFSSxlQUFBO0VBVE47QUFDRjtBQVVNO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBUlI7QUFVUTtFQUNFLHFCQUFBO0VBQ0EsY0F4R0Q7RUF5R0MsZ0JBQUE7QUFSVjtBQVNVO0VBQ0UsY0ExR0w7QUFtR1A7QUFjRTtFQTVHRjtJQTZHSSxtQkFBQTtJQUdBLDhEQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUFYRjtFQWFFO0lBQ0UsNkJBQUE7SUFDQSxhQUFBO0VBWEo7RUFZSTtJQUVFLDZCQUFBO0lBQ0EsY0FBQTtFQVhOO0VBZUU7SUFDRSw2QkFBQTtJQUNBLFNBQUE7RUFiSjtFQWNJO0lBQ0UsYUFBQTtFQVpOO0VBZU07SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQWJSO0VBY1E7SUFDRSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBWlY7RUFjUTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQVpaO0VBa0JFO0lBQ0UsYUFBQTtFQWhCSjtBQUNGIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdmlvbGV0OiAjNmUyZTgxO1xyXG4kcGluazogI2RkNTE3ZjtcclxuJGxpZ2h0Ymx1ZTogIzc5OThlZTtcclxuJGJsdWU6ICM1NTZkYzg7XHJcbiRvcmFuZ2U6ICNlNjhlMzY7XHJcblxyXG4uc2lkZWJhci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAuYnRuLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZpb2xldDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4gICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNuZXctcHVibGljYXRpb24ge1xyXG4gICAgLmFsZXJ0IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMikgMC41cHggZ3Jvb3ZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiB3aGl0ZXNtb2tlLCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tZGVmYXVsdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZpb2xldDtcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjdXNlci1jYXJkIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC5hdmF0YXIge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICAuZGVmYXVsdC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmFtZS1zdXJuYW1lIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0YXRzIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNTBweCkge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgfVxyXG4gICAgICAuZm9sbG93aW5nLWRhdGEge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogJHZpb2xldDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ1MTdmO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2RkNTE3ZiAwJSwgIzZlMmU4MSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNkZDUxN2YgMCUsICM2ZTJlODEgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2RkNTE3ZiAwJSwgIzZlMmU4MSAxMDAlKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgNXZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5idG4tZGVmYXVsdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBwYWRkaW5nOiAyJSAwO1xyXG4gICAgICAmOmhvdmVyLFxyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjbmV3LXB1YmxpY2F0aW9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgaDUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZGVmYXVsdHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3VzZXItY2FyZCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, height: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(500)
                ])
            ])
        ] } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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