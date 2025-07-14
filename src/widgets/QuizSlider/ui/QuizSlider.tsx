import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { QuizAnswer } from '@/entities/quiz/model/types'
import { ProgressBar } from '@/shared/ui/ProgressBar/ProgressBar'
import type { Question } from '@/entities/question'
import { AppRoutes } from '@/shared/const/router'
import { AnswerQuestionButton } from '@/features/quiz/answerQuestion'
import { QuestionCard } from '@/entities/question/ui/QuestionCard/QuestionCard'
import { AnswerDropdown } from '@/shared/ui/AnswerDropdown/AnswerDropdown'
import { Flex } from '@/shared/ui/Flex'
import { QuestionNavigator } from './QuestionNavigator'
import quizImage from '@/shared/assets/images/woman_goggles.png'

interface QuizProps {
  questions: Array<Question>
}

export function QuizSlider({ questions }: QuizProps) {
  const [questionCount, setQuestionCount] = useState(0)
  const navigate = useNavigate()

  console.log('q', questions)
  const currentQuestion = questions[questionCount]
  const shortAnswer = currentQuestion.shortAnswer

  const onPrev = () => setQuestionCount(questionCount - 1)
  const onNext = () => setQuestionCount(questionCount + 1)
  const endQuiz = () => navigate(AppRoutes.QUIZ_RESULTS)

  const isFirstQuestion = questionCount === 0
  const isLastQuestion = questionCount === questions.length - 1

  const render = (question: Question) => {
    return (
      <>
        <span>{question.title}</span>
        <AnswerDropdown title="Посмотреть ответ">{shortAnswer}</AnswerDropdown>
      </>
    )
  }

  return (
    <>
      <ProgressBar questions={questions} />
      <QuestionNavigator
        onPrev={onPrev}
        onNext={onNext}
        disablePrev={isFirstQuestion}
        disableNext={isLastQuestion}
      />
      <Flex>
        <QuestionCard question={currentQuestion} render={render} />
        <div className="quiz_image">
          <img src={quizImage} alt="quiz_image" />
        </div>
      </Flex>
      <Flex>
        <AnswerQuestionButton title="Знаю" answerValue={'known'} question={currentQuestion} />
        <AnswerQuestionButton title="Не знаю" answerValue={'unknown'} question={currentQuestion} />
      </Flex>
      <button disabled={!isLastQuestion} onClick={endQuiz}>
        Завершить
      </button>
    </>
  )
}
