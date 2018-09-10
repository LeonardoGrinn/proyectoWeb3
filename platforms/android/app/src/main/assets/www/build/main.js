webpackJsonp([0],{

/***/ 192:
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
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 233:
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
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_by_category_products_by_category__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //Importamos la API de Woocommerce. 

var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.categories = [];
        //Inicializamos WooCommerce
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: "http://escueladehector.000webhostapp.com/",
            consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
            consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
        });
        this.WooCommerce.getAsync("products/categories").then(function (data) {
            console.log(JSON.parse(data.body).product_categories);
            var temp = JSON.parse(data.body).product_categories; //Almacenamos las categorias en la variable temp.
            //Buscar en todas las categorias.
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].parent == 0) {
                    /* Revisar luego por que no se oculta.
                    if (temp[i].slug == "all") {
                      temp[i].style.display = 'none';
                    }*/
                    _this.categories.push(temp[i]);
                }
            }
        }, function (err) {
            console.log(err);
        });
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Menu');
    };
    //Carga la página de la categoria del producto. 
    MenuPage.prototype.openCategoryPage = function (category) {
        //Especificar ChildViw como metodo de navegación. 
        this.childNavCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__products_by_category_products_by_category__["a" /* ProductsByCategoryPage */], { "category": category });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MenuPage.prototype, "childNavCtrl", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>MENU PEPON</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content ngClass="menu">\n    <!-- Imagen & título -->\n    <ion-card> \n      <img src="./assets/imgs/menu.jpg" alt="menu-cover">\n      <div class="card__title">Animalditos</div>\n      <div class="card__subtitle">¡Compralos todos!</div>\n    </ion-card>\n\n    <!-- Lista de categorias -->\n    <ion-list>\n      <ion-item *ngFor="let category of categories" text-wrap (click)="openCategoryPage(category)" menuClose> <!--menuClose cierra nav automatico.-->\n        <h2>{{ category.name }}</h2>\n        <p>{{category.description}}</p>\n      </ion-item>  \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root] = "homePage"></ion-nav>\n'/*ion-inline-end:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_details_products_details__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 //ViewChild nos permite accesar a elementos hijo de nuestra página.


 //Importamos la API de Woocommerce.
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.page = 2; //Tomar los productos de la segunda página. 
        //Inicializamos WooCommerce
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: "http://escueladehector.000webhostapp.com/",
            consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
            consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
        });
        this.loadMoreProducts(null);
        this.WooCommerce.getAsync("products").then(function (data) {
            console.log(JSON.parse(data.body));
            _this.products = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    /*ionViewDidLoad() {
  
      //Auto Product Slider.
      setInterval(() => {//Permite ejecutar un fragmento de código repetidamente despues de un periodo.
        if (this.productSlides.getActiveIndex() == this.productSlides.length() - 1)
          this.productSlides.slideTo(0);
  
        this.productSlides.slideNext();
      }, 3000)
    } */
    HomePage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        console.log(event);
        //Checar si event es igual a Null para cargar contenido desde el constructor
        if (event == null) {
            this.page = 2;
            this.moreProducts = [];
        }
        else {
            this.page++;
        }
        this.WooCommerce.getAsync("products?page" + this.page).then(function (data) {
            console.log(JSON.parse(data.body));
            _this.moreProducts = _this.moreProducts.concat(JSON.parse(data.body).products); //Insertar nuevo productos a los antiguos productos.
            //Checar si event no es igual a null para cargar contenido desde el Inifinite Scroll. 
            if (event != null) {
                event.complete();
            }
            //Checamos si tenemos menos de 10 productos publicados en la tienda. 
            if (JSON.parse(data.body).products.length < 10) {
                event.enable(false);
                //Mostrar mensaje.
                _this.toastCtrl.create({
                    message: "¡No hay más animalditos Elvira!",
                    duration: 5000
                }).present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Cargar la página del producto.
    HomePage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__products_details_products_details__["a" /* ProductsDetailsPage */], { "product": product });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "productSlides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-buttons start>\n      <!-- Posicionar boton a la izquierda -->\n      <button ion-button menuToggle>\n        <ion-icon color="danger" name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>INICIO</ion-title>\n  </ion-navbar>\n\n  <!-- <ion-toolbar color="danger">\n    <ion-searchbar [(ngModel)]="searchQuery" (search)="onSearch($event)"></ion-searchbar>\n  </ion-toolbar> -->\n</ion-header>\n\n<!-- Slider -->\n<ion-content no-padding>\n  <ion-card ngClass="carrusel">\n    <!-- Contenedor de Carrusel-->\n    <ion-slides loop="true" autoplay="3000" pager>\n      <!-- Carrusel de imagenes && modo autoplay activado -->\n      <ion-slide *ngFor="let number of [1,2,3,4]">\n        <!-- Creamos ciclo For con los 4 valores-->\n        <img src="./assets/imgs/carrusel/{{number}}.jpg" />\n        <!-- Generamos URL a partir de los valores del ciclo For-->\n      </ion-slide>\n\n    </ion-slides>\n    <!-- ./Carusel -->\n  </ion-card>\n  <!-- ./Contenedor de Carrusel-->\n\n  <img ngClass="banner" src="./assets/imgs/banner2.jpg" />\n\n  <!-- Tarjeta de productos \n  <ion-grid>\n    <ion-row>\n      <ion-slides #productSlides>\n        <ion-slide *ngFor="let product of products">\n          <!--Obtener producto del array de Productos, uno a la vez \n          <ion-card no-padding>\n            <!-- Eliminamos el Padding de las tarjetas \n            <img [src]="product.featured_src" />\n            <!-- Binded SRC para convertirlo en la ruta de la imagen\n            <h1 padding center> {{ product.title }} </h1>\n            <!-- Título del producto \n            <p center padding [innerHTML]="product.short_description"></p>\n            <!-- Descripción del producto \n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n  </ion-grid> -->\n\n  <!--Mostrar productos-->\n  <ion-list>\n    <ion-item *ngFor="let product of moreProducts" text-wrap (click)="openProductPage(product)">\n      <ion-thumbnail item-left>\n        <!--Encerrar imagen de producto en un thumbnail y lo alineamos a la izquierda-->\n        <img [src]="product.featured_src" />\n        <!-- Imagen del producto -->\n      </ion-thumbnail>\n\n      <h2> {{ product.title }} </h2>\n      <!-- Título del producto -->\n\n      <p>\n        <span [innerHTML]="product.short_description.substr(0, 50) + \'...\'"></span>\n        <!-- Descripción del producto limitada a 0-50 caracteres -->\n        <span [innerHTML]="product.price_html"></span>\n        <!-- Precio del producto -->\n      </p>\n\n      <button ion-button icon clear item-right>\n        <ion-icon name="arrow-dropright"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <!-- Cargar más productos -->\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //Importante para poder almacenar productos en el carrito. 
var ProductsDetailsPage = /** @class */ (function () {
    function ProductsDetailsPage(navCtrl, navParams, storage, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.product = this.navParams.get("product");
        console.log(this.product);
        //Inicializamos WooCommerce
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "http://escueladehector.000webhostapp.com/",
            consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
            consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
        });
    }
    //Añadir productos al carrito. 
    ProductsDetailsPage.prototype.addToCart = function (product) {
        var _this = this;
        this.storage.get("cart").then(function (data) {
            //Checar si el carrito esta vacio. 
            if (data == null || data.length == 0) {
                data = []; //Inicializamos array.
                //Insertamos productos al array. 
                data.push({
                    "product": product,
                    "qty": 1,
                    "amount": parseFloat(product.price) //precio
                });
            }
            else {
                var added = 0;
                //Revisar todos los productos del carrito. 
                for (var i = 0; i < data.length; i++) {
                    //Verificar si el producto que se esta agregando al carrito ya existe. 
                    if (product.id == data[i].product.id) {
                        var qty = data[i].qty;
                        console.log("¡Ya tienes este digimon!");
                        data[i].qty = qty + 1; //Sumar el producto repedito a la cantidad en el carrito. 
                        data[i].amount = parseFloat(data[i].amount) + parseFloat(data[i].product.price); //Sumar el costo del nuevo producto al total. 
                        added = 1;
                    }
                }
                //Verificar si el producto que se esta agregando no existe. 
                if (added == 0) {
                    //Insertamos productos al array. 
                    data.push({
                        "product": product,
                        "qty": 1,
                        "amount": parseFloat(product.price) //precio.
                    });
                }
            }
            //Actualizar el contenido del carrito.
            _this.storage.set("cart", data).then(function () {
                console.log("Todo listo maestro pokemon");
                console.log(data);
                _this.toastCtrl.create({
                    message: "Todo listo maestro pokemon",
                    duration: 3000
                }).present();
            });
        });
    };
    //Abrir modal del carrito de compras. 
    ProductsDetailsPage.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]).present();
    };
    ProductsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products-details',template:/*ion-inline-start:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/products-details/products-details.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>{{product.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <!-- Slider -->\n  <ion-card>\n    <ion-slides autoplay="3000">\n      <ion-slide *ngFor="let image of product.images">\n        <img [src]="image.src" alt="imagenes-del-producto">\n      </ion-slide>\n    </ion-slides>\n    <!--Informacion del producto-->\n    <ion-card-content>\n      <ion-card-title> <!-- Titulo -->\n        {{product.title}} &nbsp;\n      </ion-card-title> \n\n      <p [innerHTML]="product.description"></p>  <!-- Descripcion -->\n\n      <!-- Boton para añadir a carrito -->\n      <button ion-button icon-left block color="danger" (click)="addToCart(product)">\n        <ion-icon name="basket"></ion-icon>Añadir a la jaula\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n  <p padding>Con cada animaldito comprado salvas a un Ivan de que le de Nill(bueno no). Empieza las buenas acciones como los ricos lo hacen, gastando tu dinero en cosas que otros no pueden comprar porque son inferiores a ti. \n  <br><br>Compra ahora y recibe un certificado de maestro pokemón y de paso uno de diseñador grafico.</p>\n  \n  <!--Boton para mostrar carrito-->\n  <ion-fab right top edge (click)="openCart()">\n    <button ion-fab color="danger"><ion-icon name="cart"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/products-details/products-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ProductsDetailsPage);
    return ProductsDetailsPage;
}());

