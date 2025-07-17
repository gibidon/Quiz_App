import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
  setLimit,
  toggleComplexity,
} from '../../features/quiz/setupQuiz/model/slices/quizSetup.slice'
import { Button } from '@/shared/ui/Button'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { selectComplexity } from '../../features/quiz/setupQuiz/model/selectors/selectComplexity'
import { selectQuestionLimit } from '../../features/quiz/setupQuiz/model/selectors/selectQuestionLimit'
import { QuantitySelector } from '@/shared/ui/QuantitySelector/QuantitySelector'
import cls from './ParameterSelector.module.scss'

export function ParameterSelector() {
  const complexity = useAppSelector(selectComplexity)
  const limit = useAppSelector(selectQuestionLimit)

  const dispatch = useAppDispatch()

  const onComplexityChange = (complexity: Array<number>) => {
    dispatch(toggleComplexity(complexity))
  }

  return (
    <div className={cls.parameters}>
      <div className={cls.complexitySelector}>
        <h2>Уровень сложности</h2>
        <Button
          title={'1 - 3'}
          isActive={complexity?.includes(3) ?? false}
          onClick={() => onComplexityChange([1, 2, 3])}
        />
        <Button
          title={'4 - 7'}
          isActive={complexity?.includes(7) ?? false}
          onClick={() => onComplexityChange([4, 5, 6, 7])}
        />
        <Button
          title={'8 - 10'}
          isActive={complexity?.includes(8) ?? false}
          onClick={() => onComplexityChange([8, 9, 10])}
        />
      </div>
      <div className="limitSelector">
        <h2>Количество вопросов</h2>
        <QuantitySelector
          value={limit ?? 10}
          onChange={(val: number) => {
            dispatch(setLimit(val))
          }}
        />
      </div>
    </div>
  )
}
