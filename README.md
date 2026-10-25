[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://react.dev/)
[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-green.svg)](https://vercel.com/new/clone?repository-url=https://github.com/ilyaGladyshev/diplom-project)

## 📖 Описание
Дипломный frontend-проект на React: одностраничный сайт с каруселью проектов, модальными окнами, картой офиса и тёмной темой.

Учебная работа (оценка: 70/100). Без бэкенда — только клиент.

## Возможности

- Карусель на **Embla Carousel** (превью проектов и изображений)
- Модальные окна на **Headless UI**: по клику на слайд — компонент или увеличенное изображение
- Единый массив данных для слайдов (компоненты и картинки)
- Тёмная / светлая тема (выбор сохраняется)
- Карта **2GIS** с меткой офиса (Благовещенск, ул. Зейская, 173а)
- Адаптивная вёрстка
- Анимации при прокрутке (**AOS**), переходы (**Framer Motion**)
- Форма обратной связи (**EmailJS**)

## Стек

| Категория | Технологии |
| :--- | :--- |
| UI | React 19, React Router 7 |
| Сборка | Create React App (`react-scripts`) |
| Карусель / модалки | embla-carousel-react, @headlessui/react |
| Карта | @2gis/mapgl |
| Стили | Sass (SCSS) |
| Прочее | framer-motion, aos, @emailjs/browser |

## Запуск
Требования: Node.js 18+

```bash
git clone https://github.com/ilyaGladyshev/diplom-project.git
cd diplom-project
npm install
npm start
```
Приложение: http://localhost:3000

Сборка для продакшена:
```bash
npm run build
```
## Структура (кратко)
```text
src/
├── App/           # Корневой компонент, стили
├── Carousel/      # Embla, стрелки, точки, модалка
├── Header/        # Шапка, переключатель темы
├── ...            # Секции страницы, карта, формы
└── index.js
```