export enum CommentState {
    approved, 
    denied, 
    pending
  }

export interface IComment {
    commentId: string;
    userId: string;
    userName: string;
    rating: number;
    userComment: string;
    imageUrl: string;
    dateOfPosting: Date;
    commentState: CommentState;
        
}