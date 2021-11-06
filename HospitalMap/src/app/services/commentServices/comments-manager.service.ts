import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FeedbackStatus, IFeedback } from "../../interfaces/feedback";

@Injectable()
export class CommentsManagerService {

  constructor(private http: HttpClient) {}

  getFeedback() : Observable<IFeedback[]>  {

    return  this.http.get<IFeedback[]>(`${environment.baseUrl}` + 'api/Feedback');
  }
  

  
}

