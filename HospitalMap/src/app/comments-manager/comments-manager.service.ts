import { Injectable } from "@angular/core";
import { CommentState, IComment } from "./comment";

@Injectable()
export class CommentsManagerService {

    getAllComments() : IComment[] {
        return [{
            commentId: "DSFSDF",
            userId: "asjhdk",
            userName: "Jelna Stajic",
            rating: 5,
            userComment: "Prvi komentar",
            imageUrl: '',
            dateOfPosting: new Date(),
            commentState: CommentState.pending,
          },
          {
            commentId: "GFDGDFG",
            userId: "asjhdk",
            userName: "Jelena Radman",
            rating: 4,
            userComment: "Neki komentar ",
            imageUrl: '',
            dateOfPosting: new Date(),
            commentState: CommentState.pending,
          },
          {
            commentId: "GGFGDFG",
            userId: "wrfewfcsdf",
            userName: "Anonimus",
            rating: 2,
            userComment: "Drugi komentar",
            imageUrl: '',
            dateOfPosting: new Date(),
            commentState: CommentState.approved,
          },
          {
            commentId: "FGHDFGDF",
            userId: "wrfewfcsdf",
            userName: "Bozana Ruljic",
            rating: 3,
            userComment: "Treci komentar",
            imageUrl: '',
            dateOfPosting: new Date(),
            commentState: CommentState.approved,
          },
          {
            commentId: "DGDFGDF",
            userId: "wrfewfcsdf",
            userName: "Pero peric",
            rating: 2,
            userComment: "Cetvrti komentar",
            imageUrl: '',
            dateOfPosting: new Date(),
            commentState: CommentState.denied,
          }
      
          ];
    }

    
}