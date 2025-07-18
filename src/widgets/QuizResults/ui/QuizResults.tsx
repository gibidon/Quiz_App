import { QuestionCard } from '@/entities/question'
import type { QuestionAnswer } from '@/entities/quiz'
import { Flex } from '@/shared/ui/Flex'
import { ImageCard } from "@/shared/ui/ImageCard/ImageCard"
import questionImg from '@/shared/assets/images/answer_image.png'
import cls from './QuizResults.module.scss'

interface QuizResultProps {
  results: Array<QuestionAnswer>
}

export function QuizResults({ results }: QuizResultProps) {
  const render = (result: QuestionAnswer) => {
    return (
        <Flex gap={10}>
          <ImageCard src={questionImg} alt="answer image"/>
          <div className={cls.info}>
            <p>{result.questionTitle}</p>
            <p>{result.answer}</p>
          </div>
        </Flex>
    )
  }

  return (
    <div className={cls.results}>
      {results.map(result => (
        <QuestionCard key={result.questionId} data={result} render={render} />
      ))}
    </div>
  )
}
