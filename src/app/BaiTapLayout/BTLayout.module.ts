import { NgModule } from '@angular/core';
import { ContentComponent } from './BTContent/BTContent';
import { HeaderComponent } from './BTHeader/BTHeader';
import { BaiTapLayoutComponent } from './BTLayout.component';
import { SidebarComponent } from './BTSidebar/BTSidebar';



// Module chi quan li component chu ko co giao dien
@NgModule({
    declarations: [
        BaiTapLayoutComponent,
        HeaderComponent,
        ContentComponent,
        SidebarComponent
    ], // noi khai bao cac component su dung cho layout nay

    imports: [], // import 1 module khac vao module nay de su dung

    exports: [BaiTapLayoutComponent], // xuat ra nhung gi cho module khac su dung
    
})  
export class BaiTapLayoutModule { }
