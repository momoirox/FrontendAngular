import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class Maps implements OnInit {
  isOn = false;
  status = false;
  constructor(private router: Router) {}

  public lista = ['Prostorija1', 'Prostorija2', 'Prostorija3', 'Prostorija4'];

  ngOnInit(): void {}

  changeButtonColor() {
    this.status = !this.status;
  }
  clickEvent() {
    this.router.navigateByUrl('floor');
  }
}
