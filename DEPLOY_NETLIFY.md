# Деплой фронта AutoRent на Netlify

Фронтенд (Next.js) можно выложить на **Netlify**. Бэкенд (FastAPI) при этом остаётся на Render или другом сервисе.

---

## Шаг 1. Бэкенд уже на Render

Убедитесь, что backend задеплоен на Render и у вас есть его URL, например:
`https://autorent-backend.onrender.com`

---

## Шаг 2. Репозиторий на GitHub

Код должен быть в GitHub (например, `Bakytzhanovich/autorent`). Файл `frontend/netlify.toml` должен быть в репозитории.

---

## Шаг 3. Netlify

1. Зайдите на [netlify.com](https://www.netlify.com) и войдите через **GitHub**.
2. Нажмите **Add new site** → **Import an existing project**.
3. Выберите **GitHub** и репозиторий **autorent**.
4. Настройки сборки:
   - **Branch to deploy:** `main`
   - **Base directory:** `frontend`
   - **Build command:** `npm run build` (или оставьте пустым — подставится из `netlify.toml`)
   - **Publish directory:** `.next` (или оставьте пустым — плагин Next.js подставит сам)
5. **Environment variables** — добавьте:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://autorent-backend.onrender.com` (URL вашего backend на Render)
6. Нажмите **Deploy site**.

---

## Шаг 4. CORS на бэкенде

В настройках **backend на Render** добавьте переменную:
- **Key:** `FRONTEND_URL`
- **Value:** `https://ваш-сайт.netlify.app` (URL, который Netlify выдаст после деплоя)

Сохраните — Render перезапустит backend. После этого запросы с фронта на Netlify к API будут разрешены.

---

## Готово

- Фронт: **https://ваш-сайт.netlify.app**
- API: **https://autorent-backend.onrender.com**

Если поменяете `NEXT_PUBLIC_API_URL`, в Netlify сделайте **Trigger deploy** → **Deploy site**, чтобы фронт пересобрался с новым URL.
