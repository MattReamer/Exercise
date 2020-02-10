import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;
  isCollapsed: boolean = true;
  constructor() {

    this.user = {
      name: "Matthew Reamer",
      title: "Software dev",
      address: "123 fake st",
      phone: ["215-123-1234",
        "267-885-9447"]
    }

  }

  ngOnInit() {
  }

  toggleInfo = () => {
    if (this.isCollapsed == true) {
      this.isCollapsed = false
    } else if (this.isCollapsed == false) {
      this.isCollapsed = true;
    }

  }
}
