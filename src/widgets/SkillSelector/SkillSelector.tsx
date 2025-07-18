import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { selectSkillIDs } from '../../features/quiz/setupQuiz/model/selectors/selectSkillIDs'
import { toggleSkillID } from '../../features/quiz/setupQuiz/model/slices/quizSetup.slice'
import { useGetSkillsQuery } from '@/entities/skill/api/skillApi'
import { Button } from "@/shared/ui/Button"
import figmaLogo from '@/shared/assets/images/Figma.svg'
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
        <Button 
          key={skill.id}
          variant="secondary"
          isActive={activeSkillIDs.includes(skill.id)}
          preffix={<img src={figmaLogo} alt='skill logo'/>}
          onClick={() => handleSkillToggle(skill.id)}
        >
          {skill.title}
        </Button>
      ))}
    </div>
  )
}
