import { AppRoutes } from '@/shared/const/router'
import { useNavigate } from 'react-router-dom'
import { SkillSelector } from '@/widgets/SkillSelector'
import { ParameterSelector } from '@/widgets/ParameterSelector/ParameterSelector'
import { Container } from '@/shared/ui/Container/Container'
import { Button } from "@/shared/ui/Button"
import { Flex } from "@/shared/ui/Flex"
import cls from './QuizSettingsPage.module.scss'

export default function QuizSettings() {
  const navigate = useNavigate()

  return (
    <Container>
      <h1>Собеседование</h1>
      <div className={cls.settings}>
        <SkillSelector />
        <ParameterSelector />
      </div>

      <Flex justify="flex-end">
        <Button 
          variant="primary" 
          onClick={() => navigate(`${AppRoutes.QUIZ}`)} 
        >
          Начать
        </Button>
      </Flex>
    </Container>
  )
}
