import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Question } from '@/entities/question'
import { AppRoutes } from '@/shared/const/router'
import { AnswerQuestionButton } from '@/features/quiz/answerQuestion'
import { QuestionCard } from '@/entities/question/ui/QuestionCard/QuestionCard'
import { AnswerDropdown } from '@/shared/ui/AnswerDropdown/AnswerDropdown'
import { Flex } from '@/shared/ui/Flex'
import { QuestionNavigator } from '../QuiestionNavigator/QuestionNavigator'
import quizImage from '@/shared/assets/images/woman_goggles.png'
import cls from './QuizSlider.module.scss'

interface QuizProps {
  questions: Array<Question>
}

export function QuizSlider({ questions }: QuizProps) {
  const [questionCount, setQuestionCount] = useState(0)
  const result = useState<null | 'known' | 'unknown'>(null)

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
        <Flex className={cls.buttons}>
          <AnswerQuestionButton title="Знаю" answerValue={'known'} question={currentQuestion} />
          <AnswerQuestionButton
            title="Не знаю"
            answerValue={'unknown'}
            question={currentQuestion}
          />
        </Flex>
      </>
    )
  }

  return (
    <div className={cls.slider}>
      <QuestionNavigator
        onPrev={onPrev}
        onNext={onNext}
        disablePrev={isFirstQuestion}
        disableNext={isLastQuestion}
      />
      <Flex>
        <QuestionCard question={currentQuestion} render={render} className={cls.card} />
        <div className={cls.img}>
          <img src={quizImage} alt="quiz_image" />
        </div>
      </Flex>

      <button onClick={endQuiz} className={cls.endQuiz}>
        Завершить
      </button>
    </div>
  )
}
