export enum CommentState {
    approved, 
    denied, 
    pending
  }

export interface IComment {
    commentId: string;
    userId: string;
    userName: string;
    userComment: string;
    imageUrl: string;
    dateOfPosting: Date;
    show: boolean;
    anonymus: boolean;
    commentState: CommentState;
        
}