import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  //Variables.
  newUser: any = {};
  billing_shipping_same: boolean;
  WooCommerce: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {


    this.newUser.billing_address = {}; //Datos personales
    this.newUser.shipping_address = {}; //Datos de envio.
    this.billing_shipping_same = false; //BOOL DE DATOS

    //Inicializamos WooCommerce
    this.WooCommerce = WC({
      url: "http://escueladehector.000webhostapp.com/",
      consumerKey: "ck_4a4fa92e1961a050cf9b93110cb615c0cb05db03",
      consumerSecret: "cs_00cd74a4fc231fc29d788f1d54fa971bc58cbf95"
    });
  }

  //Cambiar falso/verdadero el checkbox del form de datos de envio. 
  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;
  }

  checkEmail() {

    let validEmail = false;

    //Expresiones regulares que contienen un email.
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Verificar si el correo esta disponible. 
    if (reg.test(this.newUser.email)) {//Obtener email introducido por el usuario que se esta registrando. 
      //email looks valid

      this.WooCommerce.getAsync('customers/email/' + this.newUser.email).then((data) => {
        let res = (JSON.parse(data.body));

        //Checar si el correo ya existe
        if (res.errors) {
          validEmail = true;

        } else {
          validEmail = false;

          this.toastCtrl.create({
            message: "Profe me dio NILL (Atte: El Ivan)",
            showCloseButton: true
          }).present();
        }

        console.log(validEmail);

      })



    } else { //Validar uso de caracteres correctos. 
      validEmail = false;
      this.toastCtrl.create({
        message: "¡Escriba bien mijo!",
        showCloseButton: true
      }).present();
      console.log(validEmail);
    }

  }

  signup() {

    let customerData = {
      customer: {}
    }

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
    }

    //Checar si el checkbox de Al chile es la misma info esta marcado para copiar esa info en envio.
    if (this.billing_shipping_same) {
      this.newUser.shipping_address = this.newUser.shipping_address;
    }


    this.WooCommerce.postAsync('customers', customerData).then((data) => {

      let response = (JSON.parse(data.body));

      if (response.customer) {
        this.alertCtrl.create({
          title: "Se creo tu cuenta Papu",
          message: "Entrale a la tombola y compra Animalditos",
          buttons: [{
            text: "Entrale Papu",
            handler: () => {
              //TODO
            }
          }]
        }).present();
      } else if (response.errors) {
        this.toastCtrl.create({
          message: response.errors[0].message,
          showCloseButton: true
        }).present();
      }

    })

  }

}
