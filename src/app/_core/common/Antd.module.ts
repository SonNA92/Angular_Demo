import { NgModule } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
    imports: [NzCarouselModule,NzGridModule],
    exports: [NzGridModule,NzCarouselModule],
    
})
export class AntDesignModule { }
