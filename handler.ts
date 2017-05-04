import 'reflect-metadata';
import { AppProviders } from './typescript/context/app-context';
import { ExecutionContextImpl } from "./typescript/context/execution-context-impl";
import {CreateQuestionHandler} from './typescript/web/create-question-handler';
import {QuestionPaperHandler} from './typescript/web/question-paper-handler';


//exports.createQuestionFunction = ExecutionContextImpl.createHttpHandler(AppProviders, CreateQuestionHandler.createQuestion);
//exports.getQuestionByCategoryFunction = ExecutionContextImpl.createHttpHandler(AppProviders, CreateQuestionHandler.getQuestionByCategory);

exports.createQuestionPaperFunction = ExecutionContextImpl.createHttpHandler(AppProviders, QuestionPaperHandler.createQuestionPaper);
