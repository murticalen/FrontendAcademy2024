import { useContext } from 'react'
import QuestionContext from '../../context/QuestionContext'

export const Question = () => {
  const question = useContext(QuestionContext)

  return (
    <div style={{ fontSize: '12px' }}>
      <div dangerouslySetInnerHTML={{ __html: question.question }} />
      <div dangerouslySetInnerHTML={{ __html: question.answers[question.correctAnswerIndex] }} />
    </div>
  )
}
