"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Suas ideias, documentos e planos, Bem vindo ao <span className="underline">Emotion</span></h1>

            <h3 className="text-base sm:text-xl md:text-2xl font-medium ">
                Fique conectado com suas ideias. A melhor forma de conseguir isso. Eu ainda não pensei em nada para colocar aqui
            </h3>

            <Button className="hover:bg-green-500">Entrar Emotion
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>


        </div>
    )
}