import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  public isFirst = false;
  public isSecond= false;
  public lista = ["Ordinacija 3", "Ordinacija 2", "Ordinacija 1", "Informacije", "Ordinacija 4",  "Stomatologija","Operaciona sala 1", "WC muski", "WC zenski", "Operaciona sala 2"];
  constructor(private router: Router) { }



  ngOnInit(): void {
  }

  firstFloor(){
    console.log(this.isFirst);
    this.isFirst=true;
    this.isSecond=false;
  }
  secondFloor(){
    this.isFirst=false;
    this.isSecond=true;
  }

}
