# Деплой AutoRent на Render

Пошаговая инструкция, как выложить проект в интернет на [Render](https://render.com).

---

## Что будет задеплоено

- **Backend** (FastAPI) — Web Service, например `https://autorent-backend.onrender.com`
- **Frontend** (Next.js) — Web Service, например `https://autorent-frontend.onrender.com`

Оба сервиса бесплатные (Free tier). У backend на бесплатном плане «холодный старт» после ~15 минут неактивности (первый запрос может идти 30–60 секунд).

---

## Шаг 1. Репозиторий на GitHub

1. Создайте репозиторий на [github.com](https://github.com) (например, `AutoRent`).
2. Выполните в папке проекта:

```bash
cd /Users/nursatsohatbek/Desktop/AutoRent
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ВАШ_USERNAME/AutoRent.git
git branch -M main
git push -u origin main
```

Замените `ВАШ_USERNAME` на ваш логин GitHub.

---

## Шаг 2. Регистрация на Render

1. Перейдите на [render.com](https://render.com).
2. Нажмите **Get Started** и войдите через **GitHub**.
3. Разрешите доступ к репозиторию (можно только к `AutoRent`).

---

## Шаг 3. Деплой через Blueprint (оба сервиса сразу)

1. В Dashboard нажмите **New** → **Blueprint**.
2. Подключите репозиторий **AutoRent** (если ещё не подключён).
3. Render подхватит файл **render.yaml** из корня репозитория.
4. Нажмите **Apply** и дождитесь создания двух сервисов:
   - **autorent-backend**
   - **autorent-frontend**
5. Дождитесь первого деплоя (зелёный статус у обоих).

Если Blueprint не используете, переходите к шагу 4 (ручной деплой).

---

## Шаг 4. Ручной деплой (если не используете Blueprint)

### Backend

1. **New** → **Web Service**.
2. Подключите репозиторий **AutoRent**.
3. Настройки:
   - **Name**: `autorent-backend`
   - **Region**: Frankfurt (или ближайший)
   - **Root Directory**: `backend`
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. **Create Web Service**. Дождитесь деплоя и скопируйте URL (например `https://autorent-backend.onrender.com`).

### Frontend

1. **New** → **Web Service**.
2. Репозиторий тот же — **AutoRent**.
3. Настройки:
   - **Name**: `autorent-frontend`
   - **Region**: Frankfurt
   - **Root Directory**: `frontend`
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
4. В **Environment** добавьте переменную:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://autorent-backend.onrender.com` (ваш URL backend)
5. **Create Web Service**. Дождитесь деплоя и скопируйте URL фронта.

---

## Шаг 5. Переменные окружения (обязательно)

После того как оба сервиса задеплоены:

### В сервисе **autorent-backend**

1. Откройте сервис → **Environment**.
2. Добавьте:
   - **Key**: `FRONTEND_URL`
   - **Value**: `https://autorent-frontend.onrender.com` (ваш реальный URL фронта)
3. Сохраните. Render сделает повторный деплой.

Так backend будет разрешать запросы с вашего фронта (CORS).

### В сервисе **autorent-frontend**

1. Откройте сервис → **Environment**.
2. Проверьте переменную:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://autorent-backend.onrender.com`
3. Если вы её только что добавили или изменили — нажмите **Manual Deploy** → **Deploy latest commit**, чтобы пересобрать фронт с новым URL API.

---

## Шаг 6. Проверка

1. Откройте URL фронта (например `https://autorent-frontend.onrender.com`).
2. Проверьте страницы, логин, поиск машин.
3. Если запросы к API падают:
   - проверьте **Environment** у backend и frontend (см. шаг 5);
   - откройте DevTools (F12) → вкладка Network и посмотрите, на какой URL уходят запросы и какой приходит ответ/ошибка.

---

## Важно

- **Бесплатный backend** после неактивности «засыпает». Первый запрос после этого может выполняться 30–60 секунд — это нормально.
- **NEXT_PUBLIC_API_URL** задаётся при сборке фронта. После изменения этой переменной на Render нужен **новый деплой** (Manual Deploy или push в репозиторий).
- Если используете свой домен, добавьте его в настройках сервиса на Render и укажите этот домен в **FRONTEND_URL** в backend.

---

## Краткий чеклист

- [ ] Репозиторий на GitHub и `render.yaml` в корне
- [ ] Render: Blueprint или два Web Service (backend + frontend)
- [ ] Backend: Root Directory `backend`, команды из инструкции
- [ ] Frontend: Root Directory `frontend`, команды из инструкции
- [ ] В backend задан **FRONTEND_URL** = URL фронта
- [ ] Во frontend задан **NEXT_PUBLIC_API_URL** = URL backend
- [ ] После смены **NEXT_PUBLIC_API_URL** сделан повторный деплой фронта

Готово: проект выложен в интернет на Render.
