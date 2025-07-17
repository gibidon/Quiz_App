import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { SkillItem } from '@/entities/skill/ui/SkillItem'
import { selectSkillIDs } from '../../features/quiz/setupQuiz/model/selectors/selectSkillIDs'
import { toggleSkillID } from '../../features/quiz/setupQuiz/model/slices/quizSetup.slice'
import { useGetSkillsQuery } from '@/entities/skill/api/skillApi'
import cls from './SkillSelector.module.scss'

export function SkillSelector() {
  const { data: skills } = useGetSkillsQuery({ limit: 50 })

  const activeSkillIDs = useAppSelector(selectSkillIDs)
  const dispatch = useAppDispatch()

  const handleSkillToggle = (id: number) => {
    dispatch(toggleSkillID(id))
  }

  return (
    <div className={cls.skillSelector}>
      {skills?.map(skill => (
        <SkillItem
          key={skill.id}
          skill={skill}
          isActive={activeSkillIDs.includes(skill.id)}
          onClick={() => handleSkillToggle(skill.id)}
        />
      ))}
    </div>
  )
}
