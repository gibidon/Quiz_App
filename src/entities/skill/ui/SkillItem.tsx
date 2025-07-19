import { Skill } from '../model/types.ts'
import { Button } from "@/shared/ui/Button/Button.tsx"

interface SkillCardProps {
  skill: Skill
  isActive: boolean
  onClick?: () => void
}

export function SkillItem({ skill, isActive, onClick }: SkillCardProps) {
  const { title } = skill

  return (
    <Button 
      variant="secondary" 
      isActive={isActive} 
      onClick={onClick}>
        {title}
    </Button>
  )
}
