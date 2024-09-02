import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  UserAuthFormSignup,
  UserAuthFormLogin,
} from "./components/user-auth-form";
import { Link, useLocation } from "react-router-dom";

export default function AuthenticationPage() {
  const location = useLocation();
  const isLocationSignup = location.pathname.includes("/signup");
  return (
    <>
      <div className="container relative h-dvh flex-col items-center justify-center lg:grid lg:max-w-none grid-cols-2 lg:px-0">
        <Link
          to={isLocationSignup ? "/login" : "/signup"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          {isLocationSignup ? "Login" : "Signup"}
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-black" />
          {isLocationSignup ? (
            <div className="relative z-20 flex items-center text-lg font-Qui">
              ./Signup
            </div>
          ) : (
            <div className="relative z-20 flex items-center text-lg font-Qui">
              ./Login
            </div>
          )}

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {isLocationSignup ? "Create an account" : "Login to Account"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {isLocationSignup
                  ? "Enter your email below to create your account"
                  : "Enter your email and password to login"}
              </p>
            </div>
            {isLocationSignup ? <UserAuthFormSignup /> : <UserAuthFormLogin />}

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>
              <span className="mx-1">and</span>
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
