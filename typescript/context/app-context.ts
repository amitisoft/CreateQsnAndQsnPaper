import {CandidateServiceImpl} from "../service/candidate-service";
import {CandidateFacade} from "../facade/candidate-facade";
import { CreateQuestionFacade } from '../facade/create-question-facade';
import{CreateQuestionServiceImpl} from '../service/create-question-service';
import { CreateQuestionPaperFacade } from '../facade/create-question-paper-facade';
import{createQuestionPaperserviceImpl} from '../service/create-question-paper-service';


export const AppProviders = [
    CandidateServiceImpl,
    CandidateFacade,
    CreateQuestionFacade,
    CreateQuestionServiceImpl,
    CreateQuestionPaperFacade,
    createQuestionPaperserviceImpl

];
