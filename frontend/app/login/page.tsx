import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-gray-500">Загрузка...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
