import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout',
    template: `
    <div>
    <app-bt-header></app-bt-header>
    <div class="row">
        <div class="col-8 pr-0">
            <app-bt-content></app-bt-content>
        </div>
        <div class="col-4 pl-0">
            <app-bt-sidebar></app-bt-sidebar>
        </div>
    </div>
    </div>
    `
})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}