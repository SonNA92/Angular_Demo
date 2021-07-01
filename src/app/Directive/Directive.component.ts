import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container mb-5">
            <h3>directive Structural</h3>
            <h3>ngIf</h3>
            <h3>{{number}}</h3>
            <input #num [value] ="number">
            <button (click)="nhapSo(num.value)">In</button>
            <div *ngIf="(number%2)===0;else tempSoLe">So chan</div>
            <ng-template #tempSoLe>
                So le
            </ng-template>
            <hr>
            <h3>ng Switch</h3>
            <select [(ngModel)]="color">
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="green">green</option>

            </select>
            <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'" style="color:red" >Red</div>
                <div *ngSwitchCase="'black'" style="color:black" >Black</div>
                <div *ngSwitchCase="'green'" style="color:green" >Green</div>
            </div>
            <hr>
            <h3>ng for</h3>
            <h3>Product list</h3>
            <div class="row">
                <div class="col-4" *ngFor="let prod of arrProduct;let i = index">
                    <div class="card text-left">
                      <img class="card-img-top" [src]="prod.img" alt="">
                      <div class="card-body">
                        <h4 class="card-title">{{prod.name}}</h4>
                        <p class="card-text">{{prod.price}}</p>
                      </div>
                    </div>
                </div>
            </div>
            <h3>Table Product</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>img</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- kiem tra dieu kien truoc khi render -->
                    <ng-container *ngIf="arrProduct; else ketQuaRong">
                    <tr *ngFor="let prod of arrProduct;let i = index">
                        <td>{{prod.id}}</td>
                        <td>{{prod.name}}</td>
                        <td>{{prod.price}}</td>
                        <td>{{prod.img}}</td>
                        <td><button class="btn btn-danger">Xoa</button></td>
                    </tr>
                    </ng-container>
                </tbody>
            </table>

            <!-- cho phep hien thi the rong trong moi truong hop -->
            <!-- <ng-container *ngTemplateOutlet="ketQuaRong"></ng-container> -->
            <ng-template #ketQuaRong>
                <div>khong tim thay ket qua</div>
            </ng-template>

            <hr>
            <h3>ngContent</h3>
            <app-ngContent>
                <div class="bg-dark text-white p-5">
                <h3 class="title">Title</h3>
                <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos deleniti, aspernatur ratione esse tempora pariatur!</p>
                </div>
                
            </app-ngContent>
            <hr>
            <hr>
            <h3>ngClass</h3>
            <div class="container">
                <h3>danh sach ghe</h3>
                <button [ngClass]="{'gheDaDat':ghe.daDat,'gheVip':ghe.vip}" class="ghe" *ngFor="let ghe of arrGhe" [disabled]="ghe.daDat">{{ghe.stt}}</button>
            </div>


            <p [ngStyle]="{'font-size':fontSize + 'px'}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni ullam tenetur aliquid aliquam veniam itaque neque quam, dolorem exercitationem?</p>
            <button (click)="tangFontSize()">+</button>
            <button (click)="giamFontSize()">-</button>
            <h3>su dung thu vien antd</h3>
            <nz-carousel [nzEffect]="effect">
                <div nz-carousel-content *ngFor="let index of array">
                <h3>{{ index }}</h3>
            </div>
    </nz-carousel>

        </div>
    `,
    styleUrls:['./Directive.component.scss']
})

export class DirectiveComponent implements OnInit {

    array = [1, 2, 3, 4];
    effect = 'scrollx';
    fontSize:number = 20;
    tangFontSize(){
        this.fontSize += 1
    }
    giamFontSize(){
        this.fontSize -= 1
    }
    arrGhe:Ghe[] = [
        {maGhe:'1',stt:'1',daDat:false,vip:false},
        {maGhe:'2',stt:'2',daDat:true,vip:true},
        {maGhe:'3',stt:'3',daDat:false,vip:true}
    ]
    arrProduct:Product[] = [
        {id:'1',name:'Iphone',price:1000,img:'https://picsum.photos/id/1/150/150'},
        {id:'2',name:'Iphone 2',price:1000,img:'https://picsum.photos/id/2/150/150'},
        {id:'3',name:'Iphone 3',price:1000,img:'https://picsum.photos/id/3/150/150'}

    ]
    color:string = 'black';
    number:number = 5;
    constructor() { }
    nhapSo(num:string){
        this.number = Number(num);
    }

    ngOnInit() { }
}

interface Ghe{
    maGhe:string,
    stt:string,
    daDat:boolean,
    vip:boolean
}
interface Product{
    id:string,
    name:string,
    price:number,
    img:string
    
}