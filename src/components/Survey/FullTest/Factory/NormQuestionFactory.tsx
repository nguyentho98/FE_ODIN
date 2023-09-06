import { SurveyQuestionType } from "@/constants/QuestionType";
import { Question } from "@/constants/question.types";
import AudioQuestion from "../../ListeningTest/AudioSection/AudioQuestion";
import { ReadingQuestion } from "../../ReadingTest/ReadingQuestion";
import { SimpleChoiceQuestion } from "../../QuestionComponents/SimpleChoiceQuestion/SimpleChoiceQuestion";
import { MultipleChoiceQuestion } from "../../QuestionComponents/MultipleChoiceQuestion/MultipleChoiceQuestion";
import { CharQuestion } from "../../QuestionComponents/CharQuestion/CharQuestion";
import { DateQuestion} from "../../QuestionComponents/DateQuestion/DateQuestion";
import { DateTimeQuestion } from "../../QuestionComponents/DateTimeQuestion/DateTimeQuestions";
import { TextQuestion } from "../../QuestionComponents/TextQuestion/TextQuestion";
import SpeakingQuestion from "../../SpeakingTestElsa/SpeakingQuestion";


export function NormQuestionFactory(question: Question | any, index: number) {
  switch (question.questionType) {
    case SurveyQuestionType.SIMPLE_CHOICE:
      return <SimpleChoiceQuestion question={question} index={index} />
  
    case SurveyQuestionType.MULTIPLE_CHOICE:
      return <MultipleChoiceQuestion question={question} index={index} />
    
    case SurveyQuestionType.SINGLE_LINE_WIHTOUT_ANSWER:
      return <CharQuestion question={question} index={index} />

    case SurveyQuestionType.SINGLE_LINE_WITH_ANSWER:
      return <CharQuestion question={question} index={index} isScored={true} />
    case SurveyQuestionType.DATE:
      return <DateQuestion question={question} index={index} />
      
    case SurveyQuestionType.DATETIME:
      return <DateTimeQuestion question={question} index={index} />
          
    case SurveyQuestionType.MULTIPLE_LINE:
      return <TextQuestion question={question} index={index} />
    
    case SurveyQuestionType.RECORDING:
      return <SpeakingQuestion question={question} />
        default:
      return <CharQuestion question={question} index={index} />
    
  }

  return <>Default</>

}