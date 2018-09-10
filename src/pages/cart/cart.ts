import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  //Variables
  cartItems: any[] = []; //Productos contenidos en el carrito.
  total: any; //Total de la compra.
  showEmptyCartMessage: boolean = false; //Mensaje de carrito vacio. 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public viewCtrl: ViewController) {

    this.total = 0.0; //Almacernar el total. 

    this.storage.ready().then(() => { //Ejecutar la funcion solo cuando el storage se ha cargado.

      this.storage.get("cart").then((data) => {
        this.cartItems = data;
        console.log(this.cartItems);

        //Verificar si el carrito contiene productos. 
        if (this.cartItems.length > 0) {

          //Calcular total.
          this.cartItems.forEach((item, index) => {
            this.total = this.total + (item.product.price * item.qty)
          }) //Checar porque no se borra la cantidad. 

        } else {

          //Mostar mensaje en caso de estar vacio.
          this.showEmptyCartMessage = true;

        }


      })

    })

  }

  /* Eliminar productos del carrito */
  removeFromCart(item, i) {

    let price = item.product.price; //Obtener producto.
    let qty = item.qty; //Obtener cantidad. 

    this.cartItems.splice(i, 1); //i = index. 

    //Acutalizar contenido del carrito.
    this.storage.set("cart", this.cartItems).then(() => {

      this.total = this.total - (price * qty); //Eliminar precio y cantidad. 

    });

    //Verificar si el carrito esta vacio. 
    if (this.cartItems.length == 0) {
      this.showEmptyCartMessage = true;
    }


  }

  /* cerrar ventana */
  closeModal() {
    this.viewCtrl.dismiss();
  } 

}
