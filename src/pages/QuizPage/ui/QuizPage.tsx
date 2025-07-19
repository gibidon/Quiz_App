import { useGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi'
import { selectQuizSettings } from '@/features/quiz/setupQuiz/model/selectors/selectQuizSettings'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { mapQuizSettingsToRequest } from '@/features/quiz/setupQuiz'
import { Quiz } from '@/widgets/Quiz/ui/Quiz/Quiz'
import { Progress } from '@/shared/ui/Progress/Progress'
import { selectAnsweredQuantity } from '@/entities/quiz'
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"
import cls from './QuizPage.module.scss'

export default function QuizPage() {
  const rawSettings = useAppSelector(selectQuizSettings)
  const requestParams = mapQuizSettingsToRequest(rawSettings)
  const { data, isFetching, isLoading, error } = useGetNewMockQuizQuery(requestParams)
  const answeredQuestionsNumber = useAppSelector(selectAnsweredQuantity)

  let content

  if (isFetching || isLoading) {
    content = (<>
       <Skeleton height={60} className={cls.skeleton} />
       <Skeleton height={500} className={cls.skeleton} />
       <Skeleton height={300} className={cls.skeleton} />
    </>)
  } else if (!data || error){
    content = <div>Ошибка загрузки квиза</div>
  } else {
    const { fullCount, questions } = data

    content =  (
      <div className={cls.quizPage}>
          <Progress total={fullCount} current={answeredQuestionsNumber} />
          <Quiz questions={questions} />
      </div>)
  }

  return <>{ content }</>
}
