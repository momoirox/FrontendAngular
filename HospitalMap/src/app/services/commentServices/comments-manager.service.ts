import { Injectable } from "@angular/core";
import { CommentState, IComment } from "../../interfaces/comment";

@Injectable()
export class CommentsManagerService {

    getAllComments() : IComment[] {
        return [{
            commentId: "DSFSDF",
            userId: "asjhdk",
            userName: "Jelna Stajic",
            userComment: "Prvi komentar",
            imageUrl: '',
            dateOfPosting: new Date(),
            show: true,
            anonymus: false,
            commentState: CommentState.pending,
          },
          {
            commentId: "GFDGDFG",
            userId: "asjhdk",
            userName: "Jelena Radman",
            userComment: "Neki komentar ",
            imageUrl: '',
            dateOfPosting: new Date(),
            show: true,
            anonymus: false,
            commentState: CommentState.pending,
          },
          {
            commentId: "GGFGDFG",
            userId: "wrfewfcsdf",
            userName: "Anonimus",
            userComment: "Drugi komentar",
            imageUrl: '',
            dateOfPosting: new Date(),
            show: true,
            anonymus: false,
            commentState: CommentState.approved,
          },
          {
            commentId: "FGHDFGDF",
            userId: "wrfewfcsdf",
            userName: "Bozana Ruljic",
            userComment: "Treci komentar",
            imageUrl: '',
            dateOfPosting: new Date(),
            show: true,
            anonymus: false,
            commentState: CommentState.approved,
          },
          {
            commentId: "DGDFGDF",
            userId: "wrfewfcsdf",
            userName: "Pero peric",
            userComment: "Cetvrti komentar",
            imageUrl: '',
            dateOfPosting: new Date(),
            show: true,
            anonymus: false,
            commentState: CommentState.denied,
          }
      
          ];
    }

    
}