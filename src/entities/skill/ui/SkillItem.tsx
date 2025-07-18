import { Skill } from '../model/types.ts'
import { classNames, Mods } from '@/shared/lib/classNames/classNames.ts'
import { Button } from "@/shared/ui/Button/Button.tsx"
import cls from './SkillItem.module.scss'

interface SkillCardProps {
  skill: Skill
  isActive: boolean
  onClick?: () => void
}

export function SkillItem({ skill, isActive, onClick }: SkillCardProps) {
  const { title } = skill

  const mods: Mods = {
    [cls.active]: isActive,
  }

  return (
    // <button className={classNames(cls.SkillItem, mods, [])} onClick={onClick}>
    //   {title}
    // </button>
    <Button 
      variant="secondary" 
      // className={classNames(cls.SkillItem, mods, [])} 
      isActive={isActive} 
      onClick={onClick}>
        {title}
    </Button>
  )
}
