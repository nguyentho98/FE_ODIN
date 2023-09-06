import { SurveyQuestionType } from "@/constants/QuestionType";
import { Question } from "@/constants/question.types";
import AudioQuestion from "../../ListeningTest/AudioSection/AudioQuestion";
import { ReadingQuestion } from "../../ReadingTest/ReadingQuestion";


export function SpecQuestionFactory(question: Question | any) {

  switch (question.questionType) {
    case SurveyQuestionType.AUDIO:
      return <AudioQuestion question={question} />
    case SurveyQuestionType.ONLY_TITLE:
      return <ReadingQuestion question={question} />
  }

}