import { Component, OnInit } from '@angular/core';
import { IComment, CommentState } from './comment';

@Component({
  selector: 'app-comments-manager',
  templateUrl: './comments-manager.component.html',
  styleUrls: ['./comments-manager.component.css']
})
export class CommentsManagerComponent implements OnInit {
  allComments: IComment[] = [];
  constructor() {
    this.allComments = [{
      userId: "asjhdk",
      userName: "Jelna Stajic",
      rating: 5,
      userComment: "Prvi komentar",
      imageUrl: '',
      dateInMiliseconds: 238293823,
      commentState: CommentState.pending,
    },
    {
      userId: "wrfewfcsdf",
      userName: "Anonimus",
      rating: 4,
      userComment: "Drugi komentar",
      imageUrl: '',
      dateInMiliseconds: 328637263,
      commentState: CommentState.approved,
    },
    {
      userId: "wrfewfcsdf",
      userName: "Bozana Ruljic",
      rating: 4,
      userComment: "Treci komentar",
      imageUrl: '',
      dateInMiliseconds: 328637263,
      commentState: CommentState.approved,
    },
    {
      userId: "wrfewfcsdf",
      userName: "Pero peric",
      rating: 4,
      userComment: "Cetvrti komentar",
      imageUrl: '',
      dateInMiliseconds: 328637263,
      commentState: CommentState.denied,
    }

    ];

  }

  ngOnInit(): void {
  }

}


