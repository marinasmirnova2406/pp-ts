# Project Planner

npm run dev — Запускает клиент и сервер в режиме разработки.
npm run build — Собирает клиент и сервер для продакшена.


client
├── build
├── node_modules
├── public
├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── store
│   │   └── slices
│   ├── styles
│   ├── App.tsx
│   └── index.tsx
├── craco.config.js
├── package-lock.json
├── package.json
└── tsconfig.json

server
├── dist
├── node_modules
├── src
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── i18n
│   │   ├── locates.ts
│   │   └── massages.ts
│   └── index.ts
├── .env
├── package-lock.json
├── package.json
└── tsconfig.json

.gitignore
package-lock.json
package.json
README.md