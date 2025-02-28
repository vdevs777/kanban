import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import logoImg from "../assets/logo.png";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  login: z.string().min(1, { message: "Informe o login" }),
  password: z.string().min(1, { message: "Informe a senha" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const [senhaType, setSenhaType] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data: LoginSchema) {
    console.log(data);
  }

  return (
    <div className="w-screen h-screen flex">
      <div className="hidden w-4/6 xl:flex items-center justify-center">
        <Image src={logoImg} alt="Logo" width={480} height={171} />
      </div>
      <div className="w-full xl:w-2/6 bg-neutral-100 xl:bg-primary flex items-center justify-center px-9 flex-col gap-7">
        <Image
          src={logoImg}
          alt="Logo"
          width={240}
          height={85.5}
          className="xl:hidden block"
        />

        <form
          className="bg-white rounded-md p-10 max-w-[500px] w-full"
          onSubmit={handleSubmit(handleLogin)}
        >
          <h2 className="font-semibold text-xl text-center">
            Acesse sua conta
          </h2>
          <div className="mt-10 space-y-4">
            <Input
              placeholder="Login"
              className="h-8"
              error={errors?.login?.message}
              disabled={isSubmitting}
              {...register("login")}
            />
            <div className="relative w-full">
              <Input
                className="h-8 rounded-sm mt-4 pr-10 text-black"
                placeholder="Senha"
                type={senhaType}
                error={errors.password?.message}
                disabled={isSubmitting}
                {...register("password")}
              />
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSenhaType(senhaType === "password" ? "text" : "password");
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                {senhaType === "password" ? (
                  <Eye className="text-gray-400" size={20} />
                ) : (
                  <EyeOff className="text-gray-400" size={20} />
                )}
              </button>
            </div>
            <div className="flex justify-between">
              <Button className="h-8" disabled={isSubmitting}>
                Logar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
