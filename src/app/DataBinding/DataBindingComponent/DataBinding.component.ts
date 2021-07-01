import { Component, OnInit } from '@angular/core';
import { SanPham } from 'src/app/_core/model/sanPham';

@Component({
    selector: 'app-databinding',
    template: `
        <div class="container">
            <h3>{{name}}</h3>
            <h3>{{showMessage('Son')}}</h3>
            <input #inputTag [value]="name"/>

            <button  class="btn btn-success" (click)="changeName(inputTag.value)">Change name</button>
            <hr>
            <h3>Two way binding</h3>
            <div class="row">
                <div class="col-6">
                    <h3>nhap thong tin san pham</h3>
                    <div class="form-group">
                        <p>ma sp</p>
                        <input #maSp [(ngModel)]="sanPham.maSp"  class="form-control">

                    </div>
                    <div class="form-group">
                        <p>ten sp</p>
                        <input #tenSP [(ngModel)]="sanPham.tenSP"  class="form-control">

                    </div>
                    <div class="form-group">
                        <p>hinh anh</p>
                        <input #hinhAnh [(ngModel)]="sanPham.hinhAnh" class="form-control">

                    </div>
                    <div class="form-group">
                        <p>gia sp</p>
                        <input #gia [(ngModel)]="sanPham.gia" class="form-control">

                    </div>
                    <div class="form-group">
                        <button (click)="nhapThongTin(maSp.value,tenSP.value,gia.value,hinhAnh.value)">Nhap thong tin</button>

                    </div>
                </div>
                <div class="col-6">
                    <div class="card w-50">
                        <img [src]="sanPham.hinhAnh" class="h-100" alt="">
                        <div class="card-body">
                            <p>{{sanPham.tenSP}}</p>
                            <p>{{sanPham.gia}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles:[`
    
    `]
})

export class DataBindingComponent implements OnInit {
    // tat ca du lieu tren giao dien deu duoc quan li boi thuoc tinh cua component
    name:string = 'cyberSoft';
    
    sanPham:SanPham = {maSp:'1',tenSP:'Iphone',gia:'1000',hinhAnh:'http://picsum.photos/id/100/200/200'};

    constructor() { }
    changeName(newName:string):void{
        this.name = newName;
    }
    nhapThongTin(maSp:string,tenSP:string,gia:string,hinhAnh:string){
        this.sanPham = {maSp,tenSP,gia,hinhAnh};
    }

    ngOnInit() { }

    showMessage(name:string):string{

        return `${name}`
    }
}