"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import G from "@/assets/G.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";

type AuthFormProps = React.HTMLAttributes<HTMLDivElement>;

function AuthForm({ className, ...props }: AuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleGoogleProviderSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { redirectTo: "/admin" });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao realizar o login.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-center text-muted-foreground">
            Continue com seu e-mail @oakberry.com.
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={handleGoogleProviderSignIn}
        className="items-center leading-normal"
      >
        {isLoading ? (
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Image src={G as string} alt="Google" className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  );
}

export { AuthForm };
