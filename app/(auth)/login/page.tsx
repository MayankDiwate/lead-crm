import { Rocket } from "lucide-react";
import { Suspense } from "react";
import LoginForm from "./_components/login-form";

export default function Login() {
  return (
    <div className="w-full max-w-md p-6 space-y-6 bg-zinc-950 rounded-lg">
      <div className="text-center">
        <div className="flex justify-center mb-2">
          {/* Replace with your actual logo */}
          <Rocket className="text-white text-3xl" />
        </div>
        <h1 className="text-2xl font-semibold text-white">Welcome Back</h1>
        <p className="text-sm text-zinc-400">
          Log in to your account to continue
        </p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
