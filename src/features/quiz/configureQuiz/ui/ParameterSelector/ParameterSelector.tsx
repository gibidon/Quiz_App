import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { toggleComplexity } from '../../model/slices/quizSetup.slice'
import { Button } from '@/shared/ui/Button'
import cls from './PapameterSelector.module.scss'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { selectComplexity } from '../../model/selectors/selectComplexity'
import { selectQuizMode } from '../../model/selectors/selectQuizMode'
import { selectQuestionLimit } from '../../model/selectors/selectQuestionLimit'

export function ParameterSelector() {
  const complexity = useAppSelector(selectComplexity)
  const quizMode = useAppSelector(selectQuizMode)
  const limit = useAppSelector(selectQuestionLimit)

  const dispatch = useAppDispatch()

  const onComplexityChange = (complexity: Array<number>) => {
    dispatch(toggleComplexity(complexity))
  }

  return (
    <>
      <div className={cls.complexitySelector}>
        <Button title={'1 - 3'} isActive={complexity?.includes(3)} />
      </div>
      {/* {skills?.map(skill => (
        <SkillItem
          key={skill.id}
          skill={skill}
          isActive={activeSkillIDs.includes(skill.id)}
          onClick={() => handleSkillToggle(skill.id)}
        />
      ))} */}
    </>
  )
}
