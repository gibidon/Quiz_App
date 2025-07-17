import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { useAnswerQuestion } from '@/features/quiz/answerQuestion'
import { selectAnswerByQuestionId } from '@/entities/quiz/model/selectors/selectAnswerByQuestionId'
import type { Question } from '@/entities/question'
import { AppRoutes } from '@/shared/const/router'
import { QuestionCard } from '@/entities/question/ui/QuestionCard/QuestionCard'
import { AnswerDropdown } from '@/shared/ui/AnswerDropdown/AnswerDropdown'
import { Flex } from '@/shared/ui/Flex'
import { QuestionNavigator } from '../QuiestionNavigator/QuestionNavigator'
import { ImageCard } from '@/shared/ui/ImageCard/ImageCard'
import { Button } from '@/shared/ui/Button'
import quizImage from '@/shared/assets/images/woman_goggles.png'
import cls from './Quiz.module.scss'

interface QuizProps {
  questions: Array<Question>
}

export function Quiz({ questions }: QuizProps) {
  const [count, setCount] = useState(0)
  const currentQuestion = questions[count]
  const result = useAppSelector(selectAnswerByQuestionId(currentQuestion.id))

  const shortAnswer = currentQuestion.shortAnswer
  const navigate = useNavigate()

  const onPrev = () => {
    setCount(count - 1)
  }
  const onNext = () => {
    setCount(count + 1)
  }
  const endQuiz = () => navigate(AppRoutes.QUIZ_RESULTS)

  const isFirstQuestion = count === 0
  const isLastQuestion = count === questions.length - 1

  const answerQuestion = useAnswerQuestion()

  const render = (question: Question) => {
    return (
      <>
        <h1>{question.title}</h1>
        <AnswerDropdown title="Посмотреть ответ">{shortAnswer}</AnswerDropdown>
        <Flex className={cls.buttons}>
          <Button
            title="Знаю"
            onClick={() => answerQuestion(question.id, 'known')}
            isActive={result === 'known'}
          />
          <Button
            title="Не знаю"
            onClick={() => answerQuestion(question.id, 'unknown')}
            isActive={result === 'unknown'}
          />
        </Flex>
      </>
    )
  }

  return (
    <div className={cls.quiz}>
      <QuestionNavigator
        onPrev={onPrev}
        onNext={onNext}
        disablePrev={isFirstQuestion}
        disableNext={isLastQuestion}
      />
      <Flex>
        <QuestionCard question={currentQuestion} render={render} className={cls.card} />
        <ImageCard src={quizImage} alt="quiz_image" className={cls.img} />
      </Flex>

      <button onClick={endQuiz} className={cls.endQuiz}>
        Завершить
      </button>
    </div>
  )
}
