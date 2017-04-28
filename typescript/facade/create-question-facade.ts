import {Injectable} from "@angular/core";
import {Observable, Observer} from 'rxjs';
import{CreateQuestionServiceImpl} from '../service/create-question-service';
import {Question} from '../domain/question';

@Injectable()
export class CreateQuestionFacade {
     constructor(private createQuestionservice: CreateQuestionServiceImpl) {
        console.log("in CreateQuestionFacade constructor()");
    }
   
    createQuestion(data: any) : Observable<Question> {
        console.log("data----",data);
        return this.createQuestionservice.create(data);
    } 

     findbyCategory(categoryId: string): Observable<Question[]> {
        console.log("in categoryId findBycategoryId()");
        return this.createQuestionservice.findById(categoryId);
    }
}