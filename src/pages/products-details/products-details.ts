import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import { CartPage } from '../cart/cart';

import { Storage } from '@ionic/storage'; //Importante para poder almacenar productos en el carrito. 

@Component({
  selector: 'page-products-details',
  templateUrl: 'products-details.html',
})
export class ProductsDetailsPage {

  product: any;
  WooCommerce: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController, public modalCtrl: ModalController) {

    this.product = this.navParams.get("product");
    console.log(this.product);

    //Inicializamos WooCommerce
    this.WooCommerce = WC({
      url: "http://escueladehector.000webhostapp.com/",
      consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
      consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
    });

  }

  //Añadir productos al carrito. 
  addToCart(product) {

    this.storage.get("cart").then((data) => {

      //Checar si el carrito esta vacio. 
      if (data == null || data.length == 0) {
        data = []; //Inicializamos array.

        //Insertamos productos al array. 
        data.push({
          "product": product, //producto.
          "qty": 1, //cantidad
          "amount": parseFloat(product.price) //precio
        })
      } else {

        let added = 0;

        //Revisar todos los productos del carrito. 
        for (let i = 0; i < data.length; i++) {

          //Verificar si el producto que se esta agregando al carrito ya existe. 
          if (product.id == data[i].product.id) { //Comparar ID de productos. 
            let qty = data[i].qty;

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
            "product": product, //producto.
            "qty": 1,//cantidad
            "amount": parseFloat(product.price)//precio.
          })
        }

      }

      //Actualizar el contenido del carrito.
      this.storage.set("cart", data).then(() => {
        console.log("Todo listo maestro pokemon");
        console.log(data);

        this.toastCtrl.create({
          message: "Todo listo maestro pokemon",
          duration: 3000
        }).present();

      })

    })

  }

  //Abrir modal del carrito de compras. 
  openCart() {

    this.modalCtrl.create(CartPage).present();

  }

}
