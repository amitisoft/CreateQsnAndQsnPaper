import { CreateQuestionFacade } from '../facade/create-question-facade';
import{CreateQuestionServiceImpl} from '../service/create-question-service';
import { CreateQuestionPaperFacade } from '../facade/create-question-paper-facade';
import{createQuestionPaperserviceImpl} from '../service/create-question-paper-service';


export const AppProviders = [
    CreateQuestionFacade,
    CreateQuestionServiceImpl,
    CreateQuestionPaperFacade,
    createQuestionPaperserviceImpl

];
