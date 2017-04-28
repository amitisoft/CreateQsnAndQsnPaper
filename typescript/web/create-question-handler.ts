import { CreateQuestionFacade } from '../facade/create-question-facade';
import { Injector } from '@angular/core';
import { HttpContextImpl } from "../http/http-context-impl";

export class CreateQuestionHandler {

    static createQuestion (httpContext:HttpContextImpl,injector:Injector) : void {
          console.log("CreateQuestionHandler");
    let body = httpContext.getRequestBody();
        console.log("pathParameters-----",body);

        injector.get(CreateQuestionFacade).createQuestion(body)
            .subscribe(result => {
                httpContext.ok(200, result);
            },  err => {
                httpContext.fail(err, 500);
        });
    }

static getQuestionByCategory(httpContext:HttpContextImpl,injector:Injector):void{

    let body = httpContext.getRequestBody();

        console.log("pathParameters-----??????????",body);

        let categoryId = body["Category"];
        let lastqsnid = body["LastqsnId"]
       console.log("lastqsnid......",lastqsnid);
        injector.get(CreateQuestionFacade).findbyCategory(categoryId,lastqsnid)
            .subscribe(result => {
                httpContext.ok(200, result);
            },  err => {
                httpContext.fail(err, 500);
            });



}

}