//# sourceMappingURL=products-details.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, storage, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        //Variables
        this.cartItems = []; //Productos contenidos en el carrito.
        this.showEmptyCartMessage = false; //Mensaje de carrito vacio. 
        this.total = 0.0; //Almacernar el total. 
        this.storage.ready().then(function () {
            _this.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                console.log(_this.cartItems);
                //Verificar si el carrito contiene productos. 
                if (_this.cartItems.length > 0) {
                    //Calcular total.
                    _this.cartItems.forEach(function (item, index) {
                        _this.total = _this.total + (item.product.price * item.qty);
                    }); //Checar porque no se borra la cantidad. 
                }
                else {
                    //Mostar mensaje en caso de estar vacio.
                    _this.showEmptyCartMessage = true;
                }
            });
        });
    }
    /* Eliminar productos del carrito */
    CartPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price = item.product.price; //Obtener producto.
        var qty = item.qty; //Obtener cantidad. 
        this.cartItems.splice(i, 1); //i = index. 
        //Acutalizar contenido del carrito.
        this.storage.set("cart", this.cartItems).then(function () {
            _this.total = _this.total - (price * qty); //Eliminar precio y cantidad. 
        });
        //Verificar si el carrito esta vacio. 
        if (this.cartItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
    };
    /* cerrar ventana */
    CartPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="dark">\n\n  <ion-navbar color="dark">\n    <ion-title>MI JAULA</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card color="danger" style="text-align:center;">\n    <ion-grid>\n      <ion-row>\n        <ion-col>Animalditos Enjaulados</ion-col>\n      </ion-row>\n      <ion-row [hidden]="!showEmptyCartMessage"> <!--Checar valor bool -->\n        <ion-col>!Compra perro!</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- Listado de productos en el carrito-->\n  <ion-list>\n    <ion-item *ngFor="let item of cartItems; let i = index"> <!--i = index-->\n\n      <ion-thumbnail item-left>\n        <img [src]="item.product.featured_src" style="width: 60px !important; height: 60px !important;" />\n      </ion-thumbnail>\n      <h2>{{ item.product.title }}</h2> <!--Titulo del producto-->\n      <p>{{ item.qty }} • {{ item.product.price }}</p><!--Costo del producto-->\n      <button ion-button clear item-right color="danger" (click)="removeFromCart(item, i)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n\n    </ion-item>\n  </ion-list>\n\n  <!--Total de tu compra-->\n  <ion-grid>\n    <ion-card color="dark">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2> \n\n          </ion-col>\n          <ion-col col-4>\n            <b>TOTAL</b>\n          </ion-col>\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col col-3 style="text-align: right">\n            <b> {{ total }} </b>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-grid>\n\n</ion-content>\n\n<!--Menu del carrito-->\n<ion-footer>\n  <ion-toolbar color="dark">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="light" outline block (click)="closeModal()">Volver</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="danger" block (click)="checkout()">Pagar</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsByCategoryPage = /** @class */ (function () {
    function ProductsByCategoryPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.page = 1;
        this.category = this.navParams.get("category");
        //Inicializamos WooCommerce
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "http://escueladehector.000webhostapp.com/",
            consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
            consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
        });
        //Obtener productos del sitio de la categoria seleccionada (slud es el nombre interno de la categoria).
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then(function (data) {
            console.log(JSON.parse(data.body));
            _this.products = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    ProductsByCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsByCategory');
    };
    //Cargar más productos.
    ProductsByCategoryPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        console.log("Getting page " + this.page);
        //Filtramos los productos en base a la categoria seleccionada.
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then(function (data) {
            var temp = (JSON.parse(data.body).products);
            _this.products = _this.products.concat(JSON.parse(data.body).products);
            console.log(_this.products);
            event.complete();
            if (temp.length < 10)
                event.enable(false);
        });
    };
    ProductsByCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products-by-category',template:/*ion-inline-start:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/products-by-category/products-by-category.html"*/'<!--\n  Generated template for the ProductsByCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-buttons start>\n      <!-- Posicionar boton a la izquierda -->\n      <button color="danger" ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Animalditos seleccionados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n      <ion-thumbnail item-left>\n        <!--Encerrar imagen de producto en un thumbnail y lo alineamos a la izquierda-->\n        <img [src]="product.featured_src" />\n        <!-- Imagen del producto -->\n      </ion-thumbnail>\n\n      <h2> {{ product.title }} </h2>\n      <!-- Título del producto -->\n\n      <p>\n        <span [innerHTML]="product.short_description.substr(0, 50) + \'...\'"></span>\n        <!-- Descripción del producto limitada a 0-50 caracteres -->\n        <span [innerHTML]="product.price_html"></span>\n        <!-- Precio del producto -->\n      </p>\n\n      <button ion-button icon clear item-right>\n        <ion-icon name="arrow-dropright"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <!-- Cargar más productos -->\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/products-by-category/products-by-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProductsByCategoryPage);
    return ProductsByCategoryPage;
}());

