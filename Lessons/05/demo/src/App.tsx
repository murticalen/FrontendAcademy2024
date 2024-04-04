import { useEffect, useState } from 'react'
import './App.css'
import { Memoization } from './components/Memoization/Memoization'
import { MemoizedForm } from './components/MemoizedForm'
import { Question } from './components/Quiz/Question'
import { Resizeable } from './components/Resizeable'
import { ThemeSelector } from './components/ThemeSelector'
import QuestionContext, { QuestionContextType } from './context/QuestionContext'

function App() {

  const [questions, setQuestions] = useState<QuestionContextType[]>([])

  useEffect(() => {

    async function getQuestions() {
      const url = 'https://opentdb.com/api.php?amount=15&type=multiple'
      try {
        const response = await fetch(url)
        if (response.status === 200) {
          const questionsResponse = await response.json()

          setQuestions(questionsResponse.results.map((v: {
            question: string;
            correct_answer: string;
            incorrect_answers: string[]
          }) => {
            const result: QuestionContextType = {
              question: v.question,
              answers: [v.correct_answer, ...v.incorrect_answers],
              correctAnswerIndex: 0,
            }
            return result
          }))
        }
      } catch (error) {
        console.error(error)
      }
    }

    getQuestions()

  }, [])

  return (
    <ThemeSelector>
      <div className='app-header'>
        Your App:
      </div>

      <MemoizedForm />
      <Memoization/>
      <Resizeable />
      <div style={{ fontSize: '16px', color: 'var(--primary-variant)', marginTop: '8px' }}>Questions and answers:</div>
      {questions.map(v => {
        return (
          <QuestionContext.Provider key={v.question} value={v}>
            {/* <QuestionContext.Provider value={questions[0]}> */}
            <Question />
            {/* </QuestionContext.Provider> */}
          </QuestionContext.Provider>
        )
      })}
    </ThemeSelector>
  )
}

export default App
