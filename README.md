# Simu Football

![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

Football match simulation engine — tactics, stats, drag and drop lineup UI.

## Structure

```
simu-football/
├── backend/    ← NestJS simulation engine
└── client/     ← Next.js UI (drag & drop lineup builder)
```

## Run

```bash
pnpm install
pnpm --filter backend start:dev
pnpm --filter client dev
```
