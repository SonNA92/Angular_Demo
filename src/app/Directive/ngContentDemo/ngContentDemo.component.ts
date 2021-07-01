import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ngContent',
    template: `
        <div class="container">
            <h3>noi dung the ngContent</h3>
            <ng-content></ng-content>
        </div>

    `
})

export class NgContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}