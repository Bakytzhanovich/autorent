# 🚀 Быстрый старт

## Вариант 1: Автоматический запуск (рекомендуется)

```bash
./start.sh
```

Этот скрипт автоматически:
- Создаст виртуальное окружение для Python (если нужно)
- Установит зависимости backend
- Запустит backend на порту 8000
- Установит зависимости frontend (если нужно)
- Запустит frontend на порту 3000

## Вариант 2: Ручной запуск

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend (в новом терминале)

```bash
cd frontend
npm install
npm run dev
```

## Доступ к приложению

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Документация**: http://localhost:8000/docs

## Структура проекта

```
AutoRent/
├── frontend/              # Next.js приложение
│   ├── app/              # Страницы (App Router)
│   │   ├── page.tsx     # Главная страница
│   │   └── layout.tsx   # Layout
│   ├── components/       # React компоненты
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ExclusiveOffers.tsx
│   │   ├── CarCategories.tsx
│   │   └── PartnerCars.tsx
│   └── lib/             # Утилиты
│       └── api.ts       # API клиент
└── backend/              # FastAPI сервер
    └── main.py          # Основной файл API
```

## Основные компоненты

### Frontend компоненты

1. **Header** - Шапка с логотипом и иконками профиля/избранного
2. **Hero** - Форма поиска с выбором типа аренды, города и дат
3. **ExclusiveOffers** - Блок с эксклюзивными предложениями
4. **CarCategories** - Категории автомобилей (Economy, Standard, Luxury, etc.)
5. **PartnerCars** - Список автомобилей от партнеров

### Backend API

- `GET /cars` - Список автомобилей (с фильтрацией по категории)
- `GET /categories` - Список категорий
- `POST /search` - Поиск автомобилей
- `GET /health` - Проверка здоровья API

## Требования

- Node.js 18+
- Python 3.11+
- npm или yarn
