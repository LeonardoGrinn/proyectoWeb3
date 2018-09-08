import { Component, ViewChild } from '@angular/core'; //ViewChild nos permite accesar a elementos hijo de nuestra página. 
import { NavController, Slides, ToastController } from 'ionic-angular';


import * as WC from 'woocommerce-api'; //Importamos la API de Woocommerce. 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Declaramos Variables
  WooCommerce: any;
  products: any[]; //Array de productos.
  page:number;
  moreProducts: any;

  @ViewChild('productSlides') productSlides: Slides; //Declaramos la variable del componente productSlides. 

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    this.page = 2; //Tomar los productos de la segunda página. 

    //Inicializamos WooCommerce
    this.WooCommerce = WC({
      url: "http://escueladehector.000webhostapp.com/",
      consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
      consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
    });

    this.loadMoreProducts(null);

    this.WooCommerce.getAsync("products").then((data)  => {
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {

    //Auto Product Slider. 
    setInterval(() => {//Permite ejecutar un fragmento de código repetidamente despues de un periodo.
      if (this.productSlides.getActiveIndex() == this.productSlides.length() -1) {
        this.productSlides.slideTo(0);
      }
      this.productSlides.slideNext();
    }, 3000);  
  }

  loadMoreProducts(event) {

    //Checar si event es igual a Null para cargar contenido desde el constructor
    if (event == null) {

      this.page = 2;
      this.moreProducts = [];

    } else {
        this.page++;
    }

    this.WooCommerce.getAsync("products?page" + this.page).then((data) => {
      console.log(JSON.parse(data.body));
      this.moreProducts = this.moreProducts.concat(JSON.parse(data.body).products); //Insertar nuevo productos a los antiguos productos.
      
      //Checar si event no es igual a null para cargar contenido desde el Inifinite Scroll. 
      if (event != null) {
        event.complete();
      }

      //Checamos si tenemos menos de 10 productos publicados en la tienda. 
      if (JSON.parse(data.body).products.length < 10) {
        event.enable(false); //Checar porque no funciona. 

        //Mostrar mensaje. 
        this.toastCtrl.create({
          message: "No hay más animalitos, Elvira!",
          duration: 5000
        }).present(); 
      }
    }, (err) => {
      console.log(err);
    });
  }

}
