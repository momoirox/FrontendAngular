import { Component, OnInit } from '@angular/core';
import { IComment } from './patient-comment';

@Component({
  selector: 'app-patient-comment',
  templateUrl: './patient-comment.component.html',
  styleUrls: ['./patient-comment.component.css']
})
export class PatientCommentComponent implements OnInit {
  userComments: IComment[] = [];


  constructor() {
    this.userComments = [{
      'userId': 1,
      'rating': 4,
      'userComment': "Phasellus ligula ante, tempus ac imperdiet ut, mattisac nibh. Orcivarius natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus.",
      'userName': 'Monika Bleuci',
      'imageUrl': ''
    },
    {
      'userId': 2,
      'rating': 1,
      'userComment': "Phasellus ligula ante, tempus ac imperdiet ut, mattisac nibh. Orcivarius natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus.",
      'userName': 'Selma Hayek',
      'imageUrl': ''
    }

    ];
  }

  ngOnInit(): void {
  }

}