import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {
  editingMode = false;
  @Input()
  room!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  startEditing(){
    this.editingMode = true;
  }

  cancel(){
    this.editingMode = false;
  }

  save(){
    this.editingMode = false;
  }

}
