import { Question } from '@/constants/question.types'
import React, { useState } from 'react'
import Player from './Player'
import { QuestionProps } from '@/constants/props'


const AudioQuestion = ({question} : QuestionProps) => {

  const [questions, setQuestions] = useState(question)

  return (
    <>
          <Player src={question.audioFilename!} />
          <div dangerouslySetInnerHTML={{ __html: question.title.en_US }} />
    </>
    
                
  )
}

export default AudioQuestion