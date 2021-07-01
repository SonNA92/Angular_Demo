import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-sidebar',
    template: `
        <div class="sidebar">Sidebar</div>
    `,
    styles:[
        `
            .sidebar{
                background-color:green;
            }
        `
    ]
})

export class SidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}