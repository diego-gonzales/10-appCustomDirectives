import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [
  ]
})
export class AddProductComponent implements OnInit {

  mesagge: string = 'Field Required';
  color: string = 'red';

  myFormcito: FormGroup = this.fb.group({
    product_name: [ '', [Validators.required] ]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  existError( controlName: string ): boolean {
    return this.myFormcito.get('product_name')?.invalid || false;
  };


  changeMesagge() {
    this.mesagge = (Math.random() *100).toString();
  }
  changeColor() {
    const colorRandom = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = colorRandom;
  }
}
