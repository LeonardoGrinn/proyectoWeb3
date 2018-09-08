import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as WC from 'woocommerce-api'; //Importamos la API de Woocommerce. 
import { ProductsByCategoryPage } from '../products-by-category/products-by-category';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage: any;
  WooCommerce: any;
  categories: any[];
  @ViewChild('content') childNavCtrl: NavController; //Navegar por medio de ChilView. 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage
    this.categories = [];

    //Inicializamos WooCommerce
    this.WooCommerce = WC({
      url: "http://escueladehector.000webhostapp.com/",
      consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
      consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
    });


    this.WooCommerce.getAsync("products/categories").then((data) => {
      console.log(JSON.parse(data.body).product_categories);

      let temp: any[] = JSON.parse(data.body).product_categories; //Almacenamos las categorias en la variable temp.

      //Buscar en todas las categorias.
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {
        
          /* Revisar luego por que no se oculta. 
          if (temp[i].slug == "all") {
            temp[i].style.display = 'none';
          }*/

          this.categories.push(temp[i]);
        }
      }

    }, (err) => {
      console.log(err)
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

  //Carga la página de la categoria del producto. 
  openCategoryPage(category) {
    //Especificar ChildViw como metodo de navegación. 
    this.childNavCtrl.setRoot(ProductsByCategoryPage, { "category": category }); 

  }

}