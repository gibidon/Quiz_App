## Запуск проекта

npm install - устанавливаем зависимости
npm run dev - запуск сервера + frontend проекта в dev режиме

---

## Скрипты

- `npm run dev` - Запуск frontend проекта на webpack dev server
- `npm run test` - Запуск тестов

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.

Запросы на сервер отправляются с помощью Rtk Query. Базовый api хранится в src/shared/api/baseApi.
Дополнительные endpoints добавляются в соответствующих entities.

## Сущности (entities)

- [Quiz](/src/entities/quiz)
- [Question](/src/entities/question)
- [Skill](/src/entities/Skill)
- [Specialization](/src/entities/Specialization)

## Фичи (features)

- [answerQuestion](/src/features/quiz/answerQuestion)
- [setuoQuiz](/src/features/quiz/setupQuiz)
