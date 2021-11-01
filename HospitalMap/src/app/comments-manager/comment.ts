export enum CommentState {
    approved, 
    denied, 
    pending
  }

export interface IComment {
    userId: string;
    userName: string;
    rating: number;
    userComment: string;
    imageUrl: string;
    dateInMiliseconds: number;
    commentState: CommentState;
        
}