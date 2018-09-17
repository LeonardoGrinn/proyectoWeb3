import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SuccespaymentPage } from '../succespayment/succespayment';


@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  /* Checkout */
  placeOrder(){
    this.navCtrl.push(SuccespaymentPage);
  }

}
