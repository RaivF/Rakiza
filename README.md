# Furniture Catalog (React)

Порт проекта с Next.js на **React + Vite + React Router**.

## Запуск

> Требуется Node.js 18+ (лучше 20+).

```bash
npm install
npm run dev
```

Откройте адрес, который выведет Vite (обычно http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```

## Что изменено относительно Next.js

- Вместо Next.js используется **Vite**.
- Роутинг реализован на **react-router-dom**.
- Добавлены небольшие совместимые компоненты `src/components/link.tsx` и `src/components/image.tsx`, которые повторяют API `next/link` и `next/image` (в рамках того, что использовалось в проекте).
- Лэйаут (шапка/футер) вынесен в общий `MainLayout`, страницы стали «чистыми».

## Рефакторинг и бест-практики

- Убраны next.js-специфичные директивы `use client`.
- Типизированы доменные данные в `src/lib/data.ts` (категории, коллекции, проекты, товары).
- Добавлены хелперы для каталога: `src/lib/catalog.ts` (type-guards + быстрый доступ к данным).
- Вынесены переиспользуемые компоненты:
  - `src/components/breadcrumbs.tsx` — единый компонент хлебных крошек.
  - `src/components/filter-chip.tsx` — доступный «чип» фильтра на базе shadcn Badge.
- Формы не перезагружают страницу: добавлены `onSubmit` + toast-уведомления.
- Добавлены заглушки страниц `/privacy` и `/terms`, чтобы в футере не было «мертвых» ссылок.
- Добавлены централизованные константы сайта `src/lib/site.ts` (контакты, соцсети и т.п.).

