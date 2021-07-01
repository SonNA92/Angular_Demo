import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-header',
    template: `
        <div class="header" >Header</div>
    `,
    styles:[
        `
            .header{
                background-color:red;
            }
        `
    ]
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}