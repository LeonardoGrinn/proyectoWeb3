webpackJsonp([0],{

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>REGISTRATE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <!--Informacion personal -->\n    <ion-item-divider color="danger">TUS DATOS(PA VENDERLOS)</ion-item-divider>\n\n    <!--\n      Nota:\n      Con la directiva ng-model , puede vincular el valor de un campo de entrada a una variable.\n    -->\n    <ion-item>\n      <ion-label>Nompre</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.first_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Apellido</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.last_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="newUser.email" (blur)="checkEmail()"></ion-input>\n      <!-- Blur se activa al deseleccionar el campo -->\n    </ion-item>\n    <ion-item>\n      <ion-label>Como te dice el Pablito</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="newUser.password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Confirmar Contraseña</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.confirm_password"></ion-input>\n    </ion-item>\n\n    <!--Informacion de pago -->\n    <ion-item-divider color="danger">DATOS DE TARJETA(PA COBRARTE)</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Dirección 1</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.billing_address.address_1"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Dirección 2</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.billing_address.address_2"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>País</ion-label>\n      <ion-select [(ngModel)]="newUser.billing_address.country">\n        <ion-option value="Mexico" selected="true">México</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Estado</ion-label>\n      <ion-select [(ngModel)]="newUser.billing_address.state">\n        <ion-option value="JAL" selected="true">Jalisco</ion-option>\n        <ion-option value="DGO">Durango</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ciudad</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.billing_address.city"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Código Postal</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="newUser.billing_address.postcode"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Teléfono</ion-label>\n      <ion-input type="tel" clearInput [(ngModel)]="newUser.billing_address.phone"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>La misma info al chile</ion-label>\n      <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n    </ion-item>\n\n\n    <!--Informacion de envio -->\n    <ion-item-divider color="danger" *ngIf="!billing_shipping_same">¿A DONDÉ TE LO MANDAMOS PAPU?</ion-item-divider>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Dirección 1</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.shipping_address.address_1"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Dirección 2</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.shipping_address.address_2"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>País</ion-label>\n        <ion-select [(ngModel)]="newUser.shipping_address.country">\n          <ion-option value="Mexico" selected="true">México</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]="newUser.shipping_address.state">\n          <ion-option value="JAL" selected="true">Jalisco</ion-option>\n          <ion-option value="DGO">Durango</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Ciudad</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.shipping_address.city"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Código Postal</ion-label>\n        <ion-input type="number" clearInput [(ngModel)]="newUser.shipping_address.postcode"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Teléfono</ion-label>\n        <ion-input type="tel" clearInput [(ngModel)]="newUser.shipping_address.phone"></ion-input>        \n      </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<!-- Btn de registro -->\n<ion-footer>\n  <button ion-button block color="dark" (click)="signup()">REGISTRARSE</button>\n</ion-footer>'/*ion-inline-end:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map