import { Flex } from '@/shared/ui/Flex'
import cls from './PrepareInterviewBlock.module.scss'

export function PrepareInterviewBlock() {
  return (
    <section className={cls.prepare_interview}>
      <Flex>
        {/* <Flex classes={classNames(cls.)}> */}
        <div className={cls.about_platform}>
          <h2>Подготовьтесь к собеседования в IT</h2>
          <span>
            Наша платформа предлагает обширную базу актуальных вопросов по широкому спектру тем и
            навыков, которая регулярно обновляется.
          </span>
          {/* <QuestionCard /> */}
        </div>
        <div className={cls.filters}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, sunt?
        </div>
      </Flex>
    </section>
  )
}
