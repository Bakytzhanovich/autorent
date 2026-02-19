#!/bin/bash

# Скрипт для запуска frontend и backend одновременно

echo "🚀 Запуск AutoRent..."

# Проверка наличия Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 не найден. Установите Python 3.11+"
    exit 1
fi

# Проверка наличия Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не найден. Установите Node.js 18+"
    exit 1
fi

# Запуск backend в фоне
echo "📦 Запуск backend..."
cd backend
if [ ! -d "venv" ]; then
    echo "Создание виртуального окружения..."
    python3 -m venv venv
fi
source venv/bin/activate
pip install -q -r requirements.txt
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!
cd ..

# Ожидание запуска backend
sleep 3

# Запуск frontend
echo "🎨 Запуск frontend..."
cd frontend
if [ ! -d "node_modules" ]; then
    echo "Установка зависимостей..."
    npm install
fi
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Сервисы запущены!"
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/docs"
echo ""
echo "Нажмите Ctrl+C для остановки всех сервисов"

# Ожидание сигнала завершения
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT TERM
wait
