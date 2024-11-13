import { AuthForm } from "./_components/auth-form";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex h-screen items-center justify-center lg:p-8">
        <div className="absolute right-12 top-4 md:right-4 md:top-8">
          <ModeToggle />
        </div>
        <div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          </div>
          <AuthForm />
        </div>
      </div>
    </>
  );
}
