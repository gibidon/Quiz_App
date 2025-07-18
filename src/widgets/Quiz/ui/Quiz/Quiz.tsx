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
import { Container } from "@/shared/ui/Container/Container"
import womanGogglesImage from '@/shared/assets/images/woman_goggles.png'
import cls from './Quiz.module.scss'

interface QuizProps {
  questions: Array<Question>
}

export function Quiz({ questions }: QuizProps) {
  const [count, setCount] = useState(0)
  const currentQuestion = questions[count]
  const userAnswer = useAppSelector(selectAnswerByQuestionId(currentQuestion.id))

  const onPrev = () => setCount(count - 1)
  const onNext = () => setCount(count + 1)
  const endQuiz = () => navigate(AppRoutes.QUIZ_RESULTS)
  const answerQuestion = useAnswerQuestion()
  const navigate = useNavigate()

  const isFirstQuestion = count === 0
  const isLastQuestion = count === questions.length - 1

  const render = ({questionTitle, shortAnswer}:{questionTitle: string, shortAnswer: string}) => {
    return (
      <>
        <h1>{questionTitle}</h1>
        <AnswerDropdown title="Посмотреть ответ">{shortAnswer}</AnswerDropdown>
      </>
    )
  }

  return (
    <Container>
      <div className={cls.quiz}>
        <QuestionNavigator
          onPrev={onPrev}
          onNext={onNext}
          disablePrev={isFirstQuestion}
          disableNext={isLastQuestion}
        />
        <div className={cls.quizContent}>
          <QuestionCard
             data={{ 
               questionTitle: currentQuestion.title,
               shortAnswer: currentQuestion.shortAnswer,
               userAnswer: userAnswer 
              }}
        
            render={render}
            className={cls.card}
          />
          <ImageCard src={womanGogglesImage} alt="quiz_image" className={cls.img} />
          <div className={cls.answerButtons}>
            <Button
              onClick={() => answerQuestion(currentQuestion.id, 'known', currentQuestion.title)}
              isActive={userAnswer === 'known'}
            >
              Знаю
            </Button>
            <Button
              isActive={userAnswer === 'unknown'}
              onClick={() => answerQuestion(currentQuestion.id, 'unknown', currentQuestion.title)}
            >
              Не знаю
            </Button>
        </div>
        </div>
        <Flex justify="flex-end">
          <Button onClick={endQuiz} destructive>
            Завершить
          </Button>
        </Flex>
      </div>
    </Container>
  )
}
