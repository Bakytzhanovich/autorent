# AutoRent - Car Rental Service MVP

Сервис по аренде автомобилей (аналог Яндекс Прокат)

## Структура проекта

```
AutoRent/
├── frontend/          # Next.js приложение
│   ├── app/          # App Router страницы
│   ├── components/   # React компоненты
│   └── lib/          # Утилиты и API клиент
└── backend/          # FastAPI сервер
    └── main.py       # Основной файл API
```

## Технологический стек

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (иконки)
- **Axios** (HTTP клиент)

### Backend
- **Python 3.11+**
- **FastAPI**
- **Pydantic** (валидация данных)
- **Uvicorn** (ASGI сервер)

## Установка и запуск

### Backend

1. Перейдите в директорию backend:
```bash
cd backend
```

2. Создайте виртуальное окружение:
```bash
python -m venv venv
source venv/bin/activate  # На Windows: venv\Scripts\activate
```

3. Установите зависимости:
```bash
pip install -r requirements.txt
```

4. Запустите сервер:
```bash
uvicorn main:app --reload --port 8000
```

API будет доступен по адресу: http://localhost:8000
Документация API: http://localhost:8000/docs

### Frontend

1. Перейдите в директорию frontend:
```bash
cd frontend
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите dev сервер:
```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

## API Endpoints

- `GET /cars` - Получить список автомобилей (опциональный параметр `category`)
- `GET /categories` - Получить список категорий
- `POST /search` - Поиск автомобилей по параметрам
- `GET /health` - Проверка здоровья API

## Особенности

- ✅ Адаптивный дизайн
- ✅ Современный UI с использованием Tailwind CSS
- ✅ Типизированный код (TypeScript)
- ✅ RESTful API с валидацией через Pydantic
- ✅ CORS настроен для локальной разработки
- ✅ Моковые данные для демонстрации

## Следующие шаги

- [ ] Интеграция с реальной базой данных (PostgreSQL/MongoDB)
- [ ] Аутентификация пользователей
- [ ] Система бронирования
- [ ] Интеграция с платежными системами
- [ ] Админ-панель
- [ ] Мобильное приложение
