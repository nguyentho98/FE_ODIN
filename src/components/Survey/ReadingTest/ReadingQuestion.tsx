import { QuestionProps } from '@/constants/props'
import React from 'react'

export const ReadingQuestion = ({question} : QuestionProps) => {
  return (
    <div>
      {/* Anh css cho nay cho no dep */}
      {
   <div className="mb-3" dangerouslySetInnerHTML={{__html : question.title.en_US}} /> 
      }
    </div>
  )
}