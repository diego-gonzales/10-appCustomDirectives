import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { AddProductComponent } from './pages/add-product/add-product.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
