import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-4" *ngFor="let prod of arrProduct">
                    <app-product [product]="prod"></app-product>
                </div>
            </div>
        </div>

    `
})

export class ProductListComponent implements OnInit {

    arrProduct:Product[] = [
        {id:'1',name:'Iphone',price:1000,img:'https://picsum.photos/id/1/150/150'},
        {id:'2',name:'Iphone 2',price:1000,img:'https://picsum.photos/id/2/150/150'},
        {id:'3',name:'Iphone 3',price:1000,img:'https://picsum.photos/id/3/150/150'}

    ]
    constructor() { }

    ngOnInit() { }

    
}
interface Product{
    id:string,
    name:string,
    price:number,
    img:string
    
}