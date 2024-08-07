import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name = 'John Depp';
  // addToCart:number = 0;
  // product = {
  // name : 'iPhone X',
  // price : 999,
  // color: 'Red',
  // Discounted_Price: 8.5,
  // inStock: 5
  // }

  // getDiscountedPrice(){
  //   return this.product.price - (this.product.price * this.product.Discounted_Price / 100)
  // }

  // onNameChange(event: any){
  //   // this.name = event.target.value
  //   // console.log(event)
  // }


  // decreamentCartValue(){
  //   if(this.addToCart>0){
  //     this.addToCart--;
  //   }
  // }


  // increamentCartValue(){
  //   if(this.addToCart < this.product.inStock){
  //     this.addToCart++;
  //   }
  // }

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  searchText: string = '';

  setSearchText(value: string){
    this.searchText = value;
  }

  listOfString:string[] = ['Mark', 'Jacob', 'Joey', 'Chandler', 'Ross']
}