//# sourceMappingURL=products-by-category.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_details_products_details__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_products_details_products_details__["a" /* ProductsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_products_details_products_details__["a" /* ProductsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { SignupPage } from '../pages/signup/signup';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */]; //Asignamos la página Default. 
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/app/app.html"*/'\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        //Variables.
        this.newUser = {};
        this.newUser.billing_address = {}; //Datos personales
        this.newUser.shipping_address = {}; //Datos de envio.
        this.billing_shipping_same = false; //BOOL DE DATOS
        //Inicializamos WooCommerce
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "http://escueladehector.000webhostapp.com/",
            consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
            consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
        });
    }
    //Cambiar falso/verdadero el checkbox del form de datos de envio. 
    SignupPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
    };
    SignupPage.prototype.checkEmail = function () {
        var _this = this;
        var validEmail = false;
        //Expresiones regulares que contienen un email.
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //Verificar si el correo esta disponible. 
        if (reg.test(this.newUser.email)) {
            //email looks valid
            this.WooCommerce.getAsync('customers/email/' + this.newUser.email).then(function (data) {
                var res = (JSON.parse(data.body));
                //Checar si el correo ya existe
                if (res.errors) {
                    validEmail = true;
                }
                else {
                    validEmail = false;
                    _this.toastCtrl.create({
                        message: "Profe me dio NILL (Atte: El Ivan)",
                        showCloseButton: true
                    }).present();
                }
                console.log(validEmail);
            });
        }
        else {
            validEmail = false;
            this.toastCtrl.create({
                message: "¡Escriba bien mijo!",
                showCloseButton: true
            }).present();
            console.log(validEmail);
        }
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var customerData = {
            customer: {}
        };
        //Generamos JSON a partir de la información introducida. 
        customerData.customer = {
            "email": this.newUser.email,
            "first_name": this.newUser.first_name,
            "last_name": this.newUser.last_name,
            "username": this.newUser.username,
            "password": this.newUser.password,
            "billing_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.billing_address.address_1,
                "address_2": this.newUser.billing_address.address_2,
                "city": this.newUser.billing_address.city,
                "state": this.newUser.billing_address.state,
                "postcode": this.newUser.billing_address.postcode,
                "country": this.newUser.billing_address.country,
                "email": this.newUser.email,
                "phone": this.newUser.billing_address.phone
            },
            "shipping_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.shipping_address.address_1,
                "address_2": this.newUser.shipping_address.address_2,
                "city": this.newUser.shipping_address.city,
                "state": this.newUser.shipping_address.state,
                "postcode": this.newUser.shipping_address.postcode,
                "country": this.newUser.shipping_address.country
            }
        };
        //Checar si el checkbox de Al chile es la misma info esta marcado para copiar esa info en envio.
        if (this.billing_shipping_same) {
            this.newUser.shipping_address = this.newUser.shipping_address;
        }
        this.WooCommerce.postAsync('customers', customerData).then(function (data) {
            var response = (JSON.parse(data.body));
            if (response.customer) {
                _this.alertCtrl.create({
                    title: "Se creo tu cuenta Papu",
                    message: "Entrale a la tombola y compra Animalditos",
                    buttons: [{
                            text: "Entrale Papu",
                            handler: function () {
                                //TODO
                            }
                        }]
                }).present();
            }
            else if (response.errors) {
                _this.toastCtrl.create({
                    message: response.errors[0].message,
                    showCloseButton: true
                }).present();
            }
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>REGISTRATE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <!--Informacion personal -->\n    <ion-item-divider color="danger">TUS DATOS(PA VENDERLOS)</ion-item-divider>\n\n    <!--\n      Nota:\n      Con la directiva ng-model , puede vincular el valor de un campo de entrada a una variable.\n    -->\n    <ion-item>\n      <ion-label>Nompre</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.first_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Apellido</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.last_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="newUser.email" (blur)="checkEmail()"></ion-input>\n      <!-- Blur se activa al deseleccionar el campo -->\n    </ion-item>\n    <ion-item>\n      <ion-label>Como te dice el Pablito</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="newUser.password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Confirmar Contraseña</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.confirm_password"></ion-input>\n    </ion-item>\n\n    <!--Informacion de pago -->\n    <ion-item-divider color="danger">DATOS DE TARJETA(PA COBRARTE)</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Dirección 1</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.billing_address.address_1"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Dirección 2</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.billing_address.address_2"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>País</ion-label>\n      <ion-select [(ngModel)]="newUser.billing_address.country">\n        <ion-option value="Mexico" selected="true">México</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Estado</ion-label>\n      <ion-select [(ngModel)]="newUser.billing_address.state">\n        <ion-option value="JAL" selected="true">Jalisco</ion-option>\n        <ion-option value="DGO">Durango</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ciudad</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.billing_address.city"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Código Postal</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="newUser.billing_address.postcode"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Teléfono</ion-label>\n      <ion-input type="tel" clearInput [(ngModel)]="newUser.billing_address.phone"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>La misma info al chile</ion-label>\n      <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n    </ion-item>\n\n\n    <!--Informacion de envio -->\n    <ion-item-divider color="danger" *ngIf="!billing_shipping_same">¿A DONDÉ TE LO MANDAMOS PAPU?</ion-item-divider>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Dirección 1</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.shipping_address.address_1"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Dirección 2</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.shipping_address.address_2"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>País</ion-label>\n        <ion-select [(ngModel)]="newUser.shipping_address.country">\n          <ion-option value="Mexico" selected="true">México</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]="newUser.shipping_address.state">\n          <ion-option value="JAL" selected="true">Jalisco</ion-option>\n          <ion-option value="DGO">Durango</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Ciudad</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.shipping_address.city"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Código Postal</ion-label>\n        <ion-input type="number" clearInput [(ngModel)]="newUser.shipping_address.postcode"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Teléfono</ion-label>\n        <ion-input type="tel" clearInput [(ngModel)]="newUser.shipping_address.phone"></ion-input>        \n      </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<!-- Btn de registro -->\n<ion-footer>\n  <button ion-button block color="dark" (click)="signup()">REGISTRARSE</button>\n</ion-footer>'/*ion-inline-end:"/Users/LeoSolutio/Documents/GitHub/proyectoWeb3/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map