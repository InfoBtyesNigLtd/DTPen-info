import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion1',
  templateUrl: './accordion1.component.html',
  styleUrls: ['./accordion1.component.scss'],
})
export class Accordion1Component implements OnInit {

  features = [
    'Power Steering', 'Power Windows Front', 'Power Windows Rear', 'Remote Trunk Opener',
    'Remote Fuel Lid Opener', 'Low Fuel Warning Light', 'Accessory Power Outlet', 'Trunk Light',
    'Vanity Mirror', 'Rear Reading Lamp', 'Rear Seat Headrest', 'Rear Seat Centre Arm Rest',
    'Height Adjustable Front Seat Belts', 'Cup Holders Front', 'Cup Holders Rear', 'Seat Lumbar Support',
    'Multifunction Steering Wheel'
];

@Input('product') product: any;

  constructor() { }

  ngOnInit() {}

}
