import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './BaiTapLayout/BTContent/BTContent';
import { FooterComponent } from './BaiTapLayout/BTFooter/BTFooter';
import { HeaderComponent } from './BaiTapLayout/BTHeader/BTHeader';
import { BaiTapLayoutComponent } from './BaiTapLayout/BTLayout.component';
import { BaiTapLayoutModule } from './BaiTapLayout/BTLayout.module';
import { SidebarComponent } from './BaiTapLayout/BTSidebar/BTSidebar';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DemoComponent } from './demo/demo.component';
import { DirectiveModule } from './Directive/Directive.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PropsModule } from './Props/Prop.module';

registerLocaleData(en);

@NgModule({
  declarations: [ // noi chua cac component hien thi
    AppComponent,
    DemoComponent
    
  ],
  imports: [
    BrowserModule,
    // BaiTapLayoutModule // chi can import module nay thi App co the su dung duoc tat ca component ma module nay su dung
    // DataBindingModule,
    DirectiveModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    PropsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent] // cac the co the su dung tren file index.html
})
export class AppModule { }
