import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Question } from '@/entities/question'
import type { QuizAnswer } from '@/entities/quiz/model/types'
import { AnswerQuestionButton } from '@/features/quiz/answerQuestion'
import { QuestionCard } from '@/entities/question/ui/QuestionCard/QuestionCard'
import { Flex } from '@/shared/ui/Flex'
import { QuestionNavigator } from './QuestionNavigator'
import quizImage from '@/shared/assets/images/woman_goggles.png'
import { AppRoutes } from '@/shared/const/router'

interface QuizProps {
  questions: Array<Question>
  answers: Array<QuizAnswer>
}

export function QuizSlider({ questions, answers }: QuizProps) {
  const [questionCount, setQuestionCount] = useState(0)
  const navigate = useNavigate()

  const currentQuestion = questions[questionCount]

  const onPrev = () => setQuestionCount(questionCount - 1)
  const onNext = () => setQuestionCount(questionCount + 1)
  const endQuiz = () => navigate(AppRoutes.QUIZ_RESULTS)

  const isFirstQuestion = questionCount === 0
  const isLastQuestion = questionCount === questions.length - 1

  return (
    <>
      <QuestionNavigator
        onPrev={onPrev}
        onNext={onNext}
        disablePrev={isFirstQuestion}
        disableNext={isLastQuestion}
      />
      <Flex>
        <QuestionCard question={currentQuestion} />
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
