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

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-ulbi-tv-plugin_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

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
