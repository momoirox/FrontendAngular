import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FeedbackFormComponent>) { }

  ngOnInit(): void {
  }
  onRatingClicked(message: string) : void{
    alert('clicked ' + message);
  }

}
