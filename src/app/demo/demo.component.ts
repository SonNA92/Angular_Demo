import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo', // selector cua the (thuong dung la ten the)
  template: `
    <div class="color-red"> hello </div>
  
  `, // chua thanh phan giao dien cua the
  styles: [`
    div.color-red{
      color:red;
    }
  `]} // phan link den file CSS neu la urls, ko co url thi viet css luon ben trong
  )
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
