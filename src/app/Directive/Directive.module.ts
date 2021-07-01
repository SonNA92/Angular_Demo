import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveComponent } from './Directive.component';
import { NgContentComponent } from './ngContentDemo/ngContentDemo.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AntDesignModule } from '../_core/common/Antd.module';


@NgModule({
    imports: [BrowserModule,FormsModule,AntDesignModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent,NgContentComponent],
    
})
export class DirectiveModule { }
