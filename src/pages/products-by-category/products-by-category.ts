import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import * as WC from 'woocommerce-api';


@Component({
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategoryPage {

  WooCommerce: any; 
  products: any[];
  page: number;
  category: any[]; //Aquí se almacena la categoria seleccionada.
 
  constructor(public navCtrl: NavController, public navParams: NavParams) { //navParams envia parametros a el sitio. 

    this.page = 1;
    this.category = this.navParams.get('category');

    //Inicializamos WooCommerce
    this.WooCommerce = WC({
      url: "http://escueladehector.000webhostapp.com/",
      consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
      consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
    });

    //Obtener productos del sitio de la categoria seleccionada (slud es el nombre interno de la categoria).
    this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then((data) => {
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategoryPage');
  }

  //Cargar más productos.
  loadMoreProducts(event) {
    this.page++;
    console.log("Getting page " + this.page);
    //Filtramos los productos en base a la categoria seleccionada. 
    this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then((data) => {
      let temp = (JSON.parse(data.body).products);

      this.products = this.products.concat(JSON.parse(data.body).products)
      console.log(this.products);
      event.complete();

      if (temp.length < 10)
        event.enable(false);
    })
  }

}
