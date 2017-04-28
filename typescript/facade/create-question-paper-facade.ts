import {Injectable} from "@angular/core";
import {Observable, Observer} from 'rxjs';
import{createQuestionPaperserviceImpl} from '../service/create-question-paper-service';
import {Question} from '../domain/question';

@Injectable()
export class CreateQuestionPaperFacade {
     constructor(private createQuestionPaperservice: createQuestionPaperserviceImpl) {
        console.log("in CreateQuestionFacade constructor()");
    }
   
    createQuestionPaper(data: any) : Observable<Question> {
        console.log("data----",data);
        return this.createQuestionPaperservice.createQuestionPaper(data);
    } 

}