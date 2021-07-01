import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './DataBindingComponent/DataBinding.component';



@NgModule({
    imports: [FormsModule], // ho tro two-binding
    exports: [DataBindingComponent],
    declarations: [DataBindingComponent],
})
export class DataBindingModule { }
