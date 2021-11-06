import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { IFeedback, FeedbackStatus } from '../interfaces/feedback';
import { CommentsManagerService } from '../services/commentServices/comments-manager.service';

@Component({
  selector: 'app-comments-manager',
  templateUrl: './comments-manager.component.html',
  styleUrls: ['./comments-manager.component.css'],
  providers: [CommentsManagerService]
})
export class CommentsManagerComponent implements OnInit {
 // allComments: Observable<IComment> = new Observable<IComment>();
  // allComments: Observable<IComment> = new Observable<IComment>();
  allComments!: IFeedback[];
  waiting!: IFeedback[];
  approved: IFeedback[] = [];
  sub! : Subscription;
  constructor(private _commentsService: CommentsManagerService) {

  }

  ngOnInit(): void {
    
    this.allComments = [];
    this.sub = this._commentsService.getFeedback().subscribe({
      next:  com => {this.allComments = com;}
     
    });
    
    console.log('All: ', JSON.stringify(this.allComments))
    console.log(this.allComments.length);
    
  }
/*
  approveComment(id: string) {

    for (let c of this.allComments) {

      if (c.commentId === id) {
        c.commentState = CommentState.approved;
        console.log("izmenjeo za id :" + id);
      }

    }

    this.updateData();
  }


  updateData() {
    this.approved = [];
    this.waiting = [];
    for (let c of this.allComments) {
      if (c.commentState == CommentState.pending) {
        this.waiting.push(c);
      } else {
        if (c.commentState == CommentState.approved) {
          this.approved.push(c);
        }
      }
    }
  }
*/
}


