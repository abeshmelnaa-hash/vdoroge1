# Дорога

Фронтенд маркетплейса авторских путешествий по России. Проект сделан на React + Vite и не использует бэкенд или базу данных.

## Локальный запуск

```bash
npm install
npm run f
```

## Развёртывание на Railway

В проект уже добавлен `railway.toml`. После загрузки файлов в GitHub:

1. В Railway нажмите **New Project** → **Deploy from GitHub repo**.
2. Выберите репозиторий `vdoroge`.
3. Railway автоматически выполнит `npm run build` и `npm run start`.
4. После развёртывания в разделе **Settings → Networking** нажмите **Generate Domain**.

## Что нужно загрузить в GitHub

Загрузите все файлы и папки из архива, включая папку `src`, а также:

- `.gitignore`
- `index.html`
- `package.json`
- `pnpm-lock.yaml`
- `railway.toml`
- `README.md`

Не загружайте `node_modules`, `dist`, `.git` и `.pnpm-store`.
