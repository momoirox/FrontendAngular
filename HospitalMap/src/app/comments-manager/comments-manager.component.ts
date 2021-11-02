import { Component, OnInit } from '@angular/core';
import { IComment, CommentState } from './comment';
import { CommentsManagerService } from './comments-manager.service';

@Component({
  selector: 'app-comments-manager',
  templateUrl: './comments-manager.component.html',
  styleUrls: ['./comments-manager.component.css'],
  providers:[CommentsManagerService]
})
export class CommentsManagerComponent implements OnInit {
  allComments: IComment[] = [];
  waiting: IComment[] = [];
  approved: IComment[] = [];
  denied: IComment[] = [];
  constructor(private _commentsService : CommentsManagerService) {
    
  }

  ngOnInit(): void {
    this.allComments = this._commentsService.getAllComments();
    for( let c of this.allComments){
      if(c.commentState == CommentState.pending){
        this.waiting.push(c);
      }else{
        if(c.commentState == CommentState.approved){
          this.approved.push(c);
      }else{
        this.denied.push(c);
      }
    }}
  }

  approveComment(id : string){
    for( let c of this.allComments){
      if(c.commentId === id){
        c.commentState = CommentState.approved;
        console.log("izmenjeo za id :" + id);
      }
    }
    this.updateData();
  }
  denyComment(id : string){
    for( let c of this.allComments){
      if(c.commentId === id){
        c.commentState = CommentState.denied;
        console.log("izmenjeo za id :" + id);
      }
    }
    this.updateData();
  }

  updateData() {
    this.approved = [];
    this.waiting = [];
    this.denied = [];
    for( let c of this.allComments){
      if(c.commentState == CommentState.pending){
        this.waiting.push(c);
      }else{
        if(c.commentState == CommentState.approved){
          this.approved.push(c);
      }else{
        this.denied.push(c);
      }
    }}
  }

}


