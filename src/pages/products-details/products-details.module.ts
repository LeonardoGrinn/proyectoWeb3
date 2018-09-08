import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsDetailsPage } from './products-details';

@NgModule({
  declarations: [
    ProductsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsDetailsPage),
  ],
})
export class ProductsDetailsPageModule {}
