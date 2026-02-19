"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "Привет! Я ваш ИИ-ассистент по аренде автомобилей. Чем могу помочь?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response (in production, this would call an API)
    setTimeout(() => {
      let response = "";
      
      // Simple keyword-based responses
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes("цена") || lowerMessage.includes("стоимость") || lowerMessage.includes("сколько")) {
        response = "Стоимость аренды зависит от класса автомобиля и срока аренды:\n\n• Эконом класс: от 5,000 ₸/день\n• Стандарт: от 8,000 ₸/день\n• Бизнес: от 12,000 ₸/день\n• Премиум: от 15,000 ₸/день\n\nПри аренде на месяц действуют скидки до 30%!";
      } else if (lowerMessage.includes("документ") || lowerMessage.includes("паспорт") || lowerMessage.includes("нужно")) {
        response = "Для аренды автомобиля вам понадобятся:\n\n✅ Паспорт или удостоверение личности\n✅ Водительское удостоверение (стаж от 1 года)\n✅ Возраст от 21 года\n✅ Банковская карта для залога\n\nВсе документы должны быть действительны.";
      } else if (lowerMessage.includes("залог") || lowerMessage.includes("депозит")) {
        response = "Залог зависит от класса автомобиля:\n\n• Эконом/Стандарт: 50,000 - 100,000 ₸\n• Бизнес: 100,000 - 200,000 ₸\n• Премиум: 200,000 - 500,000 ₸\n\nТакже доступна опция 'Без залога' за дополнительную плату!";
      } else if (lowerMessage.includes("доставк") || lowerMessage.includes("забрать")) {
        response = "Да, мы предоставляем услугу доставки автомобиля:\n\n🚗 Доставка в аэропорт: бесплатно\n🚗 Доставка по городу: от 2,000 ₸\n🚗 Доставка в другие города: по договоренности\n\nМинимальный срок аренды для доставки - 3 дня.";
      } else if (lowerMessage.includes("отмен") || lowerMessage.includes("вернуть")) {
        response = "Условия отмены бронирования:\n\n✅ Бесплатная отмена за 24 часа до начала аренды\n✅ Отмена за 12 часов - возврат 50%\n✅ Отмена менее чем за 12 часов - возврат не производится\n\nВ случае форс-мажора мы всегда идем навстречу клиентам!";
      } else if (lowerMessage.includes("топливо") || lowerMessage.includes("бензин")) {
        response = "Политика по топливу:\n\n⛽ Автомобиль выдается с полным баком\n⛽ Возврат также должен быть с полным баком\n⛽ При неполном баке взимается плата за дозаправку + 500 ₸ за услугу\n\nРекомендуем вернуть автомобиль с полным баком для экономии.";
      } else if (lowerMessage.includes("страховк") || lowerMessage.includes("каско")) {
        response = "Страхование включено в стоимость аренды:\n\n🛡️ ОСАГО - обязательно включено\n🛡️ КАСКО - опционально, от 1,500 ₸/день\n🛡️ Страхование от ущерба - от 2,000 ₸/день\n\nРекомендуем оформить полное страхование для спокойствия.";
      } else {
        response = "Спасибо за ваш вопрос! Я могу помочь с:\n\n• Информацией о ценах и тарифах\n• Условиями аренды и документами\n• Доставкой автомобиля\n• Страхованием\n• Отменой бронирования\n\nЗадайте более конкретный вопрос, и я дам подробный ответ!";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Открыть чат с ИИ-ассистентом"
        >
          <Bot className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">ИИ-Ассистент</h3>
                <p className="text-xs text-white/80">Онлайн</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Закрыть чат"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-900 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Задайте вопрос..."
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-xl flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Отправить сообщение"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
