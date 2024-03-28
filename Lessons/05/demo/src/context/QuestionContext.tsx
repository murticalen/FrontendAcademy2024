import { Context, createContext } from 'react'

export interface QuestionContextType {
  question: string
  answers: string[]
  correctAnswerIndex: number
}

const QuestionContext = createContext<QuestionContextType | undefined>(undefined)

export default QuestionContext as Context<QuestionContextType>
