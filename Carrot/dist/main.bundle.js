webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__registration_registration_component__["a" /* RegistrationComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_button_custom_button_component__ = __webpack_require__("../../../../../src/app/custom-button/custom-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__custom_textfield_custom_textfield_component__ = __webpack_require__("../../../../../src/app/custom-textfield/custom-textfield.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: 'AIzaSyDUlfMoY9Aq0nOGnZt_ovhRDaUtOJUnZ04',
    authDomain: 'carrot-app.firebaseapp.com',
    databaseURL: 'https://carrot-app.firebaseio.com',
    projectId: 'carrot-app',
    storageBucket: 'carrot-app.appspot.com',
    messagingSenderId: '132005725857'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__custom_button_custom_button_component__["a" /* CustomButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_8__custom_textfield_custom_textfield_component__["a" /* CustomTextfieldComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/custom-button/custom-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".styledButtons{\n    height: 45px;\n    width: 100px;\n    margin: 20px 0px;\n    color: white;\n    background: #00cc99;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custom-button/custom-button.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[link]\"><button type=\"button\" class=\"btn styledButtons\">{{text}}</button></a>"

/***/ }),

/***/ "../../../../../src/app/custom-button/custom-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomButtonComponent = (function () {
    function CustomButtonComponent() {
    }
    CustomButtonComponent.prototype.ngOnInit = function () {
    };
    return CustomButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CustomButtonComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CustomButtonComponent.prototype, "link", void 0);
CustomButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'custom-button',
        template: __webpack_require__("../../../../../src/app/custom-button/custom-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/custom-button/custom-button.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomButtonComponent);

//# sourceMappingURL=custom-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/custom-textfield/custom-textfield.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textfield{\n    border: none;\n    border-bottom: 2px solid #00cc99;\n    border-left: 2px solid #00cc99;\n    height: 35px;\n    color: black;\n    font-family: Roboto;\n    border-radius: 0px;\n    border-radius: 0px 0px 0px 5px;\n}\n\n.textfield:invalid:not(content){\n    box-shadow: none !important;\n    border: none;\n    border-bottom: 2px solid #f3a422;\n    border-left: 2px solid #f3a422;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custom-textfield/custom-textfield.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"{{inputType}}\" placeholder=\"{{placeholderText}}\" class=\"form-control textfield\" required/>"

/***/ }),

/***/ "../../../../../src/app/custom-textfield/custom-textfield.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomTextfieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomTextfieldComponent = (function () {
    function CustomTextfieldComponent() {
    }
    CustomTextfieldComponent.prototype.ngOnInit = function () {
    };
    return CustomTextfieldComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CustomTextfieldComponent.prototype, "placeholderText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CustomTextfieldComponent.prototype, "inputType", void 0);
CustomTextfieldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'custom-textfield',
        template: __webpack_require__("../../../../../src/app/custom-textfield/custom-textfield.component.html"),
        styles: [__webpack_require__("../../../../../src/app/custom-textfield/custom-textfield.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomTextfieldComponent);

//# sourceMappingURL=custom-textfield.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/btn_google_signin_dark_focus_web.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/login/btn_google_signin_dark_normal_web.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/login/btn_google_signin_dark_pressed_web.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".registration{\r\n    padding-top: 50px;\r\n}\r\n\r\n.carrotPicture{\r\n    height: 160px;\r\n    margin: auto;\r\n}\r\n\r\n.textfield{\r\n    border: none;\r\n    border-bottom: 2px solid #00cc99;\r\n    border-left: 2px solid #00cc99;\r\n    height: 35px;\r\n    color: black;\r\n    font-family: Roboto;\r\n    border-radius: 0px;\r\n    border-radius: 0px 0px 0px 5px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.textfield:invalid:not(content){\r\n    box-shadow: none !important;\r\n    border: none;\r\n    border-bottom: 2px solid #f3a422;\r\n    border-left: 2px solid #f3a422;\r\n}\r\n\r\n.googleButton{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    height: 45px;\r\n    width: 190px;\r\n    background-color: transparent;\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/login/btn_google_signin_dark_normal_web.png") + ");\r\n    border: none;\r\n    box-shadow: none;\r\n}\r\n\r\n.googleButton:hover{\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/login/btn_google_signin_dark_focus_web.png") + ");\r\n}\r\n\r\n.googleButton:focus{\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/login/btn_google_signin_dark_pressed_web.png") + ");\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"registration container-fluid align-middle\">\r\n    <div class=\"row justify-content-center\">\r\n      <a [routerLink]=\"['/login']\"><img class=\"carrotPicture\" src=\"../../assets/img/default.png\" alt=\"Carrot Icon\"></a>\r\n    </div>\r\n    <br>  \r\n    <div class=\"row justify-content-md-center\">\r\n      <div class=\"col-md-4\">\r\n        <input type=\"email\" placeholder=\"Email\" class=\"form-control textfield\" [(ngModel)]=\"email\" required>\r\n        \r\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control textfield\" [(ngModel)]=\"password\" required>\r\n        \r\n        <div class=\"row\">\r\n          <custom-button text=\"Login\" (click)=\"signIn()\" [link]=\"'/login'\" class=\"col align-self-start\"></custom-button>\r\n          <custom-button [text]=\"'Register'\" [link]=\"'/register'\" class=\"col align-self-end text-right\"></custom-button>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <button type=\"button\" (click)=\"googlePopup()\" class=\"googleButton text-center m-0 p-0\"></button>          \r\n        </div>\r\n        <!-- <div class=\"row text-center\">\r\n          <custom-button text=\"Login\" (click)=\"signIn()\" [link]=\"'/login'\" class=\"col align-center\"></custom-button>\r\n          <custom-button text=\"Google\" (click) = \"googlePopup()\" [link]=\"'/login'\" class=\"col align-center\"></custom-button>\r\n          <br>\r\n          <custom-button [text]=\"'Register'\" [link]=\"'/register'\"></custom-button>\r\n        </div>       -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(af, route, router) {
        this.af = af;
        this.route = route;
        this.router = router;
        this.database = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]();
        this.email = '';
        this.password = '';
        this.user = {
            user_email: '',
            user_password: '',
        };
    }
    LoginComponent.prototype.signIn = function () {
        console.log(this.email);
        console.log(this.password);
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(this.email, this.password).then(function (res) {
            console.log("Success");
            alert("Success");
        }).catch(function (error) {
            console.log("Error");
            alert("Error with email");
        });
    };
    LoginComponent.prototype.googlePopup = function () {
        console.log(this.email);
        console.log(this.password);
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithPopup(provider).then(function (result) {
            var _this = this;
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("Success");
            alert("Logged in");
            this.router.run(function () { return _this.router.navigate(['/register']); });
        }).catch(function (result) {
            console.log("Error");
        });
    };
    LoginComponent.prototype.submit = function () {
        if (this.isFound == true) {
            this.fieldType = 'password';
            this.fieldHolder = 'Password';
            this.next = 'Login';
            this.input_value = '';
        }
        else {
            alert(' User Email does not exist');
        }
    };
    /* End */
    /*
      constructor() {
     this.fieldType ='email';;
     this.fieldHolder= 'Email';
     this.next='Next'
      }
      */
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".registration{\n    padding-top: 50px;\n}\n\n.carrotPicture{\n    height: 150px;\n    margin: auto;\n}\n\n.textfield{\n    border: none;\n    border-bottom: 2px solid #00cc99;\n    border-left: 2px solid #00cc99;\n    height: 35px;\n    color: black;\n    font-family: Roboto;\n    border-radius: 0px;\n    border-radius: 0px 0px 0px 5px;\n    margin-top: 30px;\n}\n\n.textfield:invalid:not(content){\n    box-shadow: none !important;\n    border: none;\n    border-bottom: 2px solid #f3a422;\n    border-left: 2px solid #f3a422;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"registration container-fluid\">\n  <div class=\"row justify-content-center\">\n    <a [routerLink]=\"['/login']\"><img class=\"carrotPicture\" src=\"../../assets/img/carrot.png\" alt=\"Carrot Icon\"></a>\n    <br>\n  </div>\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-4\">\n      <!-- <custom-textfield [inputType]=\"'text'\" [placeholderText]=\"'Full Name'\" class=\"col-md-4 customTextFieldStyle\"></custom-textfield>\n      <br> -->\n      <!-- <custom-textfield id=\"email\" [inputType]=\"'email'\" [placeholderText]=\"'Email'\" class=\"col-md-4 customTextFieldStyle\"></custom-textfield>\n      <br>\n      <custom-textfield id=\"password\" [inputType]=\"'password'\" [placeholderText]=\"'Password'\" class=\"col-md-4 customTextFieldStyle\"></custom-textfield>\n      <br>\n      <custom-textfield id=\"confirmPassword\" [inputType]=\"'password'\" [placeholderText]=\"'Confirm Password'\" class=\"col-md-4 customTextFieldStyle\"></custom-textfield> -->\n      <input type=\"email\" placeholder=\"Email\" class=\"form-control textfield\" [(ngModel)]=\"email\" required>\n      <br>\n      <input type=\"password\" placeholder=\"Password\" class=\"form-control textfield\" [(ngModel)]=\"password\" required>\n      <br>\n      <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control textfield\" [(ngModel)]=\"confirmPassword\" required>\n      <div class=\"row\">\n        <custom-button [text]=\"'Back'\" [link]=\"'/login'\" class=\"col align-self-start\"></custom-button>\n        <custom-button [text]=\"'Register'\" (click)=\"register()\" class=\"col align-self-end text-right\"></custom-button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(af, route, router) {
        this.af = af;
        this.route = route;
        this.router = router;
        this.database = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]();
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        if (this.email !== '' && this.password !== '' && this.confirmPassword !== '') {
            if (this.password !== this.confirmPassword) {
                alert('Password do not match');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
                    var errorMessage = error.message;
                    var errorCode = error.name;
                    if (errorCode === 'auth/email-already-in-use') {
                        alert('A user with that email already exists');
                    }
                });
                alert('Registered successfully!');
                this.router.navigate(['/login']);
            }
        }
        else {
            alert('Fill out all the fields.');
        }
    };
    RegistrationComponent.prototype.googlePopup = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            alert('Registered successfully!');
            this.navigate();
        });
        function navigate() {
            this.router.navigate(['/login']);
        }
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map