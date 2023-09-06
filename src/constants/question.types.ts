import { SurveyQuestionType } from "./QuestionType"

export type Answer = {
    valueImageFileName?: string
    value: any
    answerScore: number
    id: number
}
export type MatrixAnswer = {
    cols: Answer[]
    rols: Answer[]
}
export type Question = {
    questionId: number
    sequence: number
    questionType: SurveyQuestionType
    title: any
    description: any
    saveAsEmail: boolean
    saveAsNickName: boolean
    isTimeLimited: boolean
    audioFilename?: string
    questionPlaceholder?: any
    constrErrorMsg?: any
    validationErrorMsg?: any
    constrMandatory: boolean
    timeLimit: number
    validationLengthMin: number
    validationLengthMax: number
    suggestedAnswers?: Answer[] | MatrixAnswer
}
