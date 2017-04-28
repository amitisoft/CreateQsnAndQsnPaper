import {Injectable} from "@angular/core";
import {Observable, Observer} from 'rxjs';
import {DynamoDB, SES} from "aws-sdk";
import {Question} from '../domain/question';
import { UUID } from 'angular2-uuid';

const AWS = require('aws-sdk');
let uuid = UUID.UUID();

//console.log("uuuuuuuuuuuuuuuuu",uuid);

import DocumentClient = DynamoDB.DocumentClient;

AWS.config.update({
    region: "us-east-1"
});

@Injectable()
export class createQuestionPaperserviceImpl {

  constructor() {
        console.log("in createQuestionPaperserviceImpl constructor()");
    }

    createQuestionPaper(data: any): Observable<Question> {
        console.log("in createQuestionPaperserviceImpl create()-----0000000000",data.length);
        const documentClient = new DocumentClient();

        const params = {
            TableName: "questionPaper",
            Item: {
                Qsn_Ppr_Id: uuid,
                Qsn_Id:data.QsnId,
                Category: data.Category
            }
        };

console.log("params============================",params)
        return Observable.create((observer:Observer<Question>) => {

            documentClient.put(params, (err, data: any) => {
                console.log("eeeeeeeeeeeeeeeeee",err);
                if(err) {
                    if(err.code === 'ConditionalCheckFailedException'){
                        observer.error(err);
                        return;
                    }
                }
               // console.log(data);
               // observer.next(data.Item[0]);
                observer.complete();
            });
        });

    }

